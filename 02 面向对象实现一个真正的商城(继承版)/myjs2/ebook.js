var eBook = Base.extend({
    init: function () {
        this._super();
        this.name = "JAVASCRIPT高级编程第四版";
        this.author = "张三丰";
        this.publishDate = "2017-07-07";
        this.publisher = "清华大学出版社";
        this.page = 1000;
        this.type = "IT - 前端开发 - JS";
    },
    buy: function () {
    },
    addToCart: function () {
    },
    readTry: function () {
    },
    bindDom: function () {
        var str = "";
        str += '<h1 id="pname">{{name}}</h1>';
        str += '<ul class="rating">';
        str += '<li><a href="#" id="buyCount">{{sum}}</a>人购买</li>';
        str += '<div class="clearfix"></div>';
        str += '</ul>';
        str += '<div class="price_single">';
        str += '<span class="reducedfrom" id="price">${{preferentialPrice}}</span>';
        str += '<span class="actual" id="groupPrice">${{normalPrice}}</span><a href="#">优惠价</a>';
        str += '</div>';
        str += '<h2 class="quick">作者:</h2>';
        str += '<p class="quick_desc" >{{author}}</p>';
        str += '<h2 class="quick">出版日期:</h2>';
        str += '<p class="quick_desc" >{{publishDate}}</p>';
        str += '<h2 class="quick">出版社:</h2>';
        str += '<p class="quick_desc" >{{publisher}}</p>';
        str += '<h2 class="quick">页数:</h2>';
        str += '<p class="quick_desc" >{{page}}</p>';
        str += '<h2 class="quick">分类:</h2>';
        str += '<p class="quick_desc" >{{type}}</p>';
        $(".cont1").html($$.strTemplate(str, this));
    },
    _init: function () {
        this.bindDom();
        this.bindImage();
    }
});




