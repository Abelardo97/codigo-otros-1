/**
 * El programa hace  uso de  api de github para consumir los datos de esta
 *  y nos tiene que mostrar el usuario stolinski la informacion que muestra
 *  será su nombre, su blog y su location
 * Paso 1: Se modificaron varias cosas algunas fueron eliminadas y reemplazadas
 * Paso 2: Se modificó la función original y se refactorizo partes del codigo
 */


//Codigo original
/*
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
*/



//Aquí mostraremos los resultados
 const result = document.querySelector("div#resultado");

//Función para mostrar los datos del usuario
function atributos({name,blog,location}){
  result.innerHTML = `
  <div class="r_text">
      <p>${name}</p>
      <p>${blog}</p>
      <p>${location}</p>
  </div>`
}

//Se modificó la funcón original
function displayUser(username) {
  const baseEndpoint =  fetch(`https://api.github.com/users/${username}`);
  baseEndpoint.then(response => response.json())
    .then((json)=>{
      atributos(json);
      console.log(json);
      return json;
      
     
    })
    .catch((error) =>{
      console.log(error);
    })
  }    

  //Uso de la funcion
displayUser('stolinski');
