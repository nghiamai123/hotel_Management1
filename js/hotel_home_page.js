var nameArray = [
    "Duong Thị Hồng Lam",
    "Trần Thị Việt Mỹ"
    
];
var emailArray=[
    "honglamhk@gmail.com"
];
var passwordArray=[
    "lamlam"
];
var dateArray=[
    "2023-10-01"
];
var genderArray =[
    "male"
];
var phoneArray =[];

function register(){
    var name = document.getElementById("registerName").value;
    var email = document.getElementById("registerEmail").value;
    var date = document.getElementById("auth-form__date").value;
    var selectElement = document.getElementById("auth-form__gender");
    var gender = selectElement.value;
    var phone = document.getElementById("registerPhone");
    var password = document.getElementById("registerPassword").value;
    var passwordConfirm = document.getElementById("registerConfirmPassword").value;
    if (name == ""){
      alert("Name required.");
      return ;
    }
    else if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (date == ""){
        alert("date required.");
        return ;
    }
    else if(gender == ""){
        alert("gender requirment.")
        return;
    }
    else if (phone ==""){
        alert("Phone required.")
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordConfirm == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordConfirm ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){ //kiểm trả xem gia
        nameArray.push(name);
        emailArray.push(email);
        dateArray.push(date);
        genderArray.push(gender);
        phoneArray.push(phone);
        passwordArray.push(password);
        alert(email + "  Thanks for registration. \nTry to login Now");
        name = document.getElementById("registerName").value='';
        email = document.getElementById("registerEmail").value='';
        date = document.getElementById("auth-form__date").value='';
        selectElement = document.getElementById("auth-form__gender")='';
        gender = selectElement.value='';
        phone = document.getElementById("registerPhone")='';
        password = document.getElementById("registerPassword").value='';
        passwordConfirm = document.getElementById("registerConfirmPassword").value='';
        localStorage.setItem('listName',JSON.stringify(nameArray) );
        localStorage.setItem('listEmail',JSON.stringify(emailArray) );
        localStorage.setItem('listPhone',JSON.stringify(phoneArray) );
        localStorage.setItem('listDate',JSON.stringify(dateArray) );
        localStorage.setItem('listGender',JSON.stringify(genderArray) );
        localStorage.setItem('listPassword',JSON.stringify(passwordArray) );
        
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}




function login(){
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("loginEmail").value ="";
        document.getElementById("loginPassword").value="";
        return ;
    }

}


