const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArrayOfFileNames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']

const imageAltText = new Object()
imageAltText.name1 = 'Close up of Human eye'
imageAltText.name2 = 'Textured Rock'
imageAltText.name3 = 'Purple Flowers'
imageAltText.name4 = 'Egyptian Art'
imageAltText.name5 = 'Butterfly on Leaf'


/* Looping through images */
for (let imgFileName of imagesArrayOfFileNames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imgFileName);

  // convert object to array
  Object.keys(imageAltText).forEach(function(altKey, altVal) {
    newImage.setAttribute('alt', imageAltText[altKey]);
  })
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', () => {
    displayedImage.src = newImage.src;
  });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
if(btn.getAttribute("class") === ("Dark")) 
{
    btn.setAttribute("class", "Light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else{
    btn.setAttribute("class", "Dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
});