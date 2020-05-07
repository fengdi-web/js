// document.getElementById("ul1").children[0].children[0].
// style.borderTop = "3px solid #013b8f";
// document.getElementById("ul1").children[0].children[0].
// style.height = "76px";
// var lis = document.getElementById("ul1").children
// for(var i = 0;i<lis.length;i++){
// 	if(i==5){
// 		continue;
// 	}
// 	lis[i].onmousemove=function(){
// 		this.children[1].style.display="block";
// 	}
// 	lis[i].onmouseout=function(){
// 		this.children[1].style.display="none";
// 	}
// }
// function erji(dd,stop){
// 	lis[dd].onmouseenter=function(){
// 		var that = this.children[2];
// 		var h = 0;
// 		that.style.display="block";
// 		f = setInterval(function(){
// 			h+=2;
// 			if(h==stop){
// 				clearInterval(f);
// 				};
// 			that.style.height = h+"px";
// 			
// 		},1)
// 	}
// 	lis[dd].onmouseleave=function(){
// 		this.children[1].style.display="none";
// 		clearInterval(f);
// 		this.children[2].style.display="none"
// 		this.children[2].style.height="0px";
// 	}
// }
// erji(1,220);
// erji(2,178);
// erji(3,176);
// erji(4,90);
// erji(7,220);
// document.getElementById("search").children[1].onclick=function(){
// 	document.getElementById("sear").style.display="block";
// 	var h = 0;
// 	f1 =setInterval (function(){
// 		h+=1;
// 		if(h==30){
// 			clearInterval(f1);
// 		}
// 		document.getElementById("sear").style.height=h+"px";
// 	},10)
// }
// document.getElementById("sear").onmouseleave=function(){
// 	var that = this;
// 	var h = 30;
// 	f2 =setInterval (function(){
// 		h-=1;
// 		if(h==0){
// 			clearInterval(f2);
// 			that.style.display="none"
// 		}
// 		that.style.height=h+"px";
// 	},10)
// }
// document.getElementById("sear").onfocus=function(){
// 	if(this.value=="请输入..."){
// 		this.value="";
// 	}
// }
// document.getElementById("sear").onblur=function(){
// 	if(this.value==""){
// 		this.value="请输入...";
// 	}
// }
var cc=document.getElementsByClassName("q3")[0].children;
for(var i=0;i<cc.length;i++){
	cc[i].onmouseover=function(){

	this.children[1].style.display="block";}
	cc[i].onmouseout=function(){
		this.children[1].style.display="none";
	}
}
