function ban(bike) {
    return bike == 'hitam'
}

function velg(bike, callback) {
    let isTrue = callback(bike)
    if (isTrue) {
        console.log(`velg ${bike} itu punya motor saya`)
    } else {
        console.log(`velg ${bike} itu bukan punya motor saya`)
    }
}
velg('hitam', ban)