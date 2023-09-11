module.exports = (sequelize, Sequelize) => {
    const Doctor = sequelize.define('doctors', {
        doctorName: {
            type: Sequelize.STRING,
        },
        published: {
            type: Sequelize.BOOLEAN,
        },
    });
    return Doctor;
}
