    /* ????????  NEW*/
    var item3 = document.querySelector('.md-newprod__item');
    var width3 = item3.offsetWidth;   // ?????? ????????
    var count = 1; // ?????????? ????????????? ???????? (??? ????????)

    var carousel = document.getElementById('md-new-carousel');
    var listNew = carousel.querySelector('.md-newprod__items');
    var listElemsNew = carousel.querySelectorAll('li');

    var position = 0; // ??????? ????? ?????

    carousel.querySelector('.md-new-prev').onclick = function newPrev() {
      position = Math.min(position + width3, 0)
      listNew.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.md-new-next').onclick = function newNext() {
      position = Math.max(position - width3, -width3 * (listElemsNew.length - count));
      listNew.style.marginLeft = position + 'px';
    };