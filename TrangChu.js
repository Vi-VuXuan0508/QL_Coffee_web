var i = 0;
var images = [];
var time = 5000;

images[0] = 'image/antony.jfif';
images[1] = 'image/increase.jpg';

function changeImg(){
    document.imgslide.src = images[i];
    if(i < images.length - 1){
        i ++;
    }
    else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;