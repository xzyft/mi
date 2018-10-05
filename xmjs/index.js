// 轮播图1
function banner(dot,imgs,ban,rbtn,lbtn,hot,time) {
	let num=0;
	let t=setInterval(move,time)
	imgs[0].style.zIndex=2;
	dot[0].classList.add(hot)
	for (let i = 0; i <dot.length; i++) {
		dot[i].onmouseover=function(){
			for (let j=0; j<imgs.length; j++) {
				imgs[j].style.zIndex=1;
				// imgs[j].style.opacity=0 
				dot[j].classList.remove(hot)
			}
			imgs[i].style.zIndex=2;
			dot[i].classList.add(hot)
			// 鼠标移走后继续轮播
			num=i;
		}
	}
	//自动轮播	
	function move(){
		num++;
		if (num==imgs.length) {
			num=0
		}
		for ( let i = 0; i < imgs.length;i++) {
			imgs[i].style.zIndex='1';
			dot[i].classList.remove(hot);
		}
		imgs[num].style.zIndex=2;
		dot[num].classList.add(hot)
		// dot[0].classList.add('hot')
		}

		ban.onmouseover=function(){
			clearInterval(t);
		}
		ban.onmouseout=function(){
			t=setInterval(move,2000)
		}
		// 点击右箭头
		rbtn.onclick=function(){
			move()
		}
		// 点击左箭头
		lbtn.onclick=function(){
			movel()
		}
		function movel(){
			num--;
			if (num<0) {
				num=4
			}
			for ( let i = 0; i < imgs.length;i++) {
			imgs[i].style.zIndex='1';
			dot[i].classList.remove(hot)
		}
		imgs[num].style.zIndex=2;
		dot[num].classList.add(hot)
		}
		//当你窗口市区焦点
		window.onblur=function(){
			clearInterval(t)
		}
		// 获取焦点
		window.onfoucs=function(){
			t=setInterval(move,time)
		}
}
// 选项卡1
function xuanxiangka(fter,child){
	for (let i = 0; i <fter.length; i++) {
		fter[i].onmouseover=function(){
			for (let j= 0; j<child.length; j++) {
				child[j].style.display="none"
				// child[j].style.opacity=0
				// child[j].style.height
			}
			child[i].style.display="block"
			// child[i].style.opacity=1
		}
		fter[i].onmouseout=function(){
			child[i].style.display="none"
			// child[i].style.opacity=0;
		}
	}
}

// 选项卡2
function xuanxiangka2(li,lixa,hot2){
	li[0].classList.add(hot2)
	lixa[0].style.zIndex=2;
	for (let i = 0; i <li.length; i++) {
		li[i].onmouseover=function(){
			for (let j= 0; j<lixa.length; j++) {
				lixa[j].style.zIndex=1;
				li[j].classList.remove(hot2)
			}
			lixa[i].style.zIndex=2;
			li[i].classList.add(hot2);
		}
		li[i].onmouseout=function(){
			for (let j = 0;j<lixa.length; j++) {
			li[j].classList.remove(hot2);
			}
			// lixa[i].style.zIndex=1;
			li[i].classList.add(hot2)
		}
	}
}

// 平移
function yi(rb,lb,box,wid){
	let nu=0;
	rb.onclick=function(){
		nu++;
		if (nu==2) {
			nu=1;
			return;
		}
		box.style.transform='translate('+(-wid*nu)+'px)'
	}
	lb.onclick=function(){
		nu--;
		if (nu==-1) {
			nu=0;
			return;
		}
		box.style.transform='translate('+(-wid*nu)+'px)'
	}

}

// 左右轮播
function lrban(img,dot,w,lbt,rbt,hot,ban,time){
		let t;
		let next=0;
		let now=0;
		img[0].style.left=0;
		dot[0].classList.add(hot)
		for (let i = 0; i<dot.length; i++) {
			dot[i].onclick=function(){
				for (let j = 0; j <dot.length; j++) {
				img[j].style.left=-w+'px'
				dot[j].classList.remove(hot)
				}
				img[i].style.left=0;
				dot[i].classList.add(hot)
			now=i;
			next=i;
			}
		}
		// t=setInterval(mo,time)
		function mo(){
			next++;
			if (next==img.length) {
				next=img.length-1;
				// next=0;
				return;

			}
			img[now].style.left=0;
			img[next].style.left=w+'px'
			animate(img[now],{left:-w},function(){
				dot[now].classList.remove(hot)
			});
			animate(img[next],{left:0},function(){
				for (let j=0;j<dot.length ;j++) {
				dot[j].classList.remove(hot)
				}
				dot[next].classList.add(hot)
			});
			now=next;
		}
		// ban.onmouseover=function(){
		// 	clearInterval(t)
		// }
		// ban.onmouseout=function(){
		// 	t=setInterval(mo,1200);
		// }

		function mol(){
			next--;
			if (next<0) {
				next=0;
				// next=img.length-1;
				return;

			}
			img[now].style.left=0;
			img[next].style.left=-w+'px'
			animate(img[now],{left:w},function(){
				dot[now].classList.remove(hot)
			});
			animate(img[next],{left:0},function(){
				for (let j=0;j<dot.length ;j++) {
				dot[j].classList.remove(hot)
				}
				dot[next].classList.add(hot)
			});
			now=next;
		}
		rbt.onclick=function(){
			mo();
		}
		lbt.onclick=function(){
			mol();
		}
	}