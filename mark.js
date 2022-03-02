const left =document.getElementById("left");
const right =document.getElementById("right");
const question=document.getElementById("marking");
const markmusic = document.getElementById("markmusic");
const hiddenclass ="hidden"
var song;
var count = 0;
const mov =document.querySelectorAll("#mov");
const melon =document.querySelectorAll("#melon");

const num = Math.floor(Math.random() * 3);
const musicsong = document.getElementById("musicsong");
const markcheer =document.getElementById("markcheer");

const le =document.getElementById("le");
const ri =document.getElementById("ri");

var nice =["CHILD", "두고가", "나라는 꿈"];
var rap =["Jopping", "Misfit", "New Axis"];
var cute =["소방차", "Yestoday", "일곱번째 감각"];
var love =["Young&Free", "Chewing Gum", "Lemondae Love"];

var niceimg =["img/child.jpeg", "img/gorap.gif", "img/dream.jpeg"];
var rapimg =["img/jopping.gif", "img/misfit.gif", "img/ven.gif"];
var loveimg =["img/young.jpeg", "img/chewing.gif", "img/lemonade.gif"];

right.addEventListener('click', Rightmark);
left.addEventListener('click', leftmark);


function Rightmark(){
    question.innerHTML ="고막뿌시는마크 vs 지존간지마크";
    le.src ="img/ear.gif";
    ri.src ="img/good.gif";
    right.addEventListener('click', nicemark);
    left.addEventListener('click', rapmark);
    
   
}


function leftmark(){
    question.innerHTML ="풋풋한마크 vs 설레는마크";
    le.src ="img/cute.gif";
    ri.src ="img/love.gif";
    right.addEventListener('click', lovemark);
    left.addEventListener('click', cutemark);  
   
}

function lovemark()
{   song =love[num];
     
    makehidden();
    markmusic.innerHTML =`${song} !`;
    musicsong.src=loveimg[num];
}

function cutemark()
{   song =cute[num];
   makehidden();
    markmusic.innerHTML =`${song} !`;
    musicsong.src=cuteimg[num];
}


function rapmark()
{   song = rap[num];
   makehidden();
    markmusic.innerHTML =`${song} !`;
    musicsong.src=rapimg[num];
}
function nicemark()
{   song = nice[num];
    makehidden();
    markmusic.innerHTML = `${song} !`;
    musicsong.src=niceimg[num];
 
    
}

function makehidden(){
    left.removeEventListener('click', leftmark);
    right.removeEventListener('click', Rightmark);
    markmusic.classList.remove("hidden");
    question.classList.add("hidden");
    left.classList.add("hidden");
    right.classList.add("hidden");
    mov[0].classList.remove("hidden");
    melon[0].classList.remove("hidden");
    mov[1].classList.remove("hidden");
    melon[1].classList.remove("hidden");
    mov[2].classList.remove("hidden");
    markcheer.classList.remove("hidden");
    le.classList.add("hidden");
    ri.classList.add("hidden");
    
}



