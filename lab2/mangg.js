let arr = ["Tue" , "Thu" , "Sat", "Nine"];
arr.pop();
arr.splice(0,0,"Mon");
arr.splice(2,0,"We");
arr.splice(4,0,"Fri");
arr.push("Sun");
document.write(arr)
