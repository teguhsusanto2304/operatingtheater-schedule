import React, { useEffect, useState } from "react"

class Home extends React.Component {
    state = {
        isLoading: true,
        schedules: [],
        error: null
    }
    apiSchedules = [];

    fetchSchedules() {
        fetch(`http://localhost:5000/api/v1/schedules`)
            .then(response => response.json())
            .then(data => {
                this.apiSchedules = data;
                this.setState({
                    schedules: data['data'],
                    isLoading: false,
                })
            }
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }
    
    componentDidMount() {
        this.fetchSchedules();
    }

    onChangeHandler(e) {
        console.log(e.target.value);
        const filterSchedules = (schedules, filterTerm) => {
            const filteredSchedules = schedules.filter((schedule) => {
                return schedule.oderNum.toLowerCase().includes(filterTerm.toLowerCase());
            });

            return filteredSchedules;
        };
        this.setState({
            schedules: filterSchedules
        })
    }

    render() {
        const { isLoading, schedules, error } = this.state;
        return (
            <div class="container">
                <h1>Jadwal Kamar Operasi</h1>
                <div class="form-inline">
                   
                    <div class="form-group mx-sm-3 mb-2">
                        <input class="form-control" type="text" value={this.state.value} placeholder="Pencarian..." onChange={this.onChangeHandler.bind(this)} />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                    <a class="btn btn-primary" href="/add">Tambah Data</a>
                    </div>
                    
                </div>
                
                {error ? <p>{error.message}</p> : null}
                
                <table class="table">
                    <tr>
                        <th>No</th>
                        <th>Tanggal Operasi</th>
                        <th>Waktu Operasi</th>
                        <th>Tindakan</th>
                        <th>Ruangan</th>
                        <th>Tim Dokter</th>
                    </tr>
                    {!isLoading ? (
                        schedules.map(schedule => {

                            const { id, scheduleDate, scheduleTime, oderNum, room, description, doctors } = schedule;
                            return (
                                <tr key={id}>
                                    <td>{oderNum}</td>
                                    <td>{scheduleDate}</td>
                                    <td>{scheduleTime}</td>
                                    <td>{description}</td>
                                    <td>{room}</td>
                                    <td>
                                        {doctors.map(doctor => (
                                            <ul>
                                                <li>{doctor.name}</li>
                                            </ul>
                                        ))}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <h3>Loading...</h3>
                    )}
                </table>
            </div>
        );
    }
}

export default Home
