(function() {
/*glasses&hand*/
var tl = new TimelineMax({repeat:-1, repeatDelay:2});
tl.to("#glasses", 2, {y:30})
  .fromTo("#arm", 1, {y:250}, {y:0})
.to("#glasses", .5, {y:0}, '-=.5')
.to("#arm", 1, {y:250})
/*brows*/
var tl = new TimelineMax({repeat:-1, repeatDelay:3});
tl.to("#brows", 2, {ease: Power1.easeout, y:-5})
.to("#brows", 2, {ease: Power1.easeout, y:0}, '+=2');
/*blink*/
var tl = new TimelineMax({repeat:-1, repeatDelay:4});
tl.to("#lashes", 0, {y:26, scaleY:-1})
tl.to("#lashes", .2, {y:0, scaleY:1})
tl.to("#eyeballs", .2, {opacity:1}, '-=.2')
tl.to("#eyeballs", 0, {opacity:0}, '-=.2');


$('.pause').click(function(){
  TweenMax.pauseAll();
});
$('.play').click(function(){
  TweenMax.resumeAll();
  tl.to('#eyeballs', 0, {opacity:1});
});
}());

particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ["#00ffff", "#ff00ff", "#ffff00"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 1
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1.0,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 40,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 120,
      color: "#ffffff",
      opacity: 0.8,
      width: 1
  },
  move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
            
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 500,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});