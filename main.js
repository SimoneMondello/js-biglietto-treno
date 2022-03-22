const età = prompt('Inserisci la tua età');


let numerokm= prompt('Inserisci numero km da percorrere');





    const price = 0.21;    // Price of km
    const taxRate = numerokm; // numero scelto da cliente
    if(età <18) {
    alert('Sconto 20%')        
} 


else if (età >60) {
    alert('Sconto 40%') }
    // Calculate total to two decimal places
    let totalPrice = price + (price * taxRate);
    totalPrice.toFixed(2);

    
    
    
    console.log("Total:", totalPrice);

