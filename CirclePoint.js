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



    function CirclePoint()
    {
        this.M = 1;
        this.U = 0.01;
        this.vx =0;
        this.vy =0;
        this.forceX = 0;
        this.forceY = 0;
        this.defaultX = 0;
        this.defaultY = 0;
        this._x =0;
        this._y =0;
    }
    CirclePoint.prototype.onEnterFrame = function()
    {
        this.vx += (this.forceX) - this.U * this.vx;
        this.vy += (this.forceY) - this.U * this.vy;
        this._x += this.vx;
        this._y += this.vy;
    }
    CirclePoint.prototype.hoge = function()
    {
        console.log("hoge");
    }
    CirclePoint.prototype.setPosition  = function(setX,setY)
    {
        this.defaultX =setX ;
        this._x = this.defaultX;
        this.defaultY = setY;
        this._y  = this.defaultY;
    }
    CirclePoint.prototype.getPosition  = function()
    {
        return [this._x,this._y];
    }
    CirclePoint.prototype.getDefault  = function()
    {
        return [this.defaultX, this.defaultY];
    }
    CirclePoint.prototype.setForce  = function(fx ,fy )
    {
        this.forceX = fx;
        this.forceY = fy;
    }


    return CirclePoint;
})();