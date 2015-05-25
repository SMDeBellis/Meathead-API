var frisby = require('frisby');

frisby.create('Init Test').post('http://52.24.72.250/login', {
		user_name: 'Davey',
		pass_hash: 'hashval'
	}, { json: true } )
	.expectStatus(200)
	.expectHeaderContains('Content-Type', 'json')
	.expectJSON({ 
		code: "200 OK",
		user_id: "3db0de72-c9ed-4ecc-b5de-efbba0487361"
	})
	.toss()

frisby.create('second Test').post('http://52.24.72.250/login', {
		user_name: 'Jimmy',
		pass_hash: 'hashval'
	}, {json: true} )
	.expectStatus(200)
	.expectHeaderContains('Content-Type', 'json')
	.expectJSON({
		code: "200 OK",
		user_id: "0b5a88ab-9cf3-400f-adb9-8b8111151715"
	})
	.toss()
