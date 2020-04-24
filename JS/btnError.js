;(function(){
    // selectors
    const data = document.querySelector('.data')
    const btn = document.querySelector('.green-btn')
    const fname = document.querySelector('#fname')
    const lname = document.querySelector('#lname')
    const email = document.querySelector('#email')
    const pwd = document.querySelector('#pwd')
    
    function noError () {
        document.querySelector(".error").remove()
        document.querySelector(".imgError").remove()
    }

    function noErrorColor (id){
        document.getElementById(id).style.borderColor = "hsl(249, 10%, 26%)"
    }

    btn.addEventListener('click', function(event){
        event.preventDefault()
        
        const msgErrorFn = document.createElement("div")
        const imgErrorFn = document.createElement("div")

        const isfnameEmpty = fname.value.trim().length === 0 
        if(isfnameEmpty){
            document.getElementById("fname").style.borderColor = "hsl(350, 88%, 52%)"
            msgErrorFn.classList.add("error")
            msgErrorFn.textContent = "First Name cannot be empty"
            fname.after(msgErrorFn)

            imgErrorFn.classList.add("imgError")
            fname.after(imgErrorFn)
        }

        const msgErrorLn = document.createElement("div")
        const imgErrorLn = document.createElement("div")

        const islnameEmpty = lname.value.trim().length === 0 
        if(islnameEmpty){
            document.getElementById("lname").style.borderColor = "hsl(350, 88%, 52%)"
            msgErrorLn.classList.add("error")
            msgErrorLn.textContent = "Last Name cannot be empty"
            lname.after(msgErrorLn)

            imgErrorLn.classList.add("imgError")
            lname.after(imgErrorLn)
        }

        const msgErrorEm = document.createElement("div")
        const imgErrorEm = document.createElement("div")

        const isEmailEmpty = email.value.trim().length === 0 || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1
        if(isEmailEmpty){
            document.getElementById("email").style.color = "hsl(350, 88%, 52%)"
            document.getElementById("email").style.borderColor = "hsl(350, 88%, 52%)"
            msgErrorEm.classList.add("error")
            msgErrorEm.textContent = "Looks like this is not an email"
            email.after(msgErrorEm)

            imgErrorEm.classList.add("imgError")
            email.after(imgErrorEm)
        }

        const msgErrorPw = document.createElement("div")
        const imgErrorPw = document.createElement("div")

        const isPwEmpty = pwd.value.trim().length === 0 
        if(isPwEmpty){
            document.getElementById("pwd").style.borderColor = "hsl(350, 88%, 52%)"
            msgErrorPw.classList.add("error", "last-error")
            msgErrorPw.textContent = "Password cannot be empty"
            pwd.after(msgErrorPw)

            imgErrorPw.classList.add("imgError")
            pwd.after(imgErrorPw)
        
        } else {
            noError()
            noError()
            noError()
            noError()
            noErrorColor("fname")
            noErrorColor("lname")
            noErrorColor("email")
            noErrorColor("pwd")

            setTimeout(() => {
                alert("This is only a test, your personal information will not be saved.")
            }, 1000);
        }
    })
})()
