async function sendData(app, pool){
    app.post("/api/sendData", (req, res) => {
        pool.query(`SELECT * FROM nauczyciele;`,
        (err, result) =>{
            if(err){
                console.error(err)
                return res.json({
                    message : "Nie udało się pobrać danych"
                   })
            }
            console.log(result)
            let finalData = []
            result.forEach(element => {
              finalData.push({
                "id": element.nauczyciel_id,
                "nazwisko" : element.nazwisko,
                "imie": element.imie,
                "dobry": element.dobry,
                "nie_dobry":element.nie_dobry
              })  
            })
            return res.json({
                nauczyciele : finalData
            })

            
        })
    })
}


module.exports.sendData = sendData