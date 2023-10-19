const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');


const saves=document.querySelector('input[name="save"]');
const blocks=document.querySelector('input[name="block"]');

const basePrice = 3;
const totalPriceElement=document.querySelector('#total-price');



squareRange.addEventListener('input',function (){

    squareInput.value = squareRange.value;
})


squareInput.addEventListener('input',function(){
    squareRange.value = squareInput.value;
})

function calculate(){
   let totalPrice = basePrice * parseInt(squareInput.value);

    for (const radio of radioType) {
        if(radio.checked){
           totalPrice =totalPrice * parseFloat(radio.value);
        }
    }
    
    for (const radio of radioBuilding) {
        if(radio.checked){
           totalPrice =totalPrice * parseFloat(radio.value);
        }
    }
    if(saves.checked){
        totalPrice*=parseFloat(saves.value);
    }
    
    if(blocks.checked){
        totalPrice*=parseFloat(blocks.value);
    }

    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText=formatter.format(totalPrice);
}
calculate();


for (const input of inputs) {
    input.addEventListener('input', function(){
        calculate();
    })
}