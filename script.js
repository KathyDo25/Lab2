// Footer - Display current year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML=currentYear;

//Alert Button
document.getElementById('btn-alert').addEventListener('click',function(){
    alert('Hello Everyone!!');
});
// Hover Button
const hoverButton = document.getElementById('btn-alert');

hoverButton.onmouseover = ()=>{
    hoverButton.innerText='Click!';
};
hoverButton.onmouseleave = () => {
    hoverButton.innerText='Come here!';
};

// Incremensing Button
let count = 1;
const counterButton = document.getElementById('btn-counter');
const counterText = document.getElementById('txt-counter');

counterButton.onclick = () => {
    count = count + 1;
    counterText.innerHTML=`Number:${count}`;
    // If-else statement
    if (count % 2 === 0){
        counterText.classList.remove('odd');
        counterText.classList.add ('even');
    }
    else{
        counterText.classList.remove('even');
        counterText.classList.add('odd');
    }
};

// for Loops
const numberList = document.getElementById('numbers');
const initialValue=1;
const stopValue=100;

for (let i=initialValue; i<=stopValue; i++) {
    const listItem=document.createElement('li');
    listItem.textContent=i%2 === 0? 'even':'odd';
    numberList.appendChild(listItem);
}

