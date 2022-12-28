async function login(app, pool)
{
    app.post("/api/login", (req, res) => {
        console.log(req.body)
        let login = req.body.login
        let password = req.body.password
        pool.query(
        `SELECT * FROM uzytkownicy WHERE nazwa = '${login}' && haslo = SHA2('${password}',256)`,
        (err, result) =>{
            if(err){
                console.error(err)
                return res.json({
                    correct : false,
                    message : "Logowanie nieudane, błąd serwera"
                   })
            }
            // console.log(result)
            // console.log(result.length)
            if(result.length == 1){
                return res.json({
                    correct : true,
                    message : "Logowanie udane"
                   })
            }else{
                return res.json({
                    correct : false,
                    message : "Logowanie nieudane"
                   })
            }
            
        }
    )
    })
}

module.exports.login = login