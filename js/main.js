const storedUserNameKey = "username";
const hiddenClassName = "hidden";

const loginForm = document.querySelector(".login__form");
const input = loginForm.querySelector("input");
const postLoginMain = document.querySelector(".post-login__main");

function saveUserName() {
  localStorage.setItem(storedUserNameKey, input.value);
}

function setElementVisibility(element, isVisible) {
  if (element !== null) {
    if (isVisible) {
      element.classList.remove(hiddenClassName);
    } else {
      element.classList.add(hiddenClassName);
    }
  }
}

function operateClock() {
  setClock();
  const date = new Date();
  const seconds = date.getSeconds();
  setTimeout(function () {
    setClock();
    setInterval(setClock, 1000);
  }, (60 - seconds) * 1000);
}

function setClock() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");

  const isAM = hour <= 12;
  const postLoginTime = document.querySelector(".post-login__time");
  postLoginTime.innerText = `${isAM ? hour : hour - 12}:${minute}`;

  const postLoginTimeExtra = document.querySelector(".post-login__time-extra");
  const extraText = isAM ? "am" : "pm";
  postLoginTimeExtra.innerText = `${extraText}`;
}

function initializeGreetings() {
  const postLoginGreeting = document.querySelector(".post-login__greeting");
  const userName = localStorage.getItem(storedUserNameKey);
  postLoginGreeting.innerText = `Hello ${userName}`;
}

function onInputKeyPressed(event) {
  if (event.key == "Enter") {
    event.preventDefault();

    const name = input.value;
    if (name.length === 0) {
      input.placeholder = "Please write your name";
    } else {
      saveUserName();
      setElementVisibility(loginForm, false);
      setElementVisibility(postLoginMain, true);
      operateClock();
      initializeGreetings();
    }
  }
}

input.addEventListener("keypress", onInputKeyPressed);

function doesUserNameExist() {
  return localStorage.getItem(storedUserNameKey) !== "";
}

if (doesUserNameExist()) {
  setElementVisibility(loginForm, false);
  setElementVisibility(postLoginMain, true);
  operateClock();
  initializeGreetings();
} else {
  setElementVisibility(loginForm, true);
  setElementVisibility(postLoginMain, false);
}

function onLogoutClicked() {
  localStorage.setItem(storedUserNameKey, "");
  setElementVisibility(loginForm, true);
  setElementVisibility(postLoginMain, false);
}

const logout = document.querySelector(".logout");
logout.addEventListener("click", onLogoutClicked);
