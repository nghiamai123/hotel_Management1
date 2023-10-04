function dangnhap(){
     document.getElementById("sign").style.display = 'none';
     document.getElementById("regis").style.display = 'none';
     document.getElementById("avata").style.display = 'block';
}

function toggleModal() {
	var modalContainer = document.getElementById('modalContainer');
  var modalContainerDisplay = window.getComputedStyle(modalContainer).display;
	
  modalContainer.style.display = modalContainerDisplay === 'block' ? 'none' : 'block';
}

function hideModal() {
	modalContainer.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  var loginModal = document.getElementById('loginModal');
  var registerModal = document.getElementById('registerModal');
  var loginToRegisterButton = document.getElementById('loginToRegister');
  var registerToLoginButton = document.getElementById('registerToLogin');

  // Function to show the login modal and hide the register modal
  function showLoginModal() {
    var loginToRegisterButton = document.getElementById('loginToRegister');
    var registerToLoginButton = document.getElementById('registerToLogin');
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');
    loginModal.style.display = 'block';
    registerModal.style.display = 'none';
  }

  // Function to show the register modal and hide the login modal
  function showRegisterModal() {
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');
    var loginToRegisterButton = document.getElementById('loginToRegister');
    var registerToLoginButton = document.getElementById('registerToLogin');
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
  }

  // Add click event listeners to the buttons
  loginToRegisterButton.addEventListener('click', showRegisterModal);
  registerToLoginButton.addEventListener('click', showLoginModal);

  // Show the login modal initially
  showLoginModal();
});

              