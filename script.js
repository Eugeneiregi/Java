var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
function giveAkanName () {
    var year =parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var gender=getGender();
    var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDay();
    var akanName;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 0 ) {
        alert("Invalid year");
    }
    else if (month <= 0 || month > 12) {
        alert("Month is between 1 and 12");
    }
    else if (day <= 0 || day > 31){
        alert("Date is between 1 and 31");
    }
    else if (validate == false) {
        alert("Invalid Input!!");
    }
    if(gender ==="male" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = maleNames[dayBorn];
    alert("You were born on "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName);
    }
    else if (gender === "female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
        akanName = femaleNames[dayBorn];
    alert("You were born on "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName);
    }
}
    function getGender(){
        var gender = document.getElementsByName("gender");
        for(i = 0; i < gender.length; i++){
            if(gender[i].checked){
                return(gender[i].value)
        }
    }
}