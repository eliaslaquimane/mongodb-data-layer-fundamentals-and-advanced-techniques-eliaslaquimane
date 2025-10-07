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
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.5,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    genre: 'Romance',
    published_year: 1847,
    price: 10.5,
    in_stock: true,
    pages: 500,
    publisher: 'Smith, Elder & Co.'
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    genre: 'Philosophical Fiction',
    published_year: 1866,
    price: 13.99,
    in_stock: true,
    pages: 671,
    publisher: 'The Russian Messenger'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    genre: 'Historical Fiction',
    published_year: 1869,
    price: 18.99,
    in_stock: false,
    pages: 1225,
    publisher: 'The Russian Messenger'
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    genre: 'Epic Poetry',
    published_year: -700,
    price: 9.99,
    in_stock: true,
    pages: 541,
    publisher: 'Penguin Classics'
  },
  {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    genre: 'Epic Poetry',
    published_year: 1320,
    price: 14.99,
    in_stock: true,
    pages: 798,
    publisher: 'John Murray'
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    genre: 'Historical Fiction',
    published_year: 1862,
    price: 16.99,
    in_stock: false,
    pages: 1463,
    publisher: 'A. Lacroix, Verboeckhoven & Cie.'
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    genre: 'Philosophical Fiction',
    published_year: 1880,
    price: 15.5,
    in_stock: true,
    pages: 824,
    publisher: 'The Russian Messenger'
  },
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    genre: 'Adventure',
    published_year: 1605,
    price: 13.5,
    in_stock: false,
    pages: 863,
    publisher: 'Francisco de Robles'
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    genre: 'Philosophical Fiction',
    published_year: 1890,
    price: 8.75,
    in_stock: true,
    pages: 254,
    publisher: 'Lippincott’s Monthly Magazine'
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    genre: 'Gothic Horror',
    published_year: 1897,
    price: 10.25,
    in_stock: true,
    pages: 418,
    publisher: 'Archibald Constable and Company'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    genre: 'Science Fiction',
    published_year: 1818,
    price: 9.5,
    in_stock: true,
    pages: 280,
    publisher: 'Lackington, Hughes, Harding, Mavor & Jones'
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    genre: 'Epic Poetry',
    published_year: -750,
    price: 9.99,
    in_stock: true,
    pages: 704,
    publisher: 'Penguin Classics'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    genre: 'Dystopian',
    published_year: 1953,
    price: 11.99,
    in_stock: false,
    pages: 194,
    publisher: 'Ballantine Books'
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    genre: 'Drama',
    published_year: 2003,
    price: 13.5,
    in_stock: true,
    pages: 371,
    publisher: 'Riverhead Books'
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel',
    genre: 'Adventure',
    published_year: 2001,
    price: 12.99,
    in_stock: true,
    pages: 354,
    publisher: 'Knopf Canada'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Post-apocalyptic',
    published_year: 2006,
    price: 14.25,
    in_stock: true,
    pages: 287,
    publisher: 'Alfred A. Knopf'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    genre: 'Fantasy',
    published_year: 1996,
    price: 15.99,
    in_stock: false,
    pages: 694,
    publisher: 'Bantam Books'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    genre: 'Horror',
    published_year: 1977,
    price: 13.25,
    in_stock: true,
    pages: 447,
    publisher: 'Doubleday'
  },
  {
    title: 'It',
    author: 'Stephen King',
    genre: 'Horror',
    published_year: 1986,
    price: 18.5,
    in_stock: false,
    pages: 1138,
    publisher: 'Viking'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Thriller',
    published_year: 2003,
    price: 11.99,
    in_stock: true,
    pages: 454,
    publisher: 'Doubleday'
  },
  {
    title: 'Angels & Demons',
    author: 'Dan Brown',
    genre: 'Thriller',
    published_year: 2000,
    price: 10.5,
    in_stock: true,
    pages: 480,
    publisher: 'Pocket Books'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    genre: 'Crime',
    published_year: 2005,
    price: 12.99,
    in_stock: true,
    pages: 465,
    publisher: 'Norstedts Förlag'
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Thriller',
    published_year: 2012,
    price: 13.99,
    in_stock: true,
    pages: 422,
    publisher: 'Crown Publishing Group'
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green',
    genre: 'Romance',
    published_year: 2012,
    price: 10.25,
    in_stock: true,
    pages: 313,
    publisher: 'Dutton Books'
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    genre: 'Historical Fiction',
    published_year: 2005,
    price: 12.99,
    in_stock: false,
    pages: 552,
    publisher: 'Picador'
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    genre: 'Non-fiction',
    published_year: 2011,
    price: 16.99,
    in_stock: true,
    pages: 498,
    publisher: 'Harvill Secker'
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    published_year: 2018,
    price: 15.25,
    in_stock: true,
    pages: 334,
    publisher: 'Random House'
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    genre: 'Memoir',
    published_year: 2018,
    price: 17.99,
    in_stock: true,
    pages: 448,
    publisher: 'Crown Publishing Group'
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    genre: 'Self-help',
    published_year: 2016,
    price: 14.99,
    in_stock: false,
    pages: 224,
    publisher: 'HarperOne'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    published_year: 2018,
    price: 16.5,
    in_stock: true,
    pages: 320,
    publisher: 'Avery'
  },
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    genre: 'Psychology',
    published_year: 2012,
    price: 13.5,
    in_stock: true,
    pages: 371,
    publisher: 'Random House'
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    genre: 'Psychology',
    published_year: 2011,
    price: 15.99,
    in_stock: true,
    pages: 499,
    publisher: 'Farrar, Straus and Giroux'
  },
  {
    title: 'Man’s Search for Meaning',
    author: 'Viktor E. Frankl',
    genre: 'Philosophy',
    published_year: 1946,
    price: 9.99,
    in_stock: true,
    pages: 200,
    publisher: 'Beacon Press'
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    genre: 'Philosophy',
    published_year: 180,
    price: 8.5,
    in_stock: true,
    pages: 304,
    publisher: 'Gregory Hays Translation'
  },
  {
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    genre: 'Strategy',
    published_year: 1998,
    price: 18.5,
    in_stock: false,
    pages: 452,
    publisher: 'Penguin Books'
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    genre: 'Finance',
    published_year: 1997,
    price: 14.25,
    in_stock: true,
    pages: 336,
    publisher: 'Warner Books'
  },
  {
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    genre: 'Finance',
    published_year: 1949,
    price: 19.99,
    in_stock: true,
    pages: 623,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    genre: 'Business',
    published_year: 2014,
    price: 13.5,
    in_stock: true,
    pages: 224,
    publisher: 'Crown Business'
  },
  {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    genre: 'Business',
    published_year: 2011,
    price: 15.99,
    in_stock: true,
    pages: 336,
    publisher: 'Crown Business'
  },
  {
    title: 'Start with Why',
    author: 'Simon Sinek',
    genre: 'Motivation',
    published_year: 2009,
    price: 12.99,
    in_stock: true,
    pages: 255,
    publisher: 'Portfolio'
  }
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



    } catch(err){
        console.log('error occured: ', err)
    } finally{
        await client.close();
        console.log('connection closed!');
    }
}

queriesDB()




