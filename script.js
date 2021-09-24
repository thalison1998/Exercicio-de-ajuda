const inputCreateDiv = document.querySelector('#inputDisparar')
const containerDivs = document.querySelector('.container-divs')

const create = () => {
    const div = document.createElement('div')
    div.classList.add('divs')
    containerDivs.appendChild(div)
}

const removeDiv = () => {
    const divs = containerDivs.querySelector(".divs")
    if(containerDivs.children.length > 0){
      containerDivs.removeChild(divs)  
    }
    
}

inputCreateDiv.addEventListener('change',()=>{
    const valueInput = Number(inputCreateDiv.value)
    for(let i = 0; i < valueInput;i++){
        if(valueInput > 0){
            create()
        }
    }
   if(valueInput < 0){
      const negativeTransformation  = Math.abs(valueInput)
      for(let i = 0; i < negativeTransformation;i++){
         removeDiv()
      }
   }

})