document.querySelectorAll('input[type="radio"]').forEach(Element =>{
    Element.addEventListener("mousedown",()=>{
        if(Element.checked == true){
            setTimeout(()=>{
                Element.checked = false
            },100)
            
        }
    })
})