/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

let keypressAudio = new Audio("audio/keyboardClick15x.mp3");

document.onkeypress = () => {
  console.log("keypressed ");
  keypressAudio.play();
};

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
let clicks = 0;
function toggleFullscreen() {
  clicks++;
  clicks % 2 === 0 ? closeFullscreen() : openFullscreen();
}

//get type of input field
let singleLine = document.getElementById("singleLine");
let multiLine = document.getElementById("multiLine");
let inputField = {
  type: "",
  name: "",
};
function handleOnChangeRadio() {
  if (singleLine.checked) {
    inputField.type = singleLine.value;
  }
  if (multiLine.checked) {
    inputField.type = multiLine.value;
  }
  inputField.name = document.getElementById("fieldName").value;
}

// add a new input field
function addNewField() {
  let newField = document.createElement(inputField.type);
  let featuredPic = document.getElementById("articleFeaturedPicture").value;
  console.log(featuredPic);
  inputField.type === "input"
    ? newField.classList.add("input-field", "new-field-input")
    : newField.classList.add("input-field", "new-field-textarea");

  newField.setAttribute("placeholder", inputField.name);
  newField.setAttribute("name", inputField.name);
  document.getElementById("newFieldsArea").appendChild(newField);
}

//floating dock

function mouseoverDockIcon() {
  document.getElementById("plusIcon").classList.replace("fa-3x", "fa-4x");
}
function mouseoutDockIcon() {
  document.getElementById("plusIcon").classList.replace("fa-4x", "fa-3x");
}

function openDock() {
  document.getElementById("floatingDock").style.left = "5px";
}

function closeDock() {
  document.getElementById("floatingDock").style.left = "-16rem";
}

//repeat article

// function repeatArticle(){

//   let newArticleTitle = document.createElement('input');
//   let newArticleSubTitle = document.createElement('input');

// }
