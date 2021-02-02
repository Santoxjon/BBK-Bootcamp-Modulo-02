function showArrayBackwards(array) {
    let str = "";
    array.slice().reverse().forEach(element => {
        str += element + " ";
    });
    console.log(str);
}
module.exports = { showArrayBackwards };