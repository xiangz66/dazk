/**
 *
 * @author 
 *
 */
class ControlPanel extends egret.Sprite{
	public constructor(target:GamePanel) {
        super();
        
        this.graphics.beginFill(0x000000, 0);
        this.graphics.drawRect(0, 1120, 720, 160);
        this.graphics.endFill();
        this.width = 720;
        this.height = 160;
        
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function(event) {
            target._ball.shoot();
        }, this);
        
        
	}
}
