// const scrollDisplay=()=>{
    /* Every time the window is scrolled ... */
//   $(window).scroll(function() {
//     AOS.refresh();
//     if ($(this).scrollTop()>700){
//       $('#topNav').slideDown('fast');
//       $('.mainNav').addClass('dropitDown');
//      }
//     else if ($(this).scrollTop()<700)
//      {
//        $('#topNav').fadeOut('fast');
//        $('.mainNav').removeClass('dropitDown');
//      }
//  });
// }
// const unload=()=>{
//   let lineDrawing = anime({
//     targets: '.home-header .lines path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     stroke: '#fff',
//     fill:'#fff',
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     opacity:0,
//     loop: false
//   });
// }

//Intro animation after ENTER is clicked.
const introAnime=()=>{
  let timeLine = anime.timeline();
  timeLine
    .add({
      targets:'.intro-bg',
      translateX:2200,
      easing:'easeOutExpo',
      duration:2000
      // easing: 'easeInCirc',
      // duration:10
    })
    .add({
      targets:['#normTwitter','#normGmail','#normLinked','#normPhone','#menuIcon line'],
      fill: '#fff',
      stroke: '#fff',
      delay:1000,
    })
    // .add({
    //   targets: '#menuIcon line',
    //   stroke: '#fff'
    // })
    // .add({
    //   targets: '.intro-header .lines path',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   stroke: '#000',
    //   fill:'#000',
    //   easing: 'easeInOutSine',
    //   duration: 1500,
    //   delay: function(el, i) { return i * 250 },
    //   direction: 'alternate',
    //   opacity:1,
    //   loop:1
    // })
    // .add({
    //   targets: '.intro-header .lines path',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   stroke: '#000',
    //   fill:'#000',
    //   easing: 'easeInOutSine',
    //   duration: 1000,
    //   delay: function(el, i) { return i * 250 },
    //   direction: 'alternate',
    //   opacity:0,
    //   loop: false
    // })

    // .add({
    //   targets:'.landing-content',
    //   opacity:1,
    //   translateX:'100px',
    //   easing:'easeInCirc',
    // })
}

// const loading=()=>{
//   let homeBackground = anime({
//     targets:'.homeImage',
//     backgroundColor:'#fff',
//     easing: 'easeInOutSine',
//     duration:1000,
//     loop:false
//   })
//
//   let lineDrawing = anime({
//     targets: '.home-header .lines path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     stroke: '#19f6e8',
//     fill:'#19f6e8',
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     opacity:1,
//     loop: 1
//   });
// }

// anime({
//   targets:$('.startBtn').attr('data-text'),
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   update:function(){
//     setTimeout(function(){
//       $('.startBtn').attr('data-text','进入');
//       $('.startBtn').text('进入');
//     },5000)
//   }
// })
// setInterval(function(){
//   let introDataText = console.log($('.startBtn').attr('data-text'));
//   let introText = console.log($('.startBtn').text());
//   $('.startBtn').attr('data-text','进入');
//   $('.startBtn').text('进入');
// },5000);

// let introWordChange
//Animated SVG scroll down icon.
const scrollDownIcon=()=>{
  anime({
    targets:'#scroll-icon #scroll-item',
    // d:'m2.5 18.5c-1.1 0-2-0.9-2-2v-14c0-1.1 0.9-2 2-2s2 0.9 2 2v14c0 1.1-0.9 2-2 2z',
    delay:1500,
    translateY:20,
    opacity:1,
    easing:'easeInOutSine',
    loop:true
  })
  anime({
    targets:'#scroll-icon #scroll-line',
    opacity:1,
    loop:false
  })
}
//Random color generator
const randomColor=()=>{
  let colors = ['#4286f4','#f44141','#f4cd41','#41f48b','#ae5be5',''];
  let color = colors[Math.floor(Math.random()*colors.length)];
  return color;
}
//Random word generator
const randomWord=()=>{
  let words = ['JUNIOR', 'CREATIVE', 'HUNGRY', 'HAPPY', 'CURIOUS', 'ADVENTUROUS'];
  let word = words[Math.floor(Math.random()*words.length)];
  return word;
}
//Method that sets random word with random color to selected DOM.
const callShuffle=()=>{
  let newInt = setInterval(function(){

    // let newWord = randomWord();
    $('.landing-left [data-chaffle]').text(randomWord());
    $('.landing-left [data-chaffle]').css('color',randomColor());
    shuffleText();
  },5000);
}
//shuffle generator, initialise
const shuffleText=()=>{
  const elements = document.querySelectorAll('.landing-left [data-chaffle]');
  Array.prototype.forEach.call(elements, function (el) {
    const chaffle = new Chaffle(el, {
      speed:"20",
      delay:"200"
    });
    chaffle.init();
  });
};

//Changing background to black, other items to white
const whiteBurger=()=>{
  anime({
    targets: ['#menuIcon line','#scroll-icon #scroll-item','#scroll-icon #scroll-line','#normTwitter','#normGmail','#normLinked','#normPhone'],
    stroke: '#000',
    fill: '#000',
    delay: 300
  })
  anime({
    targets:['#home-wrapper','.intro-content'],
    backgroundColor:'#fff',
    duration:100,
    easing:'easeOutQuint'
  })
}
//Changing background to white, other items to black
const blackBurger=()=>{
  anime({
    targets:['#home-wrapper','.intro-content'],
    backgroundColor:'#000',
    duration:100,
    easing:'easeOutQuint'
  })
  anime({
    targets: ['#menuIcon line','#scroll-icon #scroll-item','#scroll-icon #scroll-line','#normTwitter','#normGmail','#normLinked','#normPhone'],
    stroke: '#fff',
    fill: '#fff',
    delay: 300
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
//change menu icon's color value
const setIconColor=(color)=>{
  anime({
    targets:['#m-line1','#m-line2'],
    stroke:color
  })
}

//Using scroll magic to determine when to trigger page transition,
//Intro to First Section
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: '100%'})
        .on("enter", function () {
          //Change theme to white
          whiteBurger();
        })
        .on("leave", function () {
          //Change theme to black
          blackBurger();
        })
        .addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
        .addTo(controller);



//Main method
const main =()=>{
  //force page scroll to top upon PAGE REFRESH
  $(document).ready(function(){
    $(this).scrollTop(0);
  });
  //disable scrolling on intro page
  $('body').addClass('overflowHidden');
  //When Menu Icon is clicked
 $('.hamburger').on('click',function(){
   //ALWAYS set menu icon to BLACK
   setIconColor('#000');
   //disable scrolling on menu page
   $('body').addClass('overflowHidden');
   //IF menu ISOPEN(closeBurger class), then do the following
   if($('.hamburger').hasClass('closeBurger')){
     $('body').removeClass('overflowHidden');
     //change icon back to burger icon
     menuToClose(false);
     $('.hamburger').removeClass('closeBurger');
     $('nav').removeClass('slideLeft');
     $('nav a').removeClass('wordLeft');
     $('nav svg').removeClass('wordLeft');
     return;
   }
   $('nav').addClass('slideLeft');
   $('nav a').addClass('wordLeft');
   $('nav svg').addClass('wordLeft');
   $(this).addClass('closeBurger');
   //change menu icon to close icon
   menuToClose(true);
 })
 // $('.closeBurger').on('click',function(){
 //   closeToMenu();
 //   $(this).removeClass('closeBurger');
 //   $('nav').removeClass('slideLeft');
 //   $('nav a').removeClass('wordLeft');
 //   $('nav svg').removeClass('wordLeft');
 // })
 // $('nav').on('mouseleave',function(){
 //   $('nav').removeClass('slideLeft');
 //   $('nav a').removeClass('wordLeft');
 //   $('nav svg').removeClass('wordLeft');
 // })
 $('.startBtn').on('click',function(){
   //remove scroll disable when intro button is clicked
   $('body').removeClass('overflowHidden');
   $('.intro-body').fadeOut();
   $('body').removeClass('disableScroll');
   // $(this).fadeOut();
   introAnime();
   callShuffle();
   scrollDownIcon();
   //Adding animations to the intro content
   $('.landing-left .isAnimated').addClass('fadeIn');
   $('.landing-left .isAnimated').eq(0).css('animation-delay','1s');
   $('.landing-left .isAnimated').eq(1).css('animation-delay','1.2s');
   $('.landing-left .isAnimated').eq(2).css('animation-delay','1.4s');
   $('.landing-left .isAnimated').eq(3).css('animation-delay','1.6s');
   $('.landing-down').addClass('fadeInUp');
   $('.landing-down').css('animation-delay','3s');
   // $('.landing-content').addClass('animated bounceIn');
   $('.hamburger svg').addClass('animated slideInLeft');
   $('.hamburger svg').css('animation-delay','3s');
   $('.navContactIcons a svg').addClass('animated slideInRight');
   $('.navContactIcons a svg').eq(0).css('animation-delay','3s');
   $('.navContactIcons a svg').eq(1).css('animation-delay','3.2s');
   $('.navContactIcons a svg').eq(2).css('animation-delay','3.4s');
   $('.navContactIcons a svg').eq(3).css('animation-delay','3.6s');

 })
 //Initialise Icon colors for normal and nav icons
 $('.contactIcons').children().each(function(){
   $(this).on('mouseover',function(){
     $(this).children().attr('fill','#000');
   }).on('mouseleave',function(){
     $(this).children().attr('fill','#ccc');
   })
 })
 $('nav a').each(function(){
   $(this).on('mouseover',function(){
     $(this).css('color','#000');
   }).on('mouseleave',function(){
     $(this).css('color','#ccc');
   })
 })
 // Animation each contact icons
 $('#normTwitter').on('mouseenter',function(){
   anime({
     targets:'#normTwitter',
     rotate:'0.05turn'
   })
 }).on('mouseleave',function(){
   anime({
     targets:'#normTwitter',
     rotate:'0turn'
   })
 })
 // $('#normTwitter').on('mouseover',function(){
 //   anime({
 //     targets:'#normTwitter',
 //     rotate:'0.05turn'
 //   })
 // }).on('mouseleave',function(){
 //   anime({
 //     targets:'#normTwitter',
 //     rotate:'0turn'
 //   })
 // })


 // loading();

  // anime({
  //   targets: 'polygon',
  //   points:
  //     '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  //   loop: true
  // });


}

$(document).ready(main());


// img2.addEventListener('mouseover',move2);
//
//
// const out=()=>{
//   img1.classList.remove('moveLeft');
// }
// grid2.addEventListener('mouseout',out);
