$.getJSON("https://raw.githubusercontent.com/DCgov/civic.json/master/civic.json", function(json) {
    $("#example_json").append(JSON.stringify(json, null, "  "));
});
