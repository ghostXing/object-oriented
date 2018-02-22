var Cloth = Base.extend({
    init: function () {
        this._super();
        this.colors = ["红色", "蓝色", "黑色"];
        this.sizes = [26, 27, 28, 29, 30, 31, 32, 33];
    },
    buy: function () {
    },
    addToCart: function () {
    },
    bindDom: function () {
        $("#pname").html(this.name);
        $("#buyCount").html(this.sum);
        $("#price").html(this.price);
        $("#groupPrice").html(this.preferentialPrice);
        $("#description").html(this.des);
    },
    bindSize: function () {
        var that = this;
        var str = '';
        for (var i = 0; i < that.sizes.length; i++) {
            str += '<li><a href="#">' + that.sizes[i] + '</a></li>';
        }
        $(".sizes").append($(str));
    },
    bindColor: function () {
        var that = this;
        var str = "";
        for (var i = 0; i < that.colors.length; i++) {
            str += '<li><a href="#">' + that.colors[i] + '</a></li>';
        }
        $(".colors").append($(str));
    },
    _init: function () {
        this.bindSize();
        this.bindColor();
        this.bindImage();
    }

})


