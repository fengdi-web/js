document.getElementById("ul1").children[0].children[0].
style.borderTop = "3px solid #013b8f";
document.getElementById("ul1").children[0].children[0].
style.height = "76px";
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
document.getElementById("sear").onmouseleave=function(){
	var that = this;
	var h = 30;
	f2 =setInterval (function(){
		h-=1;
		if(h==0){
			clearInterval(f2);
			that.style.display="none"
		}
		that.style.height=h+"px";
	},10)
}
document.getElementById("sear").onfocus=function(){
	if(this.value=="请输入..."){
		this.value="";
	}
}
document.getElementById("sear").onblur=function(){
	if(this.value==""){
		this.value="请输入...";
	}
}
var cc = document.getElementsByClassName("cont_img")[0];
var lis_li = document.getElementById("ul2").children;
for(var ii = 0;ii<lis_li.length;ii++){
	lis_li[ii].onclick=function(){
		for(var j = 0;j < ii;j ++){//将图片向后调整
			cc.appendChild(cc.firstChild);
		}
		jd();
		document.getElementById("show").scrollLeft=ii*1920;
		
	}
}
function banner(){
	document.getElementById("show").scrollLeft+=10;
	if(document.getElementById("show").scrollLeft>=1920){
		clearInterval(f3);
		cc.appendChild(cc.firstChild);
		document.getElementById("show").scrollLeft=0;
		jd();
		start1();
		

	}
}
function start1(){
	setTimeout(function(){
	f3=setInterval(banner,5)
	},2000)
	
}
start1();
document.getElementById("l_but").onclick=function(){
	cc.insertBefore(cc.lastChild,cc.firstChild);
	jd();
}
document.getElementById("r_but").onclick=function(){
	cc.appendChild(cc.firstChild);
	jd();
}
function jd(){
	var data_index = cc.firstChild.getAttribute("data-index");
		for(var i = 0;i<lis_li.length;i++){
			if(lis_li[i].getAttribute("class")=="foc"){
				lis_li[i].removeAttribute("class");
			}
		}
		lis_li[data_index].className="foc";
}
var lis_li3 = document.getElementById("ul3").children;


//function count(a,b,c){
//	f4=setInterval(function(){
//		x+=b;
//		lis_li3[a].children[1].innerHTML=x;
//		if(x==c){
//			clearInterval(f4);
//			bj=0;
//		}
//		bj=1;
//	},10)
//	x=0;
//}
//function count1(x1,a,b,c){
//	f5=setInterval(function(){
//		x1+=b;
//		var s = x1+"";
//		var xx = s.substring(0,s.indexOf(".")+3);
//		lis_li3[a].children[1].innerHTML=xx;
//		if(xx==c){
//			clearInterval(f5);
//			bj1=0;
//		}
//		bj1=1;
//	},0.01)
//	x1=0;
//}
document.getElementsByClassName("gd")[0].onclick=function(){
	location.href="pages/wx_index.html";
}



//滑入向上，划出向下
var pin_lis = document.getElementsByClassName("pinpin")[0].children;
var f88;
var f7;
for(var p = 1;p<pin_lis.length;p++){
	pin_lis[p].onmouseenter=function(){
		var h = [];
		h[p]=0;
		that = this.children[0];
		//if(that.style.top<0){
			clearInterval(f88);
		//}
		f7 = setInterval(function(){
			h[p]-=1;
			that.style.top = h[p]+"px";
			if(h[p]==-10){
				clearInterval(f7);
			}
		},50)
//		that.style.boxShadow="2px 2px 5px #000 insert";
	}
	pin_lis[p].onmouseleave=function(){
		var h = [];
		h[p]= -10;
		that = this.children[0];
		//if(that.style.top>-10){
			clearInterval(f7);
			that.style.top=-10+"px";
		//}
		 f88 = setInterval(function(){
			h[p]+=1;
			that.style.top = h[p]+"px";
			if(h[p]==0){
				clearInterval(f88);
			}
		},50)
	}
}




//document.getElementById("chang").onmouseenter=function(e){
//	e=window.event||e;
//	var cl = e.target.nodeName;
////	alert(cl);
//	if(cl=="DIV"){
////		alert(1)
//		e.target.style.background="#f00";
//	}
//}全部检查后，样式就是不生效
var c_lis = document.getElementById("chang").children;
for(var ci=0;ci<c_lis.length;ci++){
	c_lis[ci].onmouseenter=function(){
		this.children[0].style.color="#fff";
		this.children[0].children[0].style.color="#fff";
		this.children[1].style.color="#fff";
		this.children[1].children[0].style.color="#fff";
	}
	c_lis[ci].onmouseleave=function(){
		this.children[0].style.color="#333";
		this.children[0].children[0].style.color="#333";
		this.children[1].style.color="#333";
		this.children[1].children[0].style.color="#333";
	}
}
document.getElementById("nex").onclick=function(){

	var h = 0;
	var f = setInterval(function(){
		document.getElementById("chang").parentNode.scrollTop+=2;
		h +=2;
		if(h==392){
			clearInterval(f);
		}
	},1)
	
}
document.getElementById("bef").onclick=function(){
	var h = 392;
	var f = setInterval(function(){
		document.getElementById("chang").parentNode.scrollTop-=2;
		h -=2;
		if(h==0){
			clearInterval(f);
		}
	},1)

}
document.getElementById("chang").parentNode.onscroll=function(){
	//箭头变换样式
	var bef=document.getElementById("bef");
	var nex=document.getElementById("nex");
	if(this.scrollTop==0){
		bef.style.background="#f0f0f0";
		bef.children[0].className="ani1"
	}else{
		bef.style.background="#e60012";
		bef.children[0].className="ani1b";
	}
	if(this.scrollTop==1176){
		nex.style.background="#f0f0f0";
		nex.children[0].className="anib"
	}else{
		nex.style.background="#e60012";
		nex.children[0].className="ani";
	}
}
//document.getElementById("ul4").onmouseenter=function(e){
//	e=window.event||e;
//	var noden = e.target.nodeName;
//	alert(noden);
//	if(noden=="LI"){//每次只能获取到ul，如何解决？
//		
//	}
//}
var ul4_lis = document.getElementById("ul4").children;
var ul5_lis = document.getElementById("ul5").children;
for(var j = 0;j<ul4_lis.length;j++){
	ul4_lis[j].onmouseenter=function(){
		this.firstChild.style.top="10px";
	}
	ul4_lis[j].onmouseleave=function(){
		this.firstChild.style.top="0px";
	}
}
for(var jj = 0;jj<ul5_lis.length;jj++){
	ul5_lis[jj].onmouseenter=function(){
		this.lastChild.style.bottom="10px";
	}
	ul5_lis[jj].onmouseleave=function(){
		this.lastChild.style.bottom="0px";
	}
}

//数字计数效果，插件使用
var options={
	userEasing:true,
	userGrouping:true,
	separator:',',
	decimal:'.'
};
var count1 = new CountUp('count1',0,527.36,2,2,options),
    count2 = new CountUp('count2',0,275,0,3,options),
    count3 = new CountUp('count3',0,2229.70,2,2,options),
    count4 = new CountUp('count4',0,7.48,2,3,options);
    count1.start();
    count2.start();
    count3.start();
    count4.start();
    $(window).scroll(function(){
    	if($(this).scrollTop()>=808&&$(this).scrollTop()<818){
    		count3.reset();
    		count3.start();
    		count4.reset();
    		count4.start();
    		count1.reset();
    		count1.start();
    		count2.reset();
    		count2.start();
    	}
    })
//$(".pinpin").children().not(".pin_w").mouseenter(function(){
//	$(this).children().animate({top:'-15px'},"slow");
//});
//$(".pinpin").children().not(".pin_w").mouseleave(function(){
//	$(this).children().animate({top:'0px'},"slow");
//});
