var delay = 300;
var counter = 0;
var t;

$(document).ready(function() {
    $('#myBtn').on('click', function(event) {    	
        event.preventDefault();
		$('#tableData').append('<table id="myTable" border="3" style="width:100%;background: black"></table>');
        table = $('#tableData').children();
    	table.append('<tr id=0 align="center"><th>Movie ID</th><th>Name of the Movie</th><th>Year of Release</th></tr>');
        callAjax(table)
        $('#myBtn').hide();

    });
});

var table;
var Row;
var ToBeRemovedRow;

function callAjax(table){
    if(counter<=100){
        counter = counter+1;        
        t = setTimeout(function(){callAjax(table);}, delay );
    	$.ajax({
                    url: "https://pacific-thicket-25365.herokuapp.com/db",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    data: {
                    	M_ID:counter
                    },
                    success: function(data) {
        				$.each(data, function(i, info) {
                            Row = '<tr id='+info.m_id+' align="cent-er"><td>' + info.m_id + '</td><td>' + info.name + '</td>' + '</td><td>' + info.year + '</td></tr>';
                        });
                        
                    },
                });        
        table.append(Row)
        var 
        if(counter>=20){
        	ToBeRemovedRow = "table#myTable tr#1";
        	$(ToBeRemovedRow).remove();
        }

        ;        
        
    } else{
        clearTimeout(t);
        return;
    }
}