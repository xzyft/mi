window.onload=function() {

	//轮播
	let dot=document.querySelectorAll('.site-banner .ban-cont .dot ul li');
	let imgs=document.querySelectorAll('.site-banner .ban-cont >img');
	let ban=document.querySelector('.site-banner .ban-cont')
	let rbtn=document.querySelector('.site-banner .ban-cont .btn-r');
	let lbtn=document.querySelector('.site-banner .ban-cont .btn-l');
	banner(dot,imgs,ban,rbtn,lbtn,'hot',1500);



	//购物车
	let cart=document.querySelector('.topbar-cart a')
	let mune=document.querySelector('.cart-menu')
	cart.onmouseover=function(){
		mune.style.background='#fff';
		mune.style.height='100px';
		// mune.style.display='block'
		mune.style.lineHeight='100px';
		cart.style.background='#fff';
		cart.style.color='#ff6700';
	}
	cart.onmouseout=function(){
		mune.style.background='#fff';
		mune.style.height='0px';
		// mune.style.display='none'
		// mune.style.lineHeight='70px';
		cart.style.background='#424242';
		cart.style.color='#b0b0b0';
	};

	// 选项卡11
	let fter=document.querySelectorAll('.site-header .container .header-nav .ww');
	let child=document.querySelectorAll('.site-header .container .header-nav .ww>.a-children')
	console.log(fter)
	console.log(child)
	xuanxiangka(fter,child);

	// 选项卡12
	let leli=document.querySelectorAll('.site-banner .ban-cont .banlist>li');
	let childl=document.querySelectorAll('.site-banner .ban-cont .banlist .li-chi');
	console.log(leli);
	console.log(childl)
	xuanxiangka(leli,childl)

	// 选项卡2
	let li=document.querySelectorAll('.p-main .cont .top .top-li li')
	let lixa=document.querySelectorAll('.p-main .cont .bot .ulr')
	// console.log(li,lixa);
	xuanxiangka2(li,lixa,'hot2');


	// 平移
	let lb=document.querySelector('.fshop-con .top .topr .lsc');
	let rb=document.querySelector('.fshop-con .top .topr .rsc');
	let box=document.querySelector('.fshop-con .bottom .br ul');
	let wid=parseInt(getComputedStyle(box,null).width)/2;
	console.log(lb,rb,box,wid)
	yi(rb,lb,box,wid);


	let i1=document.querySelectorAll('.box .content .u .l:nth-child(1) .bao>li')
	let d1=document.querySelectorAll('.box .content .u .l:nth-child(1) .point>li')
	let ban1=document.querySelector('.box .content .u .l:nth-child(1)')
	let w1=parseInt(getComputedStyle(ban1,null).width)
	let lb1=document.querySelector('.box .content .u .l:nth-child(1) .lbt')
	let rb1=document.querySelector('.box .content .u .l:nth-child(1) .rbt')

	let i2=document.querySelectorAll('.box .content .u .l:nth-child(2) .bao>li')
	let d2=document.querySelectorAll('.box .content .u .l:nth-child(2) .point>li')
	let ban2=document.querySelector('.box .content .u .l:nth-child(2)')
	let w2=parseInt(getComputedStyle(ban2,null).width)
	let lb2=document.querySelector('.box .content .u .l:nth-child(2) .lbt')
	let rb2=document.querySelector('.box .content .u .l:nth-child(2) .rbt')

	let i3=document.querySelectorAll('.box .content .u .l:nth-child(3) .bao>li')
	let d3=document.querySelectorAll('.box .content .u .l:nth-child(3) .point>li')
	let ban3=document.querySelector('.box .content .u .l:nth-child(3)')
	let w3=parseInt(getComputedStyle(ban3,null).width)
	let lb3=document.querySelector('.box .content .u .l:nth-child(3) .lbt')
	let rb3=document.querySelector('.box .content .u .l:nth-child(3) .rbt')

	let i4=document.querySelectorAll('.box .content .u .l:nth-child(4) .bao>li')
	let d4=document.querySelectorAll('.box .content .u .l:nth-child(4) .point>li')
	let ban4=document.querySelector('.box .content .u .l:nth-child(4)')
	let w4=parseInt(getComputedStyle(ban4,null).width)
	let lb4=document.querySelector('.box .content .u .l:nth-child(4) .lbt')
	let rb4=document.querySelector('.box .content .u .l:nth-child(4) .rbt')

	lrban(i1,d1,w1,lb1,rb1,'hot')
	lrban(i2,d2,w2,lb2,rb2,'hot')
	lrban(i3,d3,w3,lb3,rb3,'hot')
	lrban(i4,d4,w4,lb4,rb4,'hot')
}