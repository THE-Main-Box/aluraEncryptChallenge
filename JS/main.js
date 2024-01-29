let bool = false;
let textarea = document.querySelector("#ta");

let tb = document.querySelector("#ta").style;
let cbtn = document.querySelector("#copybtn").style;

const substitutionMap = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const Encrypt = (texto) => {
  // Substituição usando o mapeamento
  texto = texto.replace(/[aeiou]/g, (match) => substitutionMap[match]);
  return texto;
};

const Desencrypt = (texto) => {
  // Inversão da substituição usando o mapeamento
  texto = texto.replace(/(ai|enter|imes|ober|ufat)/g, (match) => {
    for (const key in substitutionMap) {
      if (substitutionMap[key] === match) {
        return key;
      }
    }
    return match;
  });
  return texto;
};

const attClasse = () => {
  let message = document.querySelectorAll(".message");
  message.forEach((messages) => {
    messages.classList.toggle(`true`, bool);
  });
};

const change = () => {
  // criptografar
  let toEncrypt = document.querySelector('input[name="decText"]');
  let alertText = document.querySelector("#alert p");

  bool = toEncrypt.value.trim() !== "" && !verifyText(alertText);
  if (!verifyText(toEncrypt.value) && toEncrypt.value.trim() !== "") {
    alertText.style.fontWeight = 700;
    alertText.textContent = "Apenas letras minúsculas e sem acento são permitidas!";
    return
  } else {
    alertText.style.fontWeight = "";
    alertText.textContent = "Apenas letras minúsculas e sem acento.";
  }
  attClasse();

  toEncrypt.focus();
  if (bool) {
    tb.display = "flex";
    tb.flexDirection = "column";
    cbtn.display = "block";

    textarea.value = Encrypt(toEncrypt.value);
  } else {
    tb.display = "none";
    cbtn.display = "none";
  }
};

const traduzir = () => {
  // descriptografar
  let toDesEncrypt = document.querySelector('input[name="decText"]').value;
  bool = toDesEncrypt.trim() !== "";
  attClasse();

  document.querySelector('input[name="decText"]').focus();

  if (bool) {
    textarea.value = Desencrypt(toDesEncrypt);

    tb.display = "flex";
    tb.flexDirection = "column";
    cbtn.display = "block";
  } else {
    tb.display = "none";
    cbtn.display = "none";
  }
};

function copiarTexto() {
  if (bool) {
    let inputElement = document.querySelector("#ta");
    document.querySelector('input[name="decText"]').value = "";

    inputElement.select();
    document.execCommand("copy");

    alert("Texto copiado para a área de transferência!");
  } else return;
}

function verifyText(textiInput) {
  const regex = /^[a-z\s]+$/u;
  return regex.test(textiInput);
}
