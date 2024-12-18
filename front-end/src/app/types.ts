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

export type TipoEnderecoUsuarioCadastro = {
  cpfUsuario:string,
  cepEnderecoUsuario:string,
  bairroEnderecoUsuario:string,
  ruaEnderecoUsuario:string,
  numEnderecoUsuario:string
}

export type TipoEnderecoUsuarioAgendamento = {
  cepEnderecoUsuario:string,
  bairroEnderecoUsuario:string,
  ruaEnderecoUsuario:string,
  numEnderecoUsuario:string
}

export type TipoVeiculoUsuario = {
  marca: string, 
  modelo: string, 
  ano: number, 
  placa: string, 
  tipo: string
}

export type TipoVeiculoUsuarioCadastro = {
  marca: string, 
  modelo: string, 
  ano: number, 
  placa: number, 
  tipo: string,
  idUsuario: number
}

export type TipoVeiculoUsuarioOrcamento = {
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
  tipo: string;
  diagnosticos: {diagnosticoVeiculo: string, dataDiagnostico: number[], feitoDiagnostico: number, idVeiculo: number, idDescricaoProblema: number}[]
}

export type TipoDiagnostico = {
  diagnosticoVeiculo: string, 
  dataDiagnostico: number[], 
  feitoDiagnostico: number, 
  idVeiculo: number, 
  idDescricaoProblema: number
}

export type TipoHorarioMecanica = {
  horarioDisponivel: number[];
  idMecanica: number;
}

export type TipoOrcamentoAgendamento = {
  valorOrcamento:number;
  dataOrcamento: number[];
  idVeiculo: number;
  idDiagnostico: number;
}

export type TipoAgendamentoInput = {
  placaVeiculo: string;
  idMecanica: number;
  idDiagnostico: number;
  horarioDisponivel: number[];
}