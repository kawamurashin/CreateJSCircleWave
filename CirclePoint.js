/**
 * Created with IntelliJ IDEA.
 * User: jaiko
 * Date: 14/05/08
 * Time: 11:55
 * To change this template use File | Settings | File Templates.
 */


var CirclePoint;
CirclePoint = (function()
{
    var defaultX = 0;
    var defaultY = 0;
    function CirclePoint()
    {
        this.vw = 0;
        this.localRotation = 0;

    }
    CirclePoint.prototype.hoge = function()
    {
        console.log("hoge");
    }


    return CirclePoint;
})();