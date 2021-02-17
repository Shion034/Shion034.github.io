

let imagesToLoad = document.querySelectorAll("img[data-src]");

/*function loadImages(img){
    const src = img.getAttribute("data-src");
}*/

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};



const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () =>{image.removeAttribute("data-src");};
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

if ("IntersectionObserver" in window){
    const imgobserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img)=>{
        imgobserver.observe(img);
    });
}
else{
    imagesToLoad.forEach((img)=>{
        loadImages(img);
    });
}