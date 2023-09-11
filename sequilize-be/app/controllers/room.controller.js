const db = require("../models");
const Room = db.rooms;

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  }

  const room = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  Room.create(room)
    .then((data) => {
      res.json({
        message: "Room created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Book.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
  Room.findAll()
    .then((rooms) => {
      res.json({
        message: "Books retrieved successfully.",
        data: rooms,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving books.",
        data: null,
      });
    });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = (req, res) => {
  const id = req.params.id;
  Room.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Room updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update book with id=${id}. Maybe book was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while updating the book.",
        data: null,
      });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  Room.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Book deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete book with id=${id}. Maybe book was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the book.",
        data: null,
      });
    });
};

exports.findOne = (req, res) => {
  Room.findByPk(req.params.id)
    .then((room) => {
      res.json({
        message: "Book retrieved successfully.",
        data: room,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
      });
    });
};
