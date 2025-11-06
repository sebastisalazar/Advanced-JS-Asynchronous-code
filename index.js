
//DOG API

/**
 * Dog API - Quiero un perrito, pero no se qué raza escoger, ¿me ayudas?
Utiliza la API (https://dog.ceo/dog-api/) para resolver estos ejercicios.

 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro.

 2.- Declara una función getRandomDog que obtenga una imagen random de una raza.

 3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de la raza komondor.

 4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento
 */

 const urlBase="https://dog.ceo/api/";
 const razaABuscar='schnauzer';

const llamadaAPI=async(url)=>{
    
    try {
        const respuesta=await fetch(`${urlBase}${url}`)

        if (respuesta.ok) {
             const conversion=await respuesta.json()
             //console.log(conversion)
             return conversion
        }else{
             throw "No se han podido cargar los datos"
        }
    } catch (error) {
        throw (error + " error desde llamadaAPI")
    }

}



const getAllBreeds= async()=>{
    
    try {

        const resp= await llamadaAPI('breeds/list/all')
    
        const allBreeds=Object.keys(resp.message);


        return allBreeds
    } catch (error) {
        console.error("Error al obtener razas",error)
        return [];
    }
    
    
}



const getRandomDog=async ()=>{
    
    try {

        const imagenObtenida= await llamadaAPI('breeds/image/random')

        const imagenConversion=Object.values(imagenObtenida.message).join("");

        return imagenConversion

    } catch (error) {
        console.error("Error al obtener imagen random",error)
        return {};
    }
    
}



const getAllImagesByBreed= async()=>{

    try {

        const imagenesObtenidas= await llamadaAPI('breed/komondor/images')

        const imagenesConversion=Object.values(imagenesObtenidas.message);

        return imagenesConversion
        
    } catch (error) {
        console.error("Error al obtener imagen random",error)
        return {};
    }
}



const getAllImagesByBreed2= async(nombreRaza)=>{

    try {

        const imagenesObtenidas= await llamadaAPI(`breed/${nombreRaza}/images`)

        const imagenesConversion=Object.values(imagenesObtenidas.message);

        return imagenesConversion
        
    } catch (error) {
        console.error("Error al obtener imagen random",error)
        return {};
    }
}

getAllBreeds().then(razas=>console.log("Todas las razas:",razas))
getRandomDog().then(perro=>console.log("Imagen Random obtenida:",perro))
getAllImagesByBreed().then(imagenesKomondor=>console.log("Imagenes de raza komondor obtenidas:",imagenesKomondor))
getAllImagesByBreed2(razaABuscar).then(imagenesDeRaza=>console.log(`Imagenes de ${razaABuscar} obtenidas:`,imagenesDeRaza))


/**
 * GitHub API (I) - ¿Quieres saber mi información? Aquí la tienes
 5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

 6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

 7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:
 */

 const urlBase2='https://api.github.com/users/'

 const llamadaAPI2=async(username)=>{
    
    try {
        const respuesta=await fetch(`${urlBase2}${username}`)

        ///console.log(respuesta)
        if (respuesta.ok) {
             return respuesta
        }else{
             throw "No se han encontrado al usuario"
        }
    } catch (error) {
        throw (error + " error desde llamadaAPI2")
    }

}

const getGitHubUserProfile=async(userName)=>{
    try {

        const resp= await llamadaAPI2(userName)

        if (resp.ok) {
            const usuario= await resp.json();
            return usuario
        }else{
            throw (error, "No se ha podido encontrar el usuario")
        }
        

    } catch (error) {
        console.error("Error al obtener el perfil de usuario",error)
        return [];
    }
    
} 

getGitHubUserProfile('alenriquez96').then(usuario=>console.log(usuario.name))