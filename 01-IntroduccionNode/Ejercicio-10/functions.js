function showArray(array) {
    let str = "";
    array.forEach(element => {
        str += element + " ";
    });
    console.log(str);
}
module.exports = { showArray };