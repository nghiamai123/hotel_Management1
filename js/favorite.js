favorites.js
window.addEventListener('DOMContentLoaded', function () {
    var favoriteList = document.getElementById('favorite-list');

    // Lấy thông tin yêu thích từ localStorage
    var favoriteArticle = localStorage.getItem('favoriteArticle');

    if (favoriteArticle) {
        var listItem = document.createElement('li');
        listItem.textContent = favoriteArticle;
        favoriteList.appendChild(listItem);
    }
});