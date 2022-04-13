import { GetDataUser } from './confi.js';

export const profile = () => {

    


    const profileDiv = document.createElement('div');
    const profileUser = `<div>Bienvenidos</div>`;
    profileDiv.innerHTML= profileUser

    GetDataUser();
   
    return profileDiv;
};