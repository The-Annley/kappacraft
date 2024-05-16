function cpnCost() {
		var cpn = document.getElementById('couponInput');
		var cpnText = cpn.value;
		var cpnValue = document.getElementById("ref");
		cpnValue.setAttribute("value", cpnText);
	    fetch('/get_data?promo_code='+cpnText)
		    .then(response => response.json())
		    .then(data => {
		        comp(data, cpnText);
		    })
		    .catch(error => console.error('Ошибка:', error));
}

function cpnCost2() {
		var cpn2 = document.getElementById('couponInputFlexer');
		var cpnText2 = cpn2.value;
		var cpnValue2 = document.getElementById("ref2");
		cpnValue2.setAttribute("value", cpnText2);
	    fetch('/get_data?promo_code='+cpnText2)
		    .then(response => response.json())
		    .then(data => {
		        comp2(data, cpnText2);
		    })
		    .catch(error => console.error('Ошибка:', error));
}

function cpnCostRel() {
		var cpn = document.getElementById('couponInput');
		var cpnText = cpn.value;
		var cpnValue = document.getElementById("ref");
		cpnValue.setAttribute("value", cpnText);
	    fetch('/get_data?promo_code='+cpnText)
		    .then(response => response.json())
		    .then(data => {
		        act(data, cpnText);
		    })
		    .catch(error => console.error('Ошибка:', error));
}

function comp(data, cpnText) {
	var mySpan = document.getElementById("totalPrice");
	var mySpanAm = document.getElementById("paymentAmount");
	var saveSpan = document.getElementById("productPrice");
	if (data && data.valid === true) {
	    if (cpnText.toLowerCase() === "spring") {
		    mySpan.textContent = Math.round(saveSpan.textContent*0.7);
		    mySpanAm.textContent = Math.round(saveSpan.textContent*0.7);
	    } else {
		    mySpan.textContent = Math.round(saveSpan.textContent*0.8);
		    mySpanAm.textContent = Math.round(saveSpan.textContent*0.8);
	    }
	    resp("fa_check")
	    kostColor(1);
	} else {
	    mySpan.textContent = saveSpan.textContent;
	    mySpanAm.textContent = saveSpan.textContent;
	    resp("fa_xmark")
	    kostColor(0);
	}
}

function comp2(data, cpnText) {
	var mySpan2 = document.getElementById("totalPriceFlexer");
	var mySpanAm2 = document.getElementById("paymentAmountFlexer");
	var saveSpan2 = document.getElementById("productPriceFlexer");
	if (data && data.valid === true) {
	    if (cpnText.toLowerCase() === "spring") {
		    mySpan2.textContent = Math.round(saveSpan2.textContent*0.7);
		    mySpanAm2.textContent = Math.round(saveSpan2.textContent*0.7);
	    } else {
		    mySpan2.textContent = Math.round(saveSpan2.textContent*0.8);
		    mySpanAm2.textContent = Math.round(saveSpan2.textContent*0.8);
	    }
	    resp("fa_check")
	    kostColor2(1);
	} else {
	    mySpan2.textContent = saveSpan2.textContent;
	    mySpanAm2.textContent = saveSpan2.textContent;
	    resp("fa_xmark")
	    kostColor2(0);
	}
}

function act(data, cpnText) {
	var mySpan = document.getElementById("totalPrice");
	var mySpanAm = document.getElementById("paymentAmount");
	var saveSpan = document.getElementById("productPrice");
	if (data && data.valid === true) {
	    mySpan.textContent = saveSpan.textContent*0.8;
	    mySpanAm.textContent = saveSpan.textContent*0.8;
	} else {
	    mySpan.textContent = saveSpan.textContent;
	    mySpanAm.textContent = saveSpan.textContent;
	}
}

function act2(data, cpnText) {
	var mySpan2 = document.getElementById("totalPriceFlexer");
	var mySpanAm2 = document.getElementById("paymentAmountFlexer");
	var saveSpan2 = document.getElementById("productPriceFlexer");
	if (data && data.valid === true) {
	    mySpan2.textContent = saveSpan2.textContent*0.8;
	    mySpanAm2.textContent = saveSpan2.textContent*0.8;
	} else {
	    mySpan2.textContent = saveSpan2.textContent;
	    mySpanAm2.textContent = saveSpan2.textContent;
	}
}

function resp(mark) {
	if (mark == "fa_check") {
    	document.getElementById("couponMessageFlexer").innerHTML = '<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
	    document.getElementById("couponMessage").innerHTML = '<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
		setTimeout(function() {
	        document.getElementById("couponMessage").innerHTML = "Активировать"; // Показываем кнопку "Активировать" через 5 секунд
	        document.getElementById("couponMessageFlexer").innerHTML = "Активировать"; // Показываем кнопку "Активировать" через 5 секунд
	    }, 3000);
	} else if (mark == "fa_xmark") {
	    document.getElementById("couponMessageFlexer").innerHTML = '<i class="fa-solid fa-xmark not-found"></i>';
	    document.getElementById("couponMessage").innerHTML = '<i class="fa-solid fa-xmark not-found"></i>';
		setTimeout(function() {
	        document.getElementById("couponMessage").innerHTML = "Активировать"; // Показываем кнопку "Активировать" через 5 секунд
	        document.getElementById("couponMessageFlexer").innerHTML = "Активировать"; // Показываем кнопку "Активировать" через 5 секунд
	    }, 3000);
	} else {
		document.getElementById("couponMessage").innerHTML = "Активировать";
		document.getElementById("couponMessageFlexer").innerHTML = "Активировать";
	}
}

 function changeValue(id, price, tag) {
 	kostColor(0);
 	kostColor2(0);
	var cpnValue = document.getElementById("ref");
	var cpnValue2 = document.getElementById("ref2");
	cpnValue.setAttribute("value", "0");
	cpnValue2.setAttribute("value", "0");
 	resp();
	var saveSpan = document.getElementById("productPrice");
	var saveSpan2 = document.getElementById("productPriceFlexer");
	saveSpan.textContent = price;
	saveSpan2.textContent = price;
	var cpnValue = document.getElementById("ref");
	cpnValue.setAttribute("value", id);
	if (tag == "def_f_m" || tag == "def_f_6m") {
		act2();
		var itog = document.getElementById("myInput2");
	} else {
		act();
		var itog = document.getElementById("myInput");
	}
	var sixmonth = document.getElementById("sixmonth");
	var month = document.getElementById("month");
	var sixmonth_f = document.getElementById("sixmonth_f");
	var month_f = document.getElementById("month_f");
	if (tag == "def_6m") {
	    sixmonth.classList.add('active');
	    month.classList.remove('active');
	} else if (tag == "def_m") {
	    sixmonth.classList.remove('active');
	    month.classList.add('active');
	} else if (tag == "def_f_m") {
	    sixmonth_f.classList.remove('active');
	    month_f.classList.add('active');
	} else if (tag == "def_f_6m") {
	    sixmonth_f.classList.add('active');
	    month_f.classList.remove('active');
	}
	itog.setAttribute("value", id);
 }

 function checkCpn() {
    var couponInput = document.getElementById("couponInput").value.trim();
    var activateButton = document.getElementById("activateButton");
	    if (couponInput) {
	        activateButton.style.display = "inline-block";
	    } else {
	        activateButton.style.display = "none";
	    }
 	resp(0);
}

 function checkCpnFlexer() {
    var couponInput2 = document.getElementById("couponInputFlexer").value.trim();
    var activateButton2 = document.getElementById("activateButtonFlexer");
	    if (couponInput2) {
	        activateButton2.style.display = "inline-block";
	    } else {
	        activateButton2.style.display = "none";
	    }
 	resp(0);
}

 function kostColor(pos) {
	var btn1 = document.getElementById('kostColor');
	if (pos == 1) {
		btn1.style.color = "#eb8a0a";
	} else {
		btn1.style.color = "#fff";
	}
}

 function kostColor2(pos) {
	var btn2 = document.getElementById('kostColor2');
	if (pos == 1) {
		btn2.style.color = "#eb8a0a";
	} else {
		btn2.style.color = "#fff";
	}
}

let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});