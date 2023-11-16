let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#hero",
        pin: true,
        start: "top -0.1%",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 3
    }
})

tl.to(".content",{
    y: "-300%",
    ease: Power4
},"meet")

tl.to("#images img",{
    y:"-300%",
    ease:Power4
},"meet")