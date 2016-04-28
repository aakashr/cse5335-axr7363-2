var my_delay = 200;
var count = 0;
var t;

$(document).ready(function() {
    $('#myButton').on('click', function(event) {    	
        event.preventDefault();
		$('#tableData').append('<table id="myTable" border="3" style="width:100%;background: black"></table>');
        table = $('#tableData').children();
    	table.append('<tr id=0 align="center"><th align="center">M_ID</th><th align="center">Name</th><th align="center">Year</th></tr>');
        callAjax(table)
        $('#myButton').hide();

    });
});

var table;
var randomColor;
var newRow;

function callAjax(table){
    if(count<=100){
        count = count+1;        
        t = setTimeout(function(){callAjax(table);}, my_delay );
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