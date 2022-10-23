



function palidrome(str){

let count=0;
let flag=false;

for(i=0;i<str.length/2;i++){
    if(str[i]==str[str.length-1-i]){
      flag=true;
    }
  }
if(flag=true){
  console.log("palidrome");
}else{console.log("not palidrome");}
}
palidrome("madam");