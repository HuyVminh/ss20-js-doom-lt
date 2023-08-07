let listImgUrl = ["img/avatar.jpg", "img/avatar-2.jpg", "img/avatar-3.jpg", "img/avatar-4.jpg", "img/avatar-5.jpg"];
let index = 0;
let str = "";
for (let i = 0; i < listImgUrl.length; i++) {
    str += `<img src="${listImgUrl[i]}" alt="item">`;
}
document.querySelector(".list-image").innerHTML = str;
function showSlide() {
    let image = listImgUrl[index];
    let mainImg = document.getElementById("img-feature");
    mainImg.src = image;
    let listImg = document.querySelectorAll(".list-image img");
    listImg.forEach((img) => {
        img.style.filter = "brightness(50%)";
        console.log(img);
    })
    listImg[index].style.filter = "brightness(120%)";
}
showSlide();

function nextImg() {
    if (index == listImgUrl.length - 1) {
        index = 0;
    } else {
        index++;
    }
    showSlide();
}
function prevImg() {
    if (index == 0) {
        index = listImgUrl.length - 1
    } else {
        index--;
    }
    showSlide();
}

setInterval(nextImg, 3000);