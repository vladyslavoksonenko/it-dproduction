
	// Custom JS
  addEventListener("load", function () {
    // SLIDER
    $('.slider-home').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      dots: true,
      infinite: true,
    });

    // MENU
    const btnMenu = document.querySelector('.main-menu-button')
    const mainMenu = document.querySelector('.main-menu')
    const btnDownMenu = document.querySelector('.menu-down-btn')

    btnMenu.addEventListener('click', function () {
      btnMenu.classList.toggle("open-menu")
      btnMenu.classList.toggle("close-menu")
      mainMenu.classList.toggle("open-main-menu")
      mainMenu.classList.remove("down-main-menu")
      // mainMenu.classList.toggle("hidden-main-menu")
      mainMenu.classList.toggle("visually-hidden-main-menu")
      document.body.classList.toggle("no-scroll")
    })
    btnDownMenu.addEventListener('click', function () {
      mainMenu.classList.toggle("down-main-menu")
      // btnDownMenu.classList.toggle("rotate-arrow")
    })

    // Animation

    const tl = gsap.timeline();

    const menuItem = document.querySelectorAll(".main-menu__item");
    const menuArrow = document.querySelector('.arrow-menu')


    if (mainMenu.classList.contains('visually-hidden-main-menu')) {
      tl.to(mainMenu, {duration: 0.3, x: '100%'})
    }

    btnMenu.addEventListener('click', function () {
      if (mainMenu.classList.contains('visually-hidden-main-menu')) {
        tl.to(mainMenu, {duration: 0.3, x: '100%'})
      }
      if (!mainMenu.classList.contains('visually-hidden-main-menu')) {
        tl.to(mainMenu, {duration: 0.3, x: '0', ease: "power4.out"})
      }
        tl.to(mainMenu, {y: '0vh'})
        tl.to(menuArrow, {rotate: '0deg'})
    })

    btnDownMenu.addEventListener('click', function () {
      if (mainMenu.classList.contains('down-main-menu')) {
        tl.to(mainMenu, {y: '-65vh'})
        tl.to(menuArrow, {rotate: '180deg'}, '-=0.6')
      }
      if (!mainMenu.classList.contains('down-main-menu')) {
        tl.to(mainMenu, {y: '0vh'})
        tl.to(menuArrow, {rotate: '0deg'}, '-=0.6')
      }
    })

  })


  // Social

  // const socialSvgList = document.querySelectorAll('.social-svg')
  //
  // for (let i = 0; i < socialSvgList.length; i++) {
  //   addEventListener('')
  // }


  // const grey = document.querySelector('.grey')
  // grey.addEventListener('focus', () => {
  //   grey.classList.add("blue")
  //   grey.classList.remove("grey")
  // })




