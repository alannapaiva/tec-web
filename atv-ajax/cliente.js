function clienteLista(){
  const url = 'https://mockapiajax.herokuapp.com/cliente'
  fetch(url)
  .then(response => response.json())
  .then(clientes => {
    console.log(clientes);
    const itens = clientes.reduce(
      (html, cliente) => html + `<li>${cliente.id}</li>`, ''
    )
    document.body.insertAdjacentHTML('beforeend', `<ul>${itens}</ul`)
  }) 
}

function clienteCadastro(){
  const url = 'https://mockapiajax.herokuapp.com/cliente'
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      id: '666',
      nome_completo: 'Viktor',
      estado: 'liquido',
      cpf: '0123456789',
      rg: '9876543210',
      ddd: '88',
      telefone: '40028922',
      email: "email@email.com",
      data_criacao: '23/06/2022',
      data_atualizacao: '23/06/2022',
    }),
  })
    .then(res => res.json(res))
    .catch(error => alert(error))
}

function clienteAtualizar(){
  const url = 'https://mockapiajax.herokuapp.com/cliente/666' 
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({
      nome_completo: 'Viktor',
      estado: 'liquido',
      cpf: '0123456789',
      rg: '9876543210',
      ddd: '88',
      telefone: '40028922',
      email: "email@email.com",
      data_criacao: '23/06/2022',
      data_atualizacao: '23/06/2025',
    }),
  })
    .then(res => res.json(res))
    .catch(error => alert(error))
}

function clienteDeletar() {
  const url = 'https://mockapiajax.herokuapp.com/cliente/666' 
  fetch(url, 
    {headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
    .then(res => res.json(res))
    .catch(error => alert(error))
}
