const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table} `);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(products) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      products.title,
    ]);
  }

  update(products) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [products.title, products.id]
    );
  }
}

module.exports = ProductsManager;
