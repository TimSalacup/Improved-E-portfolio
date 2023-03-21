let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
// const rotateFactor = 1 / 3;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
//   const rotateX = event.clientX * rotateFactor; 

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 != 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    // rotate(${rotateX * boolInt}deg)
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_h9rk9v7",
      "template_xl9krpf",
      event.target,
      "gPhxEhTdxTTyuzYVn"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on timothysalacup@gmail.com"
      );
    });
}

function toggleModal() {
  // toggleModal
  document.body.classList += " modal--open";
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
