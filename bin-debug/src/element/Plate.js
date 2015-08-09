/**
 *
 * @author
 *
 */
var Plate = (function (_super) {
    __extends(Plate, _super);
    function Plate(root) {
        _super.call(this);
        this.texture = RES.getRes("plate");
        this.y = 1280 - 240;
        this.x = (720 - 100) / 2;
        root.addChild(this);
    }
    var __egretProto__ = Plate.prototype;
    return Plate;
})(egret.Bitmap);
Plate.prototype.__class__ = "Plate";
