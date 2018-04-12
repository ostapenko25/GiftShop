    /* ????????  NEW*/
    var item1 = document.querySelector('.newprod__item');
    var width1 = item1.offsetWidth;   // ?????? ????????
    var count = 1; // ?????????? ????????????? ???????? (??? ????????)

    var carousel = document.getElementById('new-carousel');
    var listNew = carousel.querySelector('.newprod__items');
    var listElemsNew = carousel.querySelectorAll('li');

    var position = 0; // ??????? ????? ?????

    carousel.querySelector('.new-prev').onclick = function newPrev() {
      position = Math.min(position + width1 * count, 0)
      listNew.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.new-next').onclick = function newNext() {
      position = Math.max(position - width1 * count, -width1 * (listElemsNew.length - count));
      listNew.style.marginLeft = position + 'px';
    };