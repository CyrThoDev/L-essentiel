const models = require("../models");

const browse = (req, res) => {
  models.products
    .findAll(req.query.name)
    .then(([products]) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.products
    .find(req.params.id)
    .then(([products]) => {
      if (products[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(products);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const products = req.body;

  // TODO validations (length, format...)

  products.id = parseInt(req.params.id, 10);

  models.products
    .update(products)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const products = req.body;

  // TODO validations (length, format...)

  models.products
    .insert(products)
    .then(([result]) => {
      res.location(`/products/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.products
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
