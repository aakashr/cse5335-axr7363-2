var delay = 700;
var newRow;

$(document).ready(function() {
    $('#myButton').on('click', function(event) {    	
        event.preventDefault();
		$('#dynamictable').append('<table id="myTable" border="1" style="width:100%;background: skyblue"></table>');
        table = $('#dynamictable').children();
    	table.append('<tr id=0 align="center"><th>M_ID</th><th>Name</th><th>Year</th></tr>');
        callAjax(table)
        $('#myButton').hide();

    });
});

var table;
var var_count = 0;
var var_timeout;

function callAjax(table){
    if(var_count<=100){
        count = count+1;        
        var_timeout = setTimeout(function(){callAjax(table);}, delay );
    	$.ajax({
                    url: "https://pacific-thicket-25365.herokuapp.com/db",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    data: {
                    	M_ID:count
                    },
                    success: function(data) {
        				$.each(data, function(i, info) {
                            newRow = '<tr id='+info.m_id+' align="cent-er"><td>' + info.m_id + '</td><td>' + info.name + '</td>' + '</td><td>' + info.year + '</td></tr>';
                        });
                        
                    },
                });        
        table.append(newRow);        
        
    } else{
        clearTimeout(t);
        return;
    }
}