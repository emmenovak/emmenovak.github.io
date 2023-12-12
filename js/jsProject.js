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



document.getElementsByClassName('send:after')[0].addEventListener("click", myPopupFunction);

function myPopupFunction() {
  alert('Hey, you clicked on my button!')
}