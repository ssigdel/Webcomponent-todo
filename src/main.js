//todo element class
class TodoElement extends HTMLElement{
	constructor(){
		super();
    
        this.todoTemplate()
	}

    //create template
    todoTemplate(){
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
        </style>

        <div class="my-todo">
            <h1></h1>
            <input-element></input-element>
        </div>
    `;
        this.attachShadow({mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    //first element load
    connectedCallback(){
        this.render()
    }

    //renders initial content
    render(){
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('text');
    }
}

//create custom element
customElements.define('todo-element', TodoElement)


