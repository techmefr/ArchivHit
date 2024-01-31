const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "game" });
  }

  // The C of CRUD - Create operation
  async create(game) {
    const { name, type, playTime, ageMin, ageMax, playerMin, playerMax } = game;
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, type, play_time, age_min, age_max, player_min, player_max) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, type, playTime, ageMin, ageMax, playerMin, playerMax]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(id, gameUpdated) {
    const { name, type, playTime, ageMin, ageMax, playerMin, playerMax } =
      gameUpdated;
    await this.database.query(
      `UPDATE ${this.table} SET name = ?, type = ?, play_time = ?, age_min = ?, age_max = ?, player_min = ?, player_max = ? WHERE id = ?`,
      [name, type, playTime, ageMin, ageMax, playerMin, playerMax, id]
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID
  async destroy(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = GameManager;
