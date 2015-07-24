/**
 * Created by naver on 15. 7. 22..
 */
var	chai = require('chai'),
		assert = chai.assert,
		MongoClient = require('mongodb').MongoClient;

describe("MongoDB", function () {
	describe('insert test', function () {
		var client, conn,
				url = 'mongodb://mongo:27017/conserv';

		before(function (done) {
			// Use connect method to connect to the Server
			MongoClient.connect(url, function(err, db) {
			  assert.equal(null, err);
			  conn = db;
			  done();
			});
		});

		it('3 documents should be inserted.', function (done) {
			var collection = conn.collection('documents');
			  // Insert some documents
			  collection.insert([
				{a : 1}, {a : 2}, {a : 3}
			  ], function(err, result) {
				assert.equal(err, null);
				assert.equal(3, result.result.n);
				assert.equal(3, result.ops.length);
				done(err);
			  });
		});
	});
});
