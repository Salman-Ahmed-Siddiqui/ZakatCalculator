



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
  
  
  // Total Wealth for Zakat
  const totalWealth = parseFloat(goldValue) + parseFloat(silverValue) + parseFloat(cashLAFCValue) + parseFloat(cashMDIBValue) + parseFloat(cashPBValue) + parseFloat(cashMDIPFValue) + parseFloat(cashBCACValue) + parseFloat(cashRMIFValue) + parseFloat(cashMGIFValue) + parseFloat(cashPHOFValue) + parseFloat(cashBPAValue);
  
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

  // Salaries of employees. 
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

function showInstructions() {
  let showInstructions =
      '<a href="javascript:void(0)" onClick="hideInstructions()"><row><i class="bi bi-caret-up-fill black"></i><h3><i class="bi bi-cash-coin"></i>Instructions</h3><h3 class="urdu"><i class="bi bi-calculator"></i></h3></row><row><p>First, determine the date on which zakat became farz upon you according to the lunar calendar. As per market value on the above date, determine [and put in the below calculator] the value of all assets which you own on the date set above, and on which Zakah will be calculated. Necessary assets on whose value Zakah is to be calculated are given below.</p><p class="urdu">سب سے پہلے زکٰوۃواجب ہونے کی قمری تاریخ کا تعین کرلیں ۔زکٰوۃواجب ہونے کی قمری/اسلامی تاریخ اِس تاریخ کو ملکیت میں موجود قابل زکٰوۃاثاثوں کی مارکیٹ ریٹ کے مطابق مالیت کا تَعَیُّن درج ذیل طریقے سے کیجئے،ضروری اموالِ زکوۃ کیلکولیٹر میں شامل ہیں۔</p></row></a>';
  document.querySelector(".instructions").innerHTML = showInstructions;
}

function hideInstructions() {
  let hideInstructions =
      '<a href="javascript:void(0)" onClick="showInstructions()"><row><i class="bi bi-caret-down-fill black"></i><h3><i class="bi bi-cash-coin"></i>Instructions</h3><h3 class="urdu"><i class="bi bi-calculator"></i></h3></row></a>';
  document.querySelector(".instructions").innerHTML = hideInstructions;
}

