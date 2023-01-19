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
