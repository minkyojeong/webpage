$(function(){
    $('#m3_onofficon').click(function(){
        if($('#m3_onofficon').attr('src') == "./images/button-off-48.png"){
            $('#m3_onofficon').attr('src','./images/button-on-48.png');
        }
        else{
            $('#m3_onofficon').attr('src','./images/button-off-48.png');
        }
    });

    $('#m3_lang_items li').click(function(e){
        $('#m3_reco_items li').css('border','none');
        $('#m3_lang_items li').css('border','none');
        $(this).css('border','1px solid');
        $(this).css('border-radius','8px');
        var str = $(this).find("div:nth-child(1)").text();
        var lang = $(this).children("a").attr("lang").split("-")[1];
        $("#m3_modal1Btn").text(str + "(" + lang + ")");
    });

    $('#m3_reco_items li').click(function(e){
        $('#m3_reco_items li').css('border','none');
        $('#m3_lang_items li').css('border','none');
        $(this).css('border','1px solid');
        $(this).css('border-radius','8px');
        var str = $(this).find("div:nth-child(1)").text();
        var lang = $(this).children("a").attr("lang").split("-")[1];
        $("#m3_modal1Btn").text(str + "(" + lang + ")");
    });
    
    $('#m3_curr_items li').click(function(e){
        $('#m3_curr_items li').css('border','none');
        $(this).css('border','1px solid');
        $(this).css('border-radius','8px');
        var str = $(this).find("div:nth-child(2)").text();
        $("#m3_modal2Btn").text(str.split("-")[0]);
        $("#m3_modal1Area span:nth-child(2) > a").text(str.split("-")[1]);
    });

    $('.m3_closeicon').click(function(){
        $('#m3_modal1').css('display','none');
        $('body').css("overflow", "scroll");
    });

    $('#m3_modal2Area').click(function(){
        $('.m3_hideOrShow').css('display','none');
        $('#m3_modal1').fadeIn();
        $('body').css("overflow", "hidden");
        $('#m3_modal1_wrapper').css("overflow-y", "auto");
    });

    $('#m3_modal1Area').click(function(){
        $('.m3_hideOrShow').css('display','none');
        $('#m3_modal2').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $(document).click(function(e){
        if($("#m3_modal1").is(e.target) || $("#m3_modal2").is(e.target)){
            $('#m3_modal2').css('display','none');
            $('#m3_modal1').css('display','none');
            $('body').css("overflow", "scroll");
        }
    });

    $('#btn').click(function(){
        $('#m3_modal1').fadeIn();
        $('body').css("overflow", "hidden");
        $('#m3_modal1_wrapper').css("overflow-y", "auto");
        $('.m3_hideOrShow').css('display','block');
        $('.m3_hideOrShow').css({'padding-left':'12px', 'padding-right':'12px'});
        $('.m3_hideOrShow > span > a').css({'text-decoration':'none','color':'black','display':'inline-block','font-size':'14px','font-weight':'600'});
        $('.m3_langBtn').css({'display':'inline-block','padding-left':'10px', 'padding-right':'10px','padding-top':'10px', 'padding-bottom':'10px'});
        $('.m3_langBtn').css({'margin-left':'-10px', 'margin-right':'6px','margin-bottom':'6px', 'margin-top':'6px'});
        $('.m3_currBtn').css({'display':'inline-block','padding-left':'10px', 'padding-right':'10px','padding-top':'10px', 'padding-bottom':'10px'});
        $('.m3_currBtn').css({'margin-bottom':'6px', 'margin-top':'6px'});
    });

    $('.m3_langBtn').click(function(){
        $('#m3_modal2').css('display','none');
        $('#m3_modal1').css('display','block');
        $('body').css("overflow", "hidden");
        $('#m3_modal1_wrapper').css("overflow-y", "auto");
    });


    $('.m3_currBtn').click(function(){
        $('#m3_modal1').css('display','none');
        $('#m3_modal2').css('display','block');
        $('body').css("overflow", "hidden");
    });


  
});

    
