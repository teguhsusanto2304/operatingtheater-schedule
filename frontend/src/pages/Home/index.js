import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch(`https://api.balimadeinbali.com/api/v1/schedules`)
      .then(response => response.json())
      .then(data => {
        setSchedules(data['data']);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div class="container">
                <h1>Jadwal Kamar Operasi</h1>
                <div class="form-inline">
                   
                    <div class="form-group mx-sm-3 mb-2">
                        <input class="form-control" type="text" value="" placeholder="Pencarian..."  />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                    <a class="btn btn-primary" href="/add">Tambah Data</a>
                    </div>
                    
                </div>
      <table class="table">
                    <tr>
                        <th>No</th>
                        <th>Tanggal Operasi</th>
                        <th>Waktu Operasi</th>
                        <th>Tindakan</th>
                        <th>Ruangan</th>
                        <th>Tim Dokter</th>
                    </tr>
      {schedules.map((schedule) => (
        <tr key={schedule.id}>
        <td>{schedule.oderNum}</td>
        <td>{schedule.scheduleDate}</td>
        <td>{schedule.scheduleTime}</td>
        <td>{schedule.description}</td>
        <td>{schedule.room}</td>
        <td>
            {schedule.doctors.map(doctor => (
                <ul>
                    <li>{doctor.name}</li>
                </ul>
            ))}
        </td>
    </tr>
      ))}
      </table>
    </div>
  );
};

export default Home;