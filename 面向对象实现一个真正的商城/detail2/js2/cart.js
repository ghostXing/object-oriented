/**
 * Created by Lenovo on 2016/1/3.
 */

function Cart(){
    //���ﳵ�Ĳ�Ʒ����
    this.sum=0
    //�ܼ۸�
    this.price=0
    //��Ʒ�б�
    this.products=[{},{},{}]
}
Cart.prototype={
    //�����Ʒ�ܼ۸�
    jiesun:function(){
        var sum=0;
        for(var i=0;i<this.products.length;i++){
            sum+=this.product[i].price
        }
        return sum;
    },
    //��ȡ��Ʒ����
    getSum:function(){
        return this.products.length;
    },
    /*�󶨻�����Ϣ������+�ܼ۸�*/
    bindBasic:function(){
        /*����*/
        $('.cartsum').html(this.getSum())
        /*�ܼ۸�*/
        $('.allPrice').html(this.jiesun())

    },
    /*���б�*/
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