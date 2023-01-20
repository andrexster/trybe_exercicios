const arrayWords = ['LARANJA', 'PERA', 'GOIABA', 'UVA', 'MANGA'];
let wordSelected = '';

const saveGame = () =>{
  const matriz = document.querySelector('.matriz');
  localStorage.setItem('matrizKey', JSON.stringify(matriz.innerHTML));

  const listItens = document.querySelector('ul');
  localStorage.setItem('ListKey', JSON.stringify(listItens.innerHTML));
}

const loadGame = () =>{
  const matriz = document.querySelector('.matriz');
  matriz.innerHTML = JSON.parse(localStorage.getItem('matrizKey'));

  const listItens = document.querySelector('ul');
  listItens.innerHTML = JSON.parse(localStorage.getItem('ListKey'));

  const cells = document.querySelectorAll('.cell');
  for(let index = 0; index < cells.length; index += 1){
    cells[index].addEventListener('click', paintCell);
  }
}



const paintCell = (event) => {

  wordSelected += event.target.innerText;
  event.target.classList.add('selected');
  const li = document.querySelectorAll('li');

  for(let index = 0; index < li.length; index +=1){
    if(wordSelected == li[index].innerText){
      const selected = document.querySelectorAll('.selected');
      for(let index2 = 0; index2 < selected.length; index2 += 1){
        selected[index2].classList.remove('selected');
        selected[index2].classList.add('found');
      }
      li[index].classList.add('liFound');
      wordSelected = '';
    }
  }
  saveGame();
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

const addList = () => {
  const ul = document.querySelector('ul');
  for(let index = 0; index < arrayWords.length; index +=1){
    const li = document.createElement('li');
    li.innerText = arrayWords[index];
    ul.appendChild(li);
  }
}

const clear = () =>{
  const btnClear = document.querySelector('.btn-clear');
  btnClear.addEventListener('click', () => {
    const selected = document.querySelectorAll('.cell');
    for(let index = 0; index < selected.length; index +=1){
      selected[index].classList.remove('selected');
    }
    wordSelected = '';
  })
}

clear();

const startGame = () => {
  
  if(localStorage.getItem('matrizKey')){
    loadGame();
  }else{
    generateCells();
    addList();
    randomLetters();
    for(let index = arrayWords.length; index > 0; index +=1){
      addWords();
    }
  } 
}
startGame();




