const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rooms = require('./room.model')(sequelize, Sequelize);
db.doctors = require('./doctor.model')(sequelize, Sequelize);
db.schedules = require('./schedule.model')(sequelize, Sequelize);
db.scheduleDoctors = require('./schedule.doctor.model')(sequelize, Sequelize);
db.rooms.hasMany(db.schedules, { as: "schdule_rooms" });
db.doctors.hasMany(db.scheduleDoctors, { as: "schedule_doctors" });
db.schedules.hasMany(db.scheduleDoctors, { as: "doctors" });
db.schedules.belongsTo(db.rooms, {
  foreignKey: "roomId",
  as: "schedule_room",
});
db.scheduleDoctors.belongsTo(db.doctors, {
    foreignKey: "doctorId",
    as: "schedule_doctor",
  });
db.scheduleDoctors.belongsTo(db.schedules, {
    foreignKey: "doctorId",
    as: "schedule_main",
  });
module.exports = db;
