
function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}

//image loading from------------------------------------------------------------------------
const images = document.querySelectorAll("[data-src]");


//load images and comvert data-src attribute------------------------------------------------
const loadImages = (image)=>{
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
}
//loading speed and veiw point--------------------------------------------------------------
const imgOptions ={
    rootMargin:"50px",
    threshold:0.5
};

const Observer = new IntersectionObserver ((entries, Observer)=>{
 entries.forEach(entry => {
     if (entry.isIntersecting){
         loadImages(entry.target);
         Observer.unobserve(entry.target);
     }
 });
}, imgOptions);

images.forEach((img) => {
    Observer.observe(img);
});

