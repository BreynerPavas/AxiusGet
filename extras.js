let race = "pitbull";
document.getElementById("bRace").addEventListener("click",() => {
    race = document.getElementById("racesSelect").value;
    document.getElementById("divImg").innerHTML = ""
    console.log(race);
    axios.get(`https://dog.ceo/api/breed/${race}/images`) // utilzamos pitbull porque no tiene tantos elementos 
 .then((res)=>{
    // Imprimir por consola todas las imágenes de una raza concreta.  

    res.data.message.forEach(perro => {
        document.getElementById("divImg").innerHTML += `<img src="${perro}" alt="" srcset="" id="imgRandom"  height=200 width="200">`;
        console.log(perro);
        
    });
        
    

 }).catch((err)=> console.error(err))
    
})
axios.get("https://dog.ceo/api/breeds/list/all")

 .then((res) => {
    
    
    
    

    console.log(res.data.message)
    // Imprimir por consola la lista de razas de todos los perros.
    for (const raza in res.data.message) {
        console.log(raza);
        let span = document.createElement("span");
        span.innerText = raza + " | "
        document.getElementById("racesDiv").appendChild(span)
        let optionAux = document.createElement("option");
        optionAux.value = raza;
        optionAux.textContent = raza;
        document.getElementById("racesSelect").appendChild(optionAux) 
    }
    

    })
      
 .catch((err) => console.error(err));

 axios.get("https://dog.ceo/api/breeds/image/random")
 .then((res)=>{
        // Imprimir por consola la url imagen random de una raza.   
        document.getElementById("imgRandom").setAttribute("src",res.data.message)
        console.log(res.data.message);
    

 }).catch((err)=> console.error(err))

 