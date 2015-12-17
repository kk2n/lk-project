/**
 * Created by likuan on 11/24 0024.
 *
 * 方法集合
 * say(txt)                              调试，参数：输出内容
 * BodyHeight(waikang)                   控制外框高度，参数：外框对象
 * TelChack(tel,err,tishi)               手机验证，参数：1.输入框对象，2、错误提示对象，3、错误内容
 * UrlTo(Obj,url)                        点击跳转，参数：1、点击对象，2、跳转地址
 * ModalOpen(Obj,target,tit)             弹出modal,参数：1,、点击对象，2、弹出DOM对象，3、弹出框标题
 * MyModalOpen(Obj,target,tit,content)   弹出modal,参数：1,、点击对象，2、弹出DOM对象，3、弹出框标题，4、弹出内容文字
 * GetSms(Obj,time)                      发送短信COOKIE倒计时，参数：1点击目标，2、设定时间
 */

define(function(require,exports,module){
    //引用其他JS
    var dialog = require('./dialog.js');//bootstrap组件
    var GetSms= require('./CookieGetSms.js');//cookie倒计时

    //输出信息提示
    exports.say = function(txt){
        console.log(txt);
    };
    //外框高度和背景
    exports.BodyHeight =function(waikang){
        waikang.css('min-height',$(window).height()+'px');
    };
    //手机号码验证
    exports.TelChack = function (tel,err,tishi) {
        var inp_wen = tel.val();
        tel.focus(function(){
            if($(this).val()== inp_wen){
                $(this).val("");
            }
        });
        tel.blur(function(){
            if($(this).val()==''){
                $(this).val(inp_wen);
                err.html("");
            } else{
                var re = /^1[3|4|5|8]\d{9}$/;
                if(re.test($(this).val())){
                    err.html('手机验证通过!');
                    err.addClass("js-ok");
                }else{
                    err.html(tishi);
                    err.removeClass("js-ok");
                }
            }
        })
    };
    //地址跳转
    exports.UrlTo = function (Obj,url) {
        Obj.click(function(){
            window.location.href = url;
        })
    };
    //引用模态框dailog处理事件
    exports.ModalOpen = function(Obj,target,tit){
        dialog.ModalJz();
        dialog.ModalOpen(Obj,target,tit);
    };
    //引用模态框dailog处理事件
    exports.MyModalOpen = function(Obj,target,tit,content){
        dialog.ModalJz();
        dialog.MyModalOpen(Obj,target,tit,content);
    };
    //获取短信验证倒计时
    exports.GetSms = function(Obj,time){
        Obj.attr("data-val","0");
        if($.cookie("time") > 0){
            GetSms.Round(Obj);
            Obj.attr('style',"background-color:#B7B7B7");
        }
        Obj.click(function () {
            if($(this).attr("data-val")==0){
                $.cookie("time", time);
                Obj.attr('style',"background-color:#B7B7B7");
                GetSms.Round(Obj);
            }
        });
    };
    //输入银行卡，方法
    var BanCark = require('./BanCark.js');
    exports.ShukaInp = function (inp,err,tishi) {
        function urlgo(Obj,url) {
            Obj.click(function () {
                Obj.blur();
                window.location.href = url;
            });
        }
        inp.keyup(function(){
            //银行卡验证
            BanCark.shuka(inp,err,tishi);
        });
        $(".js-liji").click(function(){
            //银行卡验证
            if(inp.val().length>=6){
              if(BanCark.shuka(inp,err,tishi)){
                  urlgo($(this),"ww.html");
              }
            } else{
                err.html(tishi);
            }
        });

    };

});


