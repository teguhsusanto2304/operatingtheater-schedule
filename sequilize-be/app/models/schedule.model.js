module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define('schedules', {
        orderNumber: {
            type: Sequelize.STRING(6),
        },
        ScheduleAt: {
            type: Sequelize.DATE,
        },
        description: {
            type: Sequelize.STRING(255),
        },
        actived: {
            type: Sequelize.BOOLEAN,
        },
        
    });
    
    return Schedule;
}
