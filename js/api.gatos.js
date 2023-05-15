const TarjetasGatos = document.getElementById("gatos");

fetch("../json/gatos.json")
    .then(response => response.json())
    .then(tarjeta => {
        tarjeta.forEach((tarjeta, indice) => {
            TarjetasGatos.innerHTML += `
            <div class="card-luces">
                <div class="card-2">
                    <img class="card-img" src="${tarjeta.imagen}" width="190" height="254" >
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