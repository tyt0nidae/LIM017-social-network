// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const divHome = document.createElement('div');
  const homeBtns = `<button id="register">Registrate</button>
    <button id="startSesion">Inicia Sesión</button>`;
  divHome.innerHTML = homeBtns;
  divHome.querySelector('#register').addEventListener('click', () => onNavigate('./Register'));
  divHome.querySelector('#startSesion').addEventListener('click', () => onNavigate('./Login'));
  return divHome;
};
