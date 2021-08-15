//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){

    // get the amount deposited
        const depositInput = document.getElementById('deposit-input');

        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);
        // console.log(depositAmount);
  
        // update deposit total
        const depositTotal = document.getElementById('deposit-total');
        const previousDepositAmountText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositAmountText);

        // new deposit total
        const NewDepositTotal = previousDepositAmount + newDepositAmount;
        depositTotal.innerText = NewDepositTotal;

    // clear deposit input

    depositInput.value = '';

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    // total balance update
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;   

});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdraw clicked');

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    // console.log(newWithdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // console.log(previousWithdrawTotal);

    

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';



})