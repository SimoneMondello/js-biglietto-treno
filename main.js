const età = prompt('Inserisci la tua età');
let numerokm= prompt('Inserisci numero km da percorrere');
const price = 0.21;    // Prezzo
const fullPrice = numerokm*price; // numero scelto da cliente
 
let totalPrice 

    if(età <18) {
    alert('Sconto 20%')  
    totalPrice = fullPrice -(fullPrice*20/100);
} 
else if (età >60) {
    alert('Sconto 40%') 
    totalPrice = fullPrice -(fullPrice*40/100); 
}

else {
    alert('Prezzo Pieno')
    totalPrice= fullPrice;
}
   
   
    
    
    
    console.log("Total:", totalPrice);

   

