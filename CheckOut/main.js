const spanicon = document.getElementById('checking');
 // Hide or show the billing address based on if it is same as shipping address
 function Toggle() {
    var billAdd = document.getElementById("Billing");
    if (billAdd.value === "show") {
        //checked so hiding
        billAdd.value='hide';
        billAdd.style.display='none';
        spanicon.textContent = 'check_box';
        spanicon.className = 'check';
    }
    else {   
        //unchecked so showing
        billAdd.value='show';
        billAdd.style.display='block';
        spanicon.textContent = 'check_box_outline_blank';
        spanicon.className = 'uncheck';
    }
}