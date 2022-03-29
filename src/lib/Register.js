export const Register = () => {
    let registerDiv = `<div>
                      <p>Registrate</p>
                      <input type="text" placeholder="Crea un usuario/correo electrónico" value="$[x]"></imput>
                      <input type="text" placeholder="Contraseña" value="$[x]"></imput>
                      <input type="text" placeholder="Repita su contraseña" value="$[x]"></imput>
                      <button>Registrarse</button>
                      <button>Volver al inicio</button></div>`;
  
  return registerDiv;
};