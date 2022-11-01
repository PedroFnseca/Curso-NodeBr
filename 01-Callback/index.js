/*
  Nesse arquivo é demonstrado de uma forma didática de como funciona o 
  assincronismo JavaScript. Com exemplos do mundo real do dia a dia
  como simulações de coleta de dados através de DATABASES.
  Aqui é feito de uma forma mais aninhada para um entendimento mais
  a fundo sobre o seu funcionamento 

  0- Obter um usuário
  1- Obter o numero de telefone de um usuário a partir de seu id
  2- Obter o endereço do usuario pelo id
*/

function obterUsuario(callback){
  setTimeout( ()=>{
    return callback(null, {
      id: 1,
      nome: "Alandin",
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback){
  setTimeout( () => {
    return callback(null, {
      numero: "00000-0000",
      ddd: 11
    })
  }, 1000)
}

function obterEndereco(idUsuario, callback){
  setTimeout(() =>{
    return callback(null, {
      rua: "Ruazinha",
      numero: 0
    })
  }, 2000)
}


obterUsuario(function resolverUsuario(erro, usuario){
  // null || "" || 0 === false
  if(erro){
    console.log("Erro em usuario: ", erro)
    return
  }

  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone){
    if(erro1){
      console.log("Erro em telefone: ", telefone)
      return
    }

    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
      if(erro2){
        console.log("Erro em endereço: ", endereco)
        return
      }

      console.log(`
        Nome: ${usuario.nome},
        Telefone: ${telefone.ddd} ${telefone.numero}
        Endereço: ${endereco.rua}, ${endereco.numero}
      `)
    })
  })
})
