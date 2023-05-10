const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function() {
  const goldValue = document.getElementById("goldValue").value;
  const silverValue = document.getElementById("silverValue").value;
  const cashLAFCValue = document.getElementById("cashLAFCValue").value;
  const cashMDIBValue = document.getElementById("cashMDIBValue").value;
  const cashPBValue = document.getElementById("cashPBValue").value;
  const cashMDIPFValue = document.getElementById("cashMDIPFValue").value;
  const cashBCACValue = document.getElementById("cashBCACValue").value;
  const cashRMIFValue = document.getElementById("cashRMIFValue").value;
  const cashMGIFValue = document.getElementById("cashMGIFValue").value;
  const cashPHOFValue = document.getElementById("cashPHOFValue").value;
  const cashBPAValue = document.getElementById("cashBPAValue").value;

  //const investmentValue = document.getElementById("investmentValue").value;
  // Total Wealth for Zakat
  const totalWealth = parseFloat(goldValue) + parseFloat(silverValue) + parseFloat(cashLAFCValue) + parseFloat(cashMDIBValue) + parseFloat(cashPBValue) + parseFloat(cashMDIPFValue) + parseFloat(cashBCACValue) + parseFloat(cashRMIFValue) + parseFloat(cashMGIFValue) + parseFloat(cashPHOFValue) + parseFloat(cashBPAValue) ;
  
  // Total AMOUNT TO BE DEDUCTED FROM TOTAL ZAKAH-ABLE WEALTH (I.E. LIABILITIES)

  const LoanValue = document.getElementById("LoanValue").value;
  
  // Dues instalments on house, shop, things.
  const DIOHSValue = document.getElementById("DIOHSValue").value;

  // Remaining payable amount of committee[1] (provided that one has already got the total amount of the committee).
  const RPAOCValue = document.getElementById("RPAOCValue").value;
  
  // Utility bills such as the bills of gas, electricity etc. provided that one has got the bills before the Zakah year is complete.
  const UBValue = document.getElementById("UBValue").value;

  // Payables to Dealers ( پارٹیوں کی ادائیگیاں )
  const PTDValue = document.getElementById("PTDValue").value;

  // Salaries of employees. (ملازمین کی تنخواہیں)
  const SValue = document.getElementById("SValue").value;  
 
  //Unpaid Zakah of the previous year. (گزشتہ سال کی زکٰوۃجو ادا نہ کی گئی ہو.)
  const UZValue = document.getElementById("UZValue").value;  

  const totaldeductions = parseFloat(LoanValue) + parseFloat(DIOHSValue) + parseFloat(RPAOCValue) + parseFloat(UBValue) + parseFloat(PTDValue) + parseFloat(SValue) + parseFloat(UZValue) ;
  
  const ActualAmtZakat = totalWealth - totaldeductions;
  
  const ZakatComputing = ActualAmtZakat / 40;

  //const zakatAmount = totalWealth * 0.025;

  const resultElement = document.getElementById("result");
  resultElement.innerText = "Your Zakah Payable Amount is: PKR" + ZakatComputing.toFixed(2);
  resultElement.style.display = "block";
});



// function calculateTotalWealth(goldValue, silverValue, cashLAFCValue, cashMDIBValue,cashPBValue, cashMDIPFValue,cashBCACValue,cashRMIFValue,cashMGIFValue,cashPHOFValue,cashBPAValue) {
//     // Calculate the total wealth
//   const goldValue = document.getElementById("goldValue").value;
//   const silverValue = document.getElementById("silverValue").value;
//   const cashLAFCValue = document.getElementById("cashLAFCValue").value;
//   const cashMDIBValue = document.getElementById("cashMDIBValue").value;
//   const cashPBValue = document.getElementById("cashPBValue").value;
//   const cashMDIPFValue = document.getElementById("cashMDIPFValue").value;
//   const cashBCACValue = document.getElementById("cashBCACValue").value;
//   const cashRMIFValue = document.getElementById("cashRMIFValue").value;
//   const cashMGIFValue = document.getElementById("cashMGIFValue").value;
//   const cashPHOFValue = document.getElementById("cashPHOFValue").value;
//   const cashBPAValue = document.getElementById("cashBPAValue").value;

//   const totalWealthofZakat = parseFloat(goldValue) + parseFloat(silverValue) + parseFloat(cashLAFCValue) + parseFloat(cashMDIBValue) + parseFloat(cashPBValue) + parseFloat(cashMDIPFValue) + parseFloat(cashBCACValue) + parseFloat(cashRMIFValue) + parseFloat(cashMGIFValue) + parseFloat(cashPHOFValue) + parseFloat(cashBPAValue);

//   return totalWealthofZakat;
// }