const menuBackdrop = document.getElementById('slideover-bg');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnDesktop = document.querySelector('.menu-btn-desktop');
const menuCyklesBtn = document.querySelector('.cykles-btn');

const menuMobile = document.querySelector('.mobile-menu');
const menuCykle = document.querySelector('.menu-cykle');


/***
 * Open menu
 */
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuBackdrop.classList.toggle('active');
	// menu.classList.toggle('active');
	menuMobile.classList.toggle('active');

  menuCykle.classList.remove('active');

  if(menuBtn.classList.contains("active")){
	document.body.classList.add("overflow-hidden");
  }else{
	document.body.classList.remove("overflow-hidden");
  }
  
})

/**
 * Open menu backdrop
 */
menuBackdrop.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menuBackdrop.classList.remove('active');
	// menu.classList.toggle('active');
	menuMobile.classList.remove('active');
	document.body.classList.toggle("overflow-hidden");
})

/**
 * Open menu  cyckles
 */
 menuCyklesBtn.addEventListener('click', function(){
	menuCykle.classList.toggle('active');
	if(menuCykle.classList.contains("active")){
		document.body.classList.add("overflow-hidden");
	  }else{
		document.body.classList.remove("overflow-hidden");
	  }
	
})

/**
 * Open menu desktop
 */
 menuBtnDesktop.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuBackdrop.classList.toggle('active');
	// menu.classList.toggle('active');
	menuMobile.classList.toggle('active');

  menuCykle.classList.remove('active');
  if(menuBtn.classList.contains("active")){
	document.body.classList.add("overflow-hidden");
  }else{
	document.body.classList.remove("overflow-hidden");
  }
  
	
})





