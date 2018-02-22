/**
 * Created by Lenovo on 2016/1/3.
 */


/* 使用对象 搭积木*/

/*绑定产品*/

window.onload =function(){

    /*实例化一个对象：为什么只有一个实例：再次理解抽象和具体：类和实例的区别*/
    var product =  new Product()
    product.name='HM休闲服登山包33'
    product.description='棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰'
    product.normalPrice=144
    product.groupbuyPrice=120
    product.buySum=100;
    /*数据结构：变量 数组（分成两种） json字典*/
    product.images=[
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ]



    /*面向对象编程*/
    /*使用*/


    //思考过程： 倒过来
    //
    //一上来就写细节
    //现在：先宏观思考怎么做，然后再写细节



    /*绑定基本信息*/
    product.bindBasic()
    /*绑定图片*/
    product.bindImages()


    //作业：使用传统方式实现
    //定义变量
    //找到元素
    //绑定



    /*绑定购物车*/

    var  cart = new Cart();
    //绑定基本信息
    cart.bindBasic();
    //绑定购物车里面的产品列表
    cart.bindList();
}
