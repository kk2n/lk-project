/**
 * Created by likuan on 12/8 0008.
 */
define(function(require,exports,module) {
    exports.shuka = function(inp,err,tishi){
        function contains(arr, obj) {
            var i = arr.length;
            while (i--) {
                if (arr[i] === obj) {
                    return true;
                }
            }
            return false;
        }

        function urlgo(Obj,url) {
            Obj.click(function () {
                Obj.blur();
                window.location.href = url;
            });
        }
        var wid_inp = inp.width();
        var wen_zi = inp.val();
        wen_zi = [inp.val().substring(0, 4), inp.val().substring(4, 8), inp.val().substring(8, 12), inp.val().substring(12, 16)];
        if (wen_zi[0]) {
            var str = wen_zi[0];
        }
        if (wen_zi[1]) {
            str = wen_zi[0] + '-' + wen_zi[1];
        }
        if (wen_zi[2]) {
            str = wen_zi[0] + '-' + wen_zi[1] + '-' + wen_zi[2];
        }
        if (wen_zi[3]) {
            str = wen_zi[0] + '-' + wen_zi[1] + '-' + wen_zi[2] + '-' + wen_zi[3];
        }
        if(inp.val().length >0){
            inp.before("<div style='" +
                "height:54px;" +
                "line-height:52px;" +
                "font-size:26px;" +
                "background-color: #fff;" +
                "border: 2px solid #1493FF;" +
                "color:#1493FF;" +
                "margin:-54px auto auto;" +
                "width:" + wid_inp +
                "px;position:relative;text-align:center;font-family:Tahoma' class='int-tiwen-wen'>" + str +
                "</div>").prev().prev(".int-tiwen-wen").remove();
        }
        if (inp.val().length >= 6) {
            var zhi = inp.val().slice(0, 6);
            var arr = ["666666", "111111"];
            if (contains(arr, zhi)) {
                err.html('&nbsp;');
                return true
            } else {
                err.html(tishi);
                return false
            }

        }
        if (inp.val().length >= 16) {
            alert("d");
            $(".js-liji").addClass(".js-on-ok");
        }

    }
});
