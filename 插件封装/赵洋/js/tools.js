(function($){
	$.fn.extend({
		center_change_size:function(changeSize,changeTime){
			return this.each(function(){
				changeSize = changeSize || 40;
				changeTime = changeTime || 400;
				var hh = $(this).height();
				var ww = $(this).width()/hh*changeSize;
				$(this).hover(function(){
					$(this).animate({"left":"-="+ww/2+"px","top":"-="+hh/2+"px",
					"height":"+="+changeSize+"px","width":"+="+ww+"px"},changeTime);
				},function(){
					$(this).animate({"left":"+="+ww/2+"px","top":"+="+hh/2+"px",
					"height":"-="+changeSize+"px","width":"-="+ww+"px"},changeTime);
				})
			})
		},
			
		
		height_change_nav:function(changTime){//给ul里的li使用
			changTime = changTime || 400;
			return this.each(function(){
				$(this).mouseenter(function(){
					$(this).children().slideDown()
				})
				$(this).mouseleave(function(){
					$(this).children().slideUp()
				})
			})
		},
		
		click_show:function(changTime){
			changTime = changTime || 400;
			return this.each(function(){
				$(this).children().click(function(){
					$(this).children().slideDown(changTime)
					.parent().siblings().children().slideUp(changTime);
				})
			})
		},
		
		banner:function(changTime,stopTime){
			changTime = changTime || 2000;
			stopTime = stopTime || 3000;
			var l = $(this).children().children().width();
			return this.each(function(){
				var that= this;
				function ban(){
					$(that).children().animate({"left":"-="+l+"px"},changTime,function(){
						$(that).children().append($(that).children().children().first());
						$(that).children().css("left","0px");
					})
				}
				setInterval(ban,stopTime);
			})
				
			
		},
		
		
		tab_change:function(jd,mk,changTime){
			changTime = changTime || 1000;
			return this.each(function(){
				var that = this;
				$(that).children("ul").children().each(function(index){//为li添加自定义标识
					$(that).children("ul").children().eq(index).data("data-index",index);	
				})
				$(that).children("ul").children().click(function(){
					$(this).addClass(jd).siblings().removeClass(jd)
					var bj = $(this).data("data-index");
					$(that).children("div").eq(bj).addClass(mk).
					siblings().removeClass(mk);
				})
			})
			
		},
		
		zzc_down_biandan:function(h,dan,changTime){//滑倒底部的高度，变淡至
			var hh = $(this).children("img").height();
			var c = $(this).children("div").css("opacity");
			h = h || hh-10;
			dan = dan || 0.1;
			changTime = changTime || 400
			return this.each(function(){
				$(this).mouseenter(function(){
					$(this).children("div").animate({"top":""+h+"px","opacity":dan},changTime)
				}).mouseleave(function(){
					$(this).children("div").animate({"top":"0px","opacity":c},changTime)
				})
				
			})
		}
	})
})(jQuery)
