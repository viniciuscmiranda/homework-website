///////DarkMode()WhenPressEnter
var inputdark = document.getElementById("darkmode");
inputdark.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("darkmode").getElementsByTagName("input")[0].click();
    }
});

///////DarkMode
var colorid = 1;
if (localStorage.getItem("stgcolorid") != null) colorid = localStorage.getItem("stgcolorid");

function darkmode() {
    if (colorid == 0) {
        document.getElementById("darkmode").getElementsByClassName("fa fa-sun-o")[0].style.display = "none";
        document.getElementById("darkmode").getElementsByClassName("fa fa-moon-o")[0].style.display = "initial";
        colorid = 1;
    } else {
        document.getElementById("darkmode").getElementsByClassName("fa fa-sun-o")[0].style.display = "initial";
        document.getElementById("darkmode").getElementsByClassName("fa fa-moon-o")[0].style.display = "none";
        colorid = 0;
    }

    document.getElementById("mainnav").style.filter = "invert(" + colorid + ")";
    document.getElementsByTagName("footer")[0].style.filter = "invert(" + colorid + ")";
    document.getElementsByTagName("main")[0].style.filter = "invert(" + colorid + ")";

    var imgs = document.getElementsByTagName("main")[0].getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(" + colorid + ")";
    }

    localStorage.setItem("stgcolorid", colorid - (colorid * 2) + 1);
}

///////FontSize
function fontsize(size) {
    var targetfont = document.getElementsByClassName('maintxt');

    if (size != 0) targetfont[0].style.fontSize = size + "px";
    else {
        if (localStorage.getItem("stgsize") != null) size = localStorage.getItem("stgsize");
		else size = 22;
        targetfont[0].style.fontSize = size + "px";
        document.getElementsByClassName("fontslider")[0].getElementsByTagName("input")[0].value = size;
    }
    localStorage.setItem("stgsize", size);
}

//Auto Change BackgroundIMG
var bg=0;
var bgsrc = [
	"https://progameguides.com/wp-content/uploads/2019/03/rise-of-shadows-wallpaper-1920x1080-general004.jpg",
	"https://www.hearthstonetopdecks.com/wp-content/uploads/2018/11/desktop-wallpaper-rastakhans-rumble002.jpg",
	"http://7wallpapers.net/wp-content/uploads/2_Hearthstone-Heroes-Of-Warcraft.jpg",
	"https://wallpapercave.com/wp/wp1843519.jpg",
	"https://stmed.net/sites/default/files/hearthstone%3A-heroes-of-warcraft-hd-wallpapers-33225-2905088.jpg",
	"https://www.hearthstonetopdecks.com/wp-content/uploads/2018/07/desktop-large-mech-wallpaper.jpg",
	"http://www.cerc-ug.org/pic/b/116/1165483_hearthstone-wallpaper-1920x1080.jpg"
];
function chgbg(){
	bg = Math.round(Math.random() * bgsrc.length-1);
	if(bg>bgsrc.length-1) bg = bgsrc.length-1;
	else if(bg<0) bg = 0;
	document.getElementById("bg").style.backgroundImage = "url("+bgsrc[bg]+")";
}

///////StartFunctions
chgbg();
darkmode();
fontsize(0);
document.getElementById("firstbtn").click();
