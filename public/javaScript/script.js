//json do testów
let example = [{
    "id": 0,
    "nazwisko": "nazwisk8o",
    "imie": "imie",
    "dobry": 12,
    "nie_dobry": 1
}, {
    "id": 1,
    "nazwisko": "n6azwisko",
    "imie": "imi3e",
    "dobry": 0,
    "nie_dobry": 5
}, {
    "id": 2,
    "nazwisko": "nazw14isko",
    "imie": "im2ie",
    "dobry": 0,
    "nie_dobry": 6
}, {
    "id": 3,
    "nazwisko": "nazwis23ko",
    "imie": "im1ie",
    "dobry": 12,
    "nie_dobry": 3
}]


// tu bedzie pobieranie danych i wysiwetlanie na razie jakbysmy w nodzie chcieli robić bo wciąż nie wiem
async function getData(){
    console.log(example)
    const data = {}
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }
    const res = await fetch("api/sendData", options)
    const results = await res.json()
    console.log(results)
    // tu generuje tabelke
    let table = document.querySelector("#nauczyciele").querySelector("tbody")
    results.nauczyciele.forEach(element => {
        const tr = document.createElement("tr")
        let att = document.createAttribute("nauczycielID")
        att.value = element.id
        tr.setAttributeNode(att)
        //tu imie i nazwisko
        let td = document.createElement("td")
        let text = document.createTextNode(element.imie + " "+ element.nazwisko)
        td.append(text)
        tr.append(td)
        //tu radio na tak
        td = document.createElement("td")
        let label = document.createElement("label")
        let radio = document.createElement("input")
        radio.type="radio"
        radio.name= "dobry"
        radio.classList.add("tak")
        att = document.createAttribute("nauczycielID")
        att.value = element.id
        radio.setAttributeNode(att)
        label.append(radio)
        let checkmark = document.createElement("div")
        checkmark.classList.add("checkmark")
        label.append(checkmark)
        td.append(label)
        tr.append(td)
        //tu radio na nie
        td = document.createElement("td")
        label = document.createElement("label")
        radio = document.createElement("input")
        radio.type="radio"
        radio.name= "dobry"
        radio.classList.add("nie")
        att = document.createAttribute("nauczycielID")
        att.value = element.id
        radio.setAttributeNode(att)
        label.append(radio)
        console.log(checkmark)
        checkmark = document.createElement("div")
        checkmark.classList.add("checkmark")
        label.append(checkmark)
        console.log(checkmark)
        
        td.append(label)
        tr.append(td)
        //tu wysyłanie
        td = document.createElement("td")
        const input = document.createElement("input")
        input.type="button"
        input.value = "ok"
        td.append(input)
        tr.append(td)
        //tu ratio
        td = document.createElement("td")
        const span = document.createElement("span")
        text = document.createTextNode(element.dobry+":"+element.nie_dobry)
        span.append(text)
        td.append(span)
        tr.append(td)
        //tu reszta
        tr.append(td)
        table.append(tr)
        console.log(table)
    })
    
}
getData()

//to się potem powinno wykonać ale na razie jest tu
// stuff do odczekowywania radia
document.querySelectorAll('input[type="radio"]').forEach(Element =>{
    Element.addEventListener("mousedown",()=>{
        if(Element.checked == true){
            setTimeout(()=>{
                Element.checked = false
            },100)
            
        }
    })
})