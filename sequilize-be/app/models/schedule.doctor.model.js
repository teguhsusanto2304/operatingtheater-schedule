module.exports = (sequelize, Sequelize) => {
    const ScheduleDoctor = sequelize.define('schedule_doctors', {
        published: {
            type: Sequelize.BOOLEAN,
        },
    });
    return ScheduleDoctor;
}
