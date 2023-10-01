const fs = require("node:fs");
const path = require("node:path");
const { execute } = require(`./deploy-commands.js`);
require("dotenv").config();
const dbConnect = require("./db/mongo-connect.js");
const User = require("./db/user.js");

const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  IntentsBitField,
} = require("discord.js");
const token = process.env.token;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const prefix = "~";
const commandUnRec = require("./prefix-commands/command-unrecognized.js");
const badList = require("./prefix-commands/bad-list.js");

client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  console.log("commanrs: ", commandFiles);

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

client.once(Events.ClientReady, () => {
  console.log("Ready!");
});

client.on(Events.InteractionCreate, async (interaction) => {
  console.log("interaction: ", interaction);
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // ignore bot messages
  if (message.content[0] === prefix) prefixMessageHandler(message);
  // console.log("msg : ", message);
  let points;
  let msgId;
  let msgTime;
  let rank;
  try {
    const user = await User.findById(message.author.id);
    if (user) {
      user.points >= 100 && user[0].points < 200
        ? (rank = 1)
        : user.points >= 200 && user.points < 300
        ? (rank = 2)
        : user.points >= 300 && user.points < 400
        ? (rank = 3)
        : user.points >= 400 && user.points < 500
        ? (rank = 4)
        : user.points >= 500
        ? (rank = 5)
        : (rank = 0);
      if (message.createdTimestamp - user.last_points_msg_time > 10000) {
        points = user.points + 10;
        msgId = message.id;
        msgTime = message.createdTimestamp;
      } else {
        points = user.points;
        msgId = user.last_points_msg_id;
        msgTime = user.last_points_msg_time;
      }
      await User.findByIdAndUpdate(user._id, {
        _id: message.author.id,
        user_name: message.author.username,
        channel_id: message.channelId,
        guild_id: message.guildId,
        points: points,
        last_points_msg_id: msgId,
        last_points_msg_time: msgTime,
        rank: rank,
      });
    } else {
      points = 10;
      msgId = message.id;
      msgTime = message.createdTimestamp;
      rank = 0;
      await User.create({
        _id: message.author.id,
        user_name: message.author.username,
        channel_id: message.channelId,
        guild_id: message.guildId,
        points: points,
        last_points_msg_id: msgId,
        last_points_msg_time: msgTime,
        rank: rank,
      });
    }
  } catch (e) {
    console.log(e.message);
  }

  // const newMsgUserId = message.author.id;
  // message.channel.messages
  //   .fetch()
  //   .then((res) => {
  //     const messageArray = Array.from(res.values());
  //     const messagesFromUser = messageArray.filter(
  //       (msg) => msg.author.id === newMsgUserId
  //     );
  //     const prevMsg = messagesFromUser[1];
  //     // console.log("msg: ", message);
  //     // console.log("RES   ", messagesFromUser);
  //     badList.badMessage(message, messagesFromUser);
  //   })
  //   .catch((err) => console.log(err));

  // Get the previous message (index 0 is the most recent, index 1 is the previous)
  // const previousMessage = messages.array()[1];
});

function prefixMessageHandler(message) {
  const prefixFoldersPath = path.join(__dirname, "prefix-commands");
  const prefixCommandFiles = fs
    .readdirSync(prefixFoldersPath)
    .filter((file) => file.endsWith(".js"));
  //The filename must match the command
  const fileForMessage = message.content.substring(1) + ".js";

  if (!prefixCommandFiles.includes(fileForMessage)) {
    console.log(message.author.username);
    console.log(`[WARNING] The command  ${message.content} not exist.`);
    commandUnRec.prefixMessage(message, prefix);
  } else {
    const filePath = path.join(prefixFoldersPath, fileForMessage);
    const command = require(`${filePath}`);
    command.prefixMessage(message, prefix);
  }
}

client.login(token);
execute();
