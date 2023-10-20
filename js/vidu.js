window.addEventListener('DOMContentLoaded', function () {
    var favoriteIcon = document.querySelector('.favorite-icon');
    var favoriteImage = document.querySelector('.favorite-image');

    favoriteIcon.addEventListener('click', function () {
        favoriteIcon.classList.toggle('filled');
        favoriteImage.classList.toggle('filled');
        var isFavorite = favoriteIcon.classList.contains('filled');

        // Lưu thông tin yêu thích vào localStorage
        if (isFavorite) {
            var imageUrl = favoriteImage.getAttribute('src');
            localStorage.setItem('favoriteImage', imageUrl);
        } else {
            localStorage.removeItem('favoriteImage');
        }
    });
});
