/**
 *
 * @author 
 *
 */
class GamePanel extends egret.Sprite{
    public constructor() {
        super();
    }
    
    
    public _plate: Plate = new Plate(this);

    public _ball: Ball = new Ball(this);
     
	
}
