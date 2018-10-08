/*
 * 2018.6.29
 *ZhiPeng Chen
*/

//正则表达式相关应用

/*
 * 获得路径中的参数    http:www.baidu.com?name=zhangsan&gender=man
 */
kok.getPathParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
