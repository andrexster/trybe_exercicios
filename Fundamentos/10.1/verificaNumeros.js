const numeros = (array) => {
    for (let index = 0; index < array.index; index += 1) {
        if (typeof array[index !== 'number']) {
            return false;
        }
    }
    return true;
}
module.exports = numeros;