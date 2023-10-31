let debitBtn = document.getElementById("debit");
let debitForm = document.getElementById("debit-form");
let googlePayBtn = document.getElementById("google-pay");
let googlePayForm = document.getElementById("google-pay-form");
let cashBtn = document.getElementById("cash");
let cashForm = document.getElementById("cash-form");
let billingAddress = document.getElementById("billing-address");
let body = document.getElementById("body");

debitForm.style.border = "1px solid green";

debitBtn.addEventListener("click", ()=>{
    debit.setAttribute("checked", "true"); 
    if(debitBtn.getAttribute("checked")){
        debitForm.style.border = "1px solid green";
    }
    if(googlePayForm.style.border === "1px solid green" || cashForm.style.border === "1px solid green"){
        googlePayForm.style.border = "1px solid #e2e2e2";
        cashForm.style.border = "1px solid #e2e2e2";
    }
    billingAddress.style.display = "block";
})

googlePayBtn.addEventListener("click", ()=>{
    googlePayBtn.setAttribute("checked", "true"); 
    if(googlePayBtn.getAttribute("checked")){
        googlePayForm.style.border = "1px solid green";
    }
    if(debitForm.style.border === "1px solid green" || cashForm.style.border === "1px solid green"){
        debitForm.style.border = "1px solid #e2e2e2";
        cashForm.style.border = "1px solid #e2e2e2";
    }
    billingAddress.style.display = "none";
})

cashBtn.addEventListener("click", ()=>{
    cashBtn.setAttribute("checked", "true"); 
    if(cashBtn.getAttribute("checked")){
        cashForm.style.border = "1px solid green";
    }
    if(debitForm.style.border === "1px solid green" || googlePayForm.style.border === "1px solid green"){
        debitForm.style.border = "1px solid #e2e2e2";
        googlePayForm.style.border = "1px solid #e2e2e2";
    }
    billingAddress.style.display = "none";
})
