const logout1 = document.querySelector('#logout');
logout1.addEventListener('click' , (e) => {

    e.preventDefault();

        firebase.auth().signOut().then(() =>{
            

        })

})

    firebase.auth().onAuthStateChanged(user => {
    if (user) {
        
        setupUI(user);
    }else {

        setupUI();
    }

});

    const logedout = document.querySelectorAll('.Out');
    const logedin = document.querySelectorAll('.in');
    const accountDetails = document.querySelector('.User');


    const setupUI = (user) => {
        if(user){
            logedin.forEach(iteam => iteam.style.display = 'block');
            logedin.forEach(iteam => iteam.style.display = 'none');


            const html = `
                <span> ${user.email} </span>
                `;
            accountDetails.innerHTML = html;

        }else {
            
            logedout.forEach(iteam => iteam.style.display = 'none');
            logedin.forEach(iteam => iteam.style.display = 'block');
            accountDetails.innerHTML = "";
        }
    };
    
    