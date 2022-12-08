async function login(app, pool)
{
    app.post("/api/login", (req, res) => {
        console.log(req.body.login)
        pool.query(
        'SELECT * FROM uzytkownicy',
        (err, result) =>{
            console.log(res)
            return res.json({
                    message : "Logowanie udane czy coś"
                   })
        }
    )
    })
}

module.exports.login = login