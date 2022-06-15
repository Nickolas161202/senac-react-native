interface Ifornecedor {
    id:number
    nome:string
    email:string
    fone:string
    cpf:(string | number)
}

var fornecedor :Ifornecedor = {id:0, nome: '', email:'',fone:"",cpf:'' }

fornecedor.id = 10
fornecedor.nome  = 'antartica'
fornecedor.email = 'pinguim@gmail.com'
fornecedor.fone = '202020'
fornecedor.cpf = 123
