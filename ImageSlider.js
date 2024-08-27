const images = [{name: "image1", location: "image1.png"},
                {name: "image2", location: "image2.jpg"},
                {name: "image3", location: "image3.png"},
                {name: "image4", location: "image4.png"}] //images : names and locations

var imageSlide = document.getElementById('image');
const imageName = document.getElementById('image-title');
var index = 0;

const prevButton = document.getElementById('previous');
prevButton.addEventListener('click', () => imageNavigation(--index));

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => imageNavigation(++index));

function imageNavigation(index) {
    if (images.length > 0)
        imageSlide.disabled = true;
    
    if (index <= 0)
        prevButton.disabled = true;
    else
        prevButton.disabled = false;
    
    if (index >= images.length - 1)
        nextButton.disabled = true;
    else
        nextButton.disabled = false;

    if (images[index]) {
        imageName.innerHTML = images[index].name;
        imageSlide.setAttribute("src", images[index].location);
    }
}

imageNavigation(index); //function call