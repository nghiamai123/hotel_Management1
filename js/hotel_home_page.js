// var nameArray = [];
// var emailArray=[];
// var passwordArray=[];
// var dateArray=[];
// var genderArray =[];
// var phoneArray =[];
// let currentloign = true;
// if(currentloign )
function dangnhap(){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("avata").style.display = 'block';
}
    
// function register(){
//     var name = document.getElementById("registerName").value;
//     var email = document.getElementById("registerEmail").value;
//     var date = document.getElementById("auth-form__date").value;
//     var password = document.getElementById("registerPassword").value;
//     var passwordConfirm = document.getElementById("registerConfirmPassword").value;
//     if (name == ""){
//       alert("Name required.");
//       return ;
//     }
//     else if (email == ""){
//         alert("Email required.");
//         return ;
//     }
//     else if (password == ""){
//         alert("Password required.");
//         return ;
//     }
//     else if (passwordConfirm == ""){
//         alert("Password required.");
//         return ;
//     }
//     else if ( password != passwordConfirm ){
//         alert("Password don't match retype your Password.");
//         return;
//     }
//     else if(emailArray.indexOf(email) == -1){
//         emailArray.push(email);
//         passwordArray.push(password);
//         localStorage.setItem('listEmail',JSON.stringify(emailArray) );
//         localStorage.setItem('listPassword',JSON.stringify(passwordArray) );
//         alert(email + "  Thanks for registration. \nTry to login Now");
//         dangnhap();
//         // document.getElementById("re").value ="";
//         // document.getElementById("rp").value="";
//         // document.getElementById("rrp").value="";
//     }
//     else{
//         alert(email + " is already register.");
//         return ;
//     }
// }
// function login(){
//     var email = document.getElementById("loginEmail").value;
//     var password = document.getElementById("loginPassword").value;

//     var i = emailArray.indexOf(email);

//     if(emailArray.indexOf(email) == -1){
//         if (email == ""){
//             alert("Email required.");
//             return ;
//         }
//         alert("Email does not exist.");
//         return ;
//     }
//     else if(passwordArray[i] != password){
//         if (password == ""){
//             alert("Password required.");
//             return ;
//         }
//         alert("Password does not match.");
//         return ;
//     }
//     else {
//         alert(email + " yor are login Now \n welcome to our website.");
//         dangnhap();
//         // document.getElementById("se").value ="";
//         // document.getElementById("sp").value="";
//         return ;
//     }

// }
// function forgot(){
//     event.preventDefault();

//     var email = document.getElementById("fe").value;

//     if(emailArray.indexOf(email) == -1){
//         if (email == ""){
//             alert("Email required.");
//             return ;
//         }
//         alert("Email does not exist.");
//         return ;
//     }

//     alert("email is send to your email check it in 24hr. \n Thanks");
//     document.getElementById("fe").value ="";
// }
