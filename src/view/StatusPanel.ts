/**
 *
 * @author 
 *
 */
class StatusPanel extends egret.Sprite {
    private _textures: egret.SpriteSheet;
    
    public constructor(textures: egret.SpriteSheet) {
        super();
        this._textures = textures;
        this.lifeUpdate();
        this.scoresUpdate();
    }
    
    
    public lifeUpdate():void{
        for(var i: number = 0;i < life;i++) {
                var ball_alive_show: egret.Bitmap = new egret.Bitmap();
                ball_alive_show.texture = this._textures.getTexture("ball-alive");
                ball_alive_show.x = 15 + i * 40;
                ball_alive_show.y = 40-12.5;
                this.addChild(ball_alive_show);
            }
        }  
        
     public scoresUpdate():void{
         var scores_show: egret.TextField = new egret.TextField();
         this.addChild(scores_show);
         scores_show.text = scores.toString();
         scores_show.size = 32;
         scores_show.bold = true;
         scores_show.textColor = 0xFFFFFF;
         scores_show.textAlign = egret.HorizontalAlign.RIGHT;
         scores_show.width = 300;
         scores_show.x = 720 - 300 - 20;
         scores_show.y = (80 - 32) / 2;  
     }
        
}

