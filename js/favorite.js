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





checkbox.addEventListener("change", function () {
    if (icon.classList.contains('fa-eye-slash')) {
        icon.classList.remove('fa-eye-slash')
        icon.classList.add("fa-eye")
    }
    else {
        icon.classList.remove("fa-eye")
        icon.classList.add('fa-eye-slash')
    }

    icon.classList.contains("fa-eye") ? showPassword.type = 'text' : showPassword.type = 'password'
})

checkboxRegister.addEventListener("change", function () {
    if (iconRegister.classList.contains('fa-eye-slash')) {
        iconRegister.classList.remove('fa-eye-slash')
        iconRegister.classList.add("fa-eye")
    }
    else {
        iconRegister.classList.remove("fa-eye")
        iconRegister.classList.add('fa-eye-slash')
    }

    iconRegister.classList.contains("fa-eye") ? passwordData1.type = 'text' : passwordData1.type = 'password'
})