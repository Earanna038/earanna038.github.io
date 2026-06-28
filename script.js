console.log("Script Loaded");
const video = document.getElementById("introVideo");

video.addEventListener("ended", () => {

    console.log("Video Ended");

    video.style.display = "none";

    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

});
