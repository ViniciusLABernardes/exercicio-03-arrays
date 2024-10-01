let lista = document.getElementById('lista');

const salarios = [
    {id: 1,salario: 1500},
    {id:2,salario: 2000},
    {id:3,salario: 2200},
    {id:4,salario: 2500}, 
    {id:5,salario: 2600},
    {id:6,salario: 2100},
    {id:7,salario: 3000},
    {id:8,salario: 3200},
    {id:9,salario: 3400},
    {id:10,salario: 3600}
        ];


const salariosAumento15 = salarios.map(salarios=>{
    if(salarios.salario >= 2000 && salarios.salario <= 2999){
        const salarioNovo2 = salarios.salario = salarios.salario + salarios.salario * 0.15
         return {id: salarios.id, salarios: salarioNovo2};
    }
});
const salariosAumento10 = salarios.map(salarios=>{
    if(salarios.salario >=3000){
        const salarioNovo = salarios.salario = salarios.salario + salarios.salario * 0.10;
       return {id: salarios.id, salarios: salarioNovo};
    }
});
console.log('salario abaixo de 3000 com aumento', salariosAumento15);
console.log('salario acima de 3000 com aumento', salariosAumento10);

const salariosAcima2500 = salarios.filter(salarios=> salarios.salario >= 2500);
console.log('salario acima de 2500',salariosAcima2500);

const valoresSomados = salariosAcima2500.reduce((amontoado, salariosAcima2500)=>{
    return (amontoado + salariosAcima2500.salario);
},0);
console.log('valores somados', valoresSomados);

