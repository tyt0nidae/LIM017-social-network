// aqui exportaras las funciones que necesites
import { onNavigate } from './main.js';
export const Home = 
 `<div>
  <button id="register">Registrate</button>
  <button id="startSesion">Inicia Sesión</button>
  </div>`;
  const register = document.getElementById("register");
  register.addEventListener("click", ()=> onNavigate('/Register'));

