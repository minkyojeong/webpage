// 화면이 다 출력 후 보여질 슬라이드
window.onload=function(){
    showSlides(1);
}
// 초기값
var slideIndex = 1;
// 다음 버튼을 누르면 슬라이드 인덱스 값 +1 하고 showSlides 함수 호출
function plusSlides(n) {
showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    // 구성한 화면들 슬라이스 배열에 넣기
    var slides = document.getElementsByClassName("m2_slides");
    // 최대치에서 또 +1되면 처음 화면으로
    if (n > slides.length) {slideIndex = 1}
    // 처음 화면에서 이전 누르면 최대값으로
    if (n < 1) {slideIndex = slides.length}
    // 배열에 담긴 화면 전체 none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
// 첫화면(0번째 인덱스) block
slides[slideIndex-1].style.display = "block"; 
}

function checkEventPast(){
    // 구성한 div 배열에 넣기
    var divPast = document.getElementsByClassName("m2_event_past_content");
    var divIng = document.getElementsByClassName("m2_event_ing_content");
    // 현재 이벤트 페이지 보이기
    for (i = 0; i < divPast.length; i++) {
        divPast[i].style.display = "block";
    }

    //지난 이벤트 안보이기
    for (i = 0; i < divIng.length; i++) {
        divIng[i].style.display = "none";
    }
}
function checkEventIng(){
    var divPast = document.getElementsByClassName("m2_event_past_content");
    var divIng = document.getElementsByClassName("m2_event_ing_content");
    for (i = 0; i < divPast.length; i++) {
        divPast[i].style.display = "none";
    }
    for (i = 0; i < divIng.length; i++) {
        divIng[i].style.display = "block";
    }
}