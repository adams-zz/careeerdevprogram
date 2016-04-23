angular.module('app', [])

angular.module('app')
.controller('IndexCtrl', function($scope){
	$scope.data =
		{'packages':
			[
				{
					'title': 'Dream Job',
					'courses': [
						{'coursename': 'Salary Negotiation',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						},
						{'coursename': 'Resume & Coverletters',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						},
						{'coursename': 'Behavioral Interviews',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						}
					],
					'description': 'plah plah plah plah',
					'url': '/dream-job',
					'price': 399,
					'imageurl': 'http://placehold.it/100x100'
				},
				{
					'title': 'Dream Job',
					'courses': [
						{'coursename': 'Salary Negotiation',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						},
						{'coursename': 'Resume & Coverletters',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						},
						{'coursename': 'Behavioral Interviews',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						}
					],
					'description': 'plah plah plah plah',
					'url': '/dream-job',
					'price': 399,
					'imageurl': 'http://placehold.it/100x100'
				},
				{
					'title': 'Dream Job',
					'courses': [
						{'coursename': 'Salary Negotiation',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						},
						{'coursename': 'Resume & Coverletters',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						},
						{'coursename': 'Behavioral Interviews',
						 'courseurl': '/salary-negotiation',
						 'courseimageurl': 'http://placehold.it/140x100',
						 'coursedescription': 'blah blah blah blah',
						 'courseprice': 129
						}
					],
					'description': 'plah plah plah plah',
					'url': '/dream-job',
					'price': 399,
					'imageurl': 'http://placehold.it/100x100'
				}
			],
		'reviews': 
				[
					'<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">First Giants game of the year! Jack was not happy to be woken from… <a href="https://t.co/UoZdPaLRCk">https://t.co/UoZdPaLRCk</a></p>&mdash; Mike Adams (@mgadams3) <a href="https://twitter.com/mgadams3/status/723372035989069825">April 22, 2016</a></blockquote>',
					'<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">First Giants game of the year! Jack was not happy to be woken from… <a href="https://t.co/UoZdPaLRCk">https://t.co/UoZdPaLRCk</a></p>&mdash; Mike Adams (@mgadams3) <a href="https://twitter.com/mgadams3/status/723372035989069825">April 22, 2016</a></blockquote>',
					'<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">First Giants game of the year! Jack was not happy to be woken from… <a href="https://t.co/UoZdPaLRCk">https://t.co/UoZdPaLRCk</a></p>&mdash; Mike Adams (@mgadams3) <a href="https://twitter.com/mgadams3/status/723372035989069825">April 22, 2016</a></blockquote>',
					'<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">First Giants game of the year! Jack was not happy to be woken from… <a href="https://t.co/UoZdPaLRCk">https://t.co/UoZdPaLRCk</a></p>&mdash; Mike Adams (@mgadams3) <a href="https://twitter.com/mgadams3/status/723372035989069825">April 22, 2016</a></blockquote>',
				],
		'faqs': [
			 	{
			 		'question': 'How do you do cool stuff?',
			 		'answer': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			 	},
			 	{
			 		'question': 'How do you do cool stuff?',
			 		'answer': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			 	},
			 	{
			 		'question': 'How do you do cool stuff?',
			 		'answer': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			 	},
			]
		}
		console.log($scope.data.packages)
})

// .service('DataService', function(){

// })

// <li class="dropdown-header"><h5>Find Dream Job</h5></li>
// <li><a href="">Salary Negotiation (FREE)</a></li>
// <li><a href="">Resumes & Coverletters</a></li>
// <li><a href="">Behavioral Interviews</a></li>
// <li><a href="">Networking</a></li>
// <li><a href="">Job Search Strategy</a></li>
// <li class="dropdown-header"><h5>Move Up</h5></li>
// <li><a href="">Raise Negotiation (FREE)</a></li>
// <li><a href="">Open Source, Blogging & Speaking</a></li>
// <li><a href="">Goal Setting</a></li>
// <li><a href="">Networking</a></li>
// <li><a href="">Job Search Strategy</a></li>
// <li class="dropdown-header"><h5>Start Up</h5></li>
// <li><a href="">Business Negotiation (FREE)</a></li>
// <li><a href="">Start-up Businesses</a></li>
// <li><a href="">Cash Flow Businesses</a></li>
// <li><a href="">Freelancing & Consulting</a></li>
