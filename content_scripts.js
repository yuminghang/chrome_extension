;(function () {

    // var count = $('.pressed');
    // var total = $('.up');
    // 发送给background.js
    // chrome.runtime.sendMessage({
    //     count:count.length,
    //     total:total.length,
    //     noCount:total.length - count.length
    // },function(response){
    //     console.log(response);
    // })

    // // 清除点赞限制
    // localStorage.removeItem('zap:SharedSession');
    // localStorage.removeItem('zap:Stash');
    // sessionStorage.removeItem('zap:Session');

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        // 一键点赞
        if (request.action == "role1") {
            $("#phone_number_input").attr("value", "18729033274");
        } else if (request.action == "role2") {
            $("#phone_number_input").attr("value", "18729033275");
        } else if (request.action == "role3") {
            $("#phone_number_input").attr("value", "18729033276");
        }
        else if (request.action == "role4") {
            $("#phone_number_input").attr("value", "18729033277");
        }
        else if (request.action == "role5") {
            $("#phone_number_input").attr("value", "18729033278");
        }
        else if (request.action == "role6") {
            $("#phone_number_input").attr("value", "18729033279");
        }
        else if (request.action == "role7") {
            $("#phone_number_input").attr("value", "18729033270");
        } else if (request.action == "role8") {
            $("#phone_number_input").attr("value", "18729033271");
        }
        $("#login_password").attr("value", "123456");
        $("#login-btn").click();

    })
})(this)