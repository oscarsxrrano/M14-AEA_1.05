// Exercici 1 -------------------------------------

//1.1
const title = document.getElementById("title");
title.innerHTML = "Nou titol";

//1.2
const list = document.getElementById("ulId")
const li = document.createElement("li")

li.innerHTML = "Element 4";

list.appendChild(li);

//1.3
function canviParagraf() {
    const p = document.getElementById("p");
    p.innerHTML = "Text del paràgraf modificat!"
}

document.getElementById("canviText").addEventListener("click", function() {
    canviParagraf();
})

// Exercici 2 -------------------------------------
const newDiv = document.createElement("div");
newDiv.id = "divId";

const newP = document.createElement("p");
newP.innerHTML = 'Fes clic per canviar l`estil';
newDiv.appendChild(newP);
newDiv.className = "classDiv";

document.body.appendChild(newDiv);

document.getElementById("divId").addEventListener("click", function() {
    divId.style.color = "green";
    divId.style.fontSize = "larger";
})

// Exercici 3 -------------------------------------
function mostraText(event) {
    event.preventDefault(); // Para que no se reinicie
    
    const divForm = document.createElement("div");
    divForm.id = "divForm";
    document.body.appendChild(divForm);

    const pForm = document.createElement("p");
    const input = document.getElementById("text")
    pForm.innerHTML = input.value;

    divForm.appendChild(pForm);

    input.value = ''
}

document.getElementById("formulari").addEventListener("submit", mostraText);

// Exercici 4 -------------------------------------
function newProducte(event) {
    event.preventDefault();

    const input = document.getElementById("producte"); 
    const text = input.value;

    const nouProducte = document.createElement("div"); 
    nouProducte.className = "productClass"; 

    const textProducte = document.createElement("span"); 
    textProducte.innerHTML = text; 
    nouProducte.appendChild(textProducte); 

    const buttonDone = document.createElement("button");
    buttonDone.innerHTML = "Done"; 
    buttonDone.className = "buttonDone";
    buttonDone.onclick = function() {
        textProducte.classList.toggle("doneClass"); 
    };
    nouProducte.appendChild(buttonDone); 

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Delete"; 
    buttonDelete.className = "buttonDelete";
    buttonDelete.onclick = function() {
        nouProducte.remove(); 
    };
    nouProducte.appendChild(buttonDelete); 

    const productList = document.getElementById("productList");
    productList.appendChild(nouProducte); 

    input.value = ''; 
}

document.getElementById("formulari2").addEventListener("submit", newProducte);


