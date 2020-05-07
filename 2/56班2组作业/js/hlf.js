var cc=document.getElementsByClassName("q3")[0].children;
for(var i=0;i<cc.length;i++){
	cc[i].onmouseover=function(){

	this.children[1].style.display="block";}
	cc[i].onmouseout=function(){
		this.children[1].style.display="none";
	}
}
