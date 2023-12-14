const buttons = document.querySelectorAll('.button');
let indexArray = [0,1,2,3,4,5,6,7,8,9]

for(let i=0;i< buttons.length;i++){
    buttons[i].addEventListener('click', () => {
        //let random = Math.floor(Math.random() * 9);
        let random = Math.floor(Math.random() * indexArray.length);
        let randomIndex = indexArray[random];
        let location = document.getElementById(`loc${randomIndex}`);
        //let location = document.getElementById(`loc${random}`);
        indexArray.splice(random, 1);
        if(i == 9){
            location.textContent = 0;
        } else {
            location.textContent = i + 1;
        }
    });
}


let string = 'Error!'
function handleClick(event){
  event.preventDefault();
  let notifDiv = document.getElementById("enter");
  notifDiv.innerHTML = string
}
document.getElementById("enter").addEventListener("click", handleClick)



function showAlert() {
    const numbers = document.querySelectorAll('.location');
    let str = "";
    let count = 0;
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i].textContent != "" && numbers[i].textContent != " - "){
            count++;
        }
        str += numbers[i].textContent;
    }
    if(count < 10){
        alert("Your phone number is invalid");
    } else{
        alert ("Your phone number is " + str);
    }
}
