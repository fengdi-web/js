$(document).ready(function(){
	$.fn.extend({
		D:function(){
				$(".ss").mouseenter(function(){
				$(this).animate({"width":"200px","height":"200px","top":"-100px","left":"-100px"},1000)
			})
			
			$(".ss").mouseleave(function(){
				$(this).animate({"width":"100px","height":"100px","top":"0px","left":"0px"},1000)
			})
		},lb:function(lbw,lf){
							var lf= lf || 20
							return this.each(function(){
								$(this).animate({"left":"-="+lf+"px"},100,function(){
									if(parseInt($(".con").css("left"))<=-400){
										$(".con").animate({"left":"0px"},0)
									}
									$(this).lb(lbw,lf);
								})
							})			
						},
						ejdh:function(){
							$(this).children().mouseenter(function(){
								$(this).children().stop().slideToggle()
							})
							$(this).children().mouseleave(function(){
								$(this).children().stop().slideToggle()
							})
						}
	})
			

		})