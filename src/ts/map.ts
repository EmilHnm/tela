const popupCountryElement = document.getElementById("country-popup");
const mapElement = document.getElementById("countries");
const countryElements = document.querySelectorAll(
    "#soon > path, #nowavailalble > path, #beta > path"
);
let popupCountryElementIsShown = false;
let popupCountryWidth: number | null = null;


function debounce(func: (arg0: MouseEvent) => void, wait: number, immediate = false) {
    let timeout: number | null;
    return function () {
        const context = this,
            args : any = arguments;
        clearTimeout(timeout as number);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}


const setShiftPopupLeft = (amount: number) => {
    if (popupCountryElement)
        popupCountryElement.style.setProperty('--shift-amount', `${amount}px`);
}

const calculateOutOfContainer = (mouseX: number) => {
    if (popupCountryWidth) {
        const halfWidth = popupCountryWidth * 0.5;
        const { right } = document.body.getBoundingClientRect();
        return right - (mouseX + halfWidth);
    }
}

const movePopupWithMouse = ({ clientX, clientY }: { clientX: number, clientY: number }) => {
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
        const translate = `translate3d(${mouseX + styledShiftAmount}px, ${mouseY - 16}px, 0)`;
        popupCountryElement.style.transform = translate;
    }

};

const showPopup = (event: MouseEvent, name: string, isBeta: boolean) => {
    if (popupCountryElementIsShown) return;
    if (!popupCountryElement) return;
    popupCountryElement.style.display = "inline-flex";
    createPaymentsListForCountry(name, isBeta);
    popupCountryElementIsShown = true;
    movePopupWithMouse(event);
};

const getPaymentMethodsByName = (paymentName: string) =>
    document.querySelectorAll(
        `div[payment-name=${paymentMethodsNames[paymentName]}] > .payment-method-image-container`
    );

const paymentNotAvailableClassName = "payment-not-available";

const handleMouseEnter = (event: MouseEvent, country: string, isBeta: boolean) => {
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

const createPaymentsListForCountry = (country: string, isBeta: boolean) => {
    const ul = document.createElement("ul");
    const pickedCountry = mapDataGlobal[country as keyof (typeof mapDataGlobal)];
    for (let key in pickedCountry) {
        const value = pickedCountry[key as keyof typeof pickedCountry];
        const li = document.createElement("li");
        li.textContent = value;
        ul.append(li);
    }
    const strong = document.createElement("strong");
    strong.innerText = `${country}${isBeta ? ' - open beta' : ''}`;
    if (popupCountryElement) {
        popupCountryElement.append(strong);
        popupCountryElement.append(ul);
        popupCountryWidth = popupCountryElement.getBoundingClientRect().width
    }
};

const countryNameAttribute = "country-name";
let lastHoveredCountry = null;

for (let i = 0; i < countryElements.length; i++) {
    const name = countryElements[i].getAttribute(countryNameAttribute) ?? "";
    lastHoveredCountry = countryElements[i];
    const isBeta = countryElements[i].getAttribute('beta') !== null
    countryElements[i].addEventListener("mouseenter", (event: any) =>
        handleMouseEnter(event, name, isBeta)
    );
    countryElements[i].addEventListener(
        "mousemove",
        debounce((event: MouseEvent) => movePopupWithMouse(event), 7)
    );
    countryElements[i].addEventListener("mouseleave", handleMouseLeave);
}
