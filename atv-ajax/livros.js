function livrosLista(){
  const url = 'https://mockapiajax.herokuapp.com/livro'
  fetch(url)
  .then(resp => resp.json())
  .then(livros => {
    console.log(livros);
    const itens = livros.reduce(
      (html, livro) => html + `<li>${livro.id}</li>`, ''
    )
    document.body.insertAdjacentHTML('beforeend', `<ul>${itens}</ul`)
  }) 
}


function livrosCadastro(){
  const url = 'https://mockapiajax.herokuapp.com/livro'
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id: 'vc-666',
      num_livro: '666',
      autor: 'VCOGA',
      nome_livro: 'nome',
      data_cadastro: '23/06/2022',
      descricao: 'descricao',
      tipo: 'tipo',
      quantidade_estoque_venda: '666',
      quantidade_estoque_aluguel: '333',
      valor_venda: '6,50',
      valor_alugel: 'gratis',
    }),
  })
    .then(res => console.log(res))
    .catch(error => alert(error))
}

function livrosAtualizar(){
  const url = 'https://mockapiajax.herokuapp.com/livro'
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({
      num_livro: '666',
      autor: 'levi',
      nome_livro: 'nome2',
      data_cadastro: '23/06/2022',
      descricao: 'descricao',
      tipo: 'tipo',
      quantidade_estoque_venda: '666',
      quantidade_estoque_aluguel: '333',
      valor_venda: '8,50',
      valor_alugel: '2,00',
    }),
  })
    .then(res => console.log(res))
    .catch(error => alert(error))
}

function livrosAlugar(){
  const url = 'https://mockapiajax.herokuapp.com/aluguel'
  fetch(url, {
    headers: {
      Accept: 'application/json', 
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id: '666',
      id_livro: 'vc-666',
      id_cliente: '333',
      data_aluguel: '23/06/2022',
      dias: '12',
    }),
  })
    .then(res => console.log(res))
    .catch(error => alert(error))
}

function livrosVender(){
  const url = 'https://mockapiajax.herokuapp.com/venda'
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id: '666',
      id_livro: 'vc-666',
      id_cliente: '666',
      data_venda: '23/06/2022'
    }),
  })
    .then(res => console.log(res))
    .catch(error => alert(error))
}
