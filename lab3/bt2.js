// đổi dấu
var doidau = false;


// mảng ghi nhớ các số hạng
var mangso_index =0;
var mangso = new Array();

// mảng ghi nhớ phép tính
var mangpt_index = 0;
var mangpt = new Array();

// đổi phép tính
var doipheptinh = false;

// objec kết quả 
var ketqua = document.getElementById('ketqua')
var kqStr = ketqua.value;
 

// phím mới
var phim_moi = '';

// cài đặt sự kiện

// chuỗi hiện tại của kq
if (kqStr== '' && phim_moi== '') kqStr = ketqua.value; 
if (kqStr == '0' ) kqStr='';


// html của phím bấm
function ClickButton (obj){
    var type = obj.innerHTML; 

    // nhóm số 
    if ( type=='0' ||
    type=='1' ||
    type=='2' ||
    type=='3' ||
    type=='4' ||
    type=='5' ||
    type=='6' ||
    type=='7' ||
    type=='8' ||
    type=='9' ) 
    
    {  doipheptinh=false;
        phim_moi += type;
        // thay đổi hiển thị
     ketqua.value = kqStr + phim_moi;
    }
    else if (type=='+' ||
             type=='-' ||
             type=='X' ||
             type==':' )
        {      // trước đó có 1 phép tính 
            if (doipheptinh) {
                mangpt[mangpt_index-1] = type;
                // xử lí hiển thị
            ketqua.value = ketqua.value.substring(0,ketqua.value.length-1) + type;
            }    
            else {   // chưa có phép tính
          mangso[mangso_index]= parseFloat(phim_moi);
          mangso_index++;
          mangpt[mangpt_index] = type;
          mangpt_index++;
                     // xử lí hiển thị
                     ketqua.value = ketqua.value + type;
                }
                // ghi nhớ đã bấm phép tính
           doipheptinh=true;     
                // đổi giá trị 2 chuỗi cơ bản về rỗng
                kqStr='';
                phim_moi=''; 
        }
    else if (type == '=')    
         {
            if (phim_moi != '') mangso[mangso_index] = parseFloat(phim_moi);
            // gọi hàm tính
            GetPercent();
            // đưa tất cả về ban đầu
            mangpt =new Array()
            mangpt_index = 0;
            mangso = new Array();
            mangso_index = 0;

         }
    else if (type == 'C') 
         {
            phim_moi ='';
            mangpt =new Array()
            mangpt_index = 0;
            mangso = new Array();
            mangso_index = 0;
           // thay đổi hiển thị
           ketqua.value = kqStr + phim_moi;

         }     
  console.log(mangso);
  console.log(mangpt);
}
// tính 
function GetPercent() {
    
    // tính
   var  tong = mangso[0]; 
      // nhân chia trc
    for ( i = 0;i<= mangso_index;i++)
      { 
        if (mangpt[i-1] == 'X')  {
                           mangso[i-1]=  mangso[i]*mangso[i-1];
                           mangso.splice(i,1);
                           mangpt.splice(i-1,1);

                               }
          if (mangpt[i-1] == ':')  {
                          uutien = mangso[i-1]/mangso[i];
                          mangso[i-1]= uutien;
                          mangso.splice(i,1);
                          mangpt.splice(i-1,1);
     
                                    }                       
       
       }
       // cộng trừ sau
       for (var i=1;i<=mangso.length;i++){ 
          if (mangpt[i-1]=='+') tong += mangso[i]
          else if(mangpt[i-1]=='-') tong -= mangso[i];
       } 
      
       ketqua.value = tong ;
       
} 