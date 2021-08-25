function ValidaCPF(value) {
  const cpfRegex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  return !!cpfRegex.test(value)
}

function fMasc(obj, masc) {

  if(obj.value === '') return null
  
  obj.value = masc(obj.value);
  
  const cpfInput = document.getElementById('cpf')

  if (ValidaCPF(obj.value)) {
    console.log('CPF Válido');
    cpfInput.style.outlineColor = 'green'
  } else {
    console.log('CPF Inválido');
    cpfInput.style.outlineColor = 'red'
  }
}

function maskCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return cpf;
}

function extraiCPF(cpf){
  return cpf.replaceAll('.','').replace('-','')
}

function ValidaCEP(value) {
  const cpfRegex = /^(([0-9]{5}-[0-9]{3})|([0-9]{8}))$/;
  return !!cpfRegex.test(value)
}

function extraiCEP(cep){
  return cep.replace('-','')
}

function maskCEP(cep) {
  cep = cep.replace(/\D/g, '');
  cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
  // cep = cep.replace(/(\d{5})(\d{1,2})$/, '$1-$2');
  return cep;
}

function fMascCEP(obj, masc) {

  if(obj.value === '') return null
  
  obj.value = masc(obj.value);
  
  const cepInput = document.getElementById('cep')

  if (ValidaCEP(obj.value)) {
    // console.log('CEP Válido');
    cepInput.style.outlineColor = 'green'
  } else {
    // console.log('CEP Inválido');
    cepInput.style.outlineColor = 'red'
  }
}