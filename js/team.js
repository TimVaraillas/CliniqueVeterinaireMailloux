function setGalleryItemsSize() {
    width = $('.team-gallery-item').width();
    height = width*1.5
    $('.team-gallery-item').height(height);
    $('.team-member').height(height);
    $('.team-member').width(width);
    $('.team-member').css("top", -(height)-3);
}
setGalleryItemsSize();
$(window).resize(function () {
    setGalleryItemsSize();
});
