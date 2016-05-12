$(function() {
/* WORKS サムネイルフリック
---------------------------------------*/
    var flickityInit = function() {
        var slider = document.getElementById('works-slider');
    //    var cats = document.getElementById('works-thumbs');
        var myFlick = new Inflickity(slider);
        window.myFlick = myFlick;
    };
    flickityInit();


/* スクロールによるヘッダー非表示
---------------------------------------*/
    $(window).scroll(function(){
        var hgp = $('#g-hgroup');
        var gnav = $('#g-nav');
        if($(this).scrollTop() > $('#g-header').height()) {
            $(hgp).fadeOut('slow');
            gnav.addClass('scroll-gnav')
                .find('a').fadeIn('nomal').css('display', 'block');
        } else {
            $(hgp).fadeIn('slow');
            gnav.removeClass('scroll-gnav')
                .find('a:first').fadeOut('nomal');
        }
    });
    

/* グローバルナビ スクロール
---------------------------------------*/
    $('#g-nav a, #logo').click(function(event) {
        var to;
        to = '#' + $(this).attr('id').replace('to-', '');
        to = ($(to).position().top - 20) < 0 ? 0 : $(to).position().top - 20;
        $.scrollTo(to, 500, { axis : 'y' });
        return false;
    });


/* HISTORY タイムライン
---------------------------------------*/
    $().timelinr({
        autoPlay: 'true',
        autoPlayDirection: 'forward',
        autoPlayPause: 5000,
        startAt: 1
    });


/* WORKS 個別作品
---------------------------------------*/
    $('#works-slider').find('img').click(function() {
        var individuals = $('#works-individuals-inner');
        // 作品タイトル取得
        var ttl = $(this).attr('src').replace(/img\/works\/([\w-]+)_thumb\.png/, '$1');
        // アニメーション中か判定
        var anim = $(individuals).children().is(':not(:animated)');
        // アニメーション中じゃなかったらクロスフェード
        if(anim) {
            $.ajax({
                url: 'data/' + ttl,
                dataType: 'html',
                success: function(res) {
                    individuals.append(res);
                    var before = individuals.children(':first');
                    var after  = individuals.children(':last').hide();
                    before.fadeOut('nomal', function() { $(this).remove(); });
                    after.fadeIn('nomal');
                }
            });
        }
    // ページ読み込み時
    }).first().trigger('click');


/* WORKS 説明フキダシ
---------------------------------------*/
    $('#speech-bubble').click(function() {
        $(this).fadeOut('normal', function() {
            $(this).remove();
        });
    });
});


