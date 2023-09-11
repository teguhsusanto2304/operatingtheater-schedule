module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define('rooms', {
        roomName: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        published: {
            type: Sequelize.BOOLEAN,
        },
    });
    return Room;
}
