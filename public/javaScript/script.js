//json do testów
let example = [{
    "nazwisko": "nazwisk8o",
    "imie": "imie",
    "dobry": 12,
    "nie_dobry": 1
}, {
    "nazwisko": "n6azwisko",
    "imie": "imi3e",
    "dobry": 0,
    "nie_dobry": 5
}, {
    "nazwisko": "nazw14isko",
    "imie": "im2ie",
    "dobry": 0,
    "nie_dobry": 6
}, {
    "nazwisko": "nazwis23ko",
    "imie": "im1ie",
    "dobry": 12,
    "nie_dobry": 3
}]


// tu bedzie pobieranie danych i wysiwetlanie na razie jakbysmy w nodzie chcieli robić bo wciąż nie wiem
async function getData(){
    console.log(example)
    // tu generuje tabelke
    let table = document.querySelector("#nauczyciele").querySelector("tbody")
    example.forEach(element => {
        const tr = document.createElement("tr")
        //tu imie i nazwisko
        let td = document.createElement("td")
        let text = document.createTextNode(element.imie + " "+ element.nazwisko)
        td.append(text)
        tr.append(td)
        //tu radio na tak
        td = document.createElement("td")
        let label = document.createElement("label")
        text = document.createTextNode("Dobry")
        label.append(text)
        let radio = document.createElement("input")
        radio.type="radio"
        radio.name= "dobry"
        radio.classList.add("tak")
        label.append(radio)
        td.append(label)
        tr.append(td)
        //tu radio na nie
        td = document.createElement("td")
        label = document.createElement("label")
        text = document.createTextNode("Nie dobry")
        label.append(text)
        radio = document.createElement("input")
        radio.type="radio"
        radio.name= "dobry"
        radio.classList.add("nie")
        label.append(radio)
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