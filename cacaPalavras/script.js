const arrayWords = ['Laranja', 'Pera', 'Goiaba', 'Uva', 'Manga'];


//função para gerar as celulas da matriz
const generateCells = () => {
  const matriz = document.querySelector('.matriz');
  console.log(matriz);
  for(let index=0; index < 10; index += 1){
    const line = document.createElement('div');
    line.className = 'line';
    for(let index1 = 0; index1 < 10; index1 +=1){
      const cell = document.createElement('div');
      cell.className = 'cell';
      line.appendChild(cell);
    }
    matriz.appendChild(line);
  }
}

generateCells();

//Função que gera palavras aleatórias
const addWords = () =>{
  const lines = document.querySelectorAll('.line');
  const indexLine = Math.floor(Math.random() * lines.length);

  const indexWords = Math.floor(Math.random() * arrayWords.length);
  const word = arrayWords[indexWords];

  const cells = lines[indexLine].querySelectorAll('.cell');
  const indexCell = Math.floor(Math.random() * (cells.length - word.length + 1));

  for(let index = 0; index < word.length; index +=1 ){
    cells[indexCell + index].innerText = word[index];
  }

}

for(let index = 0; index < arrayWords.length; index +=1){
  addWords();
}
