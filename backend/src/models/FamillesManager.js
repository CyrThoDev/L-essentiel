const AbstractManager = require("./AbstractManager");

class FamillesManager extends AbstractManager {
  constructor() {
    super({ table: "familles" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table} `);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(familles) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      familles.title,
    ]);
  }

  update(familles) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [familles.title, familles.id]
    );
  }
}

module.exports = FamillesManager;
