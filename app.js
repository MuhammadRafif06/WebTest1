function hello(nama, kelas) {
    var name = 'hello, '+nama  +kelas
    return function(){
        console.log(name)
    }
}
var leo = hello("Rafif", " 10 rpl B")



leo()

