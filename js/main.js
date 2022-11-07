const listaSpesa = ["Farina integrale.", "Pizza Surgelata.", "Sapone per: faccia, macchina, capelli, anima.",
"Anello di diamanti."
]
let i=0;

while (i<listaSpesa.length){
    console.log(listaSpesa[i]);
    const liCreator = document.createElement("li");
    const divEl = document.getElementById("ul");
    const elementoCorrente = document.createTextNode(listaSpesa[i]);
    liCreator.appendChild(elementoCorrente);
    divEl.appendChild(liCreator);
    i++;
}