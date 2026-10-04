const form = document.querySelector(".form-gastos");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const produto = document.querySelector("#produto-servico").value.trim();
    const preco = document.querySelector("#preco").value.trim();
    
    if (!produto) {
        alert('Informe um produto ou serviço válido');
        return;
    } else if (!preco) {
        alert('Informe um preço válido');
        return;
    }

    const gastos = {
        produto: produto,
        preco: preco
    };

    const leituraGastosObj = JSON.parse(localStorage.getItem("Gastos")) || [];
    leituraGastosObj.push(gastos);
    localStorage.setItem("Gastos", JSON.stringify(leituraGastosObj));
    
    
    form.reset();
    aparecerLista();
});


const btnLimpar = document.querySelector(".bnt-limpar");

if (btnLimpar) {
    btnLimpar.addEventListener("click", function() {
        localStorage.removeItem("Gastos"); 
        aparecerLista();
    });
}

aparecerLista();

function aparecerLista() {
    const divListaGastos = document.querySelector("#lista-gastos");
    const listaSalva = JSON.parse(localStorage.getItem("Gastos")) || [];
    divListaGastos.innerHTML = "";

    for (const item of listaSalva) {
        const p = document.createElement("p");
        p.textContent = `${item.produto} - R$: ${Number(item.preco).toFixed(2)}`;
        divListaGastos.appendChild(p);
    }
}