const API_URL = 'https://jsonplaceholder.typicode.com/users/1' ;

const xhr = new XMLHttpRequest ();

function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responde);
        console.log(data);
        const HTMLResponse = document.querySelector('#app');

        const tpl = data.map(user => '<li>${user.name} 📧${user.email}</li>');
        HTMLResponse.innerHTML = '<ul>'
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', '${API_URL}/users');
xhr.send();
