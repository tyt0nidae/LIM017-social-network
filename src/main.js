import { Home } from './lib/Home.js';
import { Register } from './lib/Register.js';
import { Login } from './lib/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};

const onNavigate = (pathname) => {
window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
)
rootDiv.innerHTML= routes[pathname]
};

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }

const component = routes[window.location.pathname];
rootDiv.innerHTML = component
