/*1.获取网页滚动出去的距离：浏览器兼容性封装
    能力检测    
*/

function getPageScroll() {
    //逻辑或： 一真则真
    //运算： 找真。 只要左边的式子可以转为true，无条件返回左边式子的值。反之无条件返回右边式子的值。
    var x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    var y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    return {
        scrollLeft: x,
        scrollTop: y
    };
};

/**
 * @description: 2.获取网页可视区域大小兼容性封装
 * @param {type} 
 * @return: 
 */
function getClientSize() {
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    return {
        clientWidth: x,
        clientHeight: y
    };
}


//3.IE8不支持pageX，没有任何替代语法
//IE8只能手动计算 pageX = clientX + scrollLeft
function getPagePoint(e) {
    //能力检测
    if (e.pageX) {//谷歌火狐浏览器
        return {
            pageX: e.pageX,
            pageY: e.pageY
        };
    } else {//IE8
        return {
            pageX: e.clientX + document.documentElement.scrollLeft,
            pageY: e.clientY + document.documentElement.scrollTop,
        };
    };
};