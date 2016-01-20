$.getJSON("../assets/schema.json", function(json) {
$("#form").alpaca({
    "schema": json,
    "options": {
      "form": {
        "buttons": {
          "submit": {
            "title": "Render Civic.JSON",
            "styles": "btn btn-primary",
            "click": function () {
                var val = this.getValue();
                if (this.isValid(true)) {
                    $("#results").text('');
                    var results = JSON.stringify(val, null, "  ");
                    $("#results").append(results);
                    $("#download").removeAttr('disabled');
                    $("#download_link").attr({
                      'href': 'data:text/json;charset=utf-8,' + encodeURIComponent(results),
                      'target': '_blank',
                      'download': 'civic.json'                          
                    });
                }                    
              }
            }
          }
        }
      }
  });
});
