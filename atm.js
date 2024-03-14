let pin=4040;
let balance=200;
function generate(){
   
        alert("OTP is Generated");
}
function withdraw(){
    let uspin=prompt("ENTER PIN");
    if(pin==uspin){
        alert(" Please Wait!...");
        let withdrawamount=prompt("ENTER the Amount to Withdraw");  
         if( balance==0){
            alert("Zero Balance");
         }
        else if(balance<withdrawamount){
            alert("Balance is low  and please check the Balance");

          } 
          else{
            alert("Please collect the CASH");
             balance=balance-withdrawamount;
          }
          
    }
    else{
        alert("Check Your PIN");
    }
}
function Balance(){
    let uspin=prompt("ENTER PIN");
    if(pin==uspin){
        alert(" Please Wait!...");
        if(balance!=0){
            alert(balance);
        }
        else{
            alert("Zero Balance");
        }
        
    }
    else{
        alert("Check Your PIN");
    }
}