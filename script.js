
//First Class Ticket Function  
function collectionFirstClass(isIncrease){
    const firstClassInput= document.getElementById('firstClassTicket');
    const firstClassCount=parseInt(firstClassInput.value);
    let firstClassNewCount=firstClassCount;
    if(isIncrease == true){
    firstClassNewCount=firstClassCount + 1;
    
    }if(isIncrease == false && firstClassCount >0){
    firstClassNewCount=firstClassCount - 1;
    }
    firstClassInput.value=firstClassNewCount;
    calculateTotalAmount();
    
    }
    
    //Economy Class Ticket Function 
    function collectionEconomyClass(isIncrease){
    const economyClassInput= document.getElementById('economyClassTicket');
    const economyClassCount=parseInt(economyClassInput.value);
    let economyClassNewCount=economyClassCount;
    if(isIncrease == true){
    economyClassNewCount=economyClassCount + 1;
    
    }if(isIncrease == false && economyClassCount >0){
    economyClassNewCount=economyClassCount - 1;
    }
    economyClassInput.value=economyClassNewCount;
    calculateTotalAmount();
    
    }

    // Amount Calculate Function

    function totalAmount(value, id){
    document.getElementById(id).innerText = value;
    }
    
    function calculateTotalAmount(){
    const firstClassCost= parseInt(document.getElementById('firstClassTicket').value)*150;
    const economyClassCost= parseInt(document.getElementById('economyClassTicket').value)*100;
    
    const subTotal = firstClassCost + economyClassCost;
    const vat = subTotal * 0.1;
    const grandTotal = subTotal + vat;
    
    totalAmount(subTotal, "subTotal")
    totalAmount(vat, "vat")
    totalAmount(grandTotal, "total")
    }

 
// Submitted Function

const submit = document.getElementById('submit');
submit.addEventListener('click', function(){
 const bookingArea = document.getElementById('bookingArea')
 bookingArea.style.display ="none";

 const submitted = document.getElementById('submitted');
 submitted.style.display = "block"
})

