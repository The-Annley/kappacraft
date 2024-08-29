window.onload = function () {
  console.log("Window loaded");

  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  var scrollbar = document.documentElement.style;
  var loaderWrapper = document.getElementById("loaderWrapper");

  if (loaderWrapper) {
    console.log("Loader wrapper found");

    scrollbar.setProperty("--scrollbar-opacity", "0");

    setTimeout(function () {
      console.log("Fading out loader");
      loaderWrapper.style.opacity = "0";
    }, 1500);

    setTimeout(function () {
      console.log("Restoring scrolling and hiding loader");
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      loaderWrapper.style.display = "none";
    }, 1990);
  } else {
    console.log("Loader wrapper not found");
  }
};

// Получаем элемент навигации
var nav = document.getElementById("mainNav");

console.log("nav:", nav);

// Проверяем, существует ли элемент .nav-container внутри навигации
if (nav && nav.querySelector(".nav-container")) {
  // Получаем текущее положение прокрутки документа
  var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Обработчик события прокрутки страницы
  window.addEventListener("scroll", function () {
    var currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // Проверяем направление прокрутки
    if (currentScrollTop > lastScrollTop) {
      // Прокрутка вниз - добавляем класс
      nav.classList.add("scrolled");
    }

    // Проверяем, находится ли прокрутка в начале страницы
    if (currentScrollTop === 0) {
      nav.classList.remove("scrolled");
      nav.classList.add("at-top");
    } else {
      nav.classList.remove("at-top");
    }

    // Сохраняем текущее положение прокрутки для следующего сравнения
    lastScrollTop = currentScrollTop;
  });
} else {
  console.error('Element with id "mainNav" or its .nav-container not found.');
}

document.addEventListener("DOMContentLoaded", function () {
  var carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleIndicators")
  );
  var leftContainer = document.querySelector(".left-container");
  var textContentContainer = document.getElementById("text-content");

  leftContainer.classList.add("slide-one");
  carousel._element.dispatchEvent(
    new Event("slide.bs.carousel", { bubbles: true, cancelable: true, to: 0 })
  );

  carousel._element.addEventListener("slide.bs.carousel", function (event) {
    var index = event.to;

    if (leftContainer.classList.contains("slide-one") && index !== 0) {
      leftContainer.classList.remove("slide-one");
    }

    leftContainer.classList.remove("slide-two", "slide-three", "slide-four");

    if (index === 0) {
      leftContainer.classList.add("slide-one");
    } else if (index === 1) {
      leftContainer.classList.add("slide-two");
    } else if (index === 2) {
      leftContainer.classList.add("slide-three");
    } else if (index === 3) {
      leftContainer.classList.add("slide-four");
    }

    var newContent;

    if (index === 0) {
      newContent = getSlideOneContent();
    } else if (index === 1) {
      newContent = getSlideTwoContent();
    } else if (index === 2) {
      newContent = getSlideThreeContent();
    } else if (index === 3) {
      newContent = getSlideFourContent(); // Вызов функции для четвертого слайда
    }

    textContentContainer.outerHTML = newContent;
    textContentContainer = document.getElementById("text-content");
  });

  // Функции для получения контента слайдов
  function getSlideOneContent() {
    var imageUrl1 = document.getElementById("hiddenData1").textContent;
    return `
                <div id="text-content" class="text-content activeslide">
                   <div class="content-part">
                      <div id="text-content" class="text-content revengefir activeslide">
                         <span>
                            <br><br><img src="${imageUrl1}" alt="">
                            <h2 class="useradmin" style="padding-left: 6px;">RevengeFir</h2>
                            <h2 class="prefixadmin">Администратор</h2>
                         </span>
                         <br><br>
                         <p class="white-theme">Привет! Меня зовут Фир или Вова, называйте как удобней. Я здесь являюсь каждым понемногу, сам держу сервер у себя дома, немного настраиваю, немного пишу сценарий для сюжетных ивентов. А вообще, я являюсь создателем и главным администратором сервера.</p>
                      </div>
                         <br><br><br>
                         <br><br><br>
                            <a href="https://t.me/revengfirtg" target="_blank" class="telegram-inf">
                               <i class="fa-brands fa-telegram"></i>
                               <h2>RevengeFir</h2>
                            </a>
                   </div>
                </div>
                `;
  }

  function getSlideTwoContent() {
    var imageUrl2 = document.getElementById("hiddenData2").textContent;
    return `
                <div id="text-content" class="text-content uggtiu activeslide">
                   <span>
                      <br><br><img src="${imageUrl2}" alt="">
                      <h2 class="useradmin white-theme" style="padding-left: 6px;">uggtiu</h2>
                      </h2> 
                      <h2 class="prefixdevelop">Тех. Администратор</h2>
                   </span>
                   <br><br>
                   <p>Огурец надел шляпу и отправился в отпуск на Луну, чтобы учить пингвинов танцевать польку с единорогами. Арбуз полетел на марс и передал привет Илону Маску.</p>
                         <br><br><br>
                         <br><br><br>
                            <a href="https://uggtiu.pw/" target="_blank" class="telegram-inf">
                               <i class="fa fa-terminal"></i>
                               <h2>uggtiu</h2>
                            </a>
                </div>
                `;
  }

  function getSlideThreeContent() {
    var imageUrl3 = document.getElementById("hiddenData3").textContent;
    return `
                <div id="text-content" class="text-content cardiffe activeslide">
                   <span>
                      <br><br><img src="${imageUrl3}" alt="">
                      <h2 class="useradmin" style="padding-left: 6px;">Cardiffe</h2>
                      <h2 class="prefixhtml">Мл. Администратор</h2>
                   </span>
                   <br><br>
                   <p>Привет! Меня зовут Кардифф, я являюсь младшим администратором сервера KappaCraft! Занимаюсь принятием заявок и модерацией контента и сообщений в дискорде и в игре.</p>
                         <br><br><br>
                         <br><br><br>
                            <a href="https://discord.com/users/1041726011781431396" target="_blank" class="telegram-inf">
                               <i class="fa-brands fa-discord"></i>
                               <h2>cardiffe</h2>
                            </a>
                </div>
                `;
  }

  // Добавляем функцию для четвертого слайда
  function getSlideFourContent() {
    var imageUrl4 = document.getElementById("hiddenData4").textContent;
    return `
                <div id="text-content" class="text-content sophie activeslide">
                   <span>
                      <br><br><img src="${imageUrl4}" alt="">
                      <h2 class="useradmin" style="padding-left: 6px;">sanfra_</h2>
                      <h2 class="prefixhtml">Сценарист</h2>
                   </span>
                   <br><br>
                   <p>Привет! Я один из сценаристов ивентов на проекте KappaCraft. За время работы здесь я разработала основу и дополнительные фрагменты сценария, а также предложила множество идей, некоторые из которых стали основой сюжета. Работаю в паре с Вовой, который выбирает лучшие идеи и вносит правки.</p>
                         <br><br><br>
                         <br><br><br>
                            <a href="https://discord.com/users/789843946180313128" target="_blank" class="telegram-inf">
                               <i class="fa-brands fa-discord"></i>
                               <h2>Sophie</h2>
                            </a>
                </div>
                `;
  }
});

function toggleWhiteTheme() {
  var elementsWithWhiteTheme = document.querySelectorAll(".white-theme");
  elementsWithWhiteTheme.forEach(function (element) {
    element.classList.toggle("active");
  });
}

$("#default-buy").modal();

function scrollToInfo() {
  var targetElement = document.getElementById("sec-cont");
  targetElement.scrollIntoView({ behavior: "smooth" });
}

function scrollToBuy() {
  var targetElement = document.getElementById("buy-container");
  targetElement.scrollIntoView({ behavior: "smooth" });
}

function copyText() {
  const content = document.getElementById("content-copy").textContent;
  navigator.clipboard
    .writeText(content)
    .then(() => {
      // Показываем уведомление об успешном копировании
      const notificationHTML = `
                    <div class="notification">
                        <div class="sender_wrapper">
                        <span class="sender_pop_up">Скопировано!</span>
                        </div>
                        <div class="content_sended_pop_up">
                            <span class="ip">IP:</span> <span class="ip-text">kappacraft.xyz</span>
                        </div>
                        </div>
                    `;
      showNotification(notificationHTML);

      // Добавляем класс для стилизации при нажатии
      const copyButton = document.getElementById("copy");
      copyButton.classList.add("clicked");

      // Убираем класс через определенное время
      setTimeout(() => {
        copyButton.classList.remove("clicked");
      }, 300); // Убираем класс через 0.3 секунды
    })
    .catch((err) => {
      console.error("Ошибка при копировании текста: ", err);
    });
}

function showNotification(notificationHTML) {
  const notificationContainer = document.createElement("div");
  notificationContainer.innerHTML = notificationHTML;
  document.body.appendChild(notificationContainer);

  // Убираем уведомление через определенное время
  setTimeout(() => {
    notificationContainer.remove();
  }, 3000); // Уведомление исчезнет через 3 секунды
}
