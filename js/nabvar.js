/*jslint browser: true*/
/*global $, jQuery, alert*/

var  mn = $(".menu");
var mns = "menu-scrolled";
var hdr = 200;/*$('wapper').height()*/

$(window).scroll(function () {
    "use strict";
    if ($(this).scrollTop() > hdr) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});