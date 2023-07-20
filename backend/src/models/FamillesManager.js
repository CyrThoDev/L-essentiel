const AbstractManager = require("./AbstractManager");

class FamillesManager extends AbstractManager {
  constructor() {
    super({ table: "familles" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table} `);
  }

  findById(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findBySlug(slug) {
    return this.database.query(`select * from  ${this.table} where slug = ?`, [
      slug,
    ]);
  }

  insert(familles) {
    return this.database.query(
      `insert into ${this.table} (name,description, slug) values (?,?,?)`,
      [familles.name, familles.description, familles.slug]
    );
  }

  update(famille) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      famille,
      famille.id,
    ]);
  }
}

module.exports = FamillesManager;
