const pg = require("pg");
require("dotenv").config();
const { Pool } = pg;

const connectionString =
  "postgres://qcrjdser:bJYbSMUIIyxb4IWGAxcYMqnJkFI0PBVd@cornelius.db.elephantsql.com/qcrjdser";

const pool = new Pool({
  connectionString, // <- connectionString: connectionString (short hand)
});

module.exports = pool;
