const content = document.querySelector('.content');
const resgisterLink = document.querySelector('.resgister-link');
const loginLink = document.querySelector('.login-link');

resgisterLink.onclick = () => {
    content.classList.add('active');
} 

loginLink.onclick = () => {
    content.classList.remove('active');
}