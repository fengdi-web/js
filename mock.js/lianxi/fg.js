function strToObj(str){
    var obj = {};
    var arr = str.split('&');
    arr.forEach(r => {
        var newarr = r.split('=')
        obj[newarr[0]] = newarr[1]
    })
    return obj;
}