$(function(){
    // ナビゲーションバーを表示外に
    setTimeout("scrollTo(0,1)", 100);

/* ABOUT
   ========================================================================== */
    // タブ
    var aboutBodyElm = $('#jsAboutBody section').hide();
    $('#jsAboutTab').find('li').click(function() {
        var aboutTabElmIndex = $(this).index();
        aboutBodyElm.hide();
        $(aboutBodyElm).eq(aboutTabElmIndex).show();
    })
    .eq(0).trigger('click');

/* WORKS
   ========================================================================== */
    var worksThumbs     = $('#jsWorksThumbs'),
        worksIndividual = $('#jsWorksIndividual'),
        worksLoader     = $('#jsworksLoader');

    // サムネイル表示
    $('#jsWorksBtnSelect').click(function() {
        worksThumbs.toggle();
    }).trigger('click');

    // 作品詳細表示
    $(worksThumbs).find('img').click(function() {
        worksLoader.show();
        // 作品タイトル取得
        var ttl = $(this).attr('src').replace(/img\/works\/([\w-]+)_thumb\.png/, '$1');
        $.ajax({
            url: 'data/' + ttl,
            dataType: 'html',
            success: function(res) {
                worksIndividual.html(res);
                worksThumbs.hide();
                worksLoader.hide();
            }
        });
        return false;
    });
});