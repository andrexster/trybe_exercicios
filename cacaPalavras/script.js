const arrayWords = ['LARANJA', 'PERA', 'GOIABA', 'UVA', 'MANGA'];
let wordSelected = '';

const paintCell = (event) => {

  wordSelected += event.target.innerText;
  event.target.classList.add('selected');
}

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
      cell.addEventListener('click', paintCell);
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

  //Sorteia uma das palavras
  const indexWords = Math.floor(Math.random() * arrayWords.length);
  const word = arrayWords[indexWords];

  const cells = lines[indexLine].querySelectorAll('.cell');
  const indexCell = Math.floor(Math.random() * (cells.length - word.length + 1));

  for(let index = 0; index < word.length; index +=1 ){
    cells[indexCell + index].innerText = word[index];
  }

  lines[indexLine].className = 'lineok';
  arrayWords.splice(indexWords, 1);
  console.log(arrayWords);
}

//Insere letras aleatorias
const randomLetters = () => {
  const cell = document.querySelectorAll('.cell');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';

  for(let index = 0; index < cell.length; index += 1){
    if(cell[index].innerText === ''){
      const letter = letters.charAt(Math.floor(Math.random() * letters.length));
      cell[index].innerText = letter;
    }
  }
}

randomLetters();

for(let index = arrayWords.length; index > 0; index +=1){
  addWords();
}
