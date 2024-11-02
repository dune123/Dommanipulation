const decBtn=document.getElementById('dec');
const incBtn=document.getElementById('inc');
const clrBtn=document.getElementById('clr');
const errorMessage=document.getElementById('errorMessage');
const display=document.getElementById('value');

let count=1;

function updateDisplay(){
    display.innerText=count;
    decBtn.disabled=count===0?true:false;
    errorMessage.style.display=count>0?"none":"block";
    console.log(error);
    clrBtn.style.display=count===0?"none":"block";
}

function incCount(){
    count++;
    updateDisplay();
}

function decCount(){
    if(count>0){
        count--;
        updateDisplay();
    }
    else {
        error.style.display = "block";
      }
}

function clearDisplay(){
    count=0;
    updateDisplay();
}

incBtn.addEventListener("click", incCount);
decBtn.addEventListener("click", decCount);
clrBtn.addEventListener("click", clearDisplay);

updateDisplay();

