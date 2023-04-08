"use strict";
const feature_item = document.querySelectorAll('.features_item');
const features_desciption = document.querySelector('#features_desciption');
const tabs_video = document.querySelector('#tabs_video');
feature_item.forEach((element) => {
    element.addEventListener('click', (e) => {
        feature_item.forEach((element) => {
            element.classList.remove('active');
        });
        if (element) {
            element.classList.add('active');
            features_desciption.innerText = element.childNodes[3].textContent;
            console.log(element.childNodes[3].textContent);
            tabs_video.src = `./assets/images/${element.getAttribute('data-feature')}.mp4`;
        }
    });
});
const responsive_header = document.querySelector("#responsive-header");
const toggleMenu = () => {
    if (responsive_header)
        responsive_header.classList.toggle("active");
};
document.querySelector("#menu-open")?.addEventListener("click", toggleMenu);
document.querySelector("#menu-close")?.addEventListener("click", toggleMenu);
//# sourceMappingURL=app.js.map