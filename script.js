function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();

var crsr=document.querySelector(".cursor");
var main=document.querySelector(".main");
var video=document.querySelector(".video-container>video");
video.addEventListener("mouseenter",function(dets){
    crsr.style.width="60px";
    crsr.style.borderRadius="20px";
    crsr.style.left=dets.x-30+"px";
    crsr.style.top=dets.y-30+"px";
})
video.addEventListener("mouseleave",function(){
    crsr.style.width="20px";
    crsr.style.borderRadius="50%";
    // crsr.style.left=dets.x-20+"px";
})
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

gsap.from(".page1 h1,.page1 h2",{
    rotation: 5,
    y:200
})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1-intro h1",
        scroller:".main",
        // markers:true,
        start: "top 25%",
        end:"top -40%",
        scrub:3,
    }
})

tl.to(".page1 h1",{
    x:-100,
},"anim")
tl.to(".page1 h2",{
    x:100,
},"anim")
tl.to(".page1 .video-container",{
    // top:"5vw",
    width:"95%"
},"anim")

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:".main",
        // markers:true,
        start: "top 60%",
        end:"top 55%",
        scrub:3,
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl6=gsap.timeline({
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:".main",
        // markers:true,
        start: "top 40%",
        end:"top 35%",
        scrub:3,
    }
})
tl6.from(".page2 h1",{
    rotation:5,
    y:180
})
tl6.from(".page2-container",{
    opacity:0,
})

var tl7=gsap.timeline({
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:".main",
        // markers:true,
        start: "top 40%",
        end:"top 35%",
        scrub:3,
    }
})
tl7.from(".page3 h1",{
    rotation:5,
    y:180,
    duration:2
})
tl7.from(".page3-anim2",{
    opacity:0,
    y:100,
    duration:2,
    stagger:0.7
})

var tl4=gsap.timeline({
    scrollTrigger:{
        trigger:".page3-part3",
        scroller:".main",
        // markers:true,
        start: "top -10%",
        end:"top -20%",
        scrub:3,
    }
})

var tl8=gsap.timeline({
    scrollTrigger:{
        trigger:".page3-part3",
        scroller:".main",
        // markers:true,
        start: "top 20%",
        end:"top 0%",
        scrub:3,
    }
})

tl8.from(".page3-part3",{
    opacity:0,
    y:100
})

var tl5=gsap.timeline({
    scrollTrigger:{
        trigger:".page3-part3",
        scroller:".main",
        // markers:true,
        start: "top -10%",
        end:"top -20%",
        scrub:3,
    }
})

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page3-part3",
        scroller:".main",
        // markers:true,
        start: "top 10%",
        end:"top 5%",
        scrub:1,
    }
})
tl4.to(".main" ,{
    backgroundColor:"#0F0D0D",
    color:"#fff"
})
tl5.to(".page3-part3>h2",{
    color:"#fff"
})
tl4.from(".elem",{
    opacity:0,
    y:100
})

var boxes=document.querySelectorAll(".box");
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute("data-image");
        crsr.style.width="300px"
        crsr.style.height="250px"
        crsr.style.borderRadius="0"
        crsr.style.backgroundImage=`url(${att})`
        crsr.style.zIndex="10"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.width="20px"
        crsr.style.height="20px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundImage=`none`
        crsr.style.zIndex="10"
    })
})
var h4=document.querySelectorAll("#nav h4");
var purple=document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display="block", //initial
        purple.style.opacity="1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display="none", 
        purple.style.opacity="0"
    })
})