/**
 *
 * @author
 *
 */
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(root) {
        _super.call(this);
        this._self = this;
        this.texture = RES.getRes("ball");
        this.x = (720 - 25) / 2;
        this.y = 1280 - 255 - 25;
        root.addChild(this);
        //        egret.Tween.get(this).to({ y: 0 }, 3000);
    }
    var __egretProto__ = Ball.prototype;
    __egretProto__.shoot = function () {
        egret.Tween.get(this._self).to({ y: 0 }, 3000);
        console.log("tap");
    };
    return Ball;
})(egret.Bitmap);
Ball.prototype.__class__ = "Ball";
//# sourceMappingURL=Ball.js.map