// Este es el punto de entrada de tu aplicacion

import { Home } from './lib/Home.js';
import { Register } from './lib/Register.js';
import { Login } from './lib/Login.js';

//myFunction();*/
const rootDiv = document.getElementById("root");

const routes = {
    '/ home': Home,
    '/ register': Register,
    '/ login': Login,
};
 const component = routes[Home, Register, Login]
 rootDiv.appendChild(component());