//	     ???????? FEAT 
    var item2 = document.querySelector('.featprod__item');
    var width2 = item2.offsetWidth;   // ?????? ????????
    var count = 1; // ?????????? ????????????? ???????? (??? ????????)

    var carousel = document.getElementById('feat-carousel');
    var listFeat = carousel.querySelector('.featprod__items');
    var listElemsFeat = carousel.querySelectorAll('li');

    var position = 0; // ??????? ????? ?????

    carousel.querySelector('.feat-prev').onclick = function featPrev() {
      position = Math.min(position + width2 * count, 0)
      listFeat.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.feat-next').onclick = function featNext() {
      position = Math.max(position - width2 * count, -width2 * (listElemsFeat.length - count));
      listFeat.style.marginLeft = position + 'px';
    };