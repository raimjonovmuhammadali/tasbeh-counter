// js file
const count = document.querySelector('.count');
const tasbeh = document.querySelector('.tasbeh');
const reset = document.querySelector('.reset');


const p1 = document.querySelector('.p1');
const sorovnoma = document.querySelector('.sorovnoma');
const exit = document.querySelector('.exit');
const ha = document.querySelector('.ha');
const yoq = document.querySelector('.yoq');



window.onload = function(){
    count.value = 0;
}




let i = 0;

function add(){


    if (count.value == 33){
    
        count.value = '0';

        i += 1;

        if(i == 1){

            p1.innerHTML = "Alhamdulilloh";

        }else if(i == 2){

            p1.innerHTML = "Allohu Akbar";

        }else{
            sorovnoma.classList.remove('hidden');
            sorovnoma.classList.add('show');
        }

    }else{
        count.value++;
    }

    if(ha.onclick = function(){
        sorovnoma.classList.remove('show');
        sorovnoma.classList.add('hidden');
        p1.innerHTML = "Subhonalloh"
        i = 0;
    });

    if(yoq.onclick = function(){
        sorovnoma.classList.remove('show');
        sorovnoma.classList.add('hidden');
        exit.classList.remove('hidden');
        exit.classList.add('show');
    });
}

reset.onclick = function(){
    count.value = '0';
}