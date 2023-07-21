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

const browseCategoriesByFamily = (req, res) => {
  models.categories
    .findCategoriesByFamily(req.params.id)
    .then(([categories]) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.familles
    .findById(req.params.id)
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
  familles.id = parseInt(req.params.id, 10);
  models.familles
    .update(familles)
    .then(([fam]) => {
      if (fam.affectedRows === 0) {
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

const add = async (req, res) => {
  const famille = req.body;
  try {
    const familleInsert = await models.familles.insert(famille);
    res
      .location(`/familles/${familleInsert[0].insertId}`)
      .status(201)
      .json({ ...famille, id: familleInsert[0].insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const destroy = (req, res) => {
  models.familles
    .delete(req.params.id)
    .then(([famille]) => {
      if (famille.affectedRows === 0) {
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
  browseCategoriesByFamily,
  edit,
  add,
  destroy,
};
