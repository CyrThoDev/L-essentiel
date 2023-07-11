const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table} `);
  }

  findById(id) {
    return this.database.query(
      `select * from  ${this.table} where famille_id = ?`,
      [id]
    );
  }

  findBySlug(slug) {
    return this.database.query(
      `select * from  ${this.table} as c 
      inner join products_to_categories as ptc on ptc.categorie_id = c.id 
      inner join products as p on p.id = ptc.product_id
      where c.slug = ?`,
      [slug]
    );
  }

  insert(categories) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      categories.title,
    ]);
  }

  update(categories) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [categories.title, categories.id]
    );
  }
}

module.exports = CategoriesManager;
