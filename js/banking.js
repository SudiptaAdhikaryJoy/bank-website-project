// deposit button Submit
document.getElementById('deposit-button').addEventListener('click', function(){

    // get the amount deposited
        const depositInput = document.getElementById('deposit-input');
        const depositAmount = depositInput.value;
        console.log(depositAmount);

        const depositTotal = document.getElementById('deposit-total');
        depositTotal.innerText = depositAmount;

    // clear deposit input

    depositInput.value = '';
       

})