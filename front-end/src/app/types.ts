export type tiposIntegrantes = {
  imgIntegrante:string, 
  nomeIntegrante:string, 
  rmIntegrante:string, 
  salaIntegrante:string, 
  githubIntegrante:string
}

export type TipoUsuario = {
  nome: string,
  email: string,
  senha: string,
  genero: string,
  telefone: string,
  cpf: string
}

export type TipoLogin = {
  email: string, 
  senha: string
}

export type TipoEnderecoUsuario = {
  cep:string,
  bairro:string,
  rua:string,
  num:string
}

export type TipoVeiculoUsuarioOrcamento = {
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
  tipo: string;
  diagnosticos: {diagnostico: string, feito: boolean}[]
}