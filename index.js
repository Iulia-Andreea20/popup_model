const openModel = document.getElementById('open-modal');
const closeModel = document.getElementById('close-modal');


document.getElementById("open-modal").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
})

closeModel.addEventListener('click', () => {
    document.getElementById('overlay').style.display = "none"
});