$.getJSON("https://raw.githubusercontent.com/DCgov/civic.json/master/schema.json", function(json) {
    $("#example_json").append(JSON.stringify(json, null, "  "));
});
