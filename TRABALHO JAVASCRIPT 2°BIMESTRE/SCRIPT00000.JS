// 1. Triângulo
function verificarTriangulo() {
  const x = +document.getElementById("x").value;
  const y = +document.getElementById("y").value;
  const z = +document.getElementById("z").value;
  const res = document.getElementById("resultadoTriangulo");

  if (x + y > z && x + z > y && y + z > x) {
    if (x === y && y === z) res.textContent = "Triângulo Equilátero";
    else if (x === y || x === z || y === z) res.textContent = "Triângulo Isósceles";
    else res.textContent = "Triângulo Escaleno";
  } else {
    res.textContent = "Não é um triângulo";
  }
}

// 2. IMC
function calcularIMC() {
  const peso = +document.getElementById("peso").value;
  const altura = +document.getElementById("altura").value;
  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else if (imc < 35) classificacao = "Obesidade grau 1";
  else if (imc < 40) classificacao = "Obesidade grau 2";
  else classificacao = "Obesidade grau 3";

  document.getElementById("resultadoIMC").textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

// 3. Imposto
function calcularImposto() {
  const ano = +document.getElementById("ano").value;
  const valor = +document.getElementById("valorCarro").value;
  const taxa = ano < 1990 ? 0.01 : 0.015;
  const imposto = valor * taxa;

  document.getElementById("resultadoImposto").textContent = `Imposto: R$ ${imposto.toFixed(2)}`;
}

// 4. Salário
function calcularSalario() {
  const salario = +document.getElementById("salario").value;
  const cargo = +document.getElementById("cargo").value;
  let percentual = 0.4;

  if (cargo === 101) percentual = 0.1;
  else if (cargo === 102) percentual = 0.2;
  else if (cargo === 103) percentual = 0.3;

  const novoSalario = salario * (1 + percentual);
  const aumento = novoSalario - salario;

  document.getElementById("resultadoSalario").textContent = 
    `Novo salário: R$ ${novoSalario.toFixed(2)} (Aumento de R$ ${aumento.toFixed(2)})`;
}

// 5. Crédito
function calcularCredito() {
  const saldo = +document.getElementById("saldo").value;
  let percentual = 0;

  if (saldo >= 201 && saldo <= 400) percentual = 0.2;
  else if (saldo <= 600) percentual = 0.3;
  else if (saldo > 600) percentual = 0.4;

  const credito = saldo * percentual;

  document.getElementById("resultadoCredito").textContent = 
    `Crédito: R$ ${credito.toFixed(2)} com saldo médio de R$ ${saldo.toFixed(2)}`;
}

// 6. Lanchonete
function calcularLanche() {
  const codigo = document.getElementById("codigoLanche").value.toUpperCase();
  const qtd = +document.getElementById("quantidade").value;
  const precos = {
    'C': 11.00, 'B': 8.50, 'M': 8.00, 'H': 9.00, 'CH': 10.00, 'R': 4.50
  };

  let preco = precos[codigo] ?? 0;
  let total = preco * qtd;

  document.getElementById("resultadoLanche").textContent = 
    preco ? `Total: R$ ${total.toFixed(2)}` : "Código inválido!";
}

// 7. Vendas
function calcularVenda() {
  const preco = +document.getElementById("precoEtiqueta").value;
  const cond = document.getElementById("condicaoPagamento").value;
  let total = preco;

  if (cond === 'a') total *= 0.9;
  else if (cond === 'b') total *= 0.85;
  else if (cond === 'd') total *= 1.10;

  document.getElementById("resultadoVenda").textContent = `Total a pagar: R$ ${total.toFixed(2)}`;
}

// 8. Professor
function calcularSalarioProfessor() {
  const nivel = +document.getElementById("nivelProfessor").value;
  const qtd = +document.getElementById("qtdAulas").value;
  const valores = {1: 12, 2: 17, 3: 25};
  const valorHora = valores[nivel];
  const salario = valorHora * qtd * 4.5;

  document.getElementById("resultadoProfessor").textContent = `Salário: R$ ${salario.toFixed(2)}`;
}