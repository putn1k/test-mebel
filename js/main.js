"use strict";

var openFilter = function openFilter() {
  $('html').addClass('is-open-menu');
  $('.overlay').addClass('overlay--showed');
  $('.filters').addClass('filters--open');
  $('#close-filters').focus();
};

var closeFilter = function closeFilter() {
  $('html').removeClass('is-open-menu ');
  $('.overlay').removeClass('overlay--showed');
  $('.filters').removeClass('filters--open');
  $('#open-filters').focus();
};

$('#open-filters').click(function (event) {
  event.preventDefault();
  openFilter();
});
$('#close-filters').click(function (event) {
  event.preventDefault();
  closeFilter();
});
$('.overlay').click(function (event) {
  event.preventDefault();
  closeFilter();
});
$(window).keydown(function (event) {
  if ($('.filters').hasClass('filters--open') && event.keyCode === 27) {
    event.preventDefault();
    closeFilter();
  }
});
"use strict";

var openMenu = function openMenu() {
  $('html').addClass('is-open-menu');
  $('.nav').addClass('nav--open');
  $('#close-menu').focus();
};

var closeMenu = function closeMenu() {
  $('html').removeClass('is-open-menu ');
  $('.nav').removeClass('nav--open');
  $('#open-menu').focus();
};

$('#open-menu').click(function (event) {
  event.preventDefault();
  closeFilter();
  openMenu();
});
$('#close-menu').click(function (event) {
  event.preventDefault();
  closeMenu();
});
$(window).keydown(function (event) {
  if ($('.nav').hasClass('nav--open') && event.keyCode === 27) {
    event.preventDefault();
    closeMenu();
  }
});
"use strict";

var priceSlider = document.getElementById('price-slider');

if (priceSlider) {
  noUiSlider.create(priceSlider, {
    start: [500, 400000],
    connect: true,
    step: 100,
    range: {
      'min': [500],
      'max': [400000]
    }
  });
  var input0 = document.getElementById('price-from');
  var input1 = document.getElementById('price-to');
  var inputs = [input0, input1];
  priceSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  var setpriceSlider = function setpriceSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    priceSlider.noUiSlider.set(arr);
  };

  inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      setpriceSlider(index, e.currentTarget.value);
    });
  });
}

var heightSlider = document.getElementById('height-slider');

if (heightSlider) {
  noUiSlider.create(heightSlider, {
    start: [1, 240],
    connect: true,
    step: 1,
    range: {
      'min': [1],
      'max': [240]
    }
  });

  var _input = document.getElementById('height-from');

  var _input2 = document.getElementById('height-to');

  var _inputs = [_input, _input2];
  heightSlider.noUiSlider.on('update', function (values, handle) {
    _inputs[handle].value = Math.round(values[handle]);
  });

  var _setpriceSlider = function _setpriceSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    priceSlider.noUiSlider.set(arr);
  };

  _inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      _setpriceSlider(index, e.currentTarget.value);
    });
  });
}

var widthSlider = document.getElementById('width-slider');

if (widthSlider) {
  noUiSlider.create(widthSlider, {
    start: [400, 2000],
    connect: true,
    step: 1,
    range: {
      'min': [50],
      'max': [2000]
    }
  });

  var _input3 = document.getElementById('width-from');

  var _input4 = document.getElementById('width-to');

  var _inputs2 = [_input3, _input4];
  widthSlider.noUiSlider.on('update', function (values, handle) {
    _inputs2[handle].value = Math.round(values[handle]);
  });

  var _setpriceSlider2 = function _setpriceSlider2(i, value) {
    var arr = [null, null];
    arr[i] = value;
    priceSlider.noUiSlider.set(arr);
  };

  _inputs2.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      _setpriceSlider2(index, e.currentTarget.value);
    });
  });
}
"use strict";

$('#search-show-hide').click(function (event) {
  event.preventDefault();
  $('.search__form').toggleClass('search__form--showed');
  $('.first').toggleClass('hide');

  if ($('.search__form').hasClass('search__form--showed')) {
    $('.search__input').focus();
  }
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
