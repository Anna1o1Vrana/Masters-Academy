 function getValue(){
    var text = document.getElementById("input_form").value;
    console.log(text);
  }
  
  function myFunction() {
    let userTxt = document.getElementById("input-txt").value;
    let result = document.getElementById("result").innerHTML = userTxt;
    let lengthTxt = userTxt.length;
    console.log(userTxt);

  document.getElementById("input-txt").value = "";
  
  
  /*
  ********
  �������� �� ������ ����, �� �� �������� ��'���, � ��'��� �� �� ���������� �������?
  
  ********
  
  if (lengthTxt > 3) {
  result.className = "green";
  } else {
    result.className = "green";

  }
  
  ��� 
  
  if (userTxt.length > 3) {
  result.style.color = "#309135";
  } else {
   result.style.color = "#ccc";
  }*/
  }
   

  