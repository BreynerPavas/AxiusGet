

let usuarios = []
axios.get("https://jsonplaceholder.typicode.com/users")

.then((res) => {

    // Imprimir por consola la lista (array) de usuarios.
    console.log(res.data)
    // Imprimir por consola solo el nombre de los usuarios.
    let nombreData = res.data.map((persona) => persona.name)
    console.log(nombreData);
    usuarios = res.data
    
})

.catch((err) => console.error(err));
// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.

console.log(usuarios);
// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
const showUser = (e) => {
    console.log(usuarios);
}
// Crea un botón que cuando lo cliques ejecute la función que habías creado
document.getElementById("bConsolaUsuarios").addEventListener("click",showUser);

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).
document.getElementById("bConsolaUsuarios").addEventListener("click",() => {
    let tr = document.createElement("tr");
    tr.innerHTML = "Nombre";
    document.getElementById("tUsuarios").appendChild(tr);
    usuarios.forEach((usuario) => {
        console.log(usuario);
        let tdAux = document.createElement("td");
        tdAux.textContent = usuario.name;
        document.getElementById("tUsuarios").appendChild(tdAux)

        
    })

});



