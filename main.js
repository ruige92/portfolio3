
//Intro animation after ENTER is clicked.
const introAnime=()=>{
  let timeLine = anime.timeline();
  timeLine
    .add({
      targets:'.intro-bg',
      translateX:2200,
      easing:'easeOutExpo',
      duration:2000
    })
    .add({
      targets:['.hamburger','#menuIcon line','#mainLogo'],
      fill: '#fff',
      opacity:1,
      stroke: '#fff',
      delay:500,
    })

}


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
    targets: ['#menuIcon line','#scroll-icon #scroll-item','#scroll-icon #scroll-line','#mainLogo'],
    stroke: '#000',
    fill: '#000',
    delay: 300
  })
  anime({
    targets:['#home-wrapper','.intro-content','#skills-wrapper'],
    backgroundColor:'#fff',
    duration:50,
    easing:'easeOutQuint'
  })
}
//Changing background to white, other items to black
const blackBurger=()=>{
  anime({
    targets:['#home-wrapper','.intro-content','#skills-wrapper'],
    backgroundColor:'#000',
    duration:50,
    easing:'easeOutQuint'
  })
  anime({
    targets: ['#menuIcon line','#scroll-icon #scroll-item','#scroll-icon #scroll-line','#mainLogo'],
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
    stroke:color,
    duration:50,
    easing:'linear'
  })
}

const landingContentIn=()=>{
  anime({
    targets:'#landing-wrapper',
    duration:500,
    opacity:0.8,
    scale:1,
    easing:'linear',
  })
}
const landingContentOut=()=>{
  anime({
    targets:'#landing-wrapper',
    duration:200,
    opacity:1,
    scale:1.1,
    easing:'linear',
  })
}
//Using scroll magic to determine when to trigger page transition,
//Intro to First Section
const pageSlideControl=()=>{
  //this tween has a different ease in each direction
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "#home-wrapper"})
          .on("enter", function () {
            //Change theme to white
            // sliderBackgroundTextIn();
            sliderImageSectionShow();
            // landingContentIn();
            whiteBurger();
          })
          .on("leave", function () {
            //Change theme to black
            // sliderBackgroundTextOut();

            // landingContentOut();
            blackBurger();
          })
          .addIndicators({name: "1 - enter Exp Section"}) // add indicators (requires plugin)
          .addTo(controller);

  var scene2 = new ScrollMagic.Scene({triggerElement: "#skills-wrapper", duration: '100%'})
          .on("enter", function () {
            //Change theme to white
            sliderImageSectionHide();
            //
            $('#skills-wrapper').removeClass('fadeOut');
            $('#box1').removeClass('fadeOutLeft');
            $('#box2').removeClass('fadeOutDown');
            $('#box3').removeClass('fadeOutRight');
            //
            $('#skills-wrapper').addClass('animated fadeIn');
            $('#box1').addClass('animated fadeInLeft');
            $('#box2').addClass('animated fadeInUp');
            $('#box3').addClass('animated fadeInRight');
            skillTitlesAnimation('#techTitle');
            skillTitlesAnimation('#desTitle');
            skillTitlesAnimation('#proTitle');
          })
          .on("leave", function () {
            //Change theme to black
            sliderImageSectionShow();

            $('#skills-wrapper').removeClass('fadeIn');
            $('#box1').removeClass('fadeInLeft');
            $('#box2').removeClass('fadeInUp');
            $('#box3').removeClass('fadeInRight');
            //
            $('#skills-wrapper').addClass('fadeOut');
            $('#box1').addClass('fadeOutLeft');
            $('#box2').addClass('fadeOutDown');
            $('#box3').addClass('fadeOutRight');
          })
          .addIndicators({name: "2 - enter Skill Section"}) // add indicators (requires plugin)
          .addTo(controller);

  var scene3 = new ScrollMagic.Scene({triggerElement: "#landing-about"})
        .on("enter", function () {
          //Change theme to white
          anime({
            targets:['.hamburger','.navContactIcons'],
            duration:200,
            translateY:-20,
            easing:'linear'
          })
          // anime({
          //   targets:'#landing-wrapper',
          //   duration:200,
          //   scale:1.1,
          //   easing:'linear',
          // })
        })
        .on("leave", function () {
          //Change theme to black
          anime({
            targets:['.hamburger','.navContactIcons'],
            duration:200,
            translateY:0,
            easing:'linear'
          })
          // anime({
          //   targets:'#landing-wrapper',
          //   duration:200,
          //   scale:1,
          //   easing:'linear',
          // })
        })
        .addIndicators({name: "0 - Inital section"}) // add indicators (requires plugin)
        .addTo(controller);
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
      $('#background-text').removeClass('fadeOutDown');
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
      $('#background-text').removeClass('fadeInUp');
      $('#background-text').addClass('fadeOutDown');
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
    duration:300,
    easing: 'linear'
  })
}
const sliderBackgroundTextIn=()=>{
  anime({
    targets:'#background-text',
    opacity:1,
    duration:300,
    easing: 'linear'
  })
}

const sliderHeaderText=(tag)=>{
  // Wrap every letter in a span
  $(tag).each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime({
    targets: tag + ' .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 300 + 30 * i;
    }
  });
}

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
          sliderHeaderText('.header1');
          // $('#background-text').text('CISCO');
        }else if(step==2){
          drag.setValue(value);
          sliderHeaderText('.header2');
          // $('#background-text').text('KENT');
        }else if(step==3){
          drag.setValue(value);
          sliderHeaderText('.header3');
          // $('#background-text').text('RIOT');
        }else if(step==4){
          drag.setValue(value);
          sliderHeaderText('.header4');
          // $('#background-text').text('GGP');
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
          sliderHeaderText('.header1');
          // $('#background-text').text('CISCO');
        }else if(step==2){
          drag.setValue(value);
          sliderHeaderText('.header2');
          // $('#background-text').text('KENT');
        }else if(step==3){
          drag.setValue(value);
          sliderHeaderText('.header3');
          // $('#background-text').text('RIOT');
        }else if(step==4){
          drag.setValue(value);
          sliderHeaderText('.header4');
          // $('#background-text').text('GGP');
        }
      }
  });
}

const skillTitlesAnimation=(tag)=>{
  $(tag).each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime({
      targets: tag+' .letter',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: function(el, i) {
        return 300 + 30 * i;
      }
  });
}

$('#techTitle').on('click',function(){
  $('#box1').removeClass('fadeInLeft');
  $('#box2').removeClass('fadeInUp');
  $('#box3').removeClass('fadeInRight');
  //disable scrolling on intro page
  $('body').addClass('overflowHidden');
  $('.skill-titles').removeClass('techTitle desTitle proTitle');
  $('.skill-titles').addClass('techTitle');
  $('#techTitle').fadeOut();
  $('#desTitle').fadeOut();
  $('#proTitle').fadeOut();
  //
  // $('.skill-titles').fadeOut();
  anime({
    targets:['.skill-titles','#box2','#box3'],
    opacity:0,
    duration:50,
    easing:'linear'
  })
  $('.hamburger').fadeOut();
  $('.navContactIcons').fadeOut();
  $('#box1').css({'background-color':'rgba(255, 255, 255, 0)'});
  // $('#box2').fadeOut();
  // $('#box3').fadeOut();
  $('#box1 svg').css({
    'position':'absolute',
    'left':'0',
    'top':'0',
    'z-index':'6'
  })
  anime({
    targets:['#deshHead','#proHead'],
    opacity:0,
    duration:200
  })
  $('#techHead').addClass('animated fadeInLeft delay-05s');
  $('.skill-head').css({
    'position':'absolute',
    'left':'0',
    'top':'0',
    'z-index':'6'
  })
  var techTimeline = anime.timeline();
  techTimeline
    .add({
      targets:'#circle',
      r:[20,250],
      duration:500,
      // translateX:-220,
      easing:'easeInOutSine',
    })
    .add({
      targets:'#circle',
      translateX:[0,-220],
      easing:'easeOutExpo',
    })

    //
    anime({
      targets:['#techList','.skill-back-btn','#techHead'],
      duration:200,
      delay:1000,
      opacity:1,
      easing:'linear',
      update:function(){
        $('#techList ul li').each(function(){
          $(this).addClass('animated fadeInRight');
          for (let i =0; i<$('#techList ul li').length; i++){
            $('#techList ul li').eq(i).css({'animation-delay':'1.'+i+'5s'})
          }
        })
      }
    })
    // $('#techList').fadeIn();
    // $('#techList').css({
    //   opacity:1,
    //   'z-index':4
    // });
    $('#desList').css({'z-index':3})
    $('#proList').css({'z-index':3})

})

$('#desTitle').on('click',function(){
  $('#box1').removeClass('fadeInLeft');
  $('#box2').removeClass('fadeInUp');
  $('#box3').removeClass('fadeInRight');
  //disable scrolling on intro page
  $('body').addClass('overflowHidden');
  $('.skill-titles').removeClass('techTitle desTitle proTitle');
  $('.skill-titles').addClass('desTitle');
  //
  // $('.skill-titles').fadeOut();
  anime({
    targets:['.skill-titles','#box1','#box3'],
    opacity:0,
    duration:50,
    easing:'linear'
  })
  $('.hamburger').fadeOut();
  $('.navContactIcons').fadeOut();
  $('#box2').css({'background-color':'rgba(255, 255, 255, 0)'});
  // $('#box2').fadeOut();
  // $('#box3').fadeOut();
  $('#box2 svg').css({
    'position':'absolute',
    'left':'0',
    'top':'0',
    'z-index':'6'
  })
  anime({
    targets:['#proHead','#techHead'],
    opacity:0,
    duration:200
  })
  $('#desHead').addClass('animated fadeInLeft delay-05s');
  $('.skill-head').css({
    'position':'absolute',
    'left':'0',
    'top':'0',
    'z-index':'6'
  })
  var desTimeline = anime.timeline();
  desTimeline
    .add({
      targets:'#circle2',
      r:[20,250],
      duration:500,
      // translateX:-220,
      easing:'easeInOutSine',
    })
    .add({
      targets:'#circle2',
      translateX:[0,-250],
      easing:'easeOutExpo',
    })

    //
    anime({
      targets:['#desList','.skill-back-btn'],
      duration:200,
      delay:1000,
      opacity:1,
      easing:'linear',
      update:function(){
        $('#desList ul li').each(function(){
          $(this).addClass('animated fadeInRight');
          for (let i =0; i<$('#desList ul li').length; i++){
            $('#desList ul li').eq(i).css({'animation-delay':'1.'+i+'5s'})
          }
        })
      }
    })
    // $('#techList').fadeIn();
    // $('#techList').css({
    //   opacity:1,
    //   'z-index':4
    // });
    $('#techList').css({'z-index':3})
    $('#proList').css({'z-index':3})

})

$('#proTitle').on('click',function(){
  $('#box1').removeClass('fadeInLeft');
  $('#box2').removeClass('fadeInUp');
  $('#box3').removeClass('fadeInRight');
  //disable scrolling on intro page
  $('body').addClass('overflowHidden');
  $('.skill-titles').removeClass('techTitle desTitle proTitle');
  $('.skill-titles').addClass('proTitle');
  //
  // $('.skill-titles').fadeOut();
  anime({
    targets:['.skill-titles','#box1','#box2'],
    opacity:0,
    duration:50,
    easing:'linear'
  })
  $('.hamburger').fadeOut();
  $('.navContactIcons').fadeOut();
  $('#box3').css({'background-color':'rgba(255, 255, 255, 0)'});
  // $('#box2').fadeOut();
  // $('#box3').fadeOut();
  $('#box3 svg').css({
    'position':'absolute',
    'left':'0',
    'top':'0',
    'z-index':'6'
  })
  anime({
    targets:['#deshHead','#techHead'],
    opacity:0,
    duration:200
  })
  $('#proHead').addClass('animated fadeInLeft delay-05s');
  $('.skill-head').css({
    'position':'absolute',
    'left':'0',
    'top':'0',
    'z-index':'6'
  })
  var proTimeline = anime.timeline();
  proTimeline
    .add({
      targets:'#circle3',
      r:[20,250],
      duration:500,
      // translateX:-220,
      easing:'easeInOutSine',
    })
    .add({
      targets:'#circle3',
      translateX:[0,-280],
      easing:'easeOutExpo',
    })

    //
    anime({
      targets:['#proList','.skill-back-btn'],
      duration:200,
      delay:1000,
      opacity:1,
      easing:'linear',
      update:function(){
        $('#proList ul li').each(function(){
          $(this).addClass('animated fadeInRight');
          for (let i =0; i<$('#proList ul li').length; i++){
            $('#proList ul li').eq(i).css({'animation-delay':'1.'+i+'5s'})
          }
        })
      }
    })
    // $('#techList').fadeIn();
    // $('#techList').css({
    //   opacity:1,
    //   'z-index':4
    // });
    $('#techList').css({'z-index':3})
    $('#proList').css({'z-index':3})

})

$('.skill-back-btn').on('click',function(){
  if( $('.skill-titles').hasClass('techTitle') ){
    // console.log('tech working');
    //enable scrolling on intro page
    $('body').removeClass('overflowHidden');
    $('.skill-titles').removeClass('techTitle desTitle proTitle');
    $('#techHead').removeClass('animated fadeInLeft delay-05s');
    $('#techTitle').fadeIn();
    $('#desTitle').fadeIn();
    $('#proTitle').fadeIn();
    // $('#techList').css({opacity:'0'});
    anime({
      targets:'#circle',
      r:[250,20],
      duration:100,
      easing:'easeOutExpo'
    })
    anime({
      targets:['#techList','.skill-back-btn'],
      duration:200,
      opacity:0
    })
    $('#box1 svg').css({
      'position':'static',
      'z-index':'3'
    })
    $('.skill-head').css({
      'z-index':'3'
    })
    // $('.skill-titles').fadeIn();
    anime({
      targets:'.skill-titles',
      opacity:1,
      duration:200
    })
    $('.hamburger').fadeIn();
    $('.navContactIcons').fadeIn();
    $('#box1').css({'background-color':'rgb(87, 220, 154)'});
    $('#box1').css({opacity:'1'});
    $('#box2').css({opacity:'1'});
    $('#box3').css({opacity:'1'});
    $('#box2').fadeIn();
    $('#box3').fadeIn();
    // $('#desList').fadeOut();
    // $('#proList').fadeOut();
  }else if ( $('.skill-titles').hasClass('desTitle') ){
    // console.log('des working');
    //enable scrolling on intro page
    $('body').removeClass('overflowHidden');
    $('.skill-titles').removeClass('techTitle desTitle proTitle');
    $('#desHead').removeClass('animated fadeInLeft delay-05s');
    $('#techTitle').fadeIn();
    $('#desTitle').fadeIn();
    $('#proTitle').fadeIn();
    // $('#desList').css({opacity:'0'});
    anime({
      targets:'#circle2',
      r:[250,20],
      duration:100,
      translateX:0,
      easing:'easeOutExpo',
    })
    anime({
      targets:['#desList','.skill-back-btn'],
      duration:200,
      opacity:0
    })
    $('#box2 svg').css({
      'position':'static',
      'z-index':'3'
    })
    $('.skill-head').css({
      'z-index':'3'
    })
      // $('.skill-titles').fadeIn();
      anime({
        targets:'.skill-titles',
        opacity:1,
        duration:200
      })
      $('.hamburger').fadeIn();
      $('.navContactIcons').fadeIn();
      $('#box2').css({'background-color':'rgb(129, 205, 229)'});
      $('#box1').css({opacity:'1'});
      $('#box2').css({opacity:'1'});
      $('#box3').css({opacity:'1'});
      $('#box1').fadeIn();
      $('#box3').fadeIn();
  }else if ( $('.skill-titles').hasClass('proTitle') ){
    // console.log('pro working');
    //enable scrolling on intro page
    $('body').removeClass('overflowHidden');
    $('.skill-titles').removeClass('techTitle desTitle proTitle');
    $('#proHead').removeClass('animated fadeInLeft delay-05s');
    $('#techTitle').fadeIn();
    $('#desTitle').fadeIn();
    $('#proTitle').fadeIn();
    // $('#proList').css({opacity:'0'});
    anime({
      targets:'#circle3',
      r:[250,20],
      duration:100,
      translateX:0,
      easing:'easeOutExpo',
    })
    anime({
      targets:['#proList','.skill-back-btn'],
      duration:200,
      opacity:0
    })
    $('#box3 svg').css({
      'position':'static',
      'z-index':'3'
    })
    $('.skill-head').css({
      'z-index':'3'
    })
    // $('.skill-titles').fadeIn();
    anime({
      targets:'.skill-titles',
      opacity:1,
      duration:200
    })
    $('.hamburger').fadeIn();
    $('.navContactIcons').fadeIn();
    $('#box3').css({'background-color':'rgb(220, 87, 87)'});
    $('#box1').css({opacity:'1'});
    $('#box2').css({opacity:'1'});
    $('#box3').css({opacity:'1'});
    $('#box1').fadeIn();
    $('#box2').fadeIn();
    // $('#techList').fadeOut();
    // $('#desList').fadeOut();
  }
})


//Global previous color variable for the nav hamburger icon
let previousIconColor = $('#m-line1').css('stroke');
const navMenuControl=()=>{
  //Method to grab the menuicon color before opening the nav menu
  //Important for when the background color changes,
  //to set the icon back to the opposite color

  $('.hamburger').on('mouseenter',function(){
    if(!$('.hamburger').hasClass('closeBurger')){
      previousIconColor = $('#m-line1').css('stroke');
    }else{
      return;
    }
  })

  $('.hamburger').on('click',function(){
    //animations for each of the nav items
    $('nav a').addClass('animated slideInUp');
    $('.contactIcons a').addClass('animated slideInUp delay-05s');
   //ALWAYS set menu icon to BLACK
   setIconColor('#000');
   //disable scrolling on menu page
   $('body').addClass('overflowHidden');
   //IF menu ISOPEN(closeBurger class), then do the following
   if($('.hamburger').hasClass('closeBurger')){
     //remove animations for each of the nav items
     $('nav a').removeClass('animated slideInUp');
     $('.contactIcons a').removeClass('animated slideInUp delay-05s');
     //ALWAYS set menu icon to beforestate
     setIconColor(previousIconColor);
     $('body').removeClass('overflowHidden');
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

//Main method
const main =()=>{
  //scroll control
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 200);
    }
  });

  //disable scrolling on intro page
  $('body').addClass('overflowHidden');
  //When Menu Icon is clicked

 $('.startBtn').on('click',function(){
   //remove scroll disable when intro button is clicked
   $('body').removeClass('overflowHidden');
   $('.intro-body').fadeOut();
   // $('body').removeClass('disableScroll');
   navMenuControl();
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

   $('.hamburger svg').addClass('animated slideInRight');
   $('.hamburger svg').css('animation-delay','3s');
   $('.navContactIcons a svg').addClass('animated slideInLeft');
   $('.navContactIcons a svg').css('animation-delay','3s');
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
   $(this).on('click',function(){
     //remove animations for each of the nav items
     $('nav a').removeClass('animated slideInUp');
     $('.contactIcons a').removeClass('animated slideInUp delay-05s');
     //set icon color to previous state
     setIconColor(previousIconColor);
     $('body').removeClass('overflowHidden');
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
   })
 })
}

//force page scroll to top upon PAGE REFRESH
window.onbeforeunload = function(){
  window.scrollTo(0,0);
};
$(document).ready(main());


// img2.addEventListener('mouseover',move2);
//
//
// const out=()=>{
//   img1.classList.remove('moveLeft');
// }
// grid2.addEventListener('mouseout',out);
