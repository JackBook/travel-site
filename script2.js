$.getJSON('data.json', function(data) {
    var output = '<ul class="searchresults">';
    $.each(data, function(key, val) {
        output += '<li>';
        output += '<h2>' + val.name + '<h2>';
        output += '</li>'
    });
    output += '</ul>';
}); //get JSON