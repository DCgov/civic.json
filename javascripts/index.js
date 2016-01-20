$.getJSON("../civic.json", function(json) {
    $("#example_json").append(JSON.stringify(json, null, "  "));
});
