var lis = document.getElementById("ul1").children
for(var i = 0;i<lis.length;i++){
	if(i==5){
		continue;
	}
	lis[i].onmousemove=function(){
		this.children[1].style.display="block";
	}
	lis[i].onmouseout=function(){
		this.children[1].style.display="none";
	}
}
function erji(dd,stop){
	lis[dd].onmouseenter=function(){
		var that = this.children[2];
		var h = 0;
		that.style.display="block";
		f = setInterval(function(){
			h+=2;
			if(h==stop){
				clearInterval(f);
				};
			that.style.height = h+"px";
			
		},1)
	}
	lis[dd].onmouseleave=function(){
		this.children[1].style.display="none";
		clearInterval(f);
		this.children[2].style.display="none"
		this.children[2].style.height="0px";
	}
}
erji(1,220);
erji(2,178);
erji(3,176);
erji(4,90);
erji(7,220);
document.getElementById("search").children[1].onclick=function(){
	document.getElementById("sear").style.display="block";
	var h = 0;
	f1 =setInterval (function(){
		h+=1;
		if(h==30){
			clearInterval(f1);
		}
		document.getElementById("sear").style.height=h+"px";
	},10)
}
var i=0;
var q=0; //全局变量
function xnb(w,h,t,l,stop,b){
	var ww = w;
//	j=0
	 document.getElementsByClassName("photo")[b].onmouseenter=function(){
	 	clearInterval(q);
	 	var that=this.children[0];
	 	that.style.width=w+"px";
	 	that.style.height=h+"px";
	 	that.style.top=t+"px";
	 	that.style.left=l+"px";
	document.getElementsByClassName("gd")[b].style.display="block";

	 	
//	 			alert(stop);
	 	 i=setInterval(function(){
	 	 	var w=parseInt(that.style.width);
	 	 	var h=parseInt(that.style.height);
	 	 	var t=parseInt(that.style.top);
	 	 	var l=parseInt(that.style.left);
	 		w+=10;
	 		h+=10;
	 		t-=5;
	 		l-=5;
	 		that.style.width=w+"px";
	 		that.style.height=h+"px";
	 		that.style.top=t+"px";
	 		that.style.left=l+"px";
	 		if(w==stop){
	 			clearInterval(i);
//	 					alert(stop);
	 		}
	 	},50)
	 	}
	 document.getElementsByClassName("photo")[b].onmouseleave=function(){
	 	clearInterval(i);
	    var that=this.children[0];
	 	var fw=parseInt(that.style.width);
	 	var fh=parseInt(that.style.height);
	 	var ft=parseInt(that.style.top);
	 	var fl=parseInt(that.style.left);
	 	document.getElementsByClassName("gd")[b].style.display="none";
	 	 q=setInterval(function(){
	 		fw-=10;
	 		fh-=10;
	 		ft+=5;
	 		fl+=5;
	 		that.style.width=fw+"px";
	 		that.style.height=fh+"px";
	 		that.style.top=ft+"px";
	 		that.style.left=fl+"px";
	 		console.log(fw);
	 		if(fw==ww){
	 			
	 			clearInterval(q);
	 		}
	 	},30)
	 	}}
//	 					alert(stop);
xnb(650,418,0,283,850,0);
xnb(650,418,0,283,850,1);

var i;
var q;
function fd(w,h,t,l,stop){
	var ww=w;
	document.getElementsByClassName("photo1")[0].onmouseenter=function(){
			 	clearInterval(q);
	 	var that=this.children[0];
	 	that.style.width=w+"px";
	 	that.style.height=h+"px";
	 	that.style.top=t+"px";
	 	that.style.left=l+"px";
	document.getElementsByClassName("gd")[0].style.display="block";
//	}
	 	 i=setInterval(function(){
	 	 	var w=parseInt(that.style.width);
	 	 	var h=parseInt(that.style.height);
	 	 	var t=parseInt(that.style.top);
	 	 	var l=parseInt(that.style.left);
	 		w+=10;
	 		h+=10;
	 		t-=5;
	 		l-=5;
	 		that.style.width=w+"px";
	 		that.style.height=h+"px";
	 		that.style.top=t+"px";
	 		that.style.left=l+"px";
	 		if(w==stop){
	 			clearInterval(i);
	 		}
	 	},50)
	 	}
	 document.getElementsByClassName("photo1")[0].onmouseleave=function(){
	 	clearInterval(i);
	    var that=this.children[0];
	 	var fw=parseInt(that.style.width);
	 	var fh=parseInt(that.style.height);
	 	var ft=parseInt(that.style.top);
	 	var fl=parseInt(that.style.left);
	 	document.getElementsByClassName("gd")[0].style.display="none";
	 	 q=setInterval(function(){
	 		fw-=10;
	 		fh-=10;
	 		ft+=5;
	 		fl+=5;
	 		that.style.width=fw+"px";
	 		that.style.height=fh+"px";
	 		that.style.top=ft+"px";
	 		that.style.left=fl+"px";
//	 		console.log(fw);
	 		if(fw==ww){
	 			
	 			clearInterval(q);
	 		}
	 	},30)
	 	}
	 }
fd(650,418,0,283,850,0)

var i;
var q;
function fd1(w,h,t,l,stop){
	var ww=w;
	document.getElementsByClassName("photo2")[0].onmouseenter=function(){
			 	clearInterval(q);
	 	var that=this.children[0];
	 	that.style.width=w+"px";
	 	that.style.height=h+"px";
	 	that.style.top=t+"px";
	 	that.style.left=l+"px";
	document.getElementsByClassName("gd")[0].style.display="block";
//	}
	 	 i=setInterval(function(){
	 	 	var w=parseInt(that.style.width);
	 	 	var h=parseInt(that.style.height);
	 	 	var t=parseInt(that.style.top);
	 	 	var l=parseInt(that.style.left);
	 		w+=10;
	 		h+=10;
	 		t-=5;
	 		l-=5;
	 		that.style.width=w+"px";
	 		that.style.height=h+"px";
	 		that.style.top=t+"px";
	 		that.style.left=l+"px";
	 		if(w==stop){
	 			clearInterval(i);
	 		}
	 	},50)
	 	}
	 document.getElementsByClassName("photo2")[0].onmouseleave=function(){
	 	clearInterval(i);
	    var that=this.children[0];
	 	var fw=parseInt(that.style.width);
	 	var fh=parseInt(that.style.height);
	 	var ft=parseInt(that.style.top);
	 	var fl=parseInt(that.style.left);
	 	document.getElementsByClassName("gd")[0].style.display="none";
	 	 q=setInterval(function(){
	 		fw-=10;
	 		fh-=10;
	 		ft+=5;
	 		fl+=5;
	 		that.style.width=fw+"px";
	 		that.style.height=fh+"px";
	 		that.style.top=ft+"px";
	 		that.style.left=fl+"px";
//	 		console.log(fw);
	 		if(fw==ww){
	 			
	 			clearInterval(q);
	 		}
	 	},30)
	 	}
	 }
fd1(650,318,0,283,850,0)