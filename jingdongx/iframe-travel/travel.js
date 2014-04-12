(function(){

	var $_tabnavili=$('#tabnavi li');
	var $_tabcontent=$('.displaystyle')
	var $_departure=$('#departure');
	var $_destination=$('#destination');
	var $_city=$('#city');
	var $_year=$('.year');
	var $_month=$('.month');
	var $_day=$('.day');

	var flycity;
	var hotelcity;	
	var flyurl='json.txt';
	var hotelurl='date.txt';

	var data=new Date();
	var year=data.getFullYear();
	var month=data.getMonth()+1;
	var day=data.getDate();

	function init(){
		initialize(0);
		$_tabnavili.mouseover(showhide);
		$_departure.mouseover(sameMethod);
		$_destination.mouseover(sameMethod);
		$_city.mouseover(sameMethod);
		$_year.mouseover(yearshow);
		initEvent();
	};

	function initEvent(){
		$_year.change(function(){
			var next=$(this).next('select')[0];
			var selected=$(this).children('option:selected').val();
			monthshow(next,selected);
		});
		$_month.change(function(){
			var $_next=$(this).next('select');
			var selected=$(this).children('option:selected').val();
			dayshow($_next,selected);
		});
	};

	function dayshow($_element,selected){
		if(selected==month){
			dayshowto($_element,selected,day);
		}else{
			dayshowto($_element,selected,1);
		}
	};

	function runnian(){
		if(year%400==0){
			return true;
		}else if(year%100!=00&&year%4==0){
			return true;
		}
	}

	function dayshowto(element,nowmonth,nowday){
		element[0].length=1;
		var html=[];
		 if(nowmonth==1||nowmonth==3||nowmonth==5||nowmonth==7||nowmonth==8||nowmonth==10||nowmonth==12){
			for(var i=nowday;i<=31;i++){
				var str='<option value="'+i+'">'+i+'</option>';
				html.push(str);
			}
		}else if(nowmonth==4||nowmonth==6||nowmonth==9||nowmonth==11){
			for(var i=nowday;i<=30;i++){
				var str='<option value="'+i+'">'+i+'</option>';
				html.push(str);
			}
		}else if(nowmonth==2&&runnian){
			for(var i=nowday;i<=29;i++){
				var str='<option value="'+i+'">'+i+'</option>';
				html.push(str);
			}
		}else{
			for(var i=nowday;i<=28;i++){
				var str='<option value="'+i+'">'+i+'</option>';
				html.push(str);
			}
		}
		element[0].innerHTML+=html.join('');
	};

	function monthshow(element,selected){
		element.length=1;
		var html=[];
		if(selected==year){
			for(var i=month;i<=12;i++){
				var str='<option value="'+i+'">'+i+'</option>';
				html.push(str);
			}
		}else{
			for(var i=1;i<=12;i++){
				var str='<option value="'+i+'">'+i+'</option>';
				html.push(str);
			}
		}
		element.innerHTML+=html.join('');
	};

	function yearshow(){
		var thishtml=$(this).text().trim();
		if(thishtml.length==3){
			var html=[];
			for(var i=0;i<2;i++){
				var str='<option value="'+(year+i)+'">'+(year+i)+'</option>';
				html.push(str);
			}
			this.innerHTML+=html.join('');
		}
	};

	function initialize(index){
		$_tabnavili.children('span').css('color',' #005EAB')
		.eq(index).css('color',' #e4393c');
		$_tabcontent.hide().eq(index).show();
	};

	function showhide(){
	   var index=$(this).index();
	   initialize(index);
	};

	function sameMethod(){
		var _this=this;
		if(_this.id=='destination'||_this.id=='departure'){
			cityshow(_this,flycity,flyurl);
		}else if(_this.id=='city'){
			cityshow(_this,hotelcity,hotelurl);
		}
	};

	function cityshow(element,city,url){
		var thishtml=$(element).text().trim();
		if(thishtml.length==7&&city==undefined){
			ajaxMethode(element,url,city);
		}else if(thishtml.length==7){
			outhtml(city,element);
		}else{return;}
	};

	function ajaxMethode(element,url,city){
		var obj={
			type:'get',
			url:url,
			success:function(rep){
				city=rep.split(',');
				outhtml(city,element);
			},
			error:function(error){
				alert('ajax bug');
			}
		}
		$.ajax(obj);
	};

	function outhtml(array,element){
		var html=[];
		for(var i=0;i<array.length;i++){
			var str='<option value="'+array[i]+'">'+array[i]+'</option>';
			html.push(str);
		}
		element.innerHTML+=html.join('');
	};

	init();

})();
