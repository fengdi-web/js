if (!this.myPlugin) {
    this.myPlugin = {}
}

this.myPlugin.debounce = function (callback, time) {
    var timer;    //timer写在外面污染全局变量，写在里面那么每一次函数调用都是一个新的计时器，解决办法 return (闭包)
    return function () {
        clearTimeout(timer);
        var args = arguments; //利用闭包保存参数数据
        timer = setTimeout(function () {
            callback.apply(null,args);
        }, time)
    }
}