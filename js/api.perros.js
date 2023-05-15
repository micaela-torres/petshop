const TarjetasPerros = document.getElementById("perros");

fetch("../json/perros.json")
    .then(response => response.json())
    .then(tarjeta => {
        tarjeta.forEach((tarjeta, indice) => {
            TarjetasPerros.innerHTML += `
            <div class="card-luces">
                <div class="card-2">
                    <img  class="card-img" src="${tarjeta.imagen}" >
                    <div>
                        <h2>${tarjeta.producto}</h2>
                        <h4>${tarjeta.descripcion}</h4>
                        <h2>$ ${tarjeta.precio}</h2>
                        <h6>Codigo: ${tarjeta.codigo}</h6>
                    </div>
                </div>
            </div>    
            `
        })
    })