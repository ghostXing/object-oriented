/**
 * Created by Lenovo on 2016/1/3.
 */
//???

/*
????



????*/
function Product(){
    //????
    this.name=''
    /*???*/
    this.price=0
    /*?????*/
    this.youhuijia=0
    /*????*/
    this.des=''
    /*??*/
    this.images=[{small:'',big:''},{small:'',big:''},{small:'',big:''}]

}
Product.prototype={
    bindDOM:function(){

    },
        /*????????*/
        bindBasic:function(){
            $('#pname').html(this.name)
        },
        //?????б?
        /*????????????轫?????????????????*/
        /*?????????????????????????????????????????*/
        /*???????????????????????????λ?????????
        ??????????????????????????????????????1000??????????
        ?????????????????????????????????????*/
        bindImages:function(){

            /*???*/
            var str=''
            for(var i = 0;i<this.images.length;i++){
                str+='<li>'
                str+='<img class="etalage_thumb_image" src="'+this.images[i].small+'" class="img-responsive" />'
                str+='<img class="etalage_source_image" src="'+this.images[i].big+'" class="img-responsive" />'
                str+='</li>'

                /*?????*/
            }

            $('.etalage').html(str)


            /*jquery????????????Ч*/
            $('#etalage').etalage({
                thumb_image_width: 250,
                thumb_image_height: 300,
            });
        }
}