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
        this.width = 720;
        this.height = 160;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
        }, this);
    }
    var __egretProto__ = ControlPanel.prototype;
    return ControlPanel;
})(egret.Sprite);
ControlPanel.prototype.__class__ = "ControlPanel";