// var submitBtn = document.getElementById('login');
// function submitonclick(){
//     var email = document.getElementById('email').value;
//     var pass = document.getElementById('password').value;
//     if(email == 'admin@admin.com' && pass == '12345'){
//         alert('login successful');
//     }
//     // else{
//     //     alert('Please enter correct email and password');
//     // }
    
// }
$(document).ready(function() {
    $('#login').click(function() {
        var email = $('#email').val();
        var pass = $('#password').val();

        if (email === 'admin@admin.com' || pass === '12345') {
            alert('Login successful');
        } else {
            alert('Please enter correct email and password');
        }
    });
});

