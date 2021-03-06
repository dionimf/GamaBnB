const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'row');
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(locacao => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card col-md-4');
        const img = document.createElement('img');
        img.src=locacao.photo;

        const h1 = document.createElement('h5');
        h1.textContent = locacao.property_type;

        const p = document.createElement('p');
        locacao.name = locacao.name.substring(0, 300);
        p.textContent = `${locacao.name}`;

        const p2 = document.createElement('p');
        p2.textContent = `R$: ${locacao.price}`;

        container.appendChild(card);
        card.appendChild(img);
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(p2);
    });
  } else {
    const errorMessage = document.createElement('erro');
    errorMessage.textContent = `ainda em contrução`;
    app.appendChild(errorMessage);
  }
}

request.send();