'use strict';

// 上から300pxスクロールしたら#page-topにopen付ける、300px未満はopen外す
window.addEventListener('scroll', function() {
  const scroll = window.scrollY;
  const circle = document.querySelector('#page-top');
  if ( scroll >= 100 ) {
    circle.classList.add('open');
  } else {
    circle.classList.remove('open');
  }
});

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});