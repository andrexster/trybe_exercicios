const numeros = require('.verificaNumeros');

describe('Requisioto ', () =>{
    it('A função recebe [1,2,3,4,5] e retorna true', () => {
        expect(true).toEqual(numeros([1,2,3,4,5]));
    });
});