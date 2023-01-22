function createTitle(){
    const getTitle = document.getElementById('title');
    const createH1 = document.createElement('H1');
    createH1.innerHTML = 'adivinhe a cor';
    getTitle.appendChild(createH1);
}

function createCircle(){
    const getPallete = document.getElementById('pallete');
    getPallete.style.display = 'flex';

    for(let index = 0; index < 4; index += 1) {
        const creatDiv = document.createElement('div');
        creatDiv.style.width = '50px';
        creatDiv.style.height = '50px';
        creatDiv.style.border = 'solid 1px black';
        creatDiv.style.borderRadius = '50%';
        creatDiv.className = 'colourPallete';
        creatDiv.style.marginLeft = '1rem';
        getPallete.appendChild(creatDiv);
    }
}

function createRandomColour () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const paintCircle = () => {
    const getColourPallete = document.getElementsByClassName('colourPallete');
    for(let index = 0; index < getColourPallete.length; index += 1){
        getColourPallete[index].style.backgroundColor = createRandomColour();
    }
}


createTitle();
createCircle();
createRandomColour();
paintCircle();