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
        color: #333;
        text-align: center;
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
  </style>

  <div class="my-todo">
  	<h1></h1>
      <input type="text" placeholder="Enter todo"/>
      <button class="add-btn">Add</button>
      <ul class="todo-list"></ul>
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

        let li = document.createElement('li')

        let todoList =  this.shadowRoot.querySelector('.todo-list')

        li.innerText = inputBox.value

        todoList.appendChild(li)
    }

    //renders initial content
    render(){
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('text');
    }
  
}

//create custom element
customElements.define('todo-element', TodoElement)



