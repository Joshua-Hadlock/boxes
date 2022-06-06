for(i = 0; i < 4; i ++) {
    for(x = 0; x < 4; x ++) {
        $('#boxes').append(`<div class="box"></div>`);
    };
};

$('.box').on('click', function() {
    let colorBox = $(this)
    if($(colorBox).hasClass('lightMode')){
        (colorBox).removeClass('lightMode');

    } else {
        $(colorBox).addClass('lightMode');
    }
});