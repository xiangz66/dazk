/**
 *
 * @author
 *
 */
var StatusPanel = (function (_super) {
    __extends(StatusPanel, _super);
    function StatusPanel(textures) {
        _super.call(this);
        this._textures = textures;
        this.lifeUpdate();
        this.scoresUpdate();
    }
    var __egretProto__ = StatusPanel.prototype;
    __egretProto__.lifeUpdate = function () {
        for (var i = 0; i < life; i++) {
            var ball_alive_show = new egret.Bitmap();
            ball_alive_show.texture = this._textures.getTexture("ball-alive");
            ball_alive_show.x = 15 + i * 40;
            ball_alive_show.y = 40 - 12.5;
            this.addChild(ball_alive_show);
        }
    };
    __egretProto__.scoresUpdate = function () {
        var scores_show = new egret.TextField();
        this.addChild(scores_show);
        scores_show.text = scores.toString();
        scores_show.size = 32;
        scores_show.bold = true;
        scores_show.textColor = 0xFFFFFF;
        scores_show.textAlign = egret.HorizontalAlign.RIGHT;
        scores_show.width = 300;
        scores_show.x = 720 - 300 - 20;
        scores_show.y = (80 - 32) / 2;
    };
    return StatusPanel;
})(egret.Sprite);
StatusPanel.prototype.__class__ = "StatusPanel";
