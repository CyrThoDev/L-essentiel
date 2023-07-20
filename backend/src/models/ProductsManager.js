const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  findAll(name) {
    let url = `select  * from ${this.table}`;
    const value = [];
    if (name) {
      url += ` where name like ? `;
      value.push(`%${name}%`);
    }
    return this.database.query(url, value);
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
