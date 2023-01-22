window.addEventListener('scroll', e => {
   document.body.style.cssText += `--ScrollTop: ${scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
   wrapper: '.wrapper',
   content: '.content'
})
window.onload = function () {

   const bkl = document.querySelector('.header')
   if (bkl) {

      /*--*/
      const forn1 = 70

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/

         document.querySelector('#bs-1').style.cssText += `left:${positionX / forn1}%; top:${positionY / forn1}%;`;


         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      bkl.addEventListener('mousemove', function (event) {
         const paralaxWidth = bkl.offsetWidth
         const paralaxHeight = bkl.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }
}