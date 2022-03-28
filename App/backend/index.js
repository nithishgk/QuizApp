const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://username:Password@cluster0.lscpb.mongodb.net/authapp?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('authapp');
    const qna = database.collection('qna');
    // Query for a movie that has the title 'Back to the Future'
    const ques = { title: 'question' };
    const q1 = await qna.findOne(query);
    console.log(q1);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);