const tipButton = document.querySelector("#calculate");
const tipInput = document.querySelector("#tip");

const createModal = (message) => {
  const modal = document.querySelector(".model");
  const content = document.querySelector(".content");
  const close = document.querySelector(".closePopup");
  const main = document.querySelector("main");

  const closePopup = () => {
    modal.style.display = "none";
    main.classList.remove("model-open");
    tipButton.disabled = false;
  };
  const openPopup = () => {
    modal.style.display = "block";
    main.classList.add("model-open");
    tipButton.disabled = true;
  };

  content.innerText = message;
  close.addEventListener("click", closePopup);
  const entity = {
    modal: modal,
    openModal: openPopup,
  };

  return entity;
};

const calculate = (evnt) => {
  if (tipInput.value === "") {
    const modal = createModal("please enter the number");
    modal.openModal();

    return;
  }
  const bill = parseInt(tipInput.value);
  const tip = (bill * 0.15).toFixed(2);
  const modal = createModal(`the tip for this order is ${tip}`);
  modal.openModal();
  tipInput.value = "";
};

tipButton.addEventListener("click", calculate);