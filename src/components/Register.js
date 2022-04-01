// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const registerDiv = document.createElement('div');
  const registerBtn = `<p>Registrate</p>
    <input type="email" placeholder="Crea un usuario/correo electrónico"></imput>
    <input type="password" placeholder="Crea una contraseña"></imput>
    <input type="password" placeholder="Repita su contraseña"></imput>
    <input type="text" placeholder="Nombres"></imput>
    <input type="text" placeholder="Apellidos"></imput>
    <input type="text" placeholder="Género"></imput>
    <input type="text" placeholder="Ubicación"></imput>
    <input type="date">Fecha de nacimiento</imput>
    <input type="text" placeholder="Idiomas aprendidos"></imput>
    <button>Registrarse</button>
    <button id="goBack">Volver al inicio</button>`;
  registerDiv.innerHTML = registerBtn;

  registerDiv.querySelector('#goBack').addEventListener('click', () => onNavigate('/'));
  return registerDiv;
};
