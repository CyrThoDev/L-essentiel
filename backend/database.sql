
CREATE TABLE images(
   id  INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
   src VARCHAR(200) NOT NULL,
   alt VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE familles (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  slug VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO familles(id,name,description,slug) VALUES (1,'Epicerie','Descritpion de la catégorie Epicerie',"epicerie");
INSERT INTO familles(id,name,description,slug) VALUES (2,'Droguerie','Description de la catégorie Droguerie',"droguerie");


CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  description VARCHAR(255),
  src varchar(255),
  alt varchar(255),
  slug varchar(255),
  famille_id  INT,
   CONSTRAINT famille_id_fk FOREIGN KEY (famille_id) REFERENCES familles(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO categories(name,description,src,alt,famille_id,slug) VALUES ('Aides à la pâtisserie','Descritpion de la catégorie Epicerie','image1','alt1',1,"aides-a-la-patisserie");
INSERT INTO categories(name,description,src,alt,famille_id,slug) VALUES ('Apéritifs','Description des apéritifs','image2','alt2',1,"aperitifs");
INSERT INTO categories(name,description,src,alt,famille_id,slug) VALUES ('Aides culinaires','Descritpion des aides culinaires','image3','alt3',1,"aides-culinaires");

INSERT INTO categories(name,description,src,alt,famille_id,slug) VALUES ('Produits sucrants','Descritpion des produits sucrants','image3','alt3',1,"produits-sucrants");
INSERT INTO categories(name,description,src,alt,famille_id,slug) VALUES ('Entretien','Descritpion des produits entretiens','image1','alt1',2,"entretien");
INSERT INTO categories(name,description,src,alt,famille_id,slug) VALUES ('Hygiène','Descritpion des produits d''hygiène','image2','alt2',2,"hygiène");
INSERT INTO categories(name,description,src,alt,famille_id,slug) VALUES ('Maquillage','Descritpion des produits de maquillage','image3','alt3',2,"maquillage");


CREATE TABLE products(
   id  INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
   name    VARCHAR(255) NOT NULL,
   description LONGTEXT NOT NULL,
   price INT ,
   available   TINYINT,
   slug varchar(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8; 

INSERT INTO products(name,description,price,available,slug) VALUES ('Cacao en poudre','Descritpion Cacao en poudre',5,true,'cacao-en-poudre');
INSERT INTO products(name,description,price,available,slug) VALUES ('Sucre de canne','Descritpion Sucre de canne',2,true,'sucre-de-canne');
INSERT INTO products(name,description,price,available,slug) VALUES ('sirop d''érable','Descritpion sirop d''érable',3,true,'sirop-erable');

CREATE TABLE products_to_categories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  product_id INT,
  CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  categorie_id INT,
  CONSTRAINT categorie_id_fk FOREIGN KEY (categorie_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO
   products_to_categories(product_id,categorie_id) 
VALUES (1,1), (2,1), (2,4), (3,1), (3,4); 