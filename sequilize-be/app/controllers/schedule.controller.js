const db = require("../models");
const Schedule = db.schedules;

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  }

  const schedule = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  Schedule.create(schedule)
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

exports.getScheduleAndDoctors = async (req, res) => {
  schedules = await db.sequelize.query("SELECT orderNumber,schedules.id,DATE_FORMAT(scheduleAt,'%d-%m-%Y') as scheduleDate,DATE_FORMAT(scheduleAt,'%H-%i') as scheduleTime,schedules.description,roomName FROM schedules INNER JOIN rooms ON schedules.roomId=rooms.id", {
    type: db.sequelize.QueryTypes.SELECT,
  });
  const arrSchedules = [] 
  for (const key in schedules) { 
    const doctors = [];
    const doctorsQuery  = await db.sequelize.query('SELECT doctorName,doctors.id FROM  schedule_doctors INNER JOIN doctors ON schedule_doctors.doctorId=doctors.id WHERE scheduleId = :id ', {
      replacements: {id: schedules[key].id},
      type: db.sequelize.QueryTypes.SELECT
    });
    doctorsQuery.forEach((doctor) => {
      doctors.push({"id":doctor.id,"name":doctor.doctorName});
    });
    arrSchedules.push({
      "id":schedules[key].id,
      "oderNum":schedules[key].orderNumber,
      "scheduleDate":schedules[key].scheduleDate,
      "scheduleTime":schedules[key].scheduleTime,
      "description":schedules[key].description,
      "room":schedules[key].roomName,
      "doctors": doctors
    });
  }
  
  
  res.json({
    message: "Schedules has retrieved successfully.",
    data: arrSchedules
  });
}
exports.findAll = (req, res) => {
  Schedule.findAll({
    include: ["doctors"],
  })
    .then((schedules) => {
      res.json({
        message: "Books retrieved successfully.",
        data: schedules,
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
  Schedule.update(req.body, {
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
  Schedule.destroy({
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
  Schedule.findByPk(req.params.id)
    .then((schedule) => {
      res.json({
        message: "Book retrieved successfully.",
        data: schedule,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
      });
    });
};
