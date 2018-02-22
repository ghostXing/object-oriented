/**
 * Created by Lenovo on 2016/1/3.
 */

function Cart(){
    //购物车的产品个数
    this.sum=0
    //总价格
    this.price=0
    //产品列表
    this.products=[{},{},{}]
}
Cart.prototype={
    //计算产品总价格
    jiesun:function(){
        var sum=0;
        for(var i=0;i<this.products.length;i++){
            sum+=this.product[i].price
        }
        return sum;
    },
    //获取产品总数
    getSum:function(){
        return this.products.length;
    },
    /*绑定基本信息：个数+总价格*/
    bindBasic:function(){
        /*个数*/
        $('.cartsum').html(this.getSum())
        /*总价格*/
        $('.allPrice').html(this.jiesun())

    },
    /*绑定列表*/
    bindList:function(){
        var str =''

        for(var i=0;i<this.products.length;i++){
            str+='<div class="cart_box">'
            str+=' <div class="message">'
            str+='<div class="alert-close"> </div>'
            str+='<div class="list_img"><img src="'+this.products[i].images.small+'" class="img-responsive" alt=""/></div>'
            str+='<div class="cart_box">'
        }
       $('#XXX').html(str)
    }


}