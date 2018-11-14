

$('.navContactIcons').on('mouseenter',function(){
  logoFocus();
}).on('mouseleave',function(){
  logoReturn();
})
const logoFocus=()=>{
  // Wrap every letter in a span
  anime({
    targets:"#mainLogo",
    letterSpacing:['-9px','-5px'],
    duration:200,
    easing:'linear'
  })
}
const logoReturn=()=>{
  // Wrap every letter in a span
  anime({
    targets:"#mainLogo",
    letterSpacing:['-5px','-9px'],
    duration:200,
    easing:'linear'
  })
}
//Animating the menu burger icon to Close icon
//if true, change icon to close, else back to menu icon
const menuToClose=(close)=>{
  if(close==true){
    anime({
      targets:'#m-line1',
      x1:6.9,
      x2:35.2,
      y1:6.3,
      y2:34.6
    })
    anime({
      targets:'#m-line2',
      x1:6.9,
      x2:35.2,
      y1:34.6,
      y2:6.3
    })
  }else{
    anime({
      targets:'#m-line1',
      x1:null,
      x2:40,
      y1:10.4,
      y2:10.4
    })
    anime({
      targets:'#m-line2',
      x1:null,
      x2:40,
      y1:30.4,
      y2:30.4
    })
  }
}

//Global previous color variable for the nav hamburger icon
const navMenuControl=()=>{
  //Method to grab the menuicon color before opening the nav menu
  //Important for when the background color changes,
  //to set the icon back to the opposite color

  $('.hamburger').on('click',function(){
    //animations for each of the nav items
    $('nav a').addClass('animated slideInUp');
    $('.contactIcons a').addClass('animated slideInUp delay-05s');
   //IF menu ISOPEN(closeBurger class), then do the following
   if($('.hamburger').hasClass('closeBurger')){
     //remove animations for each of the nav items
     $('nav a').removeClass('animated slideInUp');
     $('.contactIcons a').removeClass('animated slideInUp delay-05s');
     //change icon back to burger icon
     menuToClose(false);
     $('.hamburger').removeClass('closeBurger');
     // $('nav').removeClass('slideLeft');
     anime({
       targets:'.sidebar nav',
       // width:'0%',
       opacity:0,
       duration:100,
       easing:'linear',
       update:function(){
         $('.sidebar nav').css({'z-index':-1});
       }
     })
     return;
   }
   // $('nav').addClass('slideLeft');
   anime({
     targets:'.sidebar nav',
     // width:'100%',
     opacity:1,
     duration:150,
     easing:'linear',
     update:function(){
       $('.sidebar nav').css({'z-index':8});
     }
   })
   $(this).addClass('closeBurger');
   //change menu icon to close icon
   menuToClose(true);
 })
}

const main=()=>{
  anime({
      targets:['.hamburger','#menuIcon line','#mainLogo'],
      fill: '#000',
      opacity:1,
      stroke: '#000'
    })
  navMenuControl();

}

$(document).ready(main());
