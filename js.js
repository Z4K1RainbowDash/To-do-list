let buttonElement = document.querySelector("#new-todo-button")
let contentElement = document.querySelector("#content-input")

let toBuyUlElement = document.querySelector("#to-buy-ul")
let workUlElement = document.querySelector("#work-ul")
let schoolUlElement = document.querySelector("#school-ul")

buttonElement.addEventListener('click', addElementToDiv)

function addElementToDiv(e){
    let categorySelectElement = document.querySelector("#category-select-id")
    let prioritySelectElement = document.querySelector("#priority-select-id")
    let iconElement = document.querySelector("#icon-input")
    if(e.type === 'click')
    {
            if(contentElement.value !== '' && contentElement.value.length >= 3 && categorySelectElement.value != 'none')
            {

            
            let newLiElement = document.createElement('li')
            
            newLiElement.innerHTML = iconElement.value + " " + contentElement.value

            newLiElement.addEventListener('click', function () {
                this.classList.toggle('task-ready')
            })

            if(prioritySelectElement.value === 'priority1')
            {
                newLiElement.classList.add('prior-one');
            }
            else if(prioritySelectElement.value === 'priority2')
            {
                newLiElement.classList.add('prior-two');
            }
            else if(prioritySelectElement.value === 'priority3')
            {
                newLiElement.classList.add('prior-three');
            }
            else if(prioritySelectElement.value === 'priority4')
            {
                newLiElement.classList.add('prior-four');
            }
            if(categorySelectElement.value === 'to-buy')
            {
                toBuyUlElement.appendChild(newLiElement)
            }
            else if(categorySelectElement.value === 'work'){
                workUlElement.appendChild(newLiElement)
            }
            else if(categorySelectElement.value === 'school')
            {
                schoolUlElement.appendChild(newLiElement)
            }
        }
        
    }

}

//<i class="fa fa-car"></i>