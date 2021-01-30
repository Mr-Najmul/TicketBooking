//Function For ticket Booking

function collectionClass(ticketClass, isIncrease) {
    const ClassInput = document.getElementById(ticketClass + 'ClassTicket');
    const ClassCount = parseInt(ClassInput.value);
    let ClassNewCount = ClassCount;
    if (isIncrease == true) {
        ClassNewCount = ClassCount + 1;

    }
    if (isIncrease == false && ClassCount > 0) {
        ClassNewCount = ClassCount - 1;
    }
    ClassInput.value = ClassNewCount;
    calculateTotalAmount();

}


// Amount Calculate Function

function totalAmount(value, id) {
    document.getElementById(id).innerText = value;
}

function calculateTotalAmount() {
    const firstClassAmount = parseInt(document.getElementById('firstClassTicket').value) * 150;
    const economyClassCost = parseInt(document.getElementById('economyClassTicket').value) * 100;

    const subTotal = firstClassAmount + economyClassCost;
    const vat = subTotal * 0.1;
    const totalTaka = subTotal + vat;

    totalAmount(subTotal, "subTotal")
    totalAmount(vat, "vat")
    totalAmount(totalTaka, "total")
}


///Function For Booking

function bookNow() {
    const validation = parseInt(document.getElementById('total').innerText);
    if (validation < 1) {
        alert("please select minimum 1 ticket")
        return false;
    }
    document.getElementById('bookingArea').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';

}



//For Return Book 

const returnBook = document.getElementById('returnBook');
returnBook.addEventListener('click', function () {
    document.getElementById('bookingArea').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
})
