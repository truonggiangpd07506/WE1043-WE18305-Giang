let hoten = prompt(" nhập vào họ tên");
let gioitinh = prompt(" nhập vào giới tính");
x = hoten.indexOf(" ");
y = hoten.lastIndexOf(" ");
ho =hoten.substring(0,x) ;
tendem = hoten.substring(x,y);
ten = hoten.substring(y,hoten.length);

if (gioitinh=="nam") tendem = "Văn"
else tendem = "Vẽ"