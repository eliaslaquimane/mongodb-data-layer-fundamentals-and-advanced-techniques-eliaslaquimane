// define variable to use on connection: client, MongoClient, name of database and collection
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';


const dbName = 'plp_bookstore';
const nameCollectio = 'books';


// create async function with name queriesDB

async function queriesDB(){
    const client = new MongoClient(uri);
    try {
        // connect to the mongodb server

    } catch(err){
        console.log('error occured: ', err)
    } finally{
        await client.close();
        console.log('connection closed!');
    }
}

queriesDB()




