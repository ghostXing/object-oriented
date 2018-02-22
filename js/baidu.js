$(function () {
    var data = [
        {
            name: '白羊座',
            time: '3.21-4.19'
        }
        , {
            name: '金牛座',
            time: '4.20-5.20'
        }
        , {
            name: '双子座',
            time: '5.21-6.21'
        }
        , {
            name: '巨蟹座',
            time: '6.22-7.22'
        }
        , {
            name: '狮子座',
            time: '7.23-8.22'
        }
        , {
            name: '处女座',
            time: '8.23-9.22'
        }
        , {
            name: '天秤座',
            time: '9.23-10.23'
        }
        , {
            name: '天蝎座',
            time: '10.24-11.22'
        }
        , {
            name: '射手座',
            time: '11.23-12.21'
        }
        , {
            name: '摩羯座',
            time: '12.22-1.19'
        }
        , {
            name: '水瓶座',
            time: '1.20-2.18'
        }
        , {
            name: '双鱼座',
            time: '2.19-3.20'
        }
    ];
    function Constellation(data,num) {
        this.data = data;
        this.config = {container: $("#myXingzuo")};
        this.dom = $('<div class="item num-' + num + '"></div>');
        this.index = num;
        this.init();
    }

    Constellation.prototype = {
        init: function () {
            this.bindDom();
            this.bindEvent();
        },
        bindDom: function () {
            var str = '<div class="image"></div>'
                         + '<div class="description">'
                         + '<p class="name">{{name}}</p>'
                         + '<p class="time">{{time}}</p>'
                         + '<div class="mark"></div>'
                    + '</div>';
            this.dom.html($$.strTemplate(str,this.data)).appendTo(this.config.container);
        },
        bindEvent: function () {
            var that = this;
            this.dom.on("mouseenter", function () {
                $(this).addClass("is-hover");
            }).on("mouseleave", function () {
                $(this).removeClass("is-hover");
            }).on("click", function () {
                window.location = "constellation.html?num="+ that.index;
            })
        }
    }
    for(var i = 0, length = data.length; i < length; i++) {
         new Constellation(data[i],i);
    }
})

