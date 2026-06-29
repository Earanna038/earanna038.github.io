console.log("Script Loaded");
const video = document.getElementById("introVideo");
const robotContainer = document.getElementById("robotContainer");

video.addEventListener("ended", () => {

    console.log("Video Ended");

    video.style.display = "none";

    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

});
const heroAnimationDistance = window.innerHeight * 4 / 3;

window.addEventListener("scroll", () => {

    const progress = Math.min(
        window.scrollY / heroAnimationDistance,
        1
    );

    // ---------- START VALUES ----------

    const startWidth = window.innerWidth;
    const startHeight = window.innerHeight;

    const startLeft = 0;
    const startTop = 0;

    const startRadius = 0;

    // ---------- END VALUES ----------

    const endWidth = 60;
    const endHeight = 60;

    const margin = 35;

    const endLeft = window.innerWidth - endWidth - (margin*8);
    const endTop = margin;

    const endRadius = 999;

    // ---------- INTERPOLATION ----------

    const width =
        startWidth +
        (endWidth - startWidth) * progress;

    const height =
        startHeight +
        (endHeight - startHeight) * progress;

    const left =
        startLeft +
        (endLeft - startLeft) * progress;

    const top =
        startTop +
        (endTop - startTop) * progress;

    const radius =
        startRadius +
        (endRadius - startRadius) * progress;

    // ---------- APPLY ----------

    robotContainer.style.width = `${width}px`;
    robotContainer.style.height = `${height}px`;

    robotContainer.style.left = `${left}px`;
    robotContainer.style.top = `${top}px`;

    robotContainer.style.borderRadius = `${radius}px`;

});
