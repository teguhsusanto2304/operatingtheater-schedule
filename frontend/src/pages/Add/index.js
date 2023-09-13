export default function Contact() {
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