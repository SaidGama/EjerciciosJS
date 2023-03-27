function part1() {
    let listaEspera = ["Sofia", "David", "Juan"];
    console.log(listaEspera);

    listaEspera.push("Sara");
    listaEspera.push("Agustin");
    listaEspera.shift();
    console.log(listaEspera);

    listaEspera.splice(1,0,"Renata");
    listaEspera.push("Elena");
    console.log(listaEspera);
}
part1();

function excercise2(n) {
    for(let i=0; i<=n; i++){
        let asteriscos="";
        for(let j=0; j<i; j++){
            asteriscos = "*"+asteriscos;
        }
        console.log(asteriscos);
    }
}
excercise2(5);

function part3Ejercicio1(n) {
    let xValue = n;
    while (xValue >= 0) {
        console.log(xValue);
        xValue -= 0.5;
    }
}

