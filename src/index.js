//template for custom element
const template = document.createElement('template');
let id = 0;
template.innerHTML = `

	<style>
    :host{
        display: flex;
        justify-content: center;
        align-items: center;
    }
  	 h1{
        text-align: center;
        font-family: "Volkhov", serif;
        color: #181e4b;
  	}
    input[type="text"]{
        padding: 5px;
        width: 300px;
        outline: none;
        font-size: 16px;
    }
    .add-btn{
        padding: 5px;
        font-size: 16px;
    }
    .list-item{
        display: flex;
        justify-content: space-between;
        border-left: 5px solid blue;
        padding: 10px;
        margin: 15px 0;
        font-family: "Poppins", sans-serif;
        background: white;
    }
  </style>

  <div class="my-todo">
  	<h1></h1>
      <input type="text" placeholder="Enter todo"/>
      <button class="add-btn">Add</button>
      <div class="todo-list"></div>
  </div>
`;

//todo element class
class TodoElement extends HTMLElement{
	constructor(){
		super();
    
        this.attachShadow({mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('.add-btn').addEventListener('click', this.handleClick.bind(this))

        this.listItems = ['first', 'second', 'third']

	}

    //first element load
    connectedCallback(){
        this.render()
    }

    //create list div
    createList(value){
        let div = document.createElement('div')

        let deleteBtn = document.createElement('button')

        deleteBtn.innerText = 'Delete'

        deleteBtn.addEventListener('click', (e) => {
            console.log(e.target.id)
        })

        let todoList =  this.shadowRoot.querySelector('.todo-list')

        div.innerText = value

        div.setAttribute('class', 'list-item')

        deleteBtn.setAttribute('id', id++)

        div.appendChild(deleteBtn)

        todoList.appendChild(div)
    }

    //handles click event
    handleClick(){
        const inputBox = this.shadowRoot.querySelector('input[type="text"]')

        //add only if there is value
        if(inputBox.value){
            this.listItems.push(inputBox.value)
            this.createList(inputBox.value)
            inputBox.value = ''
        }
    }

    //renders initial content
    render(){
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('text');
        
        this.listItems.forEach((item) => {
            this.createList(item)
        })
    }
  
}

//create custom element
customElements.define('todo-element', TodoElement)


