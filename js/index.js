
// 回顶部




// 倒计时
$(function(){
    setInterval(djs,1000);
    function djs(){
        var futureDate = new Date('2018-12-22 13:02:00');   // 设置未来时间
        var nowDate = new Date();   // 获取当前时间
        var diff = futureDate - nowDate;    //算出相差的毫秒数
        var hours = parseInt(diff / (60*60*1000));     // 计算小时
        diff = diff%(60*60*1000);
        check(hours,$('.hours'));
        var minutes = parseInt(diff / (60*1000));      // 计算分钟
        diff = diff%(60*1000);
        check(minutes,$('.minutes'));
        var seconds = parseInt(diff / (1000));      // 计算秒
        check(seconds,$('.seconds'));
    }
    function check(num,obj){
        if(num < 10){
            obj.html('0'+num);
        }else{
            obj.html(num);
        }
    }
})


// 底部单击哪个哪个变色
$('.foot_list').each(function(){
    $(this).click(function(){
        $('.foot_list').each(function(){
            $(this).attr('id','');
        })
        $(this).attr('id','foot_on');
    })
})



