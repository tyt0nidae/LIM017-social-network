// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registerWithEmailAndPassword, registerWithGoogle } from './Auth.js'
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
  <p id="errorMessageE"></p>
  <div class="password">
  <i class="fa-solid fa-lock"></i>
    <input type="password" id="registerPassword" placeholder="Crea una contraseña"></imput>
  </div>
  <p id="errorMessageP"></p>
  <div class="password">
  <i class="fa-solid fa-lock"></i>
    <input type="password" id="password2" placeholder="Repita su contraseña"></imput>
  </div>
  <p id="errorNoMatchP"></p>
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
    <button type="submit" id="regpage">Registrarse</button>
    <button id="googleR" class="ggBtn"><img src="../img/googlebtn.png"></button>
    <button id="fbR" class="fbBtn"><img src="../img/fbbtn.png"></button>
    <button id="goBack"><i class="fa-solid fa-circle-chevron-left"></i></button>
  </div>
  </div>`;
  registerDiv.innerHTML = registerBtn;

  registerDiv.querySelector('#regpage').addEventListener('click', () => {

    const email = registerDiv.querySelector('#registerEmail').value;
    const registerWithP = registerDiv.querySelector('#registerPassword').value;
    const passwordR = registerDiv.querySelector('#password2').value;
    const messageError = registerDiv.querySelector('#errorMessageE');
    const messageErrorp = registerDiv.querySelector('#errorMessageP');
    const messageErrorP2 = registerDiv.querySelector('#errorNoMatchP');
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]){6,20}$/;
    if (registerWithE === '') {
      messageError.innerHTML = 'Ingrese un correo electronico valido';
    } else {
      messageError.remove();
    }
    if (passwordR !== registerWithP) {
      messageErrorP2.innerHTML = 'Las contraseñas no coinciden';
    } else {
      messageErrorP2.remove();
    }
    if (validPassword.test !== registerWithP) {
      messageErrorp.innerHTML = 'La contraseña no cumple con los parametros';
    } else {
      messageErrorp.remove();
    }

    const userName = registerDiv.querySelector('#names');
    const lastName = registerDiv.querySelector('#lastNames');
    const gender = registerDiv.querySelector('#gender');
    const dateBirth = registerDiv.querySelector('#dateBirth');


    SaveDataUser(userName.value,lastName.value,gender.value, email, dateBirth.value);
    
    registerWithEmailAndPassword(email, registerWithP);
    
  });


  const registerWithGg = registerDiv.querySelector('#googleR');
  registerWithGg.addEventListener('click', () => {
    registerWithGoogle();
  });

  registerDiv.querySelector('#goBack').addEventListener('click', () => onNavigate('/'));
  
  return registerDiv;
};
