/**
 *
 * @author
 *
 */
var ControlPanel = (function (_super) {
    __extends(ControlPanel, _super);
    function ControlPanel(target) {
        _super.call(this);
        this.graphics.beginFill(0x000000, 0);
        this.graphics.drawRect(0, 1120, 720, 160);
        this.graphics.endFill();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            target._ball.shoot();
        }, this);
    }
    var __egretProto__ = ControlPanel.prototype;
    return ControlPanel;
})(egret.Sprite);
ControlPanel.prototype.__class__ = "ControlPanel";
