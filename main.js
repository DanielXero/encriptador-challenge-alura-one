

const d = document;
const texto = d.getElementById("texto");
const muneco = d.querySelector(".result-img");

const resultadotext = d.getElementById("resultText");
const resulttitle = d.getElementById("resultTitle");
const buttonencrip = d.getElementById("btnEncriptar");
const buttondesencrip = d.getElementById("btnDesencriptar");
const buttoncopiar = d.getElementById("btnCopy");

const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;

    for (let i = 0; i < llaves.length; i++) {
      let regex = new RegExp(llaves[i][1], "g");
      mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
  
    return mensajeDesencriptado;
}


texto.addEventListener("input", (e) => {
  muneco.style.display = "none";

  resulttitle.textContent = "capturando mensaje";
  resultadotext.textContent = "";
});


buttonencrip.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = texto.value.toLowerCase();
  let mensajeEncriptado = encriptarMensaje(mensaje);
  resultadotext.textContent = mensajeEncriptado;
  buttoncopiar.classList.remove("hidden");
  resulttitle.textContent = "el resultado es:";
});

buttondesencrip.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texto.value.toLowerCase(); 
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadotext.textContent = mensajeDesencriptado;
    buttoncopiar.classList.remove("hidden");
  });

buttoncopiar.addEventListener("click", () => {
  let textoCopiado = resultadotext.textContent;
  navigator.clipboard.writeText(textoCopiado).then(() => {
    muneco.style.display = "block";

    resulttitle.textContent = "el texto se copió";
  });
});
