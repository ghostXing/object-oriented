/**
 * Created by Lenovo on 2016/1/3.
 */


/* ʹ�ö��� ���ľ*/

/*�󶨲�Ʒ*/

window.onload =function(){

    /*ʵ����һ������Ϊʲôֻ��һ��ʵ�����ٴ�������;��壺���ʵ��������*/
    var product =  new Product()
    product.name='HM���з���ɽ��33'
    product.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
    product.normalPrice=144
    product.groupbuyPrice=120
    product.buySum=100;
    /*���ݽṹ������ ���飨�ֳ����֣� json�ֵ�*/
    product.images=[
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ]



    /*���������*/
    /*ʹ��*/


    //˼�����̣� ������
    //
    //һ������дϸ��
    //���ڣ��Ⱥ��˼����ô����Ȼ����дϸ��



    /*�󶨻�����Ϣ*/
    product.bindBasic()
    /*��ͼƬ*/
    product.bindImages()


    //��ҵ��ʹ�ô�ͳ��ʽʵ��
    //�������
    //�ҵ�Ԫ��
    //��



    /*�󶨹��ﳵ*/

    var  cart = new Cart();
    //�󶨻�����Ϣ
    cart.bindBasic();
    //�󶨹��ﳵ����Ĳ�Ʒ�б�
    cart.bindList();
}
