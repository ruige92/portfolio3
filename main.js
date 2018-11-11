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
//Method that sets random word with random color to selected DOM.
const callShuffle=()=>{
  let newInt = setInterval(function(){

    // let newWord = randomWord();
    $('.landing-left [data-chaffle]').text(randomWord());
    $('.landing-left [data-chaffle]').css('color',randomColor());
    shuffleText();
  },5000);
}

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
const pageSlideControl=()=>{
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "#home-wrapper", duration: '100%'})
          .on("enter", function () {
            //Change theme to white
            // sliderBackgroundTextIn();
            sliderImageSectionShow();
            whiteBurger();
          })
          .on("leave", function () {
            //Change theme to black
            // sliderBackgroundTextOut();
            sliderImageSectionHide();
            blackBurger();
          })
          .addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
          .addTo(controller);

  // var scene2 = new ScrollMagic.Scene({triggerElement: "#landing-about", duration: '20%'})
  //         .on("enter", function () {
  //           //Change theme to white
  //
  //         })
  //         .on("leave", function () {
  //           //Change theme to black
  //
  //         })
  //         .addIndicators({name: "1 - change home page content scaling"}) // add indicators (requires plugin)
  //         .addTo(controller);
}

//Animation methods for slider
const sliderImageSectionShow=()=>{
  anime({
    targets:['#image-carousel'],
    // scale:'0.8',
    opacity:'1',
    duration:500,
    easing: 'easeInQuart',
    update:function(){
      $('#image-carousel img').addClass('animated slideInLeft');
      $('#slider-control').addClass('animated fadeInLeft');
      $('.image-description').addClass('animated fadeInRight');
      $('#background-text').addClass('animated fadeInUp');
    }
  })
}
const sliderImageSectionHide=()=>{
  anime({
    targets:['#image-carousel','#background-text'],
    // scale:'0.8',
    opacity:'0',
    duration:100,
    easing: 'easeInQuart',
    update:function(){
      $('#image-carousel img').removeClass('animated slideInLeft')
      $('#slider-control').removeClass('animated fadeInLeft');
      $('.image-description').removeClass('animated fadeInRight');
      $('#background-text').removeClass('animated fadeInUp');
    }
  })
}

const sliderImageOut=()=>{
  anime({
    targets:'#image-carousel img',
    scale:'0.8',
    opacity:'0.8',
    duration:200,
    easing: 'easeInQuart',
  })
}
const sliderImageIn=()=>{
  anime({
    targets:'#image-carousel img',
    scale:'1',
    opacity:'1',
    duration:300,
    easing: 'easeInQuart'
  })
}
const sliderBarOut=()=>{
  anime({
    targets:'.dragdealer .red-bar',
    width:'65px',
    backgroundColor:'#000',
    duration:200,
    easing: 'linear'
  })
}
const sliderBarIn=()=>{
  anime({
    targets:'.dragdealer .red-bar',
    width:'50px',
    backgroundColor:'#888',
    duration:200,
    easing: 'linear'
  })
}
const sliderDescOut=()=>{
  anime({
    targets:'.image-description',
    opacity:0,
    easing: 'linear',
    duration:300,
    scale:0.9,
  })
}
const sliderDescIn=()=>{
  anime({
    targets:'.image-description',
    opacity:1,
    scale:1,
    duration:300,
    easing: 'linear'
  })
}
const sliderBackgroundTextOut=()=>{
  anime({
    targets:'#background-text',
    opacity:0,
    duration:500,
    easing: 'linear'
  })
}
const sliderBackgroundTextIn=()=>{
  anime({
    targets:'#background-text',
    opacity:1,
    duration:500,
    easing: 'linear'
  })
}

//global dragdealers
let drag = new Dragdealer;
let slider = new Dragdealer;
//Method for checking, adding effects when drag using slider.
const dragSlider=()=>{
  //initialise a slider for images
  drag = new Dragdealer('slider-control', {
    steps: 4,
    speed: 0.5,
    loose: true,
    animationCallback: function(x, y) {
      let dragStep = 1;
      dragStep = Object.values(this.getStep())[0];
      $('#slider-control .value').text(dragStep+" / 4");
      slider.setStep(dragStep);
    }
  });
  let isDragging = false;
  $("#slider-control .red-bar")
  .mousedown(function() {
      //clear out animated class to allow slide animation
      $('#image-carousel img').removeClass('animated slideInLeft')
      $('.image-description').removeClass('animated fadeInRight');
      $('#background-text').removeClass('animated fadeInUp');
      isDragging = false;
      // $('#image-carousel img').addClass('dragging');
      sliderImageOut();
      //modifying the scroll bar if clicked
      sliderBarOut();
      //modifying the img desc if clicked
      sliderDescOut();
      //modifying the background txt if clicked
      sliderBackgroundTextOut();
  })
  .mousemove(function() {
      isDragging = true;
  })
  $(document).mouseup(function() {
      let wasDragging = isDragging;
      isDragging = false;
      if (!wasDragging) {
        sliderImageIn();
        //modifying the scroll bar if clicked but no drag
        sliderBarIn();
        //modifying the img desc if clicked but no drag
        sliderDescIn();
        //modifying the background txt if clicked but no drag
        sliderBackgroundTextIn();
      }
      if(wasDragging){
        //
        sliderImageIn();
        //modifying the scroll bar after dragged
        sliderBarIn();
        //modifying the img desc after dragged
        sliderDescIn();
        //modifying the background text after dragged
        sliderBackgroundTextIn();
        let step = Object.values(slider.getStep())[0];
        let value = Object.values(slider.getValue())[0];
        //
        //Update the slider indicator when using Image slide DIRECTLY
        if(step==1){
          drag.setValue(value);
          $('#background-text').text('CISCO');
        }else if(step==2){
          drag.setValue(value);
          $('#background-text').text('KENT');
        }else if(step==3){
          drag.setValue(value);
          $('#background-text').text('RIOT');
        }else if(step==4){
          drag.setValue(value);
          $('#background-text').text('GGP');
        }
      }
    })
}
//Method for checking, adding effects when drag images DIRECTLY.
const contentSlider=()=>{
  //initialise a image drag
  slider = new Dragdealer('image-carousel', {
    steps: 4,
    speed: 0.5,
    loose: true,
    requestAnimationFrame: true,
  });
  //CHECKING IMAGE DRAG
  let isDragging = false;
  $(".slide")
  .mousedown(function() {
      //clear out animated class to allow slide animation
      $('#image-carousel img').removeClass('animated slideInLeft')
      $('.image-description').removeClass('animated fadeInRight');
      $('#background-text').removeClass('animated fadeInUp');
      isDragging = false;
      // $('#image-carousel img').addClass('dragging');
      sliderImageOut();
      //modifying the scroll bar if clicked
      sliderBarOut();
      //modifying the img desc if clicked
      sliderDescOut();
      //modifying the background txt if clicked
      sliderBackgroundTextOut();
  })
  .mousemove(function() {
      isDragging = true;
  })
  $(document).mouseup(function() {
      let wasDragging = isDragging;
      isDragging = false;
      if (!wasDragging) {
        //modifying the scroll bar if clicked but no drag
        sliderImageIn();
        //modifying the scroll bar if clicked but no drag
        sliderBarIn();
        //modifying the img desc if clicked but no drag
        sliderDescIn();
        //modifying the background txt if clicked but no drag
        sliderBackgroundTextIn();
      }
      if(wasDragging){
        //
        sliderImageIn();
        //modifying the scroll bar if clicked but no drag
        sliderBarIn();
        //modifying the img desc if clicked but no drag
        sliderDescIn();
        //modifying the background txt if clicked but no drag
        sliderBackgroundTextIn();
        // console.log('dragged')
        let step = Object.values(slider.getStep())[0];
        let value = Object.values(slider.getValue())[0];
        //Update the slider indicator when using Image slide DIRECTLY
        if(step==1){
          drag.setValue(value);
          $('#background-text').text('CISCO');
        }else if(step==2){
          drag.setValue(value);
          $('#background-text').text('KENT');
        }else if(step==3){
          drag.setValue(value);
          $('#background-text').text('RIOT');
        }else if(step==4){
          drag.setValue(value);
          $('#background-text').text('GGP');
        }
      }

  });

  // $('#image-carousel img').each(function(){
  //   $(this).on('click',function(){
  //     if(isDragging){
  //       $(this).parent().siblings().children().addClass('halfVisible')
  //     }
  //
  //   })
  // })

}

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

   introAnime();
   callShuffle();
   pageSlideControl();
   scrollDownIcon();
   contentSlider();
   dragSlider();
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
 //
 // $('#normTwitter').on('mouseenter',function(){
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
 // $('#normGmail').on('mouseenter',function(){
 //   anime({
 //     targets:'#normGmail',
 //     rotate:'0.05turn'
 //   })
 // }).on('mouseleave',function(){
 //   anime({
 //     targets:'#normGmail',
 //     rotate:'0turn'
 //   })
 // })
 // $('#normLinked').on('mouseenter',function(){
 //   anime({
 //     targets:'#normLinked',
 //     rotate:'0.05turn'
 //   })
 // }).on('mouseleave',function(){
 //   anime({
 //     targets:'#normLinked',
 //     rotate:'0turn'
 //   })
 // })
 // $('#normPhone').on('mouseenter',function(){
 //   anime({
 //     targets:'#normPhone',
 //     rotate:'0.05turn'
 //   })
 // }).on('mouseleave',function(){
 //   anime({
 //     targets:'#normPhone',
 //     rotate:'0turn'
 //   })
 // })

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
