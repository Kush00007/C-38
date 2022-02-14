class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.posx = 0;
    this.posy = 0;
  }
 
  addplayer(){
   var playerIndex = "players/player" + this.index   
    if(this.index === 1)
    {
      this.posx = width/2 - 100
      this.posy = height/2 + 300
      console.log(this.posy)
    }
    else{
       this.posx = width/2 + 100
       this.posy = height/2 + 300
       console.log(this.posy)
    }
    database.ref(playerIndex).set({
      name:this.name,
      positionx:this.posx,
      positiony:this.posy
    })
  }
  readpc()
  {
    database.ref("playerCount").on("value",function(data){
      mypc = data.val()
    })
  }
   updatepc(count)
   {
     database.ref("/").update({
       playerCount:count
     });
   }
static getplayerinfo(){
    database.ref("players").on("value",function(data){
      allplayers = data.val()
    })
  }
  updateplayerinfo(){
    var playerIndex = "players/player" + this.index 
    database.ref(playerIndex).update({
      positionx:this.posx,
      positiony:this.posy
    })
  }
  getDistance(){
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).on("value",data => {
    var data = data.val()
    this.posx = data.positionx;
    this.posy = data.positiony; 
    })
  }
}
