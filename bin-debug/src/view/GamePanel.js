/**
 *
 * @author
 *
 */
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this);
        var _plate = new Plate(this);
        var _ball = new Ball(this);
        //        this.init();
    }
    var __egretProto__ = GamePanel.prototype;
    return GamePanel;
})(egret.Sprite);
GamePanel.prototype.__class__ = "GamePanel";
