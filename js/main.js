let select = document.getElementById('select');
let block = document.querySelectorAll('.block');
let inputs= document.querySelectorAll('input');
console.log(inputs);
let cell= document.querySelectorAll('input[name="square-input"]');
let lastIndex = 0; // После каждой смены опции, сохраняем сюда индекс предыдущего блока
let totalPrice=0;
let basePrice=200;
let index = select.selectedIndex;

const saves=document.querySelector('input[name="save"]');
let radioBlock=document.querySelector('input[name="block"]');
let radioType = document.querySelectorAll('input[name="type"]');
const totalPriceElement=document.querySelector('#total-price');

block[1].style.display="none";
block[2].style.display="none";

// select.addEventListener('change', function() {
//     block[lastIndex].style.display = "none";
    

//  let index = select.selectedIndex; // Определить индекс выбранной опции
//  basePrice=block[select.selectedIndex].getAttribute('data-value');
// //  console.log(basePrice);
//   block[index].style.display = "block"; // Показать блок с соответствующим индексом
//   lastIndex = index; 
// });



function calculate(){
    console.log("tuta");
    totalPrice = basePrice * parseInt(cell[index].value);
    console.log(inputs[index].value);
    for (const radio of radioType) {
        if(radio.checked){
            console.log(radio.value);
           totalPrice =totalPrice * parseFloat(radio.value);
        }
    }
    
    if(saves.checked){
        totalPrice*=parseFloat(saves.value);
    }
    
    if(radioBlock.checked){
        totalPrice*=parseFloat(radioBlock.value);
    }

    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText=formatter.format(totalPrice);
}
select.addEventListener('change', function() {
    block[lastIndex].style.display="none";
     index = select.selectedIndex;
    block[index].style.display="block";
    lastIndex=index;
    basePrice=block[index].getAttribute('data-value');
    calculate();
    console.log(basePrice);
})
calculate();


for (const input of inputs) {
    input.addEventListener('input', function(){
        calculate();
    })
}
