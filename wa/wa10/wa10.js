// HTML references
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// randomValue
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// variables to declare
let storyText = "Once upon a time, on a hot 97 fahrenheit day, :insertx: decided to go exploring. When they got to :inserty:, they stared in awe for a few moments, then :insertz:. Bob saw the whole thing, since it was their intention — :insertx: weighed 30 pounds, and it was a hot day. They continued their excursion looking for their next victim and said :insertv:"
const insertX = ["Gerald the Seal", "Minnie Mouse", "Little Bow Peep"]
const insertY = ["the Royal Ball", "the Micky Mouse Club House", "Ohio"]
const insertZ = ["skyrocketed to the moon", "fell into a bottomless pit", "turned into a singing mole rat"]
const insertV = ["Slay!", "Cool beans!", "Howdy!"]

// event listener
randomize.addEventListener('click', result);

// method or function
function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    const vItem = randomValueFromArray(insertV);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);
    newStory = newStory.replaceAll(':insertv:', vItem);
    

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/2.205) + " kilograms";
        const temperature =  `${Math.round(94 * 5/9)} celsius`;
        newStory = newStory.replaceAll('30 pounds', weight);
        newStory = newStory.replaceAll('97 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible'; // helpful line
}


