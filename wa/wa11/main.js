const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */










const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArrayOfFileNames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']

/* Declaring the alternative text for each image file */
const imageAltText = new Object()
imageAltText.name1 = 'Close up to a human eye'
imageAltText.name2 = 'Waves'
imageAltText.name3 = 'Purple Flowers'
imageAltText.name4 = 'A girl\'s photo at school'
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
  }

const newImage = document.createElement('img');
newImage.setAttribute('src', imagesArrayOfFileNames);
newImage.setAttribute('alt', imageAltText);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;




if(btn.getAttribute("class", "dark")) 
{
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
}
if(btn.getAttribute("class", "light"))
{
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}