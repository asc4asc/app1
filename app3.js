function AddAbschnitt() {
    var n=document.getElementById("ab").innerHTML;
    if ( n*1 == 1 || n*1 == 2 ) 
    { 
      n=n*1+1; 
    } 
    else
    {
      n="S"  
    }    
    document.getElementById("ab").innerHTML=n;
}
