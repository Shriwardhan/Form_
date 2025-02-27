function done() {
  const fullName = document.getElementById('fullName').value.trim();

  const nameParts = fullName.split(' ');
  const aadharinput = document.getElementById('adhar').value;
  const aadhar_no = document.getElementById('result');
  const panInput = document.getElementById("pan").value;
  const panNumber = document.getElementById("panNumber");
  const mobile = document.getElementById("phone").value;
  const mobileno = document.getElementById("mobileno") ;



  let dob = new Date(document.getElementById("dob").value);
  let d = new Date();
  let firstName = '';
  let middleName = '';
  let surname = '';

  if (nameParts.length === 1) {
    firstName = nameParts[0];
  } else if (nameParts.length === 2) {
    firstName = nameParts[0];
    surname = nameParts[1];
  } else {
    firstName = nameParts[0];
    surname = nameParts[nameParts.length - 1];
    middleName = nameParts.slice(1, -1).join(' ');
  }
  
  if (/^\d{12}$/.test(aadharinput)) {
    result.textContent = aadharinput;
} else {
    result.textContent = "invaild aadhar number. It should be 12 digits.";
    result.style.color = "red";
}
  
if (/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/.test(panInput)) {
    panNumber.textContent = panInput.toUpperCase();
} else {
    panNumber.textContent = "Wrong PAN number";
    panNumber.style.color = "red";
}
if(/^[0-9]{10}$/.test(mobile)){
  mobileno.textContent = mobile;
}else{
  mobileno.textContent = "invalid mobile number";
  mobileno.style.color = "red";
}
d.setHours(0, 0, 0, 0);
    
if (dob <= d) {
    document.getElementById("p5").innerHTML = "DOB is valid";
} else {
    document.getElementById("p5").innerHTML = "DOB is InValid";
}
   let sub1=Number(document.getElementById("marks1").value)
   let sub2=Number(document.getElementById("marks2").value)
   let sub3=Number(document.getElementById("marks3").value)
   let sub4=Number(document.getElementById("marks4").value)
   let sub5=Number(document.getElementById("marks5").value)
   let sub6=Number(document.getElementById("marks6").value)
   let total=0
   

   let marks = [sub1, sub2, sub3, sub4, sub5, sub6];
   marks.sort((a, b) => b - a);   
   total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
   let avg=total/5
   document.getElementById("p1").innerHTML = "avg of marks is :"+avg;


  document.getElementById('firstName').textContent = firstName || 'N/A';
  document.getElementById('middleName').textContent = middleName || 'N/A';
  document.getElementById('surname').textContent = surname || 'N/A';
}
