//input element class
class InputElement extends HTMLElement{
    constructor(){
        super();

        this.inputTemplate()

        this.shadowRoot.querySelector('.add-btn').addEventListener('click', this.handleAddClick.bind(this))
       
    }

    //create template
    inputTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
        input[type="text"]{
            padding: 5px;
            width: 300px;
            outline: none;
            font-size: 16px;
        }
        .add-btn{
            padding: 10px;
            font-size: 14px;
            color: white;
            background-color: #0275d8;
            border: none;
            border-radius: 5px;
        }
        </style>
        <input type="text" placeholder="Enter todo"/>
        <button class="add-btn">Add</button>
        `

        this.attachShadow({mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    //handle add button click
    handleAddClick(){
        const inputBox = this.shadowRoot.querySelector('input[type="text"]')

        //add only if there is value
        if(inputBox.value){
            let listItem = document.createElement('list-element')

            listItem.setAttribute('value', inputBox.value) 

            document.querySelector('todo-element').shadowRoot.querySelector('.my-todo').appendChild(listItem)

            inputBox.value = ''
        }
    }
}

customElements.define('input-element', InputElement)