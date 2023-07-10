
CREATE TABLE images(
   id  INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
   src VARCHAR(200) NOT NULL,
   alt VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE primarycategories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO primarycategories(id,name,description) VALUES (1,'Epicerie','Descritpion de la catégorie Epicerie');
INSERT INTO primarycategories(id,name,description) VALUES (2,'Droguerie','Description de la catégorie Droguerie');


CREATE TABLE secondcategories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  description VARCHAR(255),
  src varchar(255),
  alt varchar(255),
  primarycategory_id  INT,
   CONSTRAINT primarytosecondarycategory_id_fk FOREIGN KEY (primarycategory_id) REFERENCES primarycategories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO secondcategories(name,description,src,alt,primarycategory_id) VALUES ('Aides à la pâtisserie','Descritpion de la catégorie Epicerie','image1','alt1',1);
INSERT INTO secondcategories(name,description,src,alt,primarycategory_id) VALUES ('Apéritifs','Description des apéritifs','image2','alt2',1);
INSERT INTO secondcategories(name,description,src,alt,primarycategory_id) VALUES ('Aides culinaires','Descritpion des aides culinaires','image3','alt3',1);
INSERT INTO secondcategories(name,description,src,alt,primarycategory_id) VALUES ('Entretien','Descritpion des produits entretiens','image1','alt1',2);
INSERT INTO secondcategories(name,description,src,alt,primarycategory_id) VALUES ('Hygiène','Descritpion des produits d''hygiène','image2','alt2',2);
INSERT INTO secondcategories(name,description,src,alt,primarycategory_id) VALUES ('Maquillage','Descritpion des produits de maquillage','image3','alt3',2);


CREATE TABLE products(
   id  INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
   name    VARCHAR(255) NOT NULL,
   description LONGTEXT NOT NULL,
   price INT ,
   available   TINYINT, 
   primarycategory_id  INT,
   CONSTRAINT primarycategory_id_fk FOREIGN KEY (primarycategory_id) REFERENCES primarycategories(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8; 


CREATE TABLE products_to_secondcategories (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  secondcategorie_id INT,
  product_id INT,
  CONSTRAINT categories_id_fk FOREIGN KEY (secondcategorie_id) REFERENCES secondcategories(id) ON DELETE CASCADE,
  CONSTRAINT products_id_fk FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
