const combinacoes = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]

const createDivs = () => {
  const gridElement = document.querySelector('.grid')
  for(let index = 0; index < 9; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('celula');
    createDiv.id = index + 1;
    gridElement.appendChild(createDiv);
  }
}

createDivs();
