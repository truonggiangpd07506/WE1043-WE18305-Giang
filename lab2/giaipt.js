
let x1, x2;


let a = prompt("nhap so a: ");
let b = prompt("nhap so b: ");
let c = prompt("nhap so c: ");


let delta = b * b - 4 * a * c;


if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    
    document.write(`phương trình có nghiệm là ${x1} và ${x2}`);
}


else if (delta == 0) {
    x1 = x2 = -b / (2 * a);

   
    document.write(`phương trình có nghiệm kép là  ${x1} và ${x2}`);
}


else {
    
    document.write(` phương trình vô nghiệm` );
}