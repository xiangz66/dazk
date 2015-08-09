/**
 *
 * @author 
 *
 */
class Plate extends egret.Bitmap{
	public constructor(root:egret.Sprite) {
        super();

        this.texture = RES.getRes("plate");
        this.y = 1280 - 240;
        this.x = (720 - 100) / 2;
        
        root.addChild(this);
	}
}
