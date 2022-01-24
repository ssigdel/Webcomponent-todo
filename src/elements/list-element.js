//listelement class
class ListElement extends HTMLElement{
    constructor(){
        super();

        this.listTemplate()

        this.shadowRoot.querySelector('.delete-btn').addEventListener('click', this.handleDeleteClick.bind(this))
        this.shadowRoot.querySelector('.edit-btn').addEventListener('click', this.handleEditClick.bind(this))
        
    }
    //create template
    listTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            .list-item{
                display: flex;
                justify-content: space-between;
                border-left: 5px solid  #0275d8;
                padding: 10px;
                margin: 15px 0;
                font-family: "Poppins", sans-serif;
                background: white;
            }
            .delete-btn{
                color: white;
                background-color: #d9534f;
                border: none;
                border-radius: 5px;
            }
            .edit-btn{
                color: white;
                background-color: #0275d8;
                border: none;
                border-radius: 5px;
            }
        </style>
        <div class="list-item">
        <div class="list-text"></div>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
        </div>
      
        `

        this.attachShadow({mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        this.render()
    }

    //handle delete click
    handleDeleteClick(){
        document.querySelector('todo-element').shadowRoot.querySelector('.my-todo').removeChild(this)
    }

    //handle edit click
    handleEditClick(){
        this.shadowRoot.querySelector('.list-text').setAttribute('contenteditable', true)
    }

    render(){
        this.shadowRoot.querySelector('.list-text').innerText = this.getAttribute('value')
    }
}

customElements.define('list-element', ListElement)