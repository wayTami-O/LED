export function sliders() {
  let scrollAbout = new Swiper(".container_grid", {
      slidesPerView: "1.2",
      spaceBetween: 16,
      navigation: {
        nextEl: ".next_el",
        prevEl: ".prev_el",
      },
      mouseweel: true,
      keyboard: true
  });

  let scrollWorkSlider = new Swiper(".scrollWorkSlider", {
      slidesPerView: "1.2",
      spaceBetween: 16,
      navigation: {
        nextEl: ".prev_elm",
        prevEl: ".next_elm",
      },
      mouseweel: true,
      keyboard: true
  });
}