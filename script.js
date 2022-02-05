let imageWrapper = document.querySelector(".wrapper");
let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");

let clickCount = 0;
imageWrapper.addEventListener("click", () => {
  if (clickCount === 0) {
    image1.style.zIndex = "3";
    image2.style.zIndex = "1";
    image3.style.zIndex = "2";
    clickCount++;
  } else if (clickCount === 1) {
    image1.style.zIndex = "2";
    image2.style.zIndex = "3";
    image3.style.zIndex = "1";
    clickCount++;
  } else if (clickCount === 2) {
    image1.style.zIndex = "1";
    image2.style.zIndex = "2";
    image3.style.zIndex = "3";
    clickCount++;
  }

  if (clickCount === 3) {
    clickCount = 0;
  }
});
