/**
 * El programa hace  uso de  api de github para consumir los datos de esta
 *  y nos tiene que mostrar el usuario stolinski la informacion que muestra
 *  será su nombre, su blog y su location
 */



const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//se agrega . para las class y se arreglaron los nombres de las variables
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

//Se agrega palabra async
async function displayUser(username) {

  //se cambia el nombre de la variable 
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response);
  
  //
  $name.textContent = `${response.name}`;
  $blog.textContent = `${response.blog}`;
  $location.textContent = `${response.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
