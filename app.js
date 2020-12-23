let i=1, s="";
for (i=0; i<10; i++) {   
  s = "Hello JavaS"+i+"<br>"+s; 
  document.getElementById("demo").innerHTML = s;
  console.log("Hello JavaScript!",i,"\n");
}
