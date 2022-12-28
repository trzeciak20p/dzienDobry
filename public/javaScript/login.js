//logowanie
async function login(){
    const data = { 
        login : document.querySelector("#log-log").value,
        password : document.querySelector("#log-pas").value
    }
    console.log(data)
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }
    const res = await fetch("api/login", options)
    const results = await res.json()
    console.log(results.message)
    if(results.correct){
        sessionStorage.setItem("login", data.login)
        sessionStorage.setItem("password", data.password)
    }
}
document.querySelector("#log-submit").addEventListener("click", login) 
document.querySelector("#log-out").addEventListener("click", ()=>{
    sessionStorage.clear()
}) 
    
    
