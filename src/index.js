//template for custom element
const template = document.createElement('template');
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
    .todo-list{
        list-style: none;
    }
    .list-item{
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

	}

    //first element load
    connectedCallback(){
        this.render()
    }

    //handles click event
    handleClick(){
        const inputBox = this.shadowRoot.querySelector('input[type="text"]')

        let div = document.createElement('div')

        let todoList =  this.shadowRoot.querySelector('.todo-list')

        div.innerText = inputBox.value

        div.setAttribute('class', 'list-item')

        todoList.appendChild(div)

        inputBox.value = ''
    }

    //renders initial content
    render(){
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('text');
    }
  
}

//create custom element
customElements.define('todo-element', TodoElement)



