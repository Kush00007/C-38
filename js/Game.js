class Game {
  constructor() {}
  readgs(){
    database.ref("gameState").on("value",function(data)
    {
      mygs = data.val()
    })
   }
 
   updategs(gs){
     database.ref("/").update({
       gameState:gs
     })
   }
  start() {
    
    player = new Player();
    player.readpc();

    form = new Form();
    form.display();

    car1 = createSprite(width/2 - 50,height - 100)
    car1.addImage(car1img)
    car1.scale = 0.07

    car2 = createSprite(width/2 + 100,height - 100)
    car2.addImage(car2img)
    car2.scale=0.07

    cars = [car1,car2]    
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  handleControls() {
    if(keyIsDown(UP_ARROW))
    {
      player.posy += 10
      player.updateplayerinfo()
    }
    if(keyIsDown(LEFT_ARROW) && player.posx > width/3 - 50)
    {
      player.posx -= 10
      player.updateplayerinfo()
    }
    if(keyIsDown(RIGHT_ARROW) && player.posx < width/2 + 300)
    {
      player.posx += 10
      player.updateplayerinfo()
    }
  }
  play(){
    this.handleElements()
    Player.getplayerinfo()
    if(allplayers !== undefined){
      image(trackimg,0, -height*5 ,width, height*6)
    var index = 0
    for(var plr in allplayers )
    {
      index = index + 1 
     var x = allplayers[plr].posx;
     var y = height - allplayers[plr].posy;

    cars[index - 1].position.x = x
    cars[index - 1].position.y = y

    if(index === player.index){
      stroke(10)
      fill("red")
      ellipse(x,y,60,60)

      camera.position.x = cars[index - 1].position.x
      camera.position.y = cars[index - 1].position.y
    }
    }
    this.handleControls()
      drawSprites()
    }
}
}