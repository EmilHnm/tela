
const feature_item = document.querySelectorAll('.features_item') as NodeListOf<HTMLElement>;
const features_desciption = document.querySelector('#features_desciption') as HTMLParagraphElement;
const tabs_video = document.querySelector('#tabs_video') as HTMLVideoElement;   
feature_item.forEach((element: Node) => {
    element.addEventListener('click', (e) => {
        feature_item.forEach((element) => {
            element.classList.remove('active');
        });
        if(element)
        {
            (element as HTMLElement).classList.add('active');
            features_desciption.innerText = (element as HTMLElement).childNodes[3].textContent as string;
            tabs_video.src = `./assets/images/${(element as HTMLElement).getAttribute('data-feature')}.mp4`;
        }
        
    });
});

const responsive_header = document.querySelector("#responsive-header");
const toggleMenu = () => {
    if(responsive_header)
    responsive_header.classList.toggle("active");
}
document.querySelector("#menu-open")?.addEventListener("click", toggleMenu);
document.querySelector("#menu-close")?.addEventListener("click", toggleMenu);



