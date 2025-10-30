const { MongoClient, ServerApiVersion } = require('mongodb');

async function main(){
  
  var pass = process.argv[2];
  const uri = "mongodb+srv://vossler_db_user:" + pass + "@cluster0.rs5gw1x.mongodb.net/?appName=Cluster0";

  const client = new MongoClient(uri);

  try {
      await client.connect();
      await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databaseList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databaseList.databases.forEach(db => console.log(` - ${db.name}`));
}