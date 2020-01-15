(function($) {
    // slides
    let slideImages = ['img/welcome-bg-3.jpg', 'img/welcome-bg.jpg', 'img/welcome-bg.jpg', 'img/accommodation-bg.jpg', 'img/welcome-bg-2.jpg'];
    let html = $('#slides').html();
    slideImages.forEach((url) => {
        $('#slides').append(html.replace('img/welcome-bg-2.jpg', url));
    })
    $('.dash').each((_i, el) => {
        $(el).prepend('<div class="digit"><div class="top" style="display: none;">0</div><div class="bottom" style="display: block;">0</div></div>');
        $(el).prepend('<div class="digit"><div class="top" style="display: none;">0</div><div class="bottom" style="display: block;">0</div></div>');
    })
    let bridemaidImages = ['bridemaid-2.jpg', 'bridemaid-3.jpg'];
    let bridemaidNames = ['Prakruti', 'Chintu'];
    let bridemaidRelations = ['Sister', 'Sister'];
    html = $('#bridemaid-stage').html();
    for (var i = 0; i < bridemaidImages.length; i++) {
        $('#bridemaid-stage').append(html.replace(/bridemaid-1.jpg/g, bridemaidImages[i])
            .replace('Sarang', bridemaidNames[i]).replace('Brother', bridemaidRelations[i]));
    }
    bridemaidImages = ['prachi.jpg', 'asav-dhrumi-1.jpg'];
    bridemaidNames = ['Prachi', 'Asav & Dhrumi'];
    bridemaidRelations = ['Sister', 'Sisters'];
    html = $('#groomsman-stage').html();
    for (var i = 0; i < bridemaidImages.length; i++) {
        $('#groomsman-stage').append(html.replace(/groomsman-1.jpg/g, bridemaidImages[i])
            .replace('Ronak', bridemaidNames[i]).replace('Brother', bridemaidRelations[i]));
    }
    // let galleryImages = ['gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg', 'gallery-5.jpg', 'gallery-6.jpg'];
    // html = $('#gallery-grid').html();
    // for (var i = 0; i < galleryImages.length; i++) {
    //     $('#gallery-grid').append(html.replace(/gallery-1.jpg/g, galleryImages[i]));
    // }
})(jQuery);