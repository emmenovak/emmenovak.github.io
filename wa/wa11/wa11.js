const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArrayOfFileNames = ['images/picture1.jpg', 'images/picture2.jpg', 'images/picture3.jpg', 'images/picture4.jpg', 'images/picture5.jpg']

const imageAltText = new Object()
imageAltText.name1 = 'Oranges'
imageAltText.name2 = 'Sun in Sand'
imageAltText.name3 = 'Fruits'
imageAltText.name4 = 'Cat in Sun'
imageAltText.name5 = 'Blue Moped'


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
    if(btn.getAttribute("class") === "Dark") 
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