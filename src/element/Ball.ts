/**
 *
 * @author 
 *
 */
class Ball extends egret.Bitmap{
    
	public constructor(root:egret.Sprite) {
        super();
        
        this.texture = RES.getRes("ball");
        this.x = (720 - 25) / 2;
        this.y = 1280 - 255 - 25;
        
        root.addChild(this);
//        egret.Tween.get(this).to({ y: 0 }, 3000);
    }

          
    
    
    private _self: egret.Bitmap = this;
    
    
    public  shoot(){
        egret.Tween.get(this._self).to({ y: 0 }, 3000);
        console.log("tap");
    }
}
