// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
function cursorEffect(){
    var page1content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")
    page1content.addEventListener("mousemove",function(dets){
    //     cursor.style.left = dets.x+"px"
    //     cursor.style.top = dets.y+"px"
    
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
    })
    })
    
    page1content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    page1content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
    })
    
    }
    cursorEffect()
    function page4Animation()
    {
    
        var elemC = document.querySelector("#elem-container")
         var fixed = document.querySelector("#fixed-image")
        elemC.addEventListener("mouseenter",function(){
            fixed.style.display ="block" 
        })
        elemC.addEventListener("mouseleave",function(){
            fixed.style.display ="none" 
        })
        
        
        var elems = document.querySelectorAll(".elem")
        console.log(elems)
        elems.forEach(function(e){
            e.addEventListener("mouseenter",function(){
                var image =e.getAttribute("data-image")
                // console.log(image)
                fixed.style.backgroundImage =`url(${image})`
            })
        })
      }
      page4Animation();
    
      function sliderAnimation()
      {
    
          var swiper = new Swiper(".mySwiper", {
              slidesPerView: 2,
              spaceBetween: 30,
              loop: true,
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    },
                    // autoplay: {
                    //     delay: 2509,
                    //     disableOnInteraction: true,
                    // },
                });
     }
    
     sliderAnimation()
    
     var tl = gsap.timeline()
    
     tl.from("#loader h3",{
        x:20,
        opacity:0,
        duration:1,
        stagger:0.3
     })
    
     tl.to("#loader h3",{
        opacity:0,
        x:-10,
        duration:1,
        stagger:0.1
     })
    
     tl.to("#loader",{
        opacity:0
     })
    
     tl.from("#page1-content h1 span",{
        y:100,
        opacity:0,
        stagger:0.2,
        duration:0.4,
        delay:-0.8
     })
    
     tl.to("#loader",{
        display:"none"
     })

     