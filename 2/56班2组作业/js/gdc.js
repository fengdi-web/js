var tr=document.getElementsByTagName("tr");
for(var i=0;i<tr.length;i++){
	if(i%2==0){
		tr[i].style.background="#FFFFFF"
	}else{
		tr[i].style.background="#f5f5f5"
	}
}
var js1=0;
var js2=0;
var js3=0;
f=setInterval("test1()",50)
function test1(){
	js2+=5;
	js1+=220;
	js3+=1;
    document.getElementById("js1").innerHTML=js1;
	 document.getElementById("js2").innerHTML=js2;
	  document.getElementById("js3").innerHTML=js3;
	if(js1>=22000){
		clearInterval(f)
	}
}