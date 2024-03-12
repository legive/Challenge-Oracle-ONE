console.log('Hola mundo');
let frase = [];
function validateText(event) {
    var caracter = String.fromCharCode(event.keyCode);
    // Expresión regular para verificar que solo hay letras minúsculas y sin acentos
    if (!caracter.match(/[a-z]/)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return false;
    } else {
        console.log(true);
        return true;
    }
}

function asignTextElement(id, text) {
    let elementoHTML = document.getElementById(id);
    if (elementoHTML) { // Verifica si el elemento fue encontrado
        elementoHTML.innerHTML = text;
    } else {
        console.error("El elemento con el ID '" + id + "' no fue encontrado.");
    }
}
function asignClass(id, class1) {
    let element = document.getElementById(id);
    element.classList.add(class1);
}

function removeClass(id, clase) {
    let elemento = document.getElementById(id);
    elemento.classList.remove(clase);
}

function encrypt() {


  
    let textEntered = document.getElementById('user-text').value;
    if(textEntered!=''){
        asignTextElement('right-text1', '');
        for (i = 0; i < textEntered.length; i++) {
            let letter = textEntered[i];
            if (letter == "e") {
                frase.push('enter');
            }
            else if (letter == "i") {
                frase.push('imes');
            } else if (letter == "a") {
                frase.push('ai');
            } else if (letter == "o") {
                frase.push('ober');
            } else if (letter == "u") {
                frase.push('ufat');
            } else {
                frase.push(letter);
            }
    
    
        }
        console.log(frase)
    
        asignTextElement('right-text1', frase.join(''));
        frase=[];
    
        asignClass('caricature', 'hide');
        asignClass('right-text2', 'hide');
         asignClass('right-text1', 'adjustText');
        removeClass('right-btn', 'hide');
        asignClass('right', 'adjust');
        

    }
    else
    {
        alert('Ingrese un texto')
    }
   

    
    



}

function decrypt() {
    asignTextElement('right-text1', '');
    let text = document.getElementById('user-text').value;
    text = text.replace(/enter/g, 'e');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ufat/g, 'u');
    console.log('Hola Mundo')

    asignClass('caricature', 'hide');
    asignClass('right-text2', 'hide');
    asignClass('right-text1', 'adjustText');
    removeClass('right-btn', 'hide');
    asignClass('right', 'adjust');
    asignTextElement('right-text1', text);
  
    console.log('Hola Mundo')



}

function reset() {
    document.getElementById('user-text').value = '';
    asignTextElement('right-text1', 'Ningun mensaje fue encontrado')
    removeClass('caricature', 'hide');
    removeClass('right-text2', 'hide');
    removeClass('right-text1', 'adjustText');
    asignClass('right-btn', 'hide');
    removeClass('right', 'adjust');
   

}
function copyText() {


    let text = document.getElementById('right-text1').textContent;
    console.log(text);

    // Verificar si el navegador admite la API Clipboard
    if (!navigator.clipboard) {
        // Si no se admite, mostrar un mensaje de error
        alert("Tu navegador no admite la API Clipboard.");
        return;
    }

    // Intentar copiar el texto al portapapeles

    navigator.clipboard.writeText(text)
        .then(() => {
            // Si la copia fue exitosa, mostrar un mensaje de éxito
            alert("El texto ha sido copiado al portapapeles.");
        })
        .catch(err => {
            // Si ocurrió un error al copiar, mostrar un mensaje de error
            console.error('Error al copiar el texto al portapapeles:', err);
            alert("Hubo un error al copiar el texto al portapapeles.");
        });
}

