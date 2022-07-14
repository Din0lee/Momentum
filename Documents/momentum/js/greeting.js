const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

const link = document.querySelector("a");
link.addEventListener("click",handleLinkClick);


function onLoginSubmit(event){
   event.preventDefault(); //브라우저의 기본 동작(페이지 새로고침)을 막아줌
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY,username);
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(username);
}

function handleLinkClick(event){
    console.dir(event);
}

function paintGreetings(username){
    greeting.innerText = `Hello. ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

$(window).fullScreen(true);