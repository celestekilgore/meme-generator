let memeForm = document.getElementById("meme-form");
// declaring a function that generates memes
function generateMeme(event) {
  // prevent the page from refreshing
  event.preventDefault();
  // saving the information we need to variables
  let container = document.getElementById("meme-container");
  let imgUrl = document.getElementById("url").value;
  let topText = document.getElementById('topText').value;
  let bottomText = document.getElementById('bottomText').value;
  // creating a new div to hold the new meme
  let div = document.createElement("div");
  div.classList.add("meme");
  // getting the bottom text info
  let bottom = document.createElement('p');
  bottom.innerText = bottomText;
  bottom.classList.add('bottom-text');
  div.append(bottom);
  // getting the top text info
  let top = document.createElement('p');
  top.innerText = topText;
  top.classList.add('top-text');
  div.append(top);
  // getting the image info
  let img = document.createElement("img");
  img.src = imgUrl;
  div.append(img);
  //making a delete button
  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete-btn');
  deleteButton.innerText = 'Delete';
  div.append(deleteButton);
  deleteButton.onclick = deleteMeme;
  //adding new meme to meme container
  container.append(div);
  //clearing the form to make room for new meme contents!
  memeForm.reset();
}

// function to delete meme
function deleteMeme(event) {
  event.target.closest('.meme').remove();
};

// event listener to create a new meme on each sumbmit
memeForm.addEventListener("submit", generateMeme);

// function to generate random colors
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// adding changing color effect to heading letters and submit button
const letters = document.querySelectorAll(".letter");
const button = document.getElementById("submit-button");

//every 1000ms color changes for button background and each letter
const intervalId = setInterval(function () {
  button.style.backgroundColor = randomRGB();
  for (let letter of letters) {
    letter.style.color = randomRGB();
  }
}, 1000);