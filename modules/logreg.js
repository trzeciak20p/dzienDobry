async function login(app, pool)
{
    app.post("/api/login", (req, res) => {
        console.log(req.body)
        pool.query(
        'SELECT * FROM uzytkownicy',
        (err, result) =>{
            if(err){
                console.error(err)
                return res.json({
                    message : "Logowanie nieudane"
                   })
            }
            console.log(result)
            
        }
    )
    })
}

module.exports.login = login