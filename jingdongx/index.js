$(".jid").hover(function(){
	$(this).children("span,.hha").show();
},function(){
	$(this).children("span,.hha").hide();
});

$(".serve").hover(function(){
	$(this).children("span,.hha").show();
},function(){
	$(this).children("span,.hha").hide();
});

$(".navi").hover(function(){
	$(this).children("span,.dd").show();
},function(){
	$(this).children("span,.dd").hide();
});

$("#my360by").hover(function(){
	$(".mycontent").show();
},function(){
	$(".mycontent").hide();
});

$("#settleup").hover(function(){
	$(".settlecontent").show();
},function(){
	$(".settlecontent").hide();
});

/*初始化slide*/
initializeslide(0);
function initializeslide(num){
	$('.slide_item li').animate({
		'opacity':'0.1',
		'z-index':'0'
	},200);
	$('.slide_item li').eq(num).animate({
		'opacity':'1',
		'z-index':'1'
	},200);	
	$('.slide_tontrols span').css('background','#999');
	$('.slide_tontrols span').eq(num).css('background','#e4393c');
};
var count=1;
function scroll(){
   	initializeslide(count%6);
   	count++;
};

var timer=setInterval(scroll,4000);

$('.slide_tontrols span').hover(function(){
    clearInterval(timer);
    count=$(this).index();
    if(!$('.slide_item li').is(':animated')){
    	initializeslide(count);
    } 
},function(){
   count++;
   timer=setInterval(scroll,3000);
});

$('.tabnavi li').hover(function(){
	var index=$(this).index();
	var leftnum=index*25+'%';
	$('.tabcontent').hide().eq(index).show();
	$('.tabarrow').css('left',leftnum);
},function(){

});

var page=1;
var imgnum=3;

$('.jsscrollR').click(function(){
	var $_parent=$(this).parents('.jsscroll');
	var $_content=$_parent.find('.jsscrollcontent');
	var $_imgcroll=$_parent.find('.jsscrollwrap');
	var width=$_content.width();
	var len=$_imgcroll.find('dd').length;
	var pag_count=Math.ceil(len/imgnum);
	if(!$_imgcroll.is(':animated')){
		if(pag_count==page){
		 $_imgcroll.animate({
		 	'left':'0px'
		 },'normal');
		 page=1;
	}else{
		$_imgcroll.animate({
		 	'left':'-='+width
		 },'normal');
		page++;
	}
	}
});

$('.jsscrollL').click(function(){
	var $_parent=$(this).parents('.jsscroll');
	var $_content=$_parent.find('.jsscrollcontent');
	var $_imgcroll=$_parent.find('.jsscrollwrap');
	var width=$_content.width();
	var len=$_imgcroll.find('dd').length;
	var pag_count=Math.ceil(len/imgnum);
	if(!$_imgcroll.is(':animated')){
		if(page==1){
		 $_imgcroll.animate({
		 	'left':'-='+width*(pag_count-1)
		 },'normal');
		 page=pag_count;
	}else{
		$_imgcroll.animate({
		 	'left':'+='+width
		 },'normal');
		page--;
	}
	}
});

NaviContent();
function NaviContent(){
	for(var n in navicontent){
		var htm=[];
		for(var i in navicontent[n]){
			for(var j in navicontent[n][i]){
				if(j=='strong'){
					var str=
						'           <p>'+
						'           <strong><a href="">'+navicontent[n][i][j]+'</a></strong> '
						'           </p>';
					htm.push(str);
				}else{
					var str='           <dl class="species_float wrap">';
					htm.push(str);
					for(var k=0;k<navicontent[n][i][j].length;k++){
						var str=
							'            	<dd>'+
							'            		<i></i>'+
							'             		<span><a href="">'+navicontent[n][i][j][k]+'</a></span>'+
							'            	</dd>';
						htm.push(str);
					}
					var str=	'	       	</dl>';
					htm.push(str);
					var str='           <hr>';
					htm.push(str);
				}
			}
		}
		htm.length=htm.length-1;
		$('.species_left').eq(n-1).html(htm.join(''));
	}		
};

$('.imgmove').hover(function(){
	var $_parent=$(this).parents('.tablelist');
	if(!$_parent.find('img').is(':animated')){
		var img=$_parent.find('img').animate({
		'left':'-10px'
		},200);
	}
},function(){
	var $_parent=$(this).parents('.tablelist');
	var img=$_parent.find('img').animate({
		'left':'0'
	},200);
});

$('.tanbutton span').hover(function(){
    var $_parents=$(this).parent();
    var $_cenpa=$_parents.parent();
    var $_tabsortli=$_cenpa.find('.tabsortli');
	var index=$(this).index();
	var width=$_tabsortli.find('li').eq(index).width();
	var len=width*index;
	$_cenpa.find('span').css('background','#aaa').eq(index).css('background','#7ABD54');
	if(!$_tabsortli.is(':animated')){
		$_tabsortli.animate({
		 	'left':'-'+len
			 },'fast');
		}
},function(){
});


$('.sortcontent h3').hover(function(){
	var $_parents=$(this).parent();
    var $_cenpa=($_parents).parent();
	var left=$(this).offset().left;
	var $_p=$_cenpa.prevAll('.bottomline');
	$_parents.find('h3').css('color','#e4393c');
	$_parents.find('this').css('color','#e4393c');
	$_cenpa.find('.sortcontentul').hide();
	$(this).next().show();
	$_p.find('p').css('left',left);
},function(){
	
});













