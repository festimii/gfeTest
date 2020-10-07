function suces() {
  window.location.assign("index.html");
}

    const loginF = document.querySelector('#login-s');
    loginF.addEventListener('submit', (e) => {
      e.preventDefault();
    
      const email = loginF['email'].value;
      const password = loginF['password'].value;
   
      firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
          suces();
        console.log(cred.user);
      })
    
    })
