;
(function (window) {
    var heima = {
        //规定data是key=value&key2=value2
        //规定success是一个函数 
        get: function (url, data, success) {
            //1.创建xhr对象.
            var xhr = new XMLHttpRequest();
            //参数的拼接
            url += '?';
            url += data;
            //2.设置方法方式地址
            xhr.open('get', url);
            //4.注册回调函数.
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    //xhr.responseText
                    success(xhr.responseText);
                }
            }
            //5.发送.
            xhr.send()
        },
        post: function (url, data, success) {
            //1.创建xhr对象.
            var xhr = new XMLHttpRequest();
            //2.设置方法方式地址
            xhr.open('post', url);
            //3.如果是post,还要请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            //4.注册回调函数.
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    //xhr.responseText
                    success(xhr.response);
                }
            }
            //5.发送.
            xhr.send(data)
        },
        /**
         * 
         * @param {*} options  对象
         * @param type,  get/post 请求方式
         * @param url,   请求地址
         * @param data,   请求参数
         * @param success  回调函数
         */
        ajax: function (options) {
            //1.创建xhr对象.
            var xhr = new XMLHttpRequest();

            //如果type是get,那就要做url的拼接
            if (options.type == 'get') {
                options.url += '?';
                options.url += options.data;
            }

            //2.设置方法方式地址
            xhr.open(options.type, options.url);
            if (options.type == 'post') {
                //3.如果是post,还要请求头
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            //4.注册回调函数.
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    //xhr.responseText
                    options.success(xhr.response);
                }
            }
            if (options.type == 'post') {
                //5.发送.
                xhr.send(options.data);
            } else {
                //5.发送.
                xhr.send()
            }
        }
    }

    //把黑马这个对象给暴露出去.
    window.heima = heima;


}(window));