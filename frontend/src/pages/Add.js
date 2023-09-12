import React, { useEffect, useState } from "react";

class Add extends React.Component {
    state = {
        isLoading: true,
        rooms: [],
        error: null,
        value:null
    }
    
    apiRooms = [];
    list = [];

    setValue(val){
        return null;
    }
    fetchRuang(){
        fetch(`http://localhost:5000/api/v1/rooms`)
        .then(response => response.json())
        .then(data =>{
        this.apiRooms = data;
            this.setState({
                rooms: data['data'],
            })
            }
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    //list = this.rooms.map(row => <option key={row.id}>{row.roomName}</option>)
    componentDidMount() {
        this.fetchRuang();
    }
    
    render() {
            return (
                <div class="container">
                        <h1>Tambah Jadwal Kamar Operasi</h1>
                        <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Tanggal & Waktu Operasi</label>
    <input type='date' class="form-control" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Ruangan</label>
    <select class="form-control" id="exampleFormControlSelect2" >
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Tindakan</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <a class="btn btn-default" href="/">Batal</a>&nbsp;<button class="btn btn-primary">Simpan</button>
</form>
                </div>
            );
      }
}

export default Add