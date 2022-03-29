export const Login = () => {
    let loginDiv = `<div>
                      <p>Inicia sesión</p>
                      <input type="text" placeholder="Usuario/correo electrónico" value="$[x]"></imput>
                      <input type="text" placeholder="Contraseña" value="$[x]"></imput>
                      <button>Iniciar Sesión</button>
                      <button>Volver al inicio</button></div>`;
  
  return loginDiv;
};