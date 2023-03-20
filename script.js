const images = ["l1.png", "l2.png", "l3.png"];
const bimages = ["url('l1.png')", "url('l2.png')","url('l3.png')"];
const headings = ["Heading Text 1", "Heading Text 2", "Heading Text 3"];
const descriptions = ["Description text goes here.", "Description text 2 goes here.", "Description text 3 goes here."];

let currentImageIndex = 0;

function changeImage() {
  const mainImage = document.getElementById("main-image");
  const mainHeading = document.getElementById("main-heading");
  const mainDescription = document.getElementById("main-description");
  const backg = document.getElementById("ib");
  
  mainImage.classList.add("fade-out");
  mainHeading.classList.add("fade-out");
  mainDescription.classList.add("fade-out");
  
  setTimeout(() => {
    mainImage.src = images[currentImageIndex];
    backg.style.backgroundImage=bimages[currentImageIndex];
    mainImage.alt = "Image description " + (currentImageIndex + 1);
    mainHeading.innerText = headings[currentImageIndex];
    mainDescription.innerText = descriptions[currentImageIndex];
    
    mainImage.classList.remove("fade-out");
    mainImage.classList.add("fade-in");
    backg.classList.remove("fade-out");
    backg.classList.add("fade-in");
    mainHeading.classList.remove("fade-out");
    mainHeading.classList.add("fade-in");
    mainDescription.classList.remove("fade-out");
    mainDescription.classList.add("fade-in");
    
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  }, 1000);
}

setInterval(changeImage, 5000);

