$(document).ready(function () {
    $('.fresh-header__burger').click(function (event) {
        $('.fresh-header__burger,.fresh-header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});