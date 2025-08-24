const grassPicture = document.getElementById("grass-green");
const touchGrassCounter = document.getElementById("touch-grass-counter");

let timesYouHaveTouchedGrass = 0;

grassPicture.addEventListener("click", touchGrass);
grassPicture.addEventListener("touchstart", touchGrass);
grassPicture.addEventListener("keyup", touchGrass);

function touchGrass() {
    timesYouHaveTouchedGrass++;
    touchGrassCounter.innerText = `${timesYouHaveTouchedGrass} time${timesYouHaveTouchedGrass === 1 ? '' : 's'}`;
}