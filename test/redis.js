/**
 * Created by naver on 15. 7. 22..
 */
var	chai = require('chai'),
		config = require('../config'),
		redis = require("redis"),
		expect = chai.expect;

describe("Redis", function () {
	describe('redis test', function () {
		var client;

		before(function (done) {
    		client = redis.createClient(config.redis.port, config.redis.host);

			client.on("error", function (err) {
				console.log("Error " + err);
			});

			done();
		});

		it('set/get "key" "val" should be success', function (done) {
			client.set("string key", "string val");
			client.get("string key", function (err, reply) {
				if (!err) {
					expect(reply).to.equal('string val');
				}

				done(err);
			});
		});
		
		it('hset "key" "val" should be success', function (done) {
			client.hset("hash key", "hashtest 1", "some value");
			client.hget("hash key", "hashtest 1", function (err, reply) {
				if (!err) {
					expect(reply).to.equal('some value');
				}
				
				done(err);
			});
		});
	});
});
