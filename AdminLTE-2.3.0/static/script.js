// This is the list of all js functions that buttons use to submit data. Right now they print the data, instead, we can package it to something else

// buttom submits linkedin and email on add mentor page
$(function() {
	$('#addLinkedinBtn1').click(function() {
		var properties = {};
		properties.linkedinUrl = $("#inputLinkedin1").val();
		properties.email = $("#inputEmail1").val();

		// post request to write to the database
		// $.post(url,properties,function(data){
		// 	$('#myModal').show();
		// });

		console.log(properties);

	});
    $('#btnSearch').on('keydown', function(event){
        if(event.which == 13) {

            for(var element in data) {
                
                var divmain = $('<div/>', {
                    'class': 'col-md-4'
                });

                var div = $('<div/>', {
                    'class': 'box box-widget widget-user'
                });

                var a = $('<a/>', {
                    'href': 'profile.html'
                });

                var div2 = $('<div/>', {
                    'class': 'widget-user-header bg-yellow'
                });

                var h3 = $('<h3/>', {
                    'class': 'widget-user-username'
                });

                var h5 = $('<h5/>', {
                    'class': 'widget-user-desc'
                });

                div2.append(h3)
                div2.append(h5)

                a.append(div2)


                var div3 = $('<div/>', {
                    'class': 'widget-user-image'
                });

                var img = $('<img/>', {
                    'class': 'img-circle', 'src' : 'dist/img/user7-128x128.jpg', 'alt' : 'User Avatar'
                });

                div3.append(img)


                a.append(div3)

                var div4 = $('<div/>', {
                    'class': 'box-footer'
                });

                var div5 = $('<div/>', {
                    'class': 'row'
                });

                var div6 = $('<div/>', {
                    'class': 'col-sm-4 border-right'
                });

                var div7 = $('<div/>', {
                    'class': 'description-block'
                });


                var h51 = $('<h5/>', {
                    'class': 'description-header'
                });


                div7.append(h51)

                var a2 = $('<a/>', {
                    'class': 'https://www.linkedin.com'
                });

                var span = $('<span/>', {
                    'class': 'fa fa-fw fa-linkedin'
                });

                a2.append(span)

                div7.append(a2)

                div6.append(div7)

                div5.append(div6)

                var div8 = $('<div/>', {
                    'class': 'col-sm-4 border-right'
                });

                var div9 = $('<div/>', {
                    'class': 'description-block'
                });

                var h52 = $('<h5/>', {
                    'class': 'description-header'
                });

                div9.append(h52)

                var span2 = $('<span/>', {
                    'class': 'description-text'
                });

                div9.append(span2)

                div8.append(div9)

                div5.append(div8)

                var div10 = $('<div/>', {
                    'class': 'col-sm-4'
                });

                var div11 = $('<div/>', {
                    'class': 'description-block'
                });

                var h53 = $('<h5/>', {
                    'class': 'description-header'
                });

                div11.append(h53)

                var span3 = $('<span/>', {
                    'class': 'description-text'
                });

                div11.append(span3)

                div10.append(div11)

                div5.append(div10)

                div4.append(div5)


                var div12 = $('<div/>', {
                    'class': 'box-footer no-padding'
                });

                var ul = $('<ul/>', {
                    'class': 'nav nav-stacked'
                });

                var li = $('<li/>', {
                    
                });

                var a3 = $('<a/>', {
                    'href': '#'
                });

                var div13 = $('<div/>', {
                    'class': 'rating'
                });

                var span4 = $('<div/>', {
                    'class': 'pull-right'
                });

                var label1 = $('<label/>', {
                    'for': 'reliability-1'
                });

                var i1 = $('<i/>', {
                    'i': 'fa fa-star text-yellow'
                });

                label1.append(i1)


                var label1 = $('<label/>', {
                    'for': 'reliability-1'
                });

                var i1 = $('<i/>', {
                    'i': 'fa fa-star text-yellow'
                });

                label1.append(i1)

                span.append(label1)

                var label2 = $('<label/>', {
                    'for': 'reliability-2'
                });

                var i2 = $('<i/>', {
                    'i': 'fa fa-star text-yellow'
                });

                label2.append(i2)

                span.append(label2)

                var label3 = $('<label/>', {
                    'for': 'reliability-3'
                });

                var i3 = $('<i/>', {
                    'i': 'fa fa-star text-yellow'
                });

                label3.append(i3)

                span.append(label3)

                var label4 = $('<label/>', {
                    'for': 'reliability-4'
                });

                var i4 = $('<i/>', {
                    'i': 'fa fa-star text-yellow'
                });

                label4.append(i4)

                span.append(label4)

                var label5 = $('<label/>', {
                    'for': 'reliability-5'
                });

                var i5 = $('<i/>', {
                    'i': 'fa fa-star'
                });



                label5.append(i5)

                span.append(label5)

                a3.append(div13)

                li.append(a3)
                ul.append(li)


                var li2 = $('<li/>', {
                    
                });

                var a4 = $('<a/>', {
                    'href': '#'
                });

                var span5 = $('<span/>', {
                    'class': 'pull-right badge bg-blue'
                });

                a4.append(span5)
                li2.append(a4)

                ul.append(li2)



                var li3 = $('<li/>', {
                    
                });

                var a5 = $('<a/>', {
                    'href': '#'
                });

                var span6 = $('<span/>', {
                    'class': 'pull-right badge bg-aqua'
                });

                a5.append(span6)
                li3.append(a5)

                ul.append(li3)



                var li4 = $('<li/>', {
                    
                });

                var a6 = $('<a/>', {
                    'href': '#'
                });

                var span7 = $('<span/>', {
                    'class': 'pull-right badge bg-green'
                });

                a6.append(span7)
                li4.append(a6)

                ul.append(li4)

                div12.append(ul)


                div.append(div12)

                divmain.append(div)




                //tab.html(element.text);
                //$('tr').append(tab);
            }

        }
    });



});

// button submits individual information on add mentor page

$(function() {

    
	$('#addMentorBtn1').click(function(event) {
        event.preventDefault();
		var properties = {};
		properties.name = $("#inputName1").val();
		properties.email = $("#inputEmail2").val();
		properties.linkedinUrl = $("#inputLinkedin2").val();
		properties.role = $("#inputRole1").val();
		properties.location = $("#inputLocation1").val();
		properties.bio = $("#inputBio1").val();
		properties.skills = $("#inputSkills1").val();
		properties.notes = $("#inputNotes1").val();
		properties.photo = $("inputPhoto1").val();


		// post request to write to the database
		$.post('/getmentors/',properties,function(data){
			$('#myModal').show();
		});

		console.log(properties);

	});
});


// Submit Button adds feedback to mentor on profile page

$(function() {
	$('#addFeedbackBtn1').click(function() {
		var properties = {};
		properties.name = $("#inputName3").val();
		properties.date = $("#inputDate1").val();
		properties.rating = $("#inputRating").val();
		properties.comment = $("#inputComment1").val();


		// post request to write to the database
		$.post(url,properties,functionToExecute);

		console.log(properties);

	});
});

// button submits individual information on the individual mentor page

$(function() {
	$('#editMentorBtn').click(function() {
		var properties = {};
		properties.name = $("#inputName2").val();
		properties.email = $("#inputEmail3").val();
		properties.linkedinUrl = $("#inputLinkedin3").val();
		properties.role = $("#inputRole2").val();
		properties.location = $("#inputLocation2").val();
		properties.skills = $("#inputSkills2").val();
		properties.leadMentee = $("#inputLeadMentee");
		properties.mentee = $("#inputMentee");
		properties.bio = $("#inputBio2").val();
		properties.notes = $("#inputNotes2").val();
		properties.photo = $("inputPhoto2").val();


		// post request to write to the database
		$.post(url,properties,functionToExecute);

		console.log(properties);

	});
});


//Mentor Search


$(function() {

	$.get('url',mentorToSearch = document.getElementById('search').value).done(function(data){
    	for(var element in data) {
        	var tab = $('<td/>');
        	tab.html(element.text);
        	$('tr').append(tab);
    	}
	});
	
});


//Company Search

$(function() {

	$.get('url',companyToSearch = document.getElementById('search').value).done(function(data){
    	for(var element in data) {
        	var tab = $('<td/>');
        	tab.html(element.text);
        	$('tr').append(tab);
    	}
	});
	
});


$(function() {

	$.get('url',skillsetToSearch = document.getElementById('search').value).done(function(data){

	});
	
});


//mentors to sort

$(function() {

	$.get('url',mentorToSort = document.getElementById('sort').value).done(function(data){
	    for(var element in data) {
	        var tab = $('<td/>');
	        tab.html(element.text);
	        $('tr').append(tab);
	    }
	});	
});




$(function() {
	$('#addMentorBtnClicked').click(function() {
		//Transfer to add mentor page
		window.location.href = "addmentorurl";

	});
});


$(function() {
	$('#FeedbackClicked').click(function() {
		//Transfer to show FeedbackPage page
		window.location.href = "feedbacktourl";

	});
});


$(function() {
	$('#mentorCardBtnClicked').click(function() {
		//Transfer to specific mentor page
		window.location.href = "specificmentorurl";

	});
});



// Getting data from linkedIN and writing to the database.
$(function() {

	$.get('importurl',{LinkedIn : document.getElementById('LinkedIn').value , LinkedIn : document.getElementById('Email').value}).done(function(data){
	    
	    var properties = {};
		properties.name = data.name;
		properties.email = data.email;
		properties.linkedinUrl = data.linkedinUrl;
		properties.role = data.role;
		properties.location = data.location;
		properties.skills = data.skills;
		properties.bio = data.bio;
		properties.notes = data.notes;
		properties.photo = data.photo;

		$.post(url,properties,functionToExecute);

		console.log(properties);
	});
	
});
