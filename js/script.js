// wow js link
new WOW().init();
// wow js link

const buttons = [
    document.querySelector(".btn_01"),
    document.querySelector(".btn_02"),
    document.querySelector(".btn_03"),
    document.querySelector(".btn_04"),
    document.querySelector(".btn_05"),
    document.querySelector(".btn_06"),
    document.querySelector(".btn_07"),
  ];
  
  const boxes = [
    document.querySelector(".box_1"),
    document.querySelector(".box_2"),
    document.querySelector(".box_3"),
    document.querySelector(".box_4"),
    document.querySelector(".box_5"),
    document.querySelector(".box_6"),
    document.querySelector(".box_7"),
  ];
  
  let currentIndex = 0;

  function activateButton(index) {
    buttons.forEach((button, i) => {
      if (i === index) {
        button.style.background = "var(--Gredient, linear-gradient(90deg, #FE651B -0.02%, #FFAA52 100.06%))";
        boxes[i].style.boxShadow = "0px 10px 0px 0px #fe651b";
      } else {
        button.style.background = "";
        boxes[i].style.boxShadow = "";
      }
    });
  }

  function cycleButtons() {
    activateButton(currentIndex);
    currentIndex = (currentIndex + 1) % buttons.length;
  }

  // Start the button activation cycle every 3 seconds
  setInterval(cycleButtons, 1000);
  




//--------page-10--------slider------------
  $(".slider-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:'<i class="fa-solid fa-arrow-left left"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right right"></i>',
  });



//page-02--slider------------------------------------

  $(".slide_part").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    prevArrow:'<i class="fa-solid fa-arrow-left left"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right right"></i>',
  });
  

  //page-10--slider--01----------------------------------
  $('.slider_part_testimonial').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });


    //page-10--slider--02----------------------------------
  $(".client_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:'<i class="fa-solid fa-arrow-left left"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right right"></i>',
  });



    //page-23--slider-----------------------------------
  $(".blog_slide").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow:'<i class="fa-solid fa-arrow-left left_arrow"><p>Next</p></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right right_arrow"><p>Prev</p></i>',
  });



// ---------------page-3 slider------------
  $('.home03_slider_part').slick({
    centerMode: true,
    centerPadding: '360px',
    slidesToShow: 1,
    prevArrow:'<i class="fa-solid fa-arrow-right home_slider_arrow_right"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-left home_slider_arrow_left"></i>',
  });
  

  
  let box_slider_01 = document.querySelector('#box_slider_01');
  let box_slider_02 = document.querySelector('#box_slider_02');
  let box_slider_03 = document.querySelector('#box_slider_03');
  let box_slider_04 = document.querySelector('#box_slider_04');
  let rignt_button = document.querySelector('.rignt_button');
  let left_button = document.querySelector('.left_button');
  
  rignt_button.addEventListener("click", function(){
  
    box_slider_01.classList.remove("box_slider_01");
    box_slider_01.classList.add("box_slider_02");
    
  
    box_slider_02.classList.remove("box_slider_02");
    box_slider_02.classList.add("box_slider_03");
  
    box_slider_03.classList.remove("box_slider_03");
    box_slider_03.classList.add("box_slider_04");
  
    box_slider_04.classList.remove("box_slider_04");
    box_slider_04.classList.add("box_slider_01");
  
  }); 
  
  left_button.addEventListener("click", function(){
  
    box_slider_01.classList.remove("box_slider_02");
    box_slider_01.classList.add("box_slider_01");
    
  
    box_slider_02.classList.remove("box_slider_03");
    box_slider_02.classList.add("box_slider_02");
  
    box_slider_03.classList.remove("box_slider_04");
    box_slider_03.classList.add("box_slider_03");
  
    box_slider_04.classList.remove("box_slider_01");
    box_slider_04.classList.add("box_slider_04");
  
  }); 
  
  // function myFunction() {
  //   const element = document.getElementById("myDIV");  // Get the DIV element
  //   element.classList.remove("mystyle"); // Remove mystyle class from DIV
  //   element.classList.add("newone"); // Add newone class to DIV
  // }


