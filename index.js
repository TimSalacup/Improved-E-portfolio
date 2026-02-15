let isModalOpen = false;
let contrastToggle = false;
const selectionImg = document.querySelector(".selection__display--img");
const scaleFactor = 1 / 20;
const othersTitle = document.querySelector(
  ".selection__display--description-title"
);
const othersDescription = document.querySelector(
  ".selection__display--description-para"
);
const othersSkeletonPara = document.querySelectorAll(
  ".selection__display--description-skeleton"
);
const othersSkeletonTitle = document.querySelector(
  ".selection__display--description-skeleton-title"
);
let othersLoaded = !!(selectionImg && othersTitle && othersDescription);
// const rotateFactor = 1 / 3;

loadOthers();

function loadOthers() {
  if (!othersLoaded) {
    [othersDescription, othersTitle, selectionImg].forEach((el) => {
      if (el) el.style.display = "none";
    });
    [othersSkeletonPara, othersSkeletonTitle].forEach((el) => {
      if (el) el.style.display = "block";
    });
  } else {
    [othersSkeletonPara, othersSkeletonTitle].forEach((el) => {
      if (el) el.style.display = "none";
    });
    [othersDescription, othersTitle, selectionImg].forEach((el) => {
      if (el) el.style.display = "block";
    });
  }
}

const othersData = [
  {
    title: "Youth Group Game",
    description:
      "A rushed game built using Javascript for a youth group activity. This game uses a Bible API to ensure each reload displays a random bible verse each time.",
    image: "./assets/YouthGroup-game.jpg",
    link: "https://timsalacup.github.io/YP-Reference-Game/index.html",
  },
  {
    title: "Java Certification",
    description:
      "Earners of this certification prove their capacity of recognizing, writing, and debugging Java code that will logically solve a problem.",
    image: "./assets/Java-certificate.jpg",
    link: "./assets/Java.pdf",
  },
  {
    title: "HTML and CSS Certification",
    description:
      "HTML & CSS Certified, proficient in building responsive web pages using semantic HTML5 and modern CSS3 techniques.",
    image: "./assets/HTML-certificate.jpg",
    link: "./assets/HTML-and-CSS.pdf",
  },
];

othersTitle.innerHTML = othersData[0].title;
othersDescription.innerHTML = othersData[0].description;

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

function changeOthers(event) {
  let othersSelected = event.target.innerHTML;
  othersTitle.innerHTML = "";
  othersDescription.innerHTML = "";
  selectionImg.src = "";
  if (othersSelected === "Youth Group Game") {
    othersTitle.innerHTML += othersData[0].title;
    othersDescription.innerHTML += othersData[0].description;
    selectionImg.src = othersData[0].image;
  } else if (othersSelected === "Java Certification") {
    othersTitle.innerHTML += othersData[1].title;
    othersDescription.innerHTML += othersData[1].description;
    selectionImg.src = othersData[1].image;
  } else {
    othersTitle.innerHTML += othersData[2].title;
    othersDescription.innerHTML += othersData[2].description;
    selectionImg.src = othersData[2].image;
  }
}
