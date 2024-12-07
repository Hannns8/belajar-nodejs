function menyapa(nama){
    return `halo ${nama}\nsemoga sehat selalu`;
}

const time = "malam"
const mahasiswa = {
    nama: "aqira",
    umur: 19,
    cetakNama(){
        return `halo nama saya ${this.nama}\nsaat ini saya berumur ${this.umur}`;
    }
}
// mengeksport fungsi menyapa dalam nodejs
// untuk mengeksport beberapa bagian diperlukan untuk membuat object, like in below
// module.exports.fcSapa = menyapa;
// module.exports.time = time
// module.exports.mahasiswa = mahasiswa;

// module.exports = {
//     fcSapa: menyapa,
//     time: time,
//     mahasiswa: mahasiswa
// }

module.exports = {fcSapa: menyapa, time, mahasiswa}