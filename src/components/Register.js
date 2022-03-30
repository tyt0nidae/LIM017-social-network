// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const registerDiv = document.createElement('div');
  const registerBtn = `<p>Registrate</p>
    <input type="text" placeholder="Crea un usuario/correo electrónico" value="$[x]"></imput>
    <input type="text" placeholder="Contraseña" value="$[x]"></imput>
    <input type="text" placeholder="Repita su contraseña" value="$[x]"></imput>
    <button>Registrarse</button>
    <button id="goBack">Volver al inicio</button>`;
  registerDiv.innerHTML = registerBtn;

  registerDiv.querySelector('#goBack').addEventListener('click', () => onNavigate('./'));
};
