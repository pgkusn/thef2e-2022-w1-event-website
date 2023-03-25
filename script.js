const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#home',
    markers: true,
    pin: true,
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
tl.to('#home', {
  backgroundImage: 'url(images/road.png)',
})
tl.to(
  'h1',
  {
    opacity: 0,
  },
  '<'
)
