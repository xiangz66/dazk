/**
 *
 * @author
 *
 */
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this);
        this._plate = new Plate(this);
        this._ball = new Ball(this);
    }
    var __egretProto__ = GamePanel.prototype;
    return GamePanel;
})(egret.Sprite);
GamePanel.prototype.__class__ = "GamePanel";
//# sourceMappingURL=GamePanel.js.map