const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#cloud',
    // markers: true,
    start: 'top 30%',
    end: 'top 1%',
    scrub: true,
  },
})
tl.to('#cloud__left', {
  position: 'absolute',
  top: '0px',
  x: '100px',
  opacity: 0,
  scale: 0,
  transformOrigin: 'right',
})
tl.to(
  '#cloud__right',
  {
    position: 'absolute',
    top: '32px',
    x: '-100px',
    opacity: 0,
    scale: 0,
    transformOrigin: 'left',
  },
  '<'
)
