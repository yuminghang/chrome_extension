
$(function(){

    // 一键点赞
    $("#role1").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role1"});
        });
    })
    $("#role2").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role2"});
        });
    })
    $("#role3").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role3"});
        });
    })
    $("#role4").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role4"});
        });
    })
    $("#role5").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role5"});
        });
    })
    $("#role6").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role6"});
        });
    })
    $("#role7").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role7"});
        });
    })
    $("#role8").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "role8"});
        });
    })
    

})