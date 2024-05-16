        window.onload = function () {
            console.log("Window loaded");
        
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        
            var scrollbar = document.documentElement.style;
            var loaderWrapper = document.getElementById('loaderWrapper');
        
            if (loaderWrapper) {
                console.log("Loader wrapper found");
        
                scrollbar.setProperty('--scrollbar-opacity', '0');
        
                setTimeout(function () {
                    console.log("Fading out loader");
                    loaderWrapper.style.opacity = '0';
                }, 1500);
        
                setTimeout(function () {
                    console.log("Restoring scrolling and hiding loader");
                    document.body.style.overflow = 'auto';
                    document.documentElement.style.overflow = 'auto';
                    loaderWrapper.style.display = 'none';
                }, 1990);
            } else {
                console.log("Loader wrapper not found");
            }
        }
          
    
    
    // Получаем элемент навигации
        var nav = document.getElementById('mainNav');

        console.log('nav:', nav);

        // Проверяем, существует ли элемент .nav-container внутри навигации
        if (nav && nav.querySelector('.nav-container')) {
            // Получаем текущее положение прокрутки документа
            var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Обработчик события прокрутки страницы
            window.addEventListener('scroll', function() {
                var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // Проверяем направление прокрутки
                if (currentScrollTop > lastScrollTop) {
                    // Прокрутка вниз - добавляем класс
                    nav.classList.add('scrolled');
                }

                // Проверяем, находится ли прокрутка в начале страницы
                if (currentScrollTop === 0) {
                    nav.classList.remove('scrolled');
                    nav.classList.add('at-top');
                } else {
                    nav.classList.remove('at-top');
                }

                // Сохраняем текущее положение прокрутки для следующего сравнения
                lastScrollTop = currentScrollTop;
            });
        } else {
            console.error('Element with id "mainNav" or its .nav-container not found.');
        }


        document.addEventListener('DOMContentLoaded', function () {
            var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'));
            var leftContainer = document.querySelector('.left-container');
            var textContentContainer = document.getElementById('text-content');
        
            // Trigger the slide.bs.carousel event for the initial slide
            leftContainer.classList.add('slide-one');
            carousel._element.dispatchEvent(new Event('slide.bs.carousel', { bubbles: true, cancelable: true, to: 0 }));
        
            carousel._element.addEventListener('slide.bs.carousel', function (event) {
                var index = event.to;
        
                // Check if the initial class 'slide-one' is present and the index is not 0 (not the first slide)
                if (leftContainer.classList.contains('slide-one') && index !== 0) {
                    leftContainer.classList.remove('slide-one');
                }
        
                // Remove all existing slide classes
                leftContainer.classList.remove('slide-two', 'slide-three');
        
                // Add the appropriate slide class based on the current index
                if (index === 0) {
                    leftContainer.classList.add('slide-one');
                } else if (index === 1) {
                    leftContainer.classList.add('slide-two');
                } else if (index === 2) {
                    leftContainer.classList.add('slide-three');
                }
        
                // Get the new content based on the current index
                var newContent;
        
                if (index === 0) {
                    newContent = getSlideOneContent();
                } else if (index === 1) {
                    newContent = getSlideTwoContent();
                } else if (index === 2) {
                    newContent = getSlideThreeContent();
                }
        
                // Replace the entire inner HTML of the text content container with the new content
                textContentContainer.outerHTML = newContent;
                textContentContainer = document.getElementById('text-content'); // Reassign after replacement
            });
        
            // Helper functions to get slide HTML content
            function getSlideOneContent() {
                var imageUrl1 = document.getElementById('hiddenData1').textContent;
                return `
                <div id="text-content" class="text-content activeslide">
                   <div class="content-part">
                      <div id="text-content" class="text-content timoti11 activeslide">
                         <span>
                            <br><br><img src="${imageUrl1}" alt="">
                            <h2 class="useradmin" style="padding-left: 6px;">Timoti11</h2>
                            <h2 class="prefixadmin">Чорт</h2>
                         </span>
                         <br><br>
                         <p class="white-theme">Запустил этот проект, и поддерживает его на протяжении всего времени. По всем вопросам о сервере занимается он.</p>
                      </div>
                            <br><br><br>
                            <a href="https://twitch.tv/timoti11" target="_blank" class="twitch-inf">
                               <i class="fa-brands fa-twitch"></i>
                               <h2>timoti11</h2>
                            </a>
                   </div>
                </div>
                `;
            }
        
            function getSlideTwoContent() {
                var imageUrl2 = document.getElementById('hiddenData2').textContent;
                return `
                <div id="text-content" class="text-content felky activeslide">
                   <span>
                      <br><br><img src="${imageUrl2}" alt="">
                      <h2 class="useradmin white-theme" style="padding-left: 6px;">Felky_</h2>
                      </h2> 
                      <h2 class="prefixdevelop">Разработчик</h2>
                   </span>
                   <br><br>
                   <p>Всем привет, я разработчик проекта Bozon, я помогаю улучшать проект совместно работая с Администратором сервера Timoti11, моя работа заключается в разработке плагинов, оптимизации работы сервера, и решением проблем игроков. Всем удачи, всем пока!</p>
                         <br><br><br>
                            <a href="#" target="_blank" class="twitch-inf">
                               <i class="fa-brands fa-discord"></i>
                               <h2>felkyyy</h2>
                            </a>
                </div>
                `;
            }
        
            function getSlideThreeContent() {
                var imageUrl3 = document.getElementById('hiddenData3').textContent;
                return `
                <div id="text-content" class="text-content flayyyd activeslide">
                   <span>
                      <br><br><img src="${imageUrl3}" alt="">
                      <h2 class="useradmin" style="padding-left: 6px;">flayd23</h2>
                      <h2 class="prefixhtml">Верстальщик</h2>
                      <h2 class="prefixhtml" style="font-size: 12px !important;">Анименик</h2>
                   </span>
                   <br><br>
                   <p>Всем привет, я разработчик проекта Bozon, я помогаю улучшать проект совместно работая с Администратором сервера Timoti11, моя работа заключается в разработке плагинов, оптимизации работы сервера, и решением проблем игроков. Всем удачи, всем пока!</p>
                         <br><br><br>
                         <br><br><br>
                            <a href="#" target="_blank" class="twitch-inf">
                               <i class="fa-brands fa-discord"></i>
                               <h2>flayyyd</h2>
                            </a>
                </div>
                `;
            }
        });
        
        
        

        
        
        
        
        
        
        function toggleWhiteTheme() {
            var elementsWithWhiteTheme = document.querySelectorAll('.white-theme');
            elementsWithWhiteTheme.forEach(function (element) {
                element.classList.toggle('active');
            });
        }
        

        $('#default-buy').modal();

        function scrollToInfo() {
            var targetElement = document.getElementById('sec-cont');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToBuy() {
            var targetElement = document.getElementById('buy-container');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }


        function copyText() {
            const content = document.getElementById('content-copy').textContent;
            navigator.clipboard.writeText(content)
                .then(() => {
                    // Показываем уведомление об успешном копировании
                    const notificationHTML = `
                    <div class="notification">
                        <div class="sender_wrapper">
                        <span class="notify_img"></span>
                        <span class="sender_pop_up">Скопировано!</span>
                        </div>
                        <div class="content_sended_pop_up">
                            <span class="ip">IP:</span> <span class="ip-text">bozon.online</span>
                        </div>
                        </div>
                    `;
                    showNotification(notificationHTML);
        
                    // Добавляем класс для стилизации при нажатии
                    const copyButton = document.getElementById('copy');
                    copyButton.classList.add("clicked");
        
                    // Убираем класс через определенное время
                    setTimeout(() => {
                        copyButton.classList.remove("clicked");
                    }, 300); // Убираем класс через 0.3 секунды
                })
                .catch(err => {
                    console.error('Ошибка при копировании текста: ', err);
                });
        }
        
        
        function showNotification(notificationHTML) {
            const notificationContainer = document.createElement('div');
            notificationContainer.innerHTML = notificationHTML;
            document.body.appendChild(notificationContainer);
        
            // Убираем уведомление через определенное время
            setTimeout(() => {
                notificationContainer.remove();
            }, 3000); // Уведомление исчезнет через 3 секунды
        }
        