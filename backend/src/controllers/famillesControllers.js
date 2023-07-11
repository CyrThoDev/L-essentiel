const models = require("../models");

const browse = (req, res) => {
  models.familles
    .findAll()
    .then(([familles]) => {
      res.status(200).json(familles);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.familles
    .find(req.params.slug)
    .then(([familles]) => {
      if (familles[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(familles);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const familles = req.body;

  // TODO validations (length, format...)

  familles.id = parseInt(req.params.id, 10);

  models.familles
    .update(familles)
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
  const familles = req.body;

  // TODO validations (length, format...)

  models.familles
    .insert(familles)
    .then(([result]) => {
      res.location(`/familles/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.familles
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
