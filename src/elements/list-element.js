class ListElement extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        this.render()
    }

    render(){
        let text = document.createElement('p')

        text.innerText = 'This is list element'

        this.shadowRoot.appendChild(text)
    }
}

customElements.define('list-element', ListElement)