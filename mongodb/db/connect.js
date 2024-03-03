const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.

const client = new MongoClient(uri);
exports.client = client;