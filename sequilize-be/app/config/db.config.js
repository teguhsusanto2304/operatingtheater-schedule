module.exports = {
    HOST: 'localhost',
    USER: 'balimade_user',
    PASSWORD: 'Balimadeinbali2023',
    DB: 'balimade_db',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
