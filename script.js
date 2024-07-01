

// select globe
let globe = document.getElementById("snowglobe");

//declare particles
let particles;

//declare funct for calculating (gyro?) activity

function calculateAcceleration(event) {
  
  const {x,y,z} = event.accelerationIncludingGravity;
  const accelerationMagnitude= Math.sqrt(x*x + y*y + z*z);
  return accelerationMagnitude;
}

function shakeItUp() {
  particles.play();
  globe.classList.add("shake");
  setTimeout(() => {globe.classList.remove("shake")}, 1100)
}

tsParticles.loadJSON('particles', 'particles.json')
.then(function() {
  particles = tsParticles.domItem(0);
  particles.pause()
  globe.addEventListener('click',()=> {
    shakeItUp()
  });

  window.addEventListener("devicemotion",(event) =>{
    const acceleration = calculateAcceleration(event);
  
    if (acceleration>23){
      shakeItUp()
  }}
  );
  
});


