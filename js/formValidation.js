
function validate(){
    var names = new Array();
    names["time"] = "čas";
    names["phone"] = "telefon";
    names["name"] = "jméno";
    names["date"] = "datum";
    
    var missed = "";
    $("input.required").each(function(){
        if($(this).val() == ""){
            missed += ", "+names[$(this).attr("id")];
            $(this).css("border-color", "red");
        }else{
            $(this).css("border-color", "");
        }
    });
    if(missed != ""){
        alert("Před odesláním formuláře prosím vyplňte pole "+missed.substring(2)+".");
        return false;
    }else{
        return true;
    }
}