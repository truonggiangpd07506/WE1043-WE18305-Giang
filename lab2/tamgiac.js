
let a = prompt("nhap canh a: ");

let b = prompt("nhap canh b: ");

let c = prompt("nhap canh c: ");


if( a<parseInt(b)+parseInt(c) && b<parseInt(a)+parseInt(c) && c<parseInt(a)+parseInt(c) ) {
   if ((a*a + b*b == c*c) || (Math.pow(a,2)+ Math.pow(c,2)==Math.pow(b,2)) || (Math.pow(b,2)+ Math.pow(c,2)==Math.pow(a,2)))
   document.write(" đây là tam giác vuông")
    else if ((a==b) || (b==c) || (c==a)) document.write(" đây là tam giác cân")
   else 
     document.write( "đây là tam giác thường")
    }
else document.write(" a b c không phải 3 cạnh của một tam giác")

