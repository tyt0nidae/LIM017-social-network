// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registerWithEmailAndPassword } from './auth.js'
import { SaveDataUser } from './confi.js'

export const Register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('portadaDos');
  const registerBtn = `<div class="logo">
  <img class="logoImg" src="../img/Logo.png">
  <p>Encuentra tu camino viajero</p>
  </div>
  <div class="signin">
  <p class="firstBtns">Registrate</p>
  <div class="loginInputs">
  <div class="user">
  <i class="fa-solid fa-user"></i>
    <input type="email" id="registerEmail" placeholder="Crea un usuario/correo electrónico"></imput>
  </div>
  <div class="password">
  <i class="fa-solid fa-lock"></i>
    <input type="password" id="registerPassword" placeholder="Crea una contraseña"></imput>
  </div>
  <div class="password">
  <i class="fa-solid fa-lock"></i>
    <input type="password" placeholder="Repita su contraseña"></imput>
  </div>
  <div class="user">
  <i class="fa-solid fa-user"></i>
    <input type="text" id="names" placeholder="Nombres"></imput>
  </div>
  <div class="user">
  <i class="fa-solid fa-user"></i>
    <input type="text" id="lastNames" placeholder="Apellidos"></imput>
  </div>
  <div class="user">
  <i class="fa-solid fa-user"></i>
    <input type="text" id="gender" placeholder="Género"></imput>
  </div>
  <div class="place">
  <i class="fa-solid fa-location-dot"></i>
    <input type="text" placeholder="Ubicación"></imput>
  </div>
  <label for="date">Fecha de nacimiento:</label>
  <div class="date">
    <input type="date" id="dateBirth"></imput>
  </div>
  <div class="language">
  <i class="fa-solid fa-language"></i>
    <input type="text" placeholder="Idiomas aprendidos"></imput>
  </div>
  <div class="entrar">
    <button id="regpage">Registrarse</button>
    <button id="goBack"><i class="fa-solid fa-circle-chevron-left"></i></button>
  </div>
  </div>`;
  registerDiv.innerHTML = registerBtn;

  
  registerDiv.querySelector('#regpage').addEventListener('click', () => {

    const email = registerDiv.querySelector('#registerEmail').value;
    const registerWithP = registerDiv.querySelector('#registerPassword').value;
    
    const userName = registerDiv.querySelector('#names');
    const lastName = registerDiv.querySelector('#lastNames');
    const gender = registerDiv.querySelector('#gender');
    const dateBirth = registerDiv.querySelector('#dateBirth');

    SaveDataUser(userName.value,lastName.value,gender.value, email, dateBirth.value);
    
    registerWithEmailAndPassword(email, registerWithP);
    
  })

  registerDiv.querySelector('#goBack').addEventListener('click', () => onNavigate('/'));
  
  return registerDiv;
};
