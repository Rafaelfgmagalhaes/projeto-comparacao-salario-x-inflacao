import opcao from 'readline-sync'

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
]

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]

console.log("\nEscolha uma das alternativas a seguir: ")
console.log("--------------------------------------")
console.log(" ")
console.log("1- Listar os salários mínimos de 2010 à 2020 ")
console.log("2- Listar o índice IPCA de 2010 à 2020 ")
console.log("3- Comparação entre o percentual de aumento salarial e o IPCA ")
console.log(" ")

let escolha = opcao.question('Digite o numero da sua escolha: ')

switch (escolha) {
    case '1':

        console.clear()
        for(let salarios of salarioMinimo){
            console.log("Ano: " + salarios.ano + " ---------- Salário: " + salarios.salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
        }
    break;

    case '2':

        console.clear()
        for(let infl of inflacao){
            console.log("Ano: " + infl.ano + " ---------- IPCA: " + infl.ipca+ '%')
        }
    break;

    case '3':

        console.clear()
        for(let i = 0; i < salarioMinimo.length; i++){
            let sMin = salarioMinimo[i]
            let inf = inflacao[i]
            let crescimento = "/"
                if(i > 0){
                   let crescimentoSal = (sMin.salario - salarioMinimo[i - 1].salario) * 100 / salarioMinimo[i -1].salario;
                   crescimento = crescimentoSal.toFixed(2) + '%'
                }
                

            console.log("")
            console.log("Ano: ------------------------ " + sMin.ano)
            console.log("Salário mínimo: ------------- " + sMin.salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
            console.log("Crescimento salarial: ------- " + crescimento)
            console.log("Inflação IPCA: -------------- " + inf.ipca + "% \n")
        }
    break;

    default:
        console.clear()
        console.log("Opção inexistente!")
    break;

}

