(function(){
 	var $_input=$('.phonenum');
    var $_infor=$('.chongzhiitem_content p');
    var $_select=$('.money');
    var $_strong=$_select.next('strong');
    
	function init(){
		$_input.focus(focuskMethod);
        $_input.blur(blurMethod);
        $_input.keydown(keydownMethod);
        $_input.keyup(keyupMethod);
        $_select.change(changMethod);
	};

	function changMethod(){
		var num=parseFloat(this.value);
		var textpre=(num-num/100.0).toFixed(1);
		var textnext=(num+num/100.0).toFixed(1);
		$_strong.text(textpre+'-'+textnext);
	};

    function focuskMethod(){
		var value=$_input.val();
        if(value=='请输入手机号码'){
            $_input.css('color','black').val('');
        }
    };

	function blurMethod(){
		var value=$_input.val();
		if(value==''){
			$_input.css('color','#999999').val('请输入手机号码');
		}
	};

	function keydownMethod(){
		var value=$_input.val();
		var str='<span>请输入正确的手机号码</span>';
        if(value.length==11){return;}
		else{
			$_infor.html(str);
            var $_span=$('.chongzhiitem_content p span');
			$_span.css('color','#e4393c');
		}
	};

	function keyupMethod(){
		var value=$_input.val();
		var str='<span>有效号码(*^__^*)</span>';
		var pattern=/\d{11}/g;
        var phonepattern=/1[358][012356789]\d{8}/g;
        var $_span=$('.chongzhiitem_content p span');
		if(value.length!=11||!pattern.test(value)){return;}
		else if($_span.html()!='请输入正确的手机号码'){return;}
		else if(phonepattern.test(value)){
			$_infor.html(str); 
            $_span=$('.chongzhiitem_content p span');
			$_span.css('color','#e4393c');
		}
	};

init();

})();