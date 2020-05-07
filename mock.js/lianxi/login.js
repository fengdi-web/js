//用来模拟网速慢/延迟效果
Mock.setup({
    // timeout:2000
    timeout:"500-800"
})
//模拟数据
Mock.mock("/login",function(options){
    console.log(options)
    console.log(options.body)   //拿到这个值以后进行分割等操作拿到对应的值
    console.log(strToObj(options.body))
    var args = strToObj(options.body)
    if(args.tel === '999999' && args.pwd === '666666'){
        return{
            success:true
        }
    }else{
        return{
            success:false
        }
    }
})