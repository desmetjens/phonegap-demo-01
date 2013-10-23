var demo = (function () {

	var employees = 	[
		{
			"Firstname" : "Jens",
			"Name" : "Desmet",
			"E-mail" : "jens.desmet@continuum.be",
			"Phone" : "+32 498 38 96 33"
		},
		{
			"Firstname" : "Robin",
			"Name" : "De Boom",
			"E-mail" : "robin.deboom@continuum.be",
			"Phone" : "+32 494 66 58 95"
		},
		{
			"Firstname" : "Cedric",
			"Name" : "Ascoop",
			"E-mail" : "cedric.ascoop@continuum.be",
			"Phone" : "+32 474 62 63 39"
		},
		{
			"Firstname" : "Frederik",
			"Name" : "De Naeyer",
			"E-mail" : "frederik.denaeyer@continuum.be",
			"Phone" : "+32 496 23 53 05"
		},
		{
			"Firstname" : "Gert",
			"Name" : "De Tant",
			"E-mail" : "gert.detant@continuum.be",
			"Phone" : "+32 473 98 27 75"
		},
		{
			"Firstname" : "Bram",
			"Name" : "Aerts",
			"E-mail" : "bram.aerts@continuum.be"
		},
		{
			"Firstname" : "Niels",
			"Name" : "Seyen",
			"E-mail" : "niels.seyen@continuum.be"
		},
		{
			"Firstname" : "Veerle",
			"Name" : "Verrijssen",
			"E-mail" : "veerle.verrijssen@continuum.be"
		},
		{
			"Firstname" : "Steven",
			"Name" : "Decoodt",
			"E-mail" : "steven.decoodt@continuum.be"
		},
		{
			"Firstname" : "Tim",
			"Name" : "Langens",
			"E-mail" : "tim.langens@continuum.be"
		},
		{
			"Firstname" : "Nico",
			"Name" : "Barbé",
			"E-mail" : "nico.barbe@continuum.be",
			"Phone" : "+32 499 54 75 31"
		},
		{
			"Firstname" : "Ruben",
			"Name" : "Herman",
			"E-mail" : "ruben.herman@continuum.be"
		}
	];

  return {

    search: function () {
		$("#clear").text("Clear!");
		$('#details').html("");
		var lookup = $("#search").val();
		if(!lookup)
		{	
			this.clear();
			return;
		}
		
		var person = _.find(employees,function(p){ return p.Firstname+' '+p.Name == lookup; });
		if(!person){
		 $("#details").html("<span class='text-warning'>No such person found</span>");
		 $("#clear").text("Try again!");
		  $("#detailsContainer").show('slow');
		}else{
		
		$.each( person, function( key, value ) {
			$('#details').append('<span class="row"><b class="col-md-6">'+key + ': '+'</b><span class="col-md-6 pull-right">' + value+'</span></span>');
		});
		  $("#detailsContainer").show('slow');
		}
    },

    clear: function () {
		$("#search").val("");
		$("#detailsContainer").hide('slow',function(){
			 $("#clear").text("Clear!");
			 $('#details').html("");
		});
    },
	
	init: function(){
	
		var names = $.map( employees, function( a ) {
			return a.Firstname+ ' '+a.Name;
		});
		
		$("#search").autocomplete({
			source: names
		});
		
		$("#search").keyup(function(event){
			if(event.keyCode == 13){
				demo.search()
			}
		});
	}
  };

})();
