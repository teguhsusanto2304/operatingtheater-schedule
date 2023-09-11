const db = require("../models");
const Doctor = db.doctors;

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  }

  const doctor = {
    doctor_name: req.body.doctor_name,
    published: req.body.published ? req.body.published : false,
  };

  Doctor.create(doctor)
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
  Doctor.findAll()
    .then((doctors) => {
      res.json({
        message: "Books retrieved successfully.",
        data: doctors,
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
  Doctor.update(req.body, {
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
  Doctor.destroy({
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
  Doctor.findByPk(req.params.id)
    .then((doctor) => {
      res.json({
        message: "Book retrieved successfully.",
        data: doctor,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
      });
    });
};
