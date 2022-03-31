// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const divHome = document.createElement('div');
  const homePage = `<p>Encuentra tu camino viajero</p>
  <button>Iniciar Sesión</button><button id="register">Registrate</button>
  <input type="text" placeholder="Usuario/correo electrónico"></imput>
  <input type="text" placeholder="Contraseña"></imput>
  <button id="startSesion">Entrar</button>
  <a href="">¿Olvidaste tu contraseña?</a>
  <a href="" class="fbBtn">Ingresar con Facebook</a>
  <a href="" class="ggBtn">Ingresar con Google</a>`;
  divHome.innerHTML = homePage;
  divHome.querySelector('#register').addEventListener('click', () => onNavigate('/register'));
  return divHome;
};
