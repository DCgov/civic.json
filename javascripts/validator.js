$.getJSON("https://raw.githubusercontent.com/DCgov/civic.json/master/schema-v1.json", function(schema) {
    $("#validate").click(function() {
        try {
            var civic = JSON.parse($("#to_validate").val());
            var valid = tv4.validateMultiple(civic, schema);
            console.log(valid);
            if (valid.valid === true) {
                $("#validate_result").text("Your civic.json is valid :)");
            } else {
                $("#validate_result").text("Your civic.json is broken :(");
                var errors = valid.errors;
                for (i = 0; i<valid.errors.length; i++) {
                    $("#validate_result").append('<br>' + valid.errors[i].dataPath + ': ' + valid.errors[i].message);
                }
            }
        } catch(err) {
            $("#validate_result").text("Your civic.json is broken :(");            
        }
    });
});
