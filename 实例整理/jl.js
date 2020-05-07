if (!this.myPlugin) {
    this.myPlugin = {}
}

// 方法一：计时器 1s钟之后出发
// this.myPlugin.jl = function(callback,time){
//     var timer ;
//     return function(){
//         if(timer){
//             return;
//         }
//         var args = arguments;   //利用闭包保存参数数据
//         timer = setTimeout(function(){
//             callback.apply(null,args)
//             timer = null
//         },time)
//     }
// }


//方法二：时间戳 先触发，后面的等到1s钟之后再触发，停止以后又触发一次

this.myPlugin.jl = function (callback, time) {
    var t;
    return function () {
        if (!t || Date.now() - t >= time) {  //之前没有计时 或 距离上次执行的时间已超过规定时间
            callback.bind(null, arguments)
            t = Date.now()   //得到当前时间戳
        }
    }
}


//通用   
this.myPlugin.jl = function (callback, time, immediately) {
    if (immediately === undefined) {
        immediately = true
    }
    var t;
    var timer;
    return function () {
        if (immediately) {
            if (!t || Date.now() - t >= time) {  //之前没有计时 或 距离上次执行的时间已超过规定时间
                callback.bind(null, arguments)
                t = Date.now()   //得到当前时间戳
            }
        }
        else {
            if (timer) {
                return;
            }
            var args = arguments;   //利用闭包保存参数数据
            timer = setTimeout(function () {
                callback.apply(null, args)
                timer = null
            }, time)
        }
    }
}