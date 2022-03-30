// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  const loginBtn = `<p>Inicia sesión</p>
  <input type="text" placeholder="Usuario/correo electrónico" value="$[x]"></imput>
  <input type="text" placeholder="Contraseña" value="$[x]"></imput>
  <button>Iniciar Sesión</button>
  <button id="goBack">Volver al inicio</button>`;

  loginDiv.innerHTML = loginBtn;

  loginDiv.querySelector('#goBack').addEventListener('click', () => onNavigate('./'));
};
