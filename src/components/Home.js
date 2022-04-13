// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';



export const Home = () => {
  const divHome = document.createElement('div');
  divHome.classList.add('portada');
  const homePage = `<img class="logoImg" src="../img/Logo.png">
  <p>Encuentra tu camino viajero</p>
  <div class="signin">
  <div class="firstBtns">
  <button>Iniciar Sesión</button>
  <button id="register">Registrate</button>
  </div>
  <div class="loginInputs">
  <div class="user">
  <i class="fa-solid fa-user"></i>
  <input type="text" id="userEmailLogin" placeholder="Usuario/correo electrónico"></imput>
  </div>
  <div class="password">
  <i class="fa-solid fa-lock"></i>
  <input type="text" id="userPasswordLogin" placeholder="Contraseña"></imput>
  </div>
  </div>
  <div class="entrar">
  <button type="submit" id="startSesion">Entrar</button>
  </div>
  <div class="forgetpw">
  <a href="">¿Olvidaste tu contraseña?</a>
  </div>
  <div class="extBtns">
  <a href="" class="fbBtn"><img src="../img/fbbtn.png"></a>
  <a href="" class="ggBtn"><img src="../img/googlebtn.png"></a>
  </div>
  </div>`;

  divHome.innerHTML = homePage;

  divHome.querySelector('#register').addEventListener('click', () => onNavigate('/register'));
  divHome.querySelector('#startSesion').addEventListener('click', ()=> onNavigate('/profile'));
  return divHome;
};
