function showArrayBackwards(array) {
    let str = "";
    array.reverse().forEach(element => {
        str += element + " ";
    });
    console.log(str);
}
module.exports = { showArrayBackwards };