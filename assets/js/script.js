$(document).ready(()=>{

	$('#enterTask').click(()=>{

		$('#taskRow').append("<tr>" + "<td>"+ "<strong>"+"<h3>"+ $('#myEmail').val()+"</h3>" +"</strong>"+"<br>"+"<p>" + $('#myTask').val() +"</p>"+ "<button class='delete btn btn-danger btn-sm'>Remove Post</button></td>"+"</tr>");
		
		$('#myTask').val('');
		$('#myEmail').val('');



		$('.delete').click(element=>{
		$(element.target).parent().remove();
			});

		});

	});	
	