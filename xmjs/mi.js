
	// let num=0;
	// let t=setInterval(move,1500)
	// let dots=document.querySelectorAll('.site-banner .ban-cont .dot ul li')
	// let imgs=document.querySelectorAll('.site-banner .ban-cont >img')
	// let banner=document.querySelector('.site-banner .ban-cont')
	// let rbtn=document.querySelector('.site-banner .ban-cont .btn-r')
	// let lbtn=document.querySelector('.site-banner .ban-cont .btn-l')
	// console.log(dots)
	// console.log(imgs)
	// imgs[0].style.zIndex=2;
	// dots[0].style.background='#fff'
	// // dot[0].classList.add('hot')
	// for (let i = 0; i <dots.length; i++) {
	// 	dots[i].onmouseover=function(){
	// 		for (let j=0; j<imgs.length; j++) {
	// 			imgs[j].style.zIndex=1;
	// 			// imgs[j].style.opacity=0 
	// 			dots[j].style.background='#333'
	// 			// dot[j].classList.remove('hot')
	// 		}
	// 		imgs[i].style.zIndex=2;
	// 		dots[i].style.background='#fff'
	// 		// dot[0].classList.add('hot')
	// 		// 鼠标移走后继续轮播
	// 		num=i;
	// 	}
	// }

	// //自动轮播
	
	// function move(){
	// 	num++;
	// 	if (num==5) {
	// 		num=0
	// 	}
	// 	for ( let i = 0; i < imgs.length;i++) {
	// 		imgs[i].style.zIndex='1';
	// 		dots[i].style.background='#333';
	// 	}
	// 	imgs[num].style.zIndex=2;
	// 	dots[num].style.background='#fff'
	// 	// dot[0].classList.add('hot')
	// 	}

	// 	banner.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	banner.onmouseout=function(){
	// 		t=setInterval(move,2000)
	// 	}


	// 	// 点击右箭头
	// 	rbtn.onclick=function(){
	// 		move()
	// 	}
	// 	// 点击左箭头
	// 	lbtn.onclick=function(){
	// 		movel()
	// 	}
	// 	function movel(){
	// 		num--;
	// 		if (num<0) {
	// 			num=4
	// 		}
	// 		for ( let i = 0; i < imgs.length;i++) {
	// 		imgs[i].style.zIndex='1';
	// 		dots[i].style.background='#333';
	// 	}
	// 	imgs[num].style.zIndex=2;
	// 	dots[num].style.background='#fff'
	// 	// dot[0].classList.add('hot')
	// 	}

	// 	//当你窗口市区焦点
	// 	window.onblur=function(){
	// 		clearInterval(t)
	// 	}
	// 	// 获取焦点
	// 	window.onfoucs=function(){
	// 		t=setInterval(move,2000)
	// 	}

// 左右轮播
	// 获取元素
	// let 元素
	//获取长度并转换
	let w =
	let t;
	let now=0;
	let next=0；
	// ;/let next=1
	//初始化默认第一个有图
	img[0].style.left=0;
	//自动轮播
	 t=setInterval（ma,time）
	function ma(){
		// 必须大一
		next++
		// 判断不能大于图片数量
		if (next==元素.length) {
			// 循环的话next=0
			next=0;
			//截止不循环next=元素。length-1；return；
		}
		// 定义当前图片和下一张图片
		元素[now]
		元素[next].style.let=w+'单位'
		animate()

		now=next
	}
	//定义开关



//平移选项卡
//111获取元素
 左右箭头  大盒子以及大盒子的宽度
//222点击右箭头
