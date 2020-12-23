var bairro = document.querySelector('#bairro');
var localidade = document.querySelector('#localidade');
var uf = document.querySelector('#uf');
var ibge = document.querySelector('#ibge');
var ddd = document.querySelector('#ddd');
var siafi = document.querySelector('#siafi');
var logradouro = document.querySelector('#logradouro')


var cep = document.getElementById('CEP')

var view = document.getElementById('info')

const showData = (results) => {

  localidade.innerHTML = results.localidade
  uf.innerHTML = results.uf
  bairro.innerHTML = results.bairro
  ibge.innerHTML = results.ibge
  ddd.innerHTML = results.ddd
  siafi.innerHTML = results.siafi
  logradouro.innerHTML = results.logradouro


  view.style.display = 'block'
}

cep.addEventListener('blur', (e) => {
  let search = cep.value.replace("-", "")

  let opitions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  fetch(`https://viacep.com.br/ws/${search}/json`, opitions)
    .then(response => {
      response.json()
        .then(data => showData(data))
    })
})