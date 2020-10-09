
//                 Sign UP             //
    
const signup = document.querySelector('#signup-s');
signup.addEventListener('submit', (e) => {
    e.preventDefault();


    const email = signup['email-sig'].value;
    const password = signup['password-sig'].value;
 

    if (email.length < 4) {
     alert('Please enter an email address.');
     return;
   }
   if (password.length < 4) {
     alert('Please enter a password.');
     return;
   }
   // Create user with email and pass.
   // [START createwithemail]
   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // [START_EXCLUDE]
     if (errorCode == 'auth/weak-password') {
       alert('The password is too weak.');
     } else {
       alert(errorMessage);
     }
     console.log(error);
     // [END_EXCLUDE]
   });
   // [END createwithemail]
 
})


