const video = document.getElementById("introVideo");

video.addEventListener("ended", () => {

    video.style.display = "none";

    document.body.style.overflowY = "auto";

});
