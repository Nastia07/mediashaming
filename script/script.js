document.addEventListener("DOMContentLoaded", function (event) {
  const foodCompaniesNode = document.getElementById("companies__food");
  const autoCompaniesNode = document.getElementById("companies__auto");
  const agriculturalCompaniesNode = document.getElementById(
    "companies__agricultural"
  );
  const bankCompaniesNode = document.getElementById("companies__bank");

  const foodCompanies = [
    {
      name: "Unilever",
      src: "/img/companies/1.png",
      link: "#",
    },
    {
      name: "Metro AG",
      src: "/img/companies/2.png",
      link: "#",
    },
    {
      name: "Danone",
      src: "/img/companies/3.png",
      link: "#",
    },
    {
      name: "Nestlé",
      src: "/img/companies/4.png",
      link: "#",
    },
    {
      name: "Johnson & Johnson",
      src: "/img/companies/5.png",
      link: "#",
    },
    {
      name: "Auchan",
      src: "/img/companies/6.png",
      link: "#",
    },
  ];
  const autoCompanies = [
    {
      name: "Renault",
      src: "/img/companies/auto1.png",
      link: "#",
    },
    {
      name: "SKF",
      src: "/img/companies/auto2.png",
      link: "#",
    },
    {
      name: " Bosch",
      src: "/img/companies/auto3.png",
      link: "#",
    },
    {
      name: "Danieli",
      src: "/img/companies/auto4.png",
      link: "#",
    },
    {
      name: "Grundfos",
      src: "/img/companies/auto5.png",
      link: "#",
    },
    {
      name: "Geberit",
      src: "/img/companies/auto6.png",
      link: "#",
    },
  ];
  const agriculturalCompanies = [
    {
      name: "Syngenta",
      src: "/img/companies/ag1.png",
      link: "#",
    },
    {
      name: "DuPont",
      src: "/img/companies/ag2.png",
      link: "#",
    },
    {
      name: "Dow Chemical",
      src: "/img/companies/ag3.png",
      link: "#",
    },
  ];

  const bankCompanies = [
    {
      name: "UniCredit",
      src: "/img/companies/bank1.png",
      link: "#",
    },
    {
      name: "CreditSuisse",
      src: "/img/companies/bank2.png",
      link: "#",
    },
    {
      name: "Lloyds insurance",
      src: "/img/companies/bank3.png",
      link: "",
    },
  ];

  function setCompanies(elementArray, parent) {
    elementArray.forEach((company) =>
      parent.insertAdjacentHTML(
        "beforeend",
        `<a href="${company.link}"  target="_blank" class="companies__item">
        <img src="${company.src}" alt="logo">
        <div class="company__name">${company.name}</div>
        <div class="companies__btn">&#36;</div>
      </a>
    `
      )
    );
  }

  setCompanies(foodCompanies, foodCompaniesNode);
  setCompanies(autoCompanies, autoCompaniesNode);
  setCompanies(agriculturalCompanies, agriculturalCompaniesNode);
  setCompanies(bankCompanies, bankCompaniesNode);

  let swiperLength = document.getElementsByClassName("war_info__slider").length;
  if (swiperLength > 0) {
    var swiper = new Swiper(".war_info__slider", {
      watchOverflow: true,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 0,
      },
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        700: {
          slidesPerView: 2,
        },

        900: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },
      },
    });
  }
});
