const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musica = new Audio('/assets/musica/Manu Chao - Me gustas tu.mp3');

// Si acepta: 
btnSi.addEventListener('click', ()=>{
    randomPic.src = '/assets/fotos/0.jpg';
    question.innerText = 'Sabia que dirias que si :3 Bsitooo Uwu!!!!! ';
    question.classList.add('question-style');


    btnSi.style.display = 'none';
    btnNo.style.display = 'none';

    musica.play();


})


// Lógica: 

let contador = 0;

btnNo.addEventListener('click', ()=>{

        switch (contador) {
            
            case 0:
                btnNo.innerText = 'Segura? :3';
                btnSi.innerText = 'Ciii';
                btnSi.classList.add('estilo-1');
                randomPic.src = '/assets/fotos/2.jpg'
                break;
            
            case 1:
                btnNo.innerText = 'Te pago ):';
                btnSi.innerText = 'CIIII!';
                btnSi.classList.add('estilo-2');
                randomPic.src = '/assets/fotos/3.jpg'
                break;
        
            case 2:
                btnNo.innerText = 'Nada ya, chau';
                btnSi.classList.add('estilo-3');
                randomPic.src = '/assets/fotos/4.jpg'

                break;

            case 3:
                btnNo.innerText = 'Encima sigues nooo';
                btnSi.classList.add('estilo-4');
                randomPic.src = '/assets/fotos/5.jpg'

                break;

            case 4:
                btnNo.innerText = 'Error 404 xD';
                btnSi.innerText = 'Ci, Casemonos';
                btnSi.classList.add('estilo-5');
                randomPic.src = '/assets/fotos/6.jpg'

                break;

        }

        contador++
        
})




