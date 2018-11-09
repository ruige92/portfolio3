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
      targets: '#menuIcon path',
      fill: '#fff',
      delay: function(el, i, l) {
        return i * 100;
      }
    })
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
    targets: ['#menuIcon path','#scroll-icon #scroll-item','#scroll-icon #scroll-line'],
    stroke: '#000',
    fill: '#000',
    delay: function(el, i, l) {
      return i * 100;
    }
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
    targets: ['#menuIcon path','#scroll-icon #scroll-item','#scroll-icon #scroll-line'],
    stroke: '#fff',
    fill: '#fff',
    delay: function(el, i, l) {
      return i * 100;
    }
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
  $('body').addClass('disableScroll');
 $('.hamburger').on('mouseover',function(){
   $('nav').addClass('slideLeft');
   $('nav a').addClass('wordLeft');
   $('nav svg').addClass('wordLeft');
   // $('#m-line2').attr("d",null);
   // $('#m-line1').attr("d","m505.94 6.058c-8.077-8.077-21.172-8.077-29.249 0l-470.64 470.64c-8.077 8.077-8.077 21.172 0 29.249 4.038 4.04 9.332 6.058 14.625 6.058s10.586-2.019 14.625-6.059l470.64-470.64c8.076-8.076 8.076-21.171 0-29.248z");
   // $('#m-line3').attr("d","m505.94 476.69l-470.64-470.64c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l470.64 470.64c4.038 4.039 9.332 6.058 14.625 6.058s10.587-2.019 14.624-6.057c8.075-8.078 8.075-21.173-1e-3 -29.25z");
 })
 $('nav').on('mouseleave',function(){
   $('nav').removeClass('slideLeft');
   $('nav a').removeClass('wordLeft');
   $('nav svg').removeClass('wordLeft');
 })
 $('.startBtn').on('click',function(){
   $('.intro-body').fadeOut();
   $('body').removeClass('disableScroll');
   // $(this).fadeOut();
   introAnime();
   callShuffle();
   scrollDownIcon();
   //Adding animations to the intro content
   $('.landing-left .isAnimated').addClass('bounceInLeft');
   $('.landing-left .isAnimated').eq(0).css('animation-delay','.5s');
   $('.landing-left .isAnimated').eq(1).css('animation-delay','.5s');
   $('.landing-left .isAnimated').eq(2).css('animation-delay','.8s');
   $('.landing-left .isAnimated').eq(3).css('animation-delay','1s');
   $('.landing-down').addClass('fadeInUp');
   $('.landing-down').css('animation-delay','3s');
   // $('.landing-content').addClass('animated bounceIn');
 })


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
