var selectedCoupon = null;

document.addEventListener("DOMContentLoaded", function() {


    var productPrices = {
        "504115": 115, // Пример цены для продукта с ID "product1"
        "504107": 600, // Пример цены для продукта с ID "product2"
        "504105": 176, // Пример цены для продукта с ID "product3"
        "504106": 900, // Пример цены для продукта с ID "product4"
    };


    function updateProductPrice() {
        var productButton = document.querySelector('.title-modal-time button.active');
        var productId = productButton ? productButton.getAttribute('data-product-id') : null;
        var price = productPrices[productId] || 0;
        var productPriceElement = document.getElementById('productPrice');
        if (productPriceElement) {
            productPriceElement.textContent = price.toFixed(2);
        } else {
            console.error('Элемент productPrice не найден');
        }
    }
    // Сначала выводим цену для кнопки time-month и делаем ее активной
    updateProductPrice("677821"); // Продукт "product1"
    var defaultButton = document.querySelector('.title-modal-time button[data-product-id="677821"]');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }

    var timeButtonsContainer = document.querySelector('.title-modal-time');
    timeButtonsContainer.addEventListener('click', function(event) {
        var buttons = timeButtonsContainer.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.classList.remove('active');
        }); 

    
        
    
        // Добавляем класс "active" к нажатой кнопке
        var targetButton = event.target;
        if (targetButton && targetButton.tagName === 'BUTTON') {
            targetButton.classList.add('active');
            var productId = targetButton.getAttribute('data-product-id');
            // Обновляем цену при выборе продукта
            updateProductPrice(productId);
            // Обновляем итоговую цену с учетом скидки, если есть активный купон
            applyCouponDiscount();
        }
    });

    var couponInput = document.getElementById("couponInput");
    var activateButton = document.getElementById("activateButton");
    var couponMessage = document.getElementById("couponMessage");

    couponInput.addEventListener("input", function() {
        if (couponInput.value.trim() !== "") {
            couponInput.style.width = "calc(100% - 90px)"; // Уменьшаем ширину поля ввода
            activateButton.style.display = "inline-block"; // Показываем кнопку активации
        } else {
            couponInput.style.width = "100%"; // Возвращаем исходную ширину поля ввода
            activateButton.style.display = "none"; // Скрываем кнопку активации
        }
    });
    var inputwrapper = this.getElementsByClassName("coupon_input__wrapper")[0];

    activateButton.addEventListener("click", function() {
        var couponCode = couponInput.value.trim();
        // Проверяем, есть ли введенный купон в списке
        getCoupons().then(coupons => {
            var validCoupon = coupons.find(coupon => coupon.code === couponCode);
            if (validCoupon) {
                document.getElementById("coupon__title").style.display = "none";
                
                document.querySelector(".title-modal-coupon").style.marginTop = "49px";
                document.getElementById("used_promo_wrapper").style.display = "flex"; // Показываем блок с сообщением о промокоде и кнопкой очистки
                document.getElementById("used_promo_message").textContent = couponCode; // Обновляем сообщение с введенным промокодом
                selectedCoupon = couponCode; // Сохраняем активированный купон в переменной
                applyCouponDiscount();
                document.querySelector(".coupon_input__wrapper").style.display = "none"; // Скрываем поле ввода промокода
            } else {
                setTimeout(function() {
                    document.getElementById("couponMessage").innerHTML = "Активировать"; // Показываем кнопку "Активировать" через 5 секунд
                }, 5000);
            }
        }).catch(error => {
            console.error('Ошибка при получении списка купонов:', error);
            document.getElementById("couponMessage").textContent = "Ошибка";
        });
    });
    
        
        
        document.getElementById("clear_promo_button").addEventListener("click", function() {
            document.getElementById("coupon__title").style.display = "block";
            document.querySelector(".title-modal-coupon").style.marginTop = "0";
            document.getElementById("used_promo_wrapper").style.display = "none"; // Скрываем блок с сообщением о промокоде и кнопкой очистки
            document.getElementById("couponInput").value = ""; // Очищаем поле ввода
            document.querySelector(".coupon_input__wrapper").style.display = "flex"; // Показываем поле ввода промокода
            selectedCoupon = null; // Сбрасываем выбранный купон
            updateProductPrice(); // Обновляем отображение цены без учета скидки
            applyCouponDiscount(); // Обновляем итоговую цену с учетом скидки
        });
    
    var activebutton =  document.getElementById("month");
    var productId = activebutton.getAttribute('data-product-id');
    // Обновляем цену при выборе продукта
    updateProductPrice(productId);
    // Обновляем итоговую цену с учетом скидки, если есть активный купон
    applyCouponDiscount();
});





var selectedCouponFlexer = null; // Переменная для хранения выбранного купона для модального окна "flexer-buy"

document.addEventListener("DOMContentLoaded", function() {
    var productPrices = {
        "504115": 115, // Пример цены для продукта с ID "product1"
        "504107": 600, // Пример цены для продукта с ID "product2"
        "504105": 175, // Пример цены для продукта с ID "product3"
        "504106": 900, // Пример цены для продукта с ID "product4"
    };

    // Функция для обновления цены продукта в модальном окне "flexer-buy"
    function updateProductPrice(productId) {
        var price = productPrices[productId] || 0;
        var productPriceElement = document.querySelector('#flexer-buy #productPrice');
        if (productPriceElement) {
            productPriceElement.textContent = price.toFixed(2);
        } else {
            console.error('Элемент productPrice не найден');
        }
    }

// Обработчик для модального окна "flexer-buy"
function handleFlexerBuyModal() {
    // Устанавливаем цену продукта по умолчанию и активируем соответствующую кнопку
    var defaultProductId = "677818"; // Продукт "product1"
    updateProductPrice(defaultProductId);
    var defaultButton = document.querySelector('#flexer-buy .title-modal-time button[data-product-id="' + defaultProductId + '"]');
    if (defaultButton) {
        defaultButton.classList.add('active');
    }

    // Обработчик клика по кнопкам выбора времени
    var timeButtonsContainer = document.querySelector('#flexer-buy .title-modal-time');
    timeButtonsContainer.addEventListener('click', function(event) {
        var targetButton = event.target;
        if (targetButton && targetButton.tagName === 'BUTTON') {
            var productId = targetButton.getAttribute('data-product-id');
            // Удаление класса active у предыдущей активной кнопки
            var activeButton = timeButtonsContainer.querySelector('button.active');
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            // Добавление класса active к нажатой кнопке
            targetButton.classList.add('active');
            // Обновление цены при выборе продукта
            updateProductPrice(productId);
            // Обновление итоговой цены с учетом скидки, если есть активный купон
            applyCouponDiscountFlexer();
        }
    });

        // Обработчик кнопки активации купона
        var activateButton = document.getElementById("activateButtonFlexer");
        var couponInput = document.getElementById("couponInputFlexer");

        couponInput.addEventListener("input", function() {
            if (couponInput.value.trim() !== "") {
                couponInput.style.width = "calc(100% - 90px)";
                activateButton.style.display = "inline-block";
            } else {
                couponInput.style.width = "100%";
                activateButton.style.display = "none";
            }
        });

        activateButton.addEventListener("click", function() {
            var couponCode = couponInput.value.trim();
            // Проверяем, есть ли введенный купон в списке
            getCoupons().then(coupons => {
                var validCoupon = coupons.find(coupon => coupon.code === couponCode);
                if (validCoupon) {
                    document.querySelector(".title-modal-coupon_flexer").style.marginTop = "49px";
                    document.getElementById("used_promo_wrapper_flexer").style.display = "flex"; // Изменено: устанавливаем стиль flex
                    document.getElementById("used_promo_message_flexer").textContent = couponCode; // Обновляем сообщение с введенным промокодом
                    selectedCouponFlexer = couponCode; // Сохраняем активированный купон в переменной
                    applyCouponDiscountFlexer();
                    document.querySelector("#coupon__title_flexer").style.display = "none"; // Скрываем поле ввода промокода
                    document.querySelector(".coupon_input__wrapper_flexer").style.display = "none"; // Скрываем поле ввода промокода
                } else {
                    setTimeout(function() {
                        document.getElementById("couponMessageFlexer").innerHTML = "Активировать"; // Показываем кнопку "Активировать" через 5 секунд
                    }, 5000);
                }
            }).catch(error => {
                console.error('Ошибка при получении списка купонов:', error);
                document.getElementById("couponMessageFlexer").textContent = "Ошибка";
            });
        });

        // Обработчик кнопки "Очистить" промокод
        document.getElementById("clear_promo_button_flexer").addEventListener("click", function() {
            var couponTitle = document.getElementById("coupon__title_flexer");
            if (couponTitle) {
                couponTitle.style.display = "block";
            }
            var titleModalCoupon = document.querySelector(".title-modal-coupon_flexer");
            if (titleModalCoupon) {
                titleModalCoupon.style.marginTop = "0";
            }
            var usedPromoWrapper = document.getElementById("used_promo_wrapper_flexer");
            if (usedPromoWrapper) {
                usedPromoWrapper.style.display = "none";
            }
            var couponInput = document.getElementById("couponInputFlexer");
            if (couponInput) {
                couponInput.value = ""; // Очищаем поле ввода
            }
            var couponInputWrapper = document.querySelector(".coupon_input__wrapper_flexer");
            if (couponInputWrapper) {
                couponInputWrapper.style.display = "flex"; // Показываем поле ввода промокода
            }
            selectedCouponFlexer = null; // Сбрасываем выбранный купон
            updateProductPrice(); // Обновляем отображение цены без учета скидки
            applyCouponDiscountFlexer(); // Обновляем итоговую цену с учетом скидки
        });
    }

    // Функция для применения скидки для модального окна "flexer-buy"
// Функция для применения скидки для модального окна "flexer-buy"
function applyCouponDiscountFlexer() {
    var productButton = document.querySelector('#flexer-buy .title-modal-time button.active');
    var productId = productButton ? productButton.getAttribute('data-product-id') : null;
    var productPrice = productPrices[productId] || 0;

    // Обновляем цену продукта без учета скидки
    updateProductPrice(productId);

    // Получаем процент скидки из купона и обновляем итоговую цену
    getCouponDiscountFlexer().then(discount => {
        var discountedPrice = productPrice * (1 - discount / 100);
        var totalPriceElement = document.getElementById('totalPriceFlexer');
        if (totalPriceElement) {
            totalPriceElement.textContent = discountedPrice.toFixed(2);
        }
        // Обновляем итоговую цену в кнопке оплаты
        document.getElementById('paymentAmountFlexer').textContent = discountedPrice.toFixed(2);
        // Обновляем скидку в элементе с id "procent_data_flexer"
        var discountElement = document.getElementById('procent_data_flexer');
        if (discountElement) {
            discountElement.textContent = discount + '%';
        }
    }).catch(error => {
        console.error('Ошибка при применении скидки:', error);
    });
}


    var activebutton = document.getElementById("month");
    var productId = activebutton.getAttribute('data-product-id');
    // Обновляем цену при выборе продукта
    updateProductPrice(productId);
    // Обновляем итоговую цену с учетом скидки, если есть активный купон
    applyCouponDiscountFlexer();

    // Вызываем функцию для работы с модальным окном "flexer-buy"
    handleFlexerBuyModal();
});
