"use strict";
const popupCountryElement = document.getElementById("country-popup");
const mapElement = document.getElementById("countries");
const countryElements = document.querySelectorAll("#soon > path, #nowavailalble > path, #beta > path");
let popupCountryElementIsShown = false;
let popupCountryWidth = null;
function debounce(func, wait, immediate = false) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
}
const setShiftPopupLeft = (amount) => {
    if (popupCountryElement)
        popupCountryElement.style.setProperty('--shift-amount', `${amount}px`);
};
const calculateOutOfContainer = (mouseX) => {
    if (popupCountryWidth) {
        const halfWidth = popupCountryWidth * 0.5;
        const { right } = document.body.getBoundingClientRect();
        return right - (mouseX + halfWidth);
    }
};
const movePopupWithMouse = ({ clientX, clientY }) => {
    let outsideAmount = calculateOutOfContainer(clientX) ?? 0;
    let styledShiftAmount = 0;
    if (outsideAmount < 0) {
        styledShiftAmount = outsideAmount - 8;
        setShiftPopupLeft(styledShiftAmount);
    }
    if (popupCountryElement && mapElement) {
        const { width, height } = popupCountryElement.getBoundingClientRect();
        const { x, y } = mapElement.getBoundingClientRect(); //Scroll height support
        const mouseX = clientX - x - width * 0.5;
        const mouseY = clientY - y - height;
        let translate = "";
        if (window.innerWidth >= 768) {
            translate = `translate3d(${mouseX + styledShiftAmount}px, ${mouseY - 16}px, 0)`;
        }
        else {
            translate = `translateY(-100%)`;
        }
        popupCountryElement.style.transform = translate;
    }
};
const showPopup = (event, name, isBeta) => {
    if (popupCountryElementIsShown)
        return;
    if (!popupCountryElement)
        return;
    popupCountryElement.style.display = "inline-flex";
    createPaymentsListForCountry(name, isBeta);
    popupCountryElementIsShown = true;
    movePopupWithMouse(event);
};
const getPaymentMethodsByName = (paymentName) => document.querySelectorAll(`div[payment-name=${paymentMethodsNames[paymentName]}] > .payment-method-image-container`);
const paymentNotAvailableClassName = "payment-not-available";
const handleMouseEnter = (event, country, isBeta) => {
    showPopup(event, country, isBeta);
};
const hidePopup = () => {
    if (popupCountryElement) {
        popupCountryElement.style.display = "none";
        popupCountryElement.innerHTML = "";
        popupCountryElementIsShown = false;
        setShiftPopupLeft(0);
    }
};
const handleMouseLeave = () => {
    hidePopup();
};
const createPaymentsListForCountry = (country, isBeta) => {
    const ul = document.createElement("ul");
    const pickedCountry = mapDataGlobal[country];
    for (let key in pickedCountry) {
        const value = pickedCountry[key];
        const li = document.createElement("li");
        li.textContent = value;
        ul.append(li);
    }
    const strong = document.createElement("strong");
    strong.innerText = `${country}${isBeta ? ' - open beta' : ''}`;
    if (popupCountryElement) {
        popupCountryElement.append(strong);
        popupCountryElement.append(ul);
        popupCountryWidth = popupCountryElement.getBoundingClientRect().width;
    }
};
const countryNameAttribute = "country-name";
let lastHoveredCountry = null;
for (let i = 0; i < countryElements.length; i++) {
    const name = countryElements[i].getAttribute(countryNameAttribute) ?? "";
    lastHoveredCountry = countryElements[i];
    const isBeta = countryElements[i].getAttribute('beta') !== null;
    countryElements[i].addEventListener("mouseenter", (event) => handleMouseEnter(event, name, isBeta));
    countryElements[i].addEventListener("mousemove", debounce((event) => movePopupWithMouse(event), 7));
    countryElements[i].addEventListener("mouseleave", handleMouseLeave);
}
//# sourceMappingURL=map.js.map