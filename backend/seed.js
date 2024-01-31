/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    const queries = [];

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("DELETE FROM game");
    await database.query("DELETE FROM user");
    await database.query("DELETE FROM editor");

    // Insert fake data into the 'user' table
    const users = [
      { username: "user1", email: "toto@tata.com", password: "p4ssw0rd" },
    ];
    users.forEach((user) => {
      queries.push(
        database.query(
          "INSERT INTO user(username, email, password) VALUES (?, ?, ?)",
          [user.username, user.email, user.password]
        )
      );
    });

    // Insert fake data into the 'editor' table
    const editors = [
      { name: "Scorpion Masque" },
      { name: "Habba" },
      { name: "Asmodee" },
      { name: "Hello" },
      { name: "Cocktail Games" },
      { name: "Mattel" },
      { name: "Iello" },
    ];
    editors.forEach((editor) => {
      queries.push(
        database.query("INSERT INTO editor(name) VALUES (?)", [editor.name])
      );
    });

    // Insert fake data into the 'game' table
    const gameNames = ["Game1", "Game2", "Game3", "Game4", "Game5"];

    // Insert fake data into the 'user' table
    queries.push(
      database.query(
        "INSERT INTO user(username, email, password) VALUES (?, ?, ?)",
        ["user1", "toto@tata.com", "p4ssw0rd"]
      )
    );

    for (let i = 0; i < 5; i += 1) {
      const name = gameNames[i];
      const type = Math.floor(Math.random() * 2);
      const playTime = Math.floor(Math.random() * 10) + 1;
      const ageMin = Math.floor(Math.random() * 10) + 1;
      const ageMax = Math.floor(Math.random() * 10) + 1;
      const playerMin = Math.floor(Math.random() * 10) + 1;
      const playerMax = Math.floor(Math.random() * 10) + 1;
      const editorId = Math.min(7, Math.floor(Math.random() * 7) + 1);

      queries.push(
        database.query(
          "INSERT INTO game(name, type, play_time, age_min, age_max, player_min, player_max, user_id, editor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            name,
            type,
            playTime,
            ageMin,
            ageMax,
            playerMin,
            playerMax,
            1,
            editorId,
          ]
        )
      );
    }

    // Executing All Insertion Queries
    try {
      await Promise.all(queries);
    } catch (err) {
      console.error("Error filling the database:", err.message);
    }

    // Closing the Database Connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
