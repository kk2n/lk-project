/**
 * Created by likuan on 12/4 0004.
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

//获取验证码倒计时
define(function(require,exports,module) {
    exports.Round = function (Obj) {
        var ss = $.cookie("time");
        var SetObj = setInterval(function(){
               if(ss <= 0){
                   $.cookie("time", null);
                   Obj.text("获取验证码");
                   Obj.removeAttr("style");
                   clearInterval(SetObj);
               }else{
                   ss = $.cookie("time") - 1;
                   $.cookie("time", ss);
                   Obj.text(ss+"s");
                   Obj.attr('data-val',ss);
                   Obj.attr('style',"background-color:#B7B7B7");
               }
        }, 1000);

    };
});
