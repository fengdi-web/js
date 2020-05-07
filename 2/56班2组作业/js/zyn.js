//二级菜单导航条
var mm=document.getElementsByClassName("ul1")[0].children;
for(var i=0;i<mm.length;i++){
	mm[i].onmouseover=function(){
//	var h=0;
	this.children[1].style.display="block";
//	function show(){
//		h+=5;
//		if(h>=100){
//			clearInterval(i);
//			e.target.children[1].style.height=h+"px";
//		}
//	}
//	i=setInterval("show()",100);
	}
	mm[i].onmouseout=function(){
		this.children[1].style.display="none";
//		this.children[1].style.height="0";
//		clearInterval(i);
	}
}
//input点击出现鼠标滑出消失
var nn=document.getElementsByClassName("zyn5")[0];
nn.onclick=function(){
	document.getElementsByClassName("in")[0].style.display="block";
	var h=0;
	var j=setInterval(function(){
		h+=1;
		if(h==30){
			clearInterval(j);
		document.getElementsByClassName("in")[0].style.height=h+"px";
		}
	},10)

}
nn.onmouseout=function(){
	var h=30;
	var i=setInterval(function(){
		h-=1;
		if(h==0){
			clearInterval(i);
			document.getElementsByClassName("in")[0].style.display="none";
		
		}
			document.getElementsByClassName("in")[0].style.height=h+"px";
	},10)
}

//表单验证失去焦点和得到焦点的显示隐藏
document.getElementById("username").onfocus=function(){
	if(this.value=="姓名"){
		this.value=""
	}
}
document.getElementById("username").onblur=function(){
	if(this.value==""){
		this.value="姓名"
	}
}
document.getElementById("tel").onfocus=function(){
	if(this.value=="电话"){
		this.value=""
	}
}
document.getElementById("tel").onblur=function(){
	if(this.value==""){
		this.value="电话"
	}
}
document.getElementById("email").onfocus=function(){
	if(this.value=="邮箱"){
		this.value=""
	}
}
document.getElementById("email").onblur=function(){
	if(this.value==""){
		this.value="邮箱"
	}
}
document.getElementById("shen").onfocus=function(){
	if(this.value=="省"){
		this.value=""
	}
}
document.getElementById("shen").onblur=function(){
	if(this.value==""){
		this.value="省"
	}
}
document.getElementById("shi").onfocus=function(){
	if(this.value=="市"){
		this.value=""
	}
}
document.getElementById("shi").onblur=function(){
	if(this.value==""){
		this.value="市"
	}
}
document.getElementById("qu").onfocus=function(){
	if(this.value=="区县"){
		this.value=""
	}
}
document.getElementById("qu").onblur=function(){
	if(this.value==""){
		this.value="区县"
	}
}
document.getElementById("address").onfocus=function(){
	if(this.value=="详细地址"){
		this.value=""
	}
}
document.getElementById("address").onblur=function(){
	if(this.value==""){
		this.value="详细地址"
	}
}
document.getElementById("miao").onfocus=function(){
	if(this.value=="描述"){
		this.value=""
	}
}
document.getElementById("miao").onblur=function(){
	if(this.value==""){
		this.value="描述"
	}
}
document.getElementById("yzm").onfocus=function(){
	if(this.value=="请输入验证码"){
		this.value=""
	}
}
document.getElementById("yzm").onblur=function(){
	if(this.value==""){
		this.value="请输入验证码"
	}
}

//表单验证
function stopsubmit(that){
	that.preventDefault();
}
document.getElementById("myform").onsubmit=function(e){
	var son1=document.getElementById("son1");
	var username=document.getElementById("username");
	var tel=document.getElementById("tel")
	var email=document.getElementById("email")
	var shen=document.getElementById("shen")
	var shi=document.getElementById("shi")
	var qu=document.getElementById("qu")
	var address=document.getElementById("address")
	var miao=document.getElementById("miao")
	var yzm=document.getElementById("yzm")

//if(son1.value=="选择正确的分类利于您获得快速回复"){
//	alert("请选择留言类别");
//	stopsubmit(e);
//}
//if(username.value=="姓名"){
//	alert("姓名为必填");
//	stopsubmit(e);
//}
//if(tel.value=="电话"){
//	alert("电话为必填")
//	stopsubmit(e)
//}
//if(email.value=="邮箱"){
//	alert("邮箱为必填");
//	stopsubmit(e);
//}
//if(shen.value=="省"){
//	alert("省为必填");
//	stopsubmit(e);
//}
//if(shi.value=="市"){
//	alert("市为必填");
//	stopsubmit(e);
//}
//if(qu.value=="区县"){
//	alert("区县为必填");
//	stopsubmit(e);
//}
//if(address.value=="详细地址"){
//	alert("详细地址为必填");
//	stopsubmit(e);
//}
//if(miao.value=="描述"){
//	alert("描述为必填");
//	stopsubmit(e);
//}
//if(yzm.value=="请输入验证码"){
//	alert("验证码必填并为4位数");
//	stopsubmit(e);
//}
if(son1.value=="选择正确的分类利于您获得快速回复"&&username.value=="姓名"&&tel.value=="电话"&&email.value=="邮箱"&&shen.value=="省"&&shi.value=="市"&&qu.value=="区县"&&address.value=="详细地址"&&miao.value=="描述"&&yzm.value=="请输入验证码"){
	alert("1、请选择留言类别\n2、姓名为必填\n3、电话为必填\n4、邮箱为必填\n5、省为必填\n6、市为必填\n7、区县为必填\n8、详细地址为必填\n9、描述为必填\n10、验证码必填并为4位数");
	stopsubmit(e);
}

}
document.getElementById("username").onchange=function(){
	if(this.value=="南栀向暖"){
		this.nextSibling.innerHTML="姓名可用"
	}else{
		this.nextSibling.innerHTML="姓名验证不通过"
	}
}
document.getElementById("tel").onchange=function(){
	var reg=/^(13|15|16|17|18)[0-9]{9}$/;
	if(reg.test(this.value)){
		this.nextSibling.innerHTML="电话格式正确"
	}else{
		this.nextSibling.innerHTML="电话验证不通过"
	}
}
document.getElementById("email").onchange=function(){
	var reg=/^\w+@\w+\.\w+$/;
	if(reg.test(this.value)){
		this.nextSibling.innerHTML="邮箱格式正确"
	}else{
		this.nextSibling.innerHTML="邮箱验证不通过"
	}
}
//验证码
var cont=["0","1","2","3","4","5","6","7","8","9"];
var zm="";
function yzm(){
//document.getElementById("zm").onclick=function(){
	zm="";
for(var i=0;i<4;i++){
				var x=Math.floor(Math.random()*10);
				zm+=cont[x]
			}
	document.getElementById("zm").innerHTML=zm;
}
yzm();
document.getElementById("yzm").onblur=function(e){
	var usyzm=this.value
	if(usyzm!=zm){
		alert("请输入正确验证码")
		stopsubmit(e);
	}
}
//内容相互转换
var lis=document.getElementsByClassName("ul2")[0].children;
var h=290;
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		var num=this.getAttribute("data-list");
		var con=document.getElementById("mm").children;
		for(var j=0;j<con.length;j++){
			
			if(con[j].getAttribute("class")=="show"){
				con[j].removeAttribute("class");
			
				if(con[j].style.display=="none"){
					con[j].style.display="block"
      
				}else{
					con[j].style.display="none"	
					
				}
			      document.getElementsByClassName("ul2")[0].children[j].style.borderBottom="none";
				}
		}
		con[num].className="show";
		this.style.borderBottom="2px solid #f00";
	}
}
//第二界面内容显示隐藏
var zz=document.getElementsByClassName("show-2")[0].children;
for(var i=0;i<zz.length;i++){
	zz[i].onclick=function(){
	var cc=this.children[1].getAttribute("class")
	if(cc=="hidden"){
	this.children[1].className="fang";
	document.getElementById("mm").style.height="1610px";
	document.getElementsByClassName("main")[0].style.height="1700px";
	}
		if(cc=="fang"){
			this.children[1].className="hidden";
	document.getElementById("mm").style.height="405px"
	document.getElementsByClassName("main")[0].style.height="826px";
		}
}
}
//第二界面内容显示隐藏
var zz=document.getElementsByClassName("show-3")[0].children;
for(var i=0;i<zz.length;i++){
	zz[i].onclick=function(){
	var ee=this.children[1].getAttribute("class");
	if(ee=="hidden"){
	this.children[1].className="fang";
	document.getElementById("mm").style.height="600px";
	document.getElementsByClassName("main")[0].style.height="1700px";
	}
		if(ee=="fang"){
			this.children[1].className="hidden";
	document.getElementById("mm").style.height="405px"
	document.getElementsByClassName("main")[0].style.height="826px";
		}
}
}