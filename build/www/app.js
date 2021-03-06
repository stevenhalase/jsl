"use strict";
$(document).ready(function () {
    var main = $('#startchange').offset().top;
    $(window).on('scroll', function () {
        var stop = Math.round($(window).scrollTop());
        if (stop > main) {
            $('header .nav').addClass('past-main');
        }
        else {
            $('header .nav').removeClass('past-main');
        }
    });
});
$('.nav-toggle').click(() => {
    $('.nav-toggle').toggleClass('is-active');
    $('.nav-menu').toggleClass('is-active');
});
$("#about-link").click(function () {
    $('.nav-toggle').toggleClass('is-active');
    $('.nav-menu').toggleClass('is-active');
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
$("#services-link").click(function () {
    $('.nav-toggle').toggleClass('is-active');
    $('.nav-menu').toggleClass('is-active');
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 2000);
});
$("#contact-link").click(function () {
    $('.nav-toggle').toggleClass('is-active');
    $('.nav-menu').toggleClass('is-active');
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2500);
});
