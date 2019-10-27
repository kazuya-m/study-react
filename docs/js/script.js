$(function() {
    // 経歴アコーディオン
    $('.cv-expand').click(function(){
        if ($('.cv-expand').hasClass('open')) { //開いている場合
            $('.cv-expand').removeClass('open');
            $('.cv-list').slideUp();
            $('.fa-chevron-down').css('transform', '') //矢印回転
            $('.cv-expand').text('詳しい経歴はこちらから');
            console.log("hide")
        } else {                                //閉じてる場合
            $('.cv-expand').addClass('open'); 
            $('.cv-list').slideDown();
            $('.fa-chevron-down').css('transform', 'rotate(180deg)') //矢印回転
            $('.cv-expand').text('経歴を閉じる');
            console.log("show")
        }
    })

    // 案件アコーディオン
    $('.cv-item').click(function(){
        var $clickedCvDetail = $(this).find('.cv-detail');
        if ($clickedCvDetail.hasClass('open')) { //案件詳細が開いている場合
            $clickedCvDetail.removeClass('open');
            $clickedCvDetail.slideUp();
            $(this).find('span').text('+');
            console.log("hide")
        } else {                                //案件詳細閉じてる場合
            $($clickedCvDetail).addClass('open'); 
            $($clickedCvDetail).slideDown();
            $(this).find('span').text('-');
            console.log("show")
        }
    })

    // 制作物モーダル表示処理
    $('.modal-show').click(function(){
        var $modalId = $(this).attr("id"); //制作物一覧でクリックされたidを取得して代入
        console.log($modalId)
        switch ($modalId) {
            case 'portfolio': //ポートフォリオの場合
                $('#portfolio-modal').fadeIn();
                break;
            case 'no2': //test no2の場合
                $('#no2-modal').fadeIn();
                break;
            case 'no3': //test no3の場合
                $('#no3-modal').fadeIn();
                break;
            case 'no4': //test no3の場合
                $('#no4-modal').fadeIn();
                break;
        }
    })
    //制作物モーダルクローズ処理
    $('.close-modal').click(function(){
        $('.modal').fadeOut();
    })
})