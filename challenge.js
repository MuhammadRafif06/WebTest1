let name = 'Saya'
let angka = true
let test = {}
let test2 

console.log("ini adalah tipe data " + typeof name)
console.log("ini adalah tipe data " + typeof angka)
console.log("ini adalah tipe data " + typeof test)
console.log("ini adalah tipe data " + typeof test2)



const text = ["Hello", " Assalamualaikum", " Selamat Datang", " Semangat!!"]

text.forEach((word) => {
	for (let i = 0; i < word.length; i++) {
		console.log(word[i])
	}
	console.log(`jumlah-nya ${word}: ${word.length}`)
})

const almerio = {
	namaDepan: "Almerio",
	namaBelakang: "Setiawan",
	kelas: 10,
	kompetensiKeahlian: "Rekayasa Perangkat Lunak",
	alamat: {
		jalan: "Jalan Raya Dayeuh",
		kecamatan: "Jonggol",
		kabupaten: "Bogor",
	},
	sekolah: "IDN Boarding School",
	nilai: {
		diniyah: "C+",
		it: "A+",
		bahasaInggris: "B-"
	}
}
const dataAlmerio = `
data Siswa:\n
	nama lengkap: ${almerio.namaDepan} ${almerio.namaBelakang}\n
	kelas: ${almerio.kelas}\n
	kompetensi keahlian: ${almerio.kompetensiKeahlian}\n
	asal kota: ${almerio.alamat.kabupaten}\n
	nilai: Diniyah(${almerio.nilai.diniyah}), IT(${almerio.nilai.it}), Bahasa Inggris(${almerio.nilai.bahasaInggris})
`

console.log(dataAlmerio)


