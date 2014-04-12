(function(){

	var select=Base.getId('select');
	var parea=Base.getClass('num')[0];
	var img=Base.getName('i')[0];
	var action=Base.getClass('action')[0];

	init();
	function init(){
		Animate(function(){
			var tb=new TwoBall();
			tb.init();
		});
		Base.addEvent(select,'change',juged);
		Base.addEvent(action,'click',juged);
	};

	function Animate(fn){
		var timer= setInterval(fn,30);
		setTimeout(function(){
			clearInterval(timer);
		},400);
	};

	function juged(){
			var e=Base.getEvent();
			Base.preventDefault(e);
			if(select.value=='双色球'){
				Animate(function(){
					var tb=new TwoBall();
					tb.init();
				});
			}else if(select.value=='大乐透'){
				Animate(function(){
					var bh=new BigHappy();
					bh.init();
				});
			}else if(select.value=='双D'){
				Animate(function(){
					var td=new TwoD();
					td.init();
				});
			}
	};

	function createrandom(num,length){
		var random =[];
		var index=0;
		while(index<length){
			var R=Math.floor(Math.random()*num+1);
			if(R/10<1){R='0'+R;}
			if(random.indexOf(R)==-1){
				random.push(R);
				index++;
			}
		}
		return random;
	};

	function objecr(o){        //prototype的复制，而不是引用的指向
		function F(){};
		F.prototype=o;
		return new F();
	};

	function inheritPrototype(supertype,subtype){ //两个对象之间的原型复制
		var prototype=objecr(supertype.prototype);
		prototype.constructor=subtype;
		subtype.prototype=prototype;
	};

	function TwoBall(){
		this.RedRandom=createrandom(33,6);
		this.BlueRandom=createrandom(16,1);
		this.num=-147;
	};
	TwoBall.prototype.init=function(){
		this.ball();
		this.picture();
	};
	TwoBall.prototype.ball=function(){
		var ballhtml=[];
		for(var i=0;i<this.RedRandom.length;i++){
			var str='<strong>'+this.RedRandom[i]+'</strong>';
			ballhtml.push(str);
		}
		for(var i=0;i<this.BlueRandom.length;i++){
			var str='<strong style="color:blue">'+this.BlueRandom[i]+'</strong>';
			ballhtml.push(str);
		}
		parea.innerHTML=ballhtml.join('');
	};
	TwoBall.prototype.picture=function(){
		Base.css(img,'backgroundPosition',this.num+'px 0')
	}

	function BigHappy(){
		this.RedRandom=createrandom(35,5);
		this.BlueRandom=createrandom(12,2);
		this.num=-73;
	};
	inheritPrototype(TwoBall,BigHappy);

	function TwoD(){
		this.RedRandom=createrandom(10,3);
		this.BlueRandom=[];
		this.num=0;
	}
	inheritPrototype(TwoBall,TwoD);
	TwoD.prototype.changrandom=function(){
		var R=[];
		for(var i=0;i<this.RedRandom.length;i++){
			R.push(this.RedRandom[i]-1);
		}
		this.RedRandom=R;
	};
	TwoD.prototype.init=function(){
		this.changrandom();
		this.ball();
		this.picture();
	};
})();