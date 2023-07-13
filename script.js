var t1 = gsap.timeline();

t1.from("#nav img , #nav h3 ,#nav button", {
    y: -100,
    stagger: 0.5,
    opacity: 0,
    duration: 1,
    delay: 1,
})
t1.from("#main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.1
})
t1.from("#main>img", {
    scale: 0,
    opacity: 0,
    stagger: 0.4,
    duration: 1,
    delay: 1
})
t1.from("#main>h5", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    repeat: -1,
    yoyo: true

})