const { EmbedBuilder } = require("discord.js");

module.exports = {
  badMessage(message) {
    const badList = [
      "fuck",
      "ass",
      "bitch",
      "cunt",
      "motherfucker",
      "asshole",
      "retard",
      "faggot",
      "dumfuck",
      "ni-",
    ];
    const badWordsList = [
      "2g1c",
      "4r5e",
      "5h1t",
      "5hit",
      "a_s_s",
      "a55",
      "acrotomophilia",
      "anal",
      "anilingus",
      "anus",
      "apeshit",
      "ar5e",
      "arrse",
      "arse",
      "arsehole",
      "ass",
      "ass-fucker",
      "ass-hat",
      "ass-jabber",
      "ass-pirate",
      "assbag",
      "assbandit",
      "assbanger",
      "assbite",
      "assclown",
      "asscock",
      "asscracker",
      "asses",
      "assface",
      "assfuck",
      "assfucker",
      "assfukka",
      "assgoblin",
      "asshat",
      "asshead",
      "asshole",
      "assholes",
      "asshopper",
      "assjacker",
      "asslick",
      "asslicker",
      "assmonkey",
      "assmunch",
      "assmuncher",
      "assnigger",
      "asspirate",
      "assshit",
      "assshole",
      "asssucker",
      "asswad",
      "asswhole",
      "asswipe",
      "auto erotic",
      "autoerotic",
      "axwound",
      "b!tch",
      "b00bs",
      "b17ch",
      "b1tch",
      "babeland",
      "ballbag",
      "balls",
      "ballsack",
      "bampot",
      "bangbros",
      "bareback",
      "barenaked",
      "bastard",
      "bastardo",
      "bastinado",
      "bbw",
      "bdsm",
      "beaner",
      "beaners",
      "beastial",
      "beastiality",
      "bellend",
      "bestial",
      "bestiality",
      "bi+ch",
      "biatch",
      "bimbos",
      "birdlock",
      "bitch",
      "bitchass",
      "bitcher",
      "bitchers",
      "bitches",
      "bitchin",
      "bitching",
      "bitchtits",
      "bitchy",
      "bloody",
      "blowjob",
      "blowjobs",
      "blumpkin",
      "boiolas",
      "bollock",
      "bollocks",
      "bollok",
      "bollox",
      "bondage",
      "boner",
      "boob",
      "boobs",
      "booobs",
      "boooobs",
      "booooobs",
      "booooooobs",
      "breasts",
      "breeder",
      "brotherfucker",
      "buceta",
      "bugger",
      "bukkake",
      "bulldyke",
      "bullshit",
      "bum",
      "bumblefuck",
      "bunghole",
      "busty",
      "butt",
      "butt-pirate",
      "buttcheeks",
      "buttfucka",
      "buttfucker",
      "butthole",
      "buttmuch",
      "buttplug",
      "c0ck",
      "c0cksucker",
      "camgirl",
      "camslut",
      "camwhore",
      "carpetmuncher",
      "cawk",
      "chesticle",
      "chinc",
      "chink",
      "choad",
      "chode",
      "cipa",
      "circlejerk",
      "cl1t",
      "clit",
      "clitface",
      "clitfuck",
      "clitoris",
      "clits",
      "clusterfuck",
      "cnut",
      "cock",
      "cock-sucker",
      "cockass",
      "cockbite",
      "cockburger",
      "cockeye",
      "cockface",
      "cockfucker",
      "cockhead",
      "cockjockey",
      "cockknoker",
      "cocklump",
      "cockmaster",
      "cockmongler",
      "cockmongruel",
      "cockmonkey",
      "cockmunch",
      "cockmuncher",
      "cocknose",
      "cocknugget",
      "cocks",
      "cockshit",
      "cocksmith",
      "cocksmoke",
      "cocksmoker",
      "cocksniffer",
      "cocksuck",
      "cocksucked",
      "cocksucker",
      "cocksucking",
      "cocksucks",
      "cocksuka",
      "cocksukka",
      "cockwaffle",
      "cok",
      "cokmuncher",
      "coksucka",
      "coochie",
      "coochy",
      "coon",
      "coons",
      "cooter",
      "coprolagnia",
      "coprophilia",
      "cornhole",
      "cox",
      "cracker",
      "crap",
      "creampie",
      "crotte",
      "cum",
      "cumbubble",
      "cumdumpster",
      "cumguzzler",
      "cumjockey",
      "cummer",
      "cumming",
      "cums",
      "cumshot",
      "cumslut",
      "cumtart",
      "cunilingus",
      "cunillingus",
      "cunnie",
      "cunnilingus",
      "cunt",
      "cuntass",
      "cuntface",
      "cunthole",
      "cuntlick",
      "cuntlicker",
      "cuntlicking",
      "cuntrag",
      "cunts",
      "cuntslut",
      "cyalis",
      "cyberfuc",
      "cyberfuck",
      "cyberfucked",
      "cyberfucker",
      "cyberfuckers",
      "cyberfucking",
      "d1ck",
      "dago",
      "damn",
      "darkie",
      "daterape",
      "deepthroat",
      "deggo",
      "dendrophilia",
      "dick",
      "dick-sneeze",
      "dickbag",
      "dickbeaters",
      "dickface",
      "dickfuck",
      "dickfucker",
      "dickhead",
      "dickhole",
      "dickjuice",
      "dickmonger",
      "dicks",
      "dickslap",
      "dicksucker",
      "dicksucking",
      "dicktickler",
      "dickwad",
      "dickweasel",
      "dickweed",
      "dickwod",
      "dike",
      "dildo",
      "dildos",
      "dingleberries",
      "dingleberry",
      "dink",
      "dinks",
      "dipshit",
      "dirsa",
      "dlck",
      "dog-fucker",
      "doggiestyle",
      "doggin",
      "dogging",
      "doggy style",
      "doggystyle",
      "dolcett",
      "domination",
      "dominatrix",
      "dommes",
      "donkeyribber",
      "doochbag",
      "dookie",
      "doosh",
      "doublelift",
      "douche",
      "douche-fag",
      "douchebag",
      "douchewaffle",
      "duche",
      "dumass",
      "dumb ass",
      "dumbass",
      "dumbcunt",
      "dumbfuck",
      "dumbshit",
      "dumshit",
      "dvda",
      "dyke",
      "ecchi",
      "ejaculate",
      "ejaculated",
      "ejaculates",
      "ejaculating",
      "ejaculatings",
      "ejaculation",
      "ejakulate",
      "erotic",
      "erotism",
      "escort",
      "eunuch",
      "f_u_c_k",
      "f4nny",
      "fag",
      "fagbag",
      "fagfucker",
      "fagging",
      "faggit",
      "faggitt",
      "faggot",
      "faggotcock",
      "faggs",
      "fagot",
      "fagots",
      "fags",
      "fagtard",
      "fanny",
      "fannyflaps",
      "fannyfucker",
      "fanyy",
      "fatass",
      "fcuk",
      "fcuker",
      "fcuking",
      "fecal",
      "feck",
      "fecker",
      "felch",
      "felching",
      "fellate",
      "fellatio",
      "feltch",
      "femdom",
      "figging",
      "fingerbang",
      "fingerfuck",
      "fingerfucked",
      "fingerfucker",
      "fingerfuckers",
      "fingerfucking",
      "fingerfucks",
      "fingering",
      "fistfuck",
      "fistfucked",
      "fistfucker",
      "fistfuckers",
      "fistfucking",
      "fistfuckings",
      "fistfucks",
      "fisting",
      "flamer",
      "flange",
      "foah",
      "fook",
      "fooker",
      "footjob",
      "frotting",
      "fuck",
      "fucka",
      "fuckass",
      "fuckbag",
      "fuckboy",
      "fuckbrain",
      "fuckbutt",
      "fuckbutter",
      "fucked",
      "fucker",
      "fuckers",
      "fuckersucker",
      "fuckface",
      "fuckhead",
      "fuckheads",
      "fuckhole",
      "fuckin",
      "fucking",
      "fuckings",
      "fuckingshitmotherfucker",
      "fuckme",
      "fucknut",
      "fucknutt",
      "fuckoff",
      "fucks",
      "fuckstick",
      "fucktard",
      "fucktards",
      "fucktart",
      "fucktwat",
      "fuckup",
      "fuckwad",
      "fuckwhit",
      "fuckwit",
      "fuckwitt",
      "fudgepacker",
      "fuk",
      "fuker",
      "fukker",
      "fukkin",
      "fuks",
      "fukwhit",
      "fukwit",
      "futanari",
      "fux",
      "fux0r",
      "g-spot",
      "gangbang",
      "gangbanged",
      "gangbangs",
      "gay",
      "gayass",
      "gaybob",
      "gaydo",
      "gayfuck",
      "gayfuckist",
      "gaylord",
      "gaysex",
      "gaytard",
      "gaywad",
      "genitals",
      "goatcx",
      "goatse",
      "god-dam",
      "god-damned",
      "goddamn",
      "goddamned",
      "goddamnit",
      "gokkun",
      "gooch",
      "goodpoop",
      "gook",
      "goregasm",
      "gringo",
      "grope",
      "guido",
      "guro",
      "handjob",
      "hardcore",
      "hardcoresex",
      "heeb",
      "hell",
      "hentai",
      "heshe",
      "ho",
      "hoar",
      "hoare",
      "hoe",
      "hoer",
      "homo",
      "homodumbshit",
      "homoerotic",
      "honkey",
      "hooker",
      "hore",
      "horniest",
      "horny",
      "hotsex",
      "humping",
      "incest",
      "intercourse",
      "jack-off",
      "jackass",
      "jackoff",
      "jaggi",
      "jagoff",
      "jail bait",
      "jailbait",
      "jap",
      "jerk-off",
      "jerkass",
      "jigaboo",
      "jiggaboo",
      "jiggerboo",
      "jism",
      "jiz",
      "jizm",
      "jizz",
      "juggs",
      "junglebunny",
      "kawk",
      "kike",
      "kinbaku",
      "kinkster",
      "kinky",
      "knob",
      "knobbing",
      "knobead",
      "knobed",
      "knobend",
      "knobhead",
      "knobjocky",
      "knobjokey",
      "kock",
      "kondum",
      "kondums",
      "kooch",
      "kootch",
      "kraut",
      "kum",
      "kummer",
      "kumming",
      "kums",
      "kunilingus",
      "kunja",
      "kunt",
      "kyke",
      "l3i+ch",
      "l3itch",
      "labia",
      "lameass",
      "lardass",
      "lesbian",
      "lesbo",
      "lezzie",
      "lmfao",
      "lolita",
      "lovemaking",
      "lust",
      "lusting",
      "m0f0",
      "m0fo",
      "m45terbate",
      "ma5terb8",
      "ma5terbate",
      "masochist",
      "master-bate",
      "masterb8",
      "masterbat",
      "masterbat3",
      "masterbate",
      "masterbation",
      "masterbations",
      "masturbate",
      "mcfagget",
      "mick",
      "milf",
      "minge",
      "mo-fo",
      "mof0",
      "mofo",
      "mothafuck",
      "mothafucka",
      "mothafuckas",
      "mothafuckaz",
      "mothafucked",
      "mothafucker",
      "mothafuckers",
      "mothafuckin",
      "mothafucking",
      "mothafuckings",
      "mothafucks",
      "motherfuck",
      "motherfucked",
      "motherfucker",
      "motherfuckers",
      "motherfuckin",
      "motherfucking",
      "motherfuckings",
      "motherfuckka",
      "motherfucks",
      "muff",
      "muff diver",
      "muffdiver",
      "muffdiving",
      "munging",
      "mutha",
      "muthafecker",
      "muthafuckker",
      "muther",
      "mutherfucker",
      "n1gga",
      "n1gger",
      "nambla",
      "nawashi",
      "nazi",
      "negro",
      "neonazi",
      "nigaboo",
      "nigg3r",
      "nigg4h",
      "nigga",
      "niggah",
      "niggas",
      "niggaz",
      "nigger",
      "niggers",
      "niglet",
      "nimphomania",
      "nipple",
      "nipples",
      "nob",
      "nobhead",
      "nobjocky",
      "nobjokey",
      "nude",
      "nudity",
      "numbnuts",
      "nutsack",
      "nympho",
      "nymphomania",
      "octopussy",
      "omorashi",
      "orgasim",
      "orgasims",
      "orgasm",
      "orgasms",
      "orgy",
      "p0rn",
      "paedophile",
      "paki",
      "panooch",
      "panties",
      "panty",
      "pawn",
      "pecker",
      "peckerhead",
      "pedobear",
      "pedophile",
      "pegging",
      "penis",
      "penisbanger",
      "penisfucker",
      "penispuffer",
      "phonesex",
      "phuck",
      "phuk",
      "phuked",
      "phuking",
      "phukked",
      "phukking",
      "phuks",
      "phuq",
      "pigfucker",
      "pimpis",
      "piss",
      "pissed",
      "pisser",
      "pissers",
      "pisses",
      "pissflaps",
      "pissin",
      "pissing",
      "pissoff",
      "pisspig",
      "playboy",
      "polesmoker",
      "pollock",
      "ponyplay",
      "poof",
      "poon",
      "poonani",
      "poonany",
      "poontang",
      "poop",
      "poopchute",
      "poopuncher",
      "porchmonkey",
      "porn",
      "porno",
      "pornography",
      "pornos",
      "prick",
      "pricks",
      "pron",
      "pthc",
      "pube",
      "pubes",
      "punanny",
      "punany",
      "punta",
      "pusse",
      "pussi",
      "pussies",
      "pussy",
      "pussylicking",
      "pussys",
      "pust",
      "puto",
      "queaf",
      "queef",
      "queer",
      "queerbait",
      "queerhole",
      "quim",
      "raghead",
      "rape",
      "raping",
      "rapist",
      "rectum",
      "renob",
      "retard",
      "rimjaw",
      "rimjob",
      "rimming",
      "ruski",
      "s.o.b.",
      "s&m",
      "sadism",
      "sadist",
      "sandler",
      "sandnigger",
      "sanger",
      "santorum",
      "scat",
      "schlong",
      "scissoring",
      "screwing",
      "scroat",
      "scrote",
      "scrotum",
      "seks",
      "semen",
      "sex",
      "sexo",
      "sexy",
      "shag",
      "shagger",
      "shaggin",
      "shagging",
      "shemale",
      "shi+",
      "shibari",
      "shit",
      "shitass",
      "shitbag",
      "shitbagger",
      "shitblimp",
      "shitbrains",
      "shitbreath",
      "shitcanned",
      "shitcunt",
      "shitdick",
      "shite",
      "shited",
      "shitey",
      "shitface",
      "shitfaced",
      "shitfuck",
      "shitfull",
      "shithead",
      "shithole",
      "shithouse",
      "shiting",
      "shitings",
      "shits",
      "shitspitter",
      "shitstain",
      "shitted",
      "shitter",
      "shitters",
      "shittiest",
      "shitting",
      "shittings",
      "shitty",
      "shiz",
      "shiznit",
      "shota",
      "shrimping",
      "skank",
      "skeet",
      "skullfuck",
      "slag",
      "slanteye",
      "slut",
      "slutbag",
      "sluts",
      "smeg",
      "smegma",
      "smut",
      "snatch",
      "snowballing",
      "sodomize",
      "sodomy",
      "son-of-a-bitch",
      "spac",
      "spic",
      "spick",
      "splooge",
      "spooge",
      "spook",
      "spunk",
      "strapon",
      "strappado",
      "suck",
      "suckass",
      "sucks",
      "swastika",
      "swinger",
      "t1tt1e5",
      "t1tties",
      "tard",
      "teets",
      "teez",
      "testical",
      "testicle",
      "threesome",
      "throating",
      "thundercunt",
      "tit",
      "titfuck",
      "tits",
      "titt",
      "tittie5",
      "tittiefucker",
      "titties",
      "titty",
      "tittyfuck",
      "tittywank",
      "titwank",
      "topless",
      "tosser",
      "towelhead",
      "tranny",
      "tribadism",
      "tubgirl",
      "turd",
      "tushy",
      "tw4t",
      "twat",
      "twathead",
      "twatlips",
      "twats",
      "twatty",
      "twatwaffle",
      "twink",
      "twinkie",
      "twunt",
      "twunter",
      "unclefucker",
      "undressing",
      "upskirt",
      "urophilia",
      "v14gra",
      "v1gra",
      "va-j-j",
      "vag",
      "vagina",
      "vajayjay",
      "viagra",
      "vibrator",
      "vjayjay",
      "vorarephilia",
      "voyeur",
      "vulva",
      "w00se",
      "wang",
      "wank",
      "wanker",
      "wankjob",
      "wanky",
      "wetback",
      "whoar",
      "whore",
      "whorebag",
      "whoreface",
      "willies",
      "willy",
      "wop",
      "wrapping men",
      "wrinkled starfish",
      "xrated",
      "xx",
      "xxx",
      "yaoi",
      "yellow showers",
      "yiffy",
      "zoophilia",
      "zubb",
      "a$$",
      "a$$hole",
      "a55hole",
      "ahole",
      "analprobe",
      "assbang",
      "assbanged",
      "assbangs",
      "assfaces",
      "assh0le",
      "beatch",
      "bimbo",
      "bitched",
      "bootee",
      "bootie",
      "bullshits",
      "bullshitted",
      "bullturds",
      "buttfuck",
      "buttmunch",
      "c-0-c-k",
      "c-o-c-k",
      "c-u-n-t",
      "c.0.c.k",
      "c.o.c.k.",
      "c.u.n.t",
      "caca",
      "cacafuego",
      "chi-chi man",
      "child-fucker",
      "corksucker",
      "crackwhore",
      "dammit",
      "damned",
      "damnit",
      "darn",
      "dick-ish",
      "dickdipper",
      "dickflipper",
      "dickheads",
      "dickish",
      "f-u-c-k",
      "f.u.c.k",
      "fuck-ass",
      "fuck-bitch",
      "fuck-tard",
      "fuckedup",
      "fuckmeat",
      "fucknugget",
      "fucktoy",
      "fuq",
      "h0m0",
      "h0mo",
      "he-she",
      "hircismus",
      "hom0",
      "hoor",
      "jackasses",
      "jackhole",
      "moo foo",
      "naked",
      "p.u.s.s.y.",
      "piss-off",
      "rubbish",
      "s-o-b",
      "s0b",
      "shiteater",
      "wh0re",
      "wh0reface",
    ];

    let messageArray = message.content.split(" ");
    let foundBad = null;
    for (let i in messageArray) {
      if (badWordsList.includes(messageArray[i].toLowerCase())) {
        foundBad = messageArray[i];
        break;
      }
    }
    console.log(foundBad, "This bad");
    if (foundBad) {
      const bad = new EmbedBuilder()
        .setColor("#EE4B2B")
        .setTitle(
          `${foundBad}  <--  this is a bad word! 
          Say no to curse words and yes to pure, fun language! It's good for relationships, mental health.`
        )
        .setTimestamp();
      message.channel.send({ embeds: [bad] });
    }
  },
};