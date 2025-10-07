// define variable to use on connection: client, MongoClient, name of database and collection
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';


const dbName = 'plp_bookstore';
const nameCollectio = 'books';


// book data

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.5,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.5,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
];

// create async function with name queriesDB

async function queriesDB(){
    const client = new MongoClient(uri);
    try {
        // connect to the mongodb server
        await client.connect();
        console.log('connected!');

        // get database and collection
        const db = client.db(dbName);
        const collection = db.collection(nameCollectio);

        // cheack if has data in database
        const count = await collection.countDocuments();

        if (count > 0) {
            console.log(`contains ${count} documents`);
            
            // drop document 
            await collection.drop();
            console.log('collection dropped successfully');
        }

        // insert the books in collection
        const result = await collection.insertMany(books);
        console.log('bookds inserted successfully');

        // Find all books
        console.log('\nInserted Books: ')
            const insertedBooks = await collection.find({}).toArray();
            insertedBooks.forEach((book, index) => {
                console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
        });

        // Find books by a specific author
        const findBookByAuthor = await collection.find({author: "Benjamin Graham" }).toArray();
        if (findBookByAuthor.length > 0) {
            console.log(findBookByAuthor);
        }else{
            console.log('\nbook not founded!\n');
        }

        // Find all books in a specific genre
        const findBookByGenre = await collection.find({ genre: "Finance" }).toArray();
        console.log(" Finance Books:", findBookByGenre);

        // Find books published after a certain year
        const findBookByPubAfterYear = await collection.find({ published_year: { $gt: 2015 } }).toArray();
        console.log(" Books published after 2015:", findBookByPubAfterYear);

        // Update the price of a specific book
        const updatePriceResult = await collection.updateOne(
        { title: "The Hobbit" },
        { $set: { price: 13.99 } }
        );
        console.log(" Price update result:", updatePriceResult.modifiedCount);

        // Delete a book by its title
        const deleteByResult = await collection.deleteOne({ title: "1986" });
        console.log(" Delete result:", deleteByResult.deletedCount);

        // Find books that are in stock and published after 2010
        const findInStockRecent = await collection.find({
        in_stock: true,
        published_year: { $gt: 2010 }
        }).toArray();
        console.log(" In-stock books after 2010:", findInStockRecent);

        // Use projection to return only title, author, and price
        const showOnlyBooks = await collection.find({}, {
        projection: { title: 1, author: 1, price: 1, _id: 0 }
        }).toArray();
        console.log(" Projected fields:", showOnlyBooks);

        // Sort books by price ascending
        const sortedPriceAsc = await collection.find().sort({ price: 1 }).toArray();
        console.log(" Books sorted by price (asc):", sortedPriceAsc);

        // Sort books by price descending
        const sortedPriceDesc = await collection.find().sort({ price: -1 }).toArray();
        console.log(" Books sorted by price (desc):", sortedPriceDesc);

        // Pagination: limit 5 books, skip first 5
        const paginationLimit = await collection.find().skip(5).limit(5).toArray();
        console.log(" Page 2 (books 6–10):", paginationLimit);

        // Average price of books by genre
        const avgPriceBooksByGenre = await collection.aggregate([
            { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
        ]).toArray();
        console.log(" Average price by genre:", avgPriceBooksByGenre);

        // Author with the most books
        const topAuthorBooks = await collection.aggregate([
            { $group: { _id: "$author", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 1 }
        ]).toArray();
        console.log(" Author with most books:", topAuthorBooks);

        // Group books by publication decade and count them
        const groupBooksByDecade = await collection.aggregate([
            {
                $group: {
                _id: {
                    $concat: [
                    { $toString: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } },
                    "s"
                    ]
                },
                count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]).toArray();
        console.log(" Books grouped by decade:", groupBooksByDecade);

        // Create an index on the title field
        const titleIndexField = await collection.createIndex({ title: 1 });
        console.log(" Index created on title:", titleIndexField);

        // Create a compound index on author and published_year
        const compoundIndex = await collection.createIndex({ author: 1, published_year: -1 });
        console.log(" Compound index on author and published_year:", compoundIndex);

        // Use explain() to show performance improvement
        const showPerformace = await collection.find({ title: "Dune" }).explain("executionStats");
        console.log(" Explain output for title search:", showPerformace.executionStats);

    } catch(err){
        console.log('error occured: ', err)
    } finally{
        await client.close();
        console.log('connection closed!');
    }
}

queriesDB().catch(console.error);




