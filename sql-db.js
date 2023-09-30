const connect = require("@databases/sqlite");
const { sql } = require("@databases/sqlite");

const db = connect();

async function prepare() {
  await db.query(sql`
    CREATE TABLE user_points (
      user_id INT PRIMARY KEY,
      user_name VARCHAR(255) NOT NULL,
      points INT NOT NULL,
      last_points_msg_id INT NOT NULL,
      last_points_msg_time INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
const prepared = prepare();

async function set(
  user_id,
  user_name,
  points,
  last_points_msg_id,
  last_points_msg_time
) {
  await prepared;
  await db.query(sql`
    INSERT INTO user_points (user_id, user_name, points, last_points_msg_id, last_points_msg_time)
      VALUES (${user_id}, ${user_name}, ${points}, ${last_points_msg_id}, ${last_points_msg_time})
      ON CONFLICT (user_id) DO UPDATE
      SET points=excluded.points, last_points_msg_id=excluded.last_points_msg_id, last_points_msg_time=excluded.last_points_msg_time;
  `);
}

async function getById(user_id) {
  await prepared;
  const results = await db.query(sql`
    SELECT * FROM user_points WHERE user_id=${user_id};
  `);
  if (results.length) {
    return results;
  } else {
    return undefined;
  }
}

async function getAll() {
  await prepared;
  const results = await db.query(sql`
    SELECT * FROM user_points ;
  `);
  if (results.length) {
    return results;
  } else {
    return undefined;
  }
}

async function remove(user_id) {
  await prepared;
  await db.query(sql`
    DELETE FROM user_points WHERE user_id=${user_id};
  `);
}

module.exports = { getById, getAll, set, remove };
