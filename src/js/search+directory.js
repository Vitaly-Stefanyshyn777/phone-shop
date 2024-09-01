// Активує суворий режим, що дозволяє уникнути помилок у коді.

  const showButton = document.querySelector(".show");
  const btnCloseButton = document.querySelector(".close");
  const wrapper = document.querySelector(".wrapper");
  const cardsContainer = document.querySelector(".cards");
  const input = document.getElementById("searchInput");
  // Оголошення констант, які містять посилання на HTML-елементи на сторінці.

  const phones = [
    {
      model: "iPhone 13",
      price: 1000,
      description:
        "iPhone 13 - это новая модель телефона от Apple с передовыми технологиями и функциями.",
      discount: 100,
      imagePath: "img/iphone13.jpg",
      reviews: 138,
    },
    {
      model: "Samsung Galaxy S21",
      price: 1200,
      description:
        "Samsung Galaxy S21 - это новый флагманский смартфон от Samsung с потрясающим экраном и мощным процессором.",
      discount: 80,
      imagePath: "img/SamsungGalaxyS21.jpg",
      reviews: 2367,
    },
    {
      model: "Google Pixel 6",
      price: 800,
      description:
        "Google Pixel 6 - это последняя модель телефона от Google с отличной камерой и инновационными функциями.",
      discount: 50,
      imagePath: "img/GooglePixel6.jpg",
      reviews: 876,
    },
    {
      model: "OnePlus 9 Pro",
      price: 1100,
      description:
        "OnePlus 9 Pro - это мощный смартфон с качественным дисплеем и быстрой зарядкой.",
      discount: 90,
      imagePath: "img/OnePlus9Pro.jpg",
      reviews: 7,
    },
    {
      model: "Xiaomi Mi 11",
      price: 950,
      description:
        "Xiaomi Mi 11 - это новинка от Xiaomi с улучшенной камерой и производительным процессором.",
      discount: 70,
      imagePath: "img/XiaomiMi11.jpg",
      reviews: 65322,
    },
    {
      model: "Huawei P50",
      price: 1050,
      description:
        "Huawei P50 - это флагманский смартфон с инновационной камерой и стильным дизайном.",
      discount: 85,
      imagePath: "img/HuaweiP50.jpg",
      reviews: 12,
    },
    {
      model: "Sony Xperia 5 III",
      price: 1250,
      description:
        "Sony Xperia 5 III - это мобильный телефон с высококачественным дисплеем и мощной камерой.",
      discount: 95,
      imagePath: "img/SonyXperia5III.jpg",
      reviews: 11,
    },
    {
      model: "LG Velvet",
      price: 900,
      description:
        "LG Velvet - это стильный смартфон с уникальным дизайном и высокой производительностью.",
      discount: 60,
      imagePath: "img/LGVelvet.jpg",
      reviews: 3799,
    },
    {
      model: "Samsung Galaxy S22 Ultra ",
      price: 2800,
      description:
        "Samsung Galaxy S22 Ultra 8 ГБ/128 ГБ черный технология NFC: Да цвет: черный тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus + диагональ: 6.8 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Exynos 2200 объем встроенной памяти: 128.0 ГБ емкость аккумулятора: 5000.0 мАч",
      discount: 78,
      imagePath: "img/samsungs22.jpg",
      reviews: 1999,
    },
    {
      model: "Asus ROG Phone 5",
      price: 1300,
      description:
        "Asus ROG Phone 5 - это мощный игровой смартфон с передовыми игровыми функциями и высокой производительностью.",
      discount: 75,
      imagePath: "img/AsusROGPhone5.jpg",
      reviews: 779,
    },
    {
      model: "iPhone 15",
      price: 3250,
      description:
        "Apple iPhone 15 Pro 256Gb синий технология NFC: Да цвет: синий тип экрана: OLED, Super Retina XDR display диагональ: 6.1 дюйм размер оперативной памяти: 8 ГБ процессор: 6-ядерный Apple A17 Proобъем встроенной памяти: 256.0 ГБ емкость аккумулятора: 3279.0 мАч",
      discount: 99,
      imagePath: "img/iphone15.jpg",
      reviews: 2398,
    },
    {
      model: "Nokia 9 PureView",
      price: 850,
      description:
        "Nokia 9 PureView - это телефон с высококачественной камерой и стильным дизайном, который предлагает превосходные возможности.",
      discount: 55,
      imagePath: "img/Nokia9PureView.jpg",
      reviews: 6129,
    },
    {
      model: "iPhone 10",
      price: 700,
      description:
        "iPhone 10 - это предыдущая модель телефона от Apple с привлекательным дизайном и хорошей производительностью.",
      discount: 40,
      imagePath: "img/iphone10.jpg",
      reviews: 1423,
    },
    {
      model: "iPhone 11",
      price: 800,
      description:
        "iPhone 11 - это предыдущая модель телефона от Apple с улучшенной камерой и быстрой работой.",
      discount: 60,
      imagePath: "img/iphone11.jpg",
      reviews: 2356,
    },
    {
      model: "iPhone 12",
      price: 900,
      description:
        "iPhone 12 - это предыдущая модель телефона от Apple с OLED-дисплеем и мощным процессором.",
      discount: 70,
      imagePath: "img/iphone12.jpg",
      reviews: 3890,
    },
    {
      model: "iPhone 14",
      price: 1100,
      description:
        "iPhone 14 - это новейшая модель телефона от Apple с передовыми технологиями и улучшенной камерой.",
      discount: 80,
      imagePath: "img/iphone14.jpg",
      reviews: 500,
    },
  ];

  class AddCard {
    // Клас, який створює HTML-розмітку для карток товарів на основі даних з масиву phones.

    addCard(index) {
      const { imagePath, model, description, reviews, price, discount } =
        phones[index];
      // Деструктуризація об'єкта для зручного доступу до властивостей.

      return `
      <div class="card">
        <div class="card__images">
          <img src="${imagePath}" alt="" /> <!-- Відображення зображення телефону -->
        </div>
        <div class="card__hr"></div>
        <p class="card__title">${model}</p> <!-- Назва моделі телефону -->
        <p class="card__descr">${description}</p> <!-- Опис моделі -->
        <div class="card__rating">
          <div class="rating__span">
            <span>${"&#9733;".repeat(
              5
            )}</span> <!-- Символи зірок для рейтингу -->
          </div>
          <div class="card__comment">(${reviews})</div> <!-- Кількість відгуків -->
        </div>
        <div class="card__m">
          <div class="card__m-left">
            <div class="card__m-text">Цена</div> <!-- Текст "Ціна" -->
            <div class="card__m-money">${price}$</div> <!-- Ціна телефону -->
          </div>
          <div class="card__m-left">
            <div class="card__m-text">Со скидкой</div> <!-- Текст "Со скидкой" -->
            <div class="card__m-money">
              <mark>${
                price - discount
              }$</mark><span>${discount}$</span> <!-- Ціна зі знижкою -->
            </div>
          </div>
        </div>
        <img class="img-svg" src="img/0012.svg" alt="" /> <!-- Декоративне зображення -->
        <img class="img-b5" src="img/b5.svg" alt="" /> <!-- Декоративне зображення -->
      </div>
    `;
      // Повертає HTML-код для однієї картки товару.
    }
  }

  const a1 = new AddCard();
  // Створення екземпляра класу AddCard.

  const btnHandler = () => {
    showButton.classList.toggle("dn");
    btnCloseButton.classList.toggle("dn");
    // Перемикає видимість кнопок "Показати" та "Закрити".
  };

  showButton.addEventListener("click", () => {
    btnHandler();
    //видвляє всі картки при натискані показати ще
    // cardsContainer.innerHTML = "";
    phones.forEach((phone, index) => {
      cardsContainer.insertAdjacentHTML("beforeend", a1.addCard(index));
      // Для кожного телефону в масиві створює та додає HTML-розмітку картки у контейнер cardsContainer.
    });
  });

  btnCloseButton.addEventListener("click", () => {
    btnHandler();
    cardsContainer.innerHTML = "";
    // Очищає контейнер для карток та перемикає видимість кнопок.
  });

  input.addEventListener("input", function (e) {
    const inputValue = e.target.value.trim();
    console.log(inputValue);
    // Отримує введене значення у поле пошуку та видаляє зайві пробіли.

    const filteredPhones = phones.filter((phone) =>
      phone.model.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    // Фільтрує телефони, назва моделі яких починається з введеного тексту.

    cardsContainer.innerHTML = "";
    filteredPhones.forEach((phone) => {
      const index = phones.indexOf(phone);
      cardsContainer.insertAdjacentHTML("beforeend", a1.addCard(index));
      // Для відфільтрованих телефонів створює та додає картки у контейнер cardsContainer.
    });
  });
  // Реалізація функціоналу пошуку по моделях телефонів.

  // -------------------------------------------------------------------------------------AI----------------------------------------------------

