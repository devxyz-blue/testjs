const targetElements = {
    parent: document.querySelector('#main-container'),
    payload: document.createElement('div')
}
targetElements.payload.payloadinnerHTML= 'Hello World';
targetElements.parent.insertBefore(targetElements.payload, targetElements.parent.firstChild);