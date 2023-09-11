const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const roomRoute = require('./app/routes/room.routes');
const doctorRoute = require('./app/routes/doctor.routes');
const scheduleRoute = require('./app/routes/schedule.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Operating Theater Schedule');
});

app.use('/api/v1/rooms', roomRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/schedules', scheduleRoute);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
