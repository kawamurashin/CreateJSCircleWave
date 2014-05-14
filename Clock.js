/**
 * Created with IntelliJ IDEA.
 * User: jaiko
 * Date: 14/05/14
 * Time: 12:55
 * To change this template use File | Settings | File Templates.
 */

var Clock;

Clock = (function()
{
    var long;
    var short;
    function Clock()
    {
        console.log("clock");
    }
    Clock.prototype.init = function(container)
    {
        var layer = new createjs.Container();
        container.addChild(layer);
        layer.x = 465*0.5;
        layer.y = 465*0.5;

        short = new createjs.Shape();
        short.graphics.beginFill("#CCCCCC");
        short.graphics.drawRect(-10,-10,120,20);
        layer.addChild(short);

        long = new createjs.Shape();
        long.graphics.beginFill("#999999");
        long.graphics.drawRect(-20,-5,180,10);
        layer.addChild(long);

        var red = new createjs.Shape();
        red.graphics.beginFill("#FF0000");
        red.graphics.drawCircle(0,0,5);
        layer.addChild(red);

        setHandPosition();

    }
    Clock.prototype.tick = function()
    {
        setHandPosition();
    }
    function setHandPosition()
    {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        //console.log(h,m,s)

        short.rotation = -90 + (h % 12) * (360/12) +((m /60) * (360/12))  + ((s / 60 ) * 360/(12*60));
        long.rotation = -90 + ((m /60) * 360) + ((s / 60 ) * (360/60));
    }
    return Clock;
})();

