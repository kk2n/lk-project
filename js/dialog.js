/**
 * Created by likuan on 11/25 0025.
 */
define(function(require,exports,module) {
//引入bootstrap，并创建模态框居中的方法
    var bootstrap = require('./Bootstrap/js/bootstrap.min');
    exports.ModalJz = function () {
            $('.modal').each(function (i) {
            var $clone = $(this).clone().css('display', 'block').appendTo('body');
            var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
            top = top > 0 ? top : 0;
            $clone.remove();
            $(this).find('.modal-content').css("margin-top", top);
        });
    };
    //模态框打开
    exports.ModalOpen =function(Obj,target,tit){
        Obj.click(function(){
            target.modal();
            target.find(".modal-title").html(tit);
        })
    };
    //模态框打开,带内容的
    exports.MyModalOpen =function(Obj,target,tit,content){
        Obj.click(function(){
            target.modal();
            target.find(".modal-title").html(tit);
            target.find(".dialog-con-c").html(content);
        })
    };
//模态框关闭
    exports.ModalClose = function (x) {
        x.modal("hide");
    }
});
