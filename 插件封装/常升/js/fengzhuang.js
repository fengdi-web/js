$(function () {
    $.sf = function (bq, w, h) {
        w = w || 300;
        h = h || 300;
        var neww = w / 2;
        var newh = h / 2;
        $("." + bq).hover(function () {
            $(this).animate({ "width": "+=" + w + "px", "height": "+=" + h + "px", "top": "-=" + newh + "px", "left": "-=" + neww + "px" }, 1000)
        }, function () {
            $(this).animate({ "width": "-=" + w + "px", "height": "-=" + h + "px", "top": "+=" + newh + "px", "left": "+=" + neww + "px" }, 1000)
        })
    }
    //二级菜单
    $.fn.erji = function () {
        return this.each(function () {
            $(this).hover(function () {
                $(this).children().last().stop().slideDown();
            }, function () {
                $(this).children().last().stop().slideUp();
            })
        })
    }
    //tab标签页
    //tab标签页
    $.tab = function (tb) {
        $("." + tb).children().click(
            function () {
                $("." + tb).next().children().eq($(this).index()).css({ "display": "block" }).siblings().css({ "display": "none" })
            })
    }

})