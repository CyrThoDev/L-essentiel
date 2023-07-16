// // [
// //    {
// //     "id" :1,
// //     "name": "Epicerie",
// //     "description":"Descritpion de la catégorie Epicerie"
// //    },
// //    {
// //     "id" :2,
// //     "name": "Droguerie",
// //     "description":"Descritpion de la catégorie Epicerie"

// //    }
// // ]

// // [
// //   {
// //    "id" :1,
// //    "name": "Aides à la pâtisserie",
// //    "description":"Descritpion de la catégorie Epicerie",
// //    "src":"image1",
// //    "alt":"alt1",
// //    "primarycategory_id" : 1
// //   },
// //   {
// //    "id" :2,
// //    "name": "Apéritifs",
// //    "description":"Description des apéritifs",
// //    "src":"image2",
// //    "alt":"alt2",
// //    "primarycategory_id" : 1
// //   },
// //   {
// //     "id" :3,
// //     "name": "Aides culinaires",
// //     "description":"Descritpion des aides culinaires",
// //     "src":"image3",
// //     "alt":"alt3",
// //     "primarycategory_id" : 1
// //    }
// //    {
// //     "id" :4,
// //     "name": "Entretien",
// //     "description":"Descritpion des produits entretiens",
// //     "src":"image1",
// //     "alt":"alt1",
// //     "primarycategory_id" : 2
// //    }
// //    {
// //     "id" :5,
// //     "name": "Hygiène",
// //     "description":"Descritpion des produits d'hygiène",
// //     "src":"image2",
// //     "alt":"alt2",
// //     "primarycategory_id" : 2
// //    }
// //    {
// //     "id" :6,
// //     "name": "Maquillage",
// //     "description":"Descritpion des produits de maquillage",
// //     "src":"image3",
// //     "alt":"alt3",
// //     "primarycategory_id" : 2
// //    }

// // ]

// // CREATE TABLE secondcategories (
// //   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
// //   name VARCHAR(255),
// //   description VARCHAR(255),
// //   src varchar(255),
// //   alt varchar(255)
// // ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// CREATE TABLE products(
//   id  INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   name    VARCHAR(255) NOT NULL,
//   description LONGTEXT NOT NULL,
//   price INT ,
//   available   TINYINT,
//   slug varchar(255)
// )ENGINE=InnoDB DEFAULT CHARSET=utf8;

// [
//   {
//          "id" :1,
//          "name": "Cacao en poudre",
//          "description":"Descritpion Cacao en poudre",
//          "price":5,
//          "available":true,
//          "slug" : "cacao-en-poudre"
//         },
//         {
//           "id" :2,
//           "name": "Sucre de canne",
//           "description":"Descritpion Sucre de canne",
//           "price":2,
//           "available":true,
//           "slug" : "sucre-de-canne"
//          },
//          {
//           "id" :3,
//           "name": "sirop d'érable",
//           "description":"Descritpion sirop d'érable",
//           "price":3,
//           "available":true,
//           "slug" : "sirop-erable"
//          }
// ]

// CREATE TABLE products_to_categories (
//   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//   categorie_id INT,
//   product_id INT,
//   CONSTRAINT categorie_id_fk FOREIGN KEY (categorie_id) REFERENCES categories(id) ON DELETE CASCADE,
//   CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// [
//   {
//          "id" :1,
//          "categorie_id": 1,
//          "product_id":1
//         },
//         {
//           "id" :2,
//          "categorie_id": 2,
//          "product_id":1
//          },
//          {
//           "id" :3,
//           "categorie_id": 2,
//           "product_id":4
//          },
//          {
//           "id" :4,
//          "categorie_id": 3,
//          "product_id":1
//          },
//          {
//           "id" :5,
//           "categorie_id": 3,
//           "product_id":4
//          }
// ]
