var frisby = require('frisby');

frisby.create('verify success Test').post('http://52.24.72.250/login', {
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

frisby.create('verify correct response on invalid user')
	.post('http://52.24.72.250/login', {
		user_name: 'PoopStain',
		pass_hash: 'hashval'
	}, { json: true } )
	.expectHeaderContains('Content-Type', 'json')
	.expectJSON({
		code: "406 NONEXISTANT"
	})
	.toss()

frisby.create('verify correct response on invalid pass')
	.post('http://52.24.72.250/login', {
		user_name: 'Davey',
		pass_hash: 'PoopStain',
	}, { json: true } )
	.expectHeaderContains('Content-Type', 'json')
	.expectJSON({
		code: "406 NONEXISTANT"
	})
	.toss()
	
