var health = 100;

function shoot(){
  health = health - Math.random() * 100 + 0;
  update()
  return health;
}

function frag(){
  
  
}

function stab(){
  health = health - Math.random() * 20  + 5
  update()
  return health;
  
}

function update(){
  if (health <= 0){
    health = 0
  }
  
  var healthElem = document.getElementById('health')
  healthElem.innerHTML = health
}

function reset(){
  health = 100
  update()
}




console.log(health)
