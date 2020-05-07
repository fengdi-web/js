(function () {
    $.fn.extend({
        // 二级导航
        ejdh: function (t) {
            t = t || 1000;
            return this.each(function () {
                $(this).hover(function () {
                    $(this).next().stop().slideDown(t);
                }, function () {
                    $(this).next().stop().slideUp(t);
                })
            })
        },
        // 侧导航
        cdh: function (t) {
            t = t || 1000;
            return this.each(function () {
                $(this).hover(function () {
                    $(this).next().stop().slideDown(t);
                }, function () {
                    $(this).next().stop().slideUp(t);
                })
            })
        },
        // 轮播图
        // lbt: function (jl, tm, max, yc) {
        //     return this.each(function () {
        //         $(this).animate({ "left": "-=" + jl + "px" }, tm, function () {
        //             if (parseInt($(this).css("left")) <= -max) {
        //                 $(this).append($(this).children().first());
        //                 $(this).css("left", "0px");
        //                 setTimeout(function () {
        //                     $(".content").lbt(jl, tm, max, yc);
        //                 }, yc);
        //             } $(".content").lbt(jl, tm, max, yc);
        //         })
        //     })
        // },

        // 轮播图
        // lbt: function () {
        //     function lb(obj) {
        //         if (obj.children("div").position().left <= -1200) {
        //             obj.children("div").animate({ "left": "0" }, 500);
        //         } else {
        //             obj.children("div").animate({ "left": "-=300px" }, 500);
        //         }
        //     }
        //     function lbt(tu) {
        //         return function () {
        //             lb(tu);
        //         }
        //     }
        //     var aa = $(this)
        //     setInterval(lbt(aa), 3000);
        // },
        // 轮播图   失败
        lbt: function (s) {
            function str() {
                $(this).animate({ "left": "-=10px" }, 30, function () {
                    if (parseInt($(this).css("left")) <= -300) {
                        $(this).append($(this).children().first());
                        $(this).css("left", "0px");
                        setTimeout(str,s);
                    } else {
                        str();
                    }
                })
            }
            str();
        },
        //图片中心缩放
        zx: function (fw, fh) {
            return this.each(function () {
                var t = fh / 2;
                var l = fw / 2;
                $(this).hover(function () {
                    $(this).stop().animate({ "width": "+=" + fw + "px", "height": "+=" + fh + "px", "top": "-=" + t + "px", "left": "-=" + l + "px" }, 1000);
                }, function () {
                    $(this).stop().animate({ "width": "-=" + fw + "px", "height": "-=" + fh + "px", "top": "+=" + t + "px", "left": "+=" + l + "px" }, 1000);
                })
            })
        },
        // tab标签页
        tab: function (colr, shw) {
            return this.each(function () {
                var that = this;
                $(this).children("ul").children().each(function (index) {//遍历下标
                    $(that).children("ul").children().eq(index).data("data-index", index);
                })
                $(this).children("ul").children().click(function () {
                    $(this).addClass(colr).siblings().removeClass(colr);
                    $(that).children("div").children().eq($(this).data("data-index")).addClass(shw).siblings().removeClass(shw);
                })
            })
        }

    })
})(jQuery)






