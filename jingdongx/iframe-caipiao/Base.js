window.Base={ 

	getId:function(str){
		return document.getElementById(str);
	},

	getName:function(str){
		return document.getElementsByTagName(str);
	},

	getClass:function(str){
		var all=document.getElementsByTagName("*");
		var elements=[];
		for(var i=0;i<all.length;i++)
		{
			var childclass=all[i].className.split(' ');
			for(var j=0;j<childclass.length;j++)
			{
				if(childclass[j]==str){
					elements.push(all[i]);
					break;
				}
			}
		}
		return elements;
	},

	addEvent:function(element,type,fn){
		if(element.addEventListener){
			element.addEventListener(type,fn,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,fn);
		}else{
			element["on"+type]=fn;
		}
	},

	 preventDefault:function(event){
	 	if(event.preventDefault){
	 		event.preventDefault();
	 	}else{
	 		event.returnValue=false;
	 	}
	 },

	removeEvent:function(element,type,fn){
		if(element.removeEventListener){
			element.removeEventListener(type,fn,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,fn);
		}else{
			element["on"+type]=null;
		}
	},

	trim:function(str){
		 return str.replace(/(^\s*)|(\s*$)/g,"");
	},

	css:function(element,attr,value){
		element.style[attr]=value;
	},

	
	hide:function(element){
			element.style.display="none";
	},

	show:function(element){
		element.style.display="block";
	},

	offset:function(element){
	 	    var x = element.offsetLeft;
		    var y = element.offsetTop;
		    var current=element.offsetParent;
		    if(current!=null){
		    	x+=current.offsetLeft;
		    	y+=current.offsetTop;
		    }
		    return {'x': x, 'y': y};
	 },

	 toggle:function(element){
	 	var computerStyle=document.defaultView.getComputedStyle(element,null);
	 	if(computerStyle.display=="none"){
	 		element.style.display="block";
	 	}else{
	 		element.style.display="none";
	 	}
	 },

	 getEvent:function(event){
	 	return event || window.event;
	 },

	 getViewport:function(){
	 	if(document.compatMode=="BackCompat"){
	 		var docHeight=Math.max(document.body.clientHeight,
	 			document.body.scrollHeight);
	 		var docWidth=Math.max(document.body.clientWidth,
	 			document.body.clientWidth);
	 	}else{
	 		var docHeight=Math.max(document.documentElement.clientHeight,
	 			document.documentElement.scrollHeight);
	 		var docWidth=Math.max(document.documentElement.clientWidth,
	 			document.documentElement.clientWidth);
	 	}
	 	return{'height':docHeight,'width':docWidth}
	 },

	 getPageport:function(event){
	 	var pageX=this.getEvent(event);
	 	var pageX=event.pageX;
	 	var pageY=event.pageY;
	 	if(pageX===undefined){
	 		pageX=event.clientX+this.gerScroll().scrollleft;
	 	}
	 	if(pageY===undefined){
	 		pageY=event.clientY+this.gerScroll().scrolltop;
	 	}
	 	return{'pageY':pageY,'pageX':pageX}
	 },

	 getScroll:function(){
		return{
			'scrollleft':document.documentElement.scrollLeft,
			'scrolltop':document.documentElement.scrollTop
		}
	 },

	 add:function(array){
	 	var html='<p>'+array+'</p>';
	 	Base.getclass("content")[0].innerHTML+=html;
	 }


}
