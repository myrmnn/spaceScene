const space = document.querySelector(".space");
var width = window.innerWidth;
var height = window.innerHeight;

const randomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

function appendStar(starsNum, type) {
  const starDiv = document.createDocumentFragment();
  for (i = 0; i < starsNum; i++) {
    const star = document.createElement("span");
    const randomX = randomNum(width);
    const randomY = randomNum(height);
    star.style.top = `${randomY}px`;
    star.style.left = `${randomX}px`;
    star.classList.add(type);
    star.style.animationDelay = `${randomNum(10000)}00ms`;
    star.style.animationDuration = `${randomNum(40)}00ms`;
    starDiv.appendChild(star);
  }
  document.body.appendChild(starDiv);
}

appendStar(1000, "star");

appendStar(250, "shootingstar");
