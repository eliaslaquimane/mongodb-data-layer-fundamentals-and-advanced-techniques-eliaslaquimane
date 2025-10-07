# MongoDB Data Layer — Week 01

Repository for the Week 1 assignment of the Full Stack Specialization: "MongoDB data layer fundamentals and advanced techniques".

This repo contains small Node.js examples and scripts that show how to connect to MongoDB, insert documents, and run basic queries. It is structured so you can follow the assignment steps and run the examples locally.

## What you'll find here

- `insert_books.js` — Example script that inserts sample book documents into a collection.
- `queries.js` — Example queries used for the assignment (the file currently open in your editor).
- `examples/` — Extra example files showing how to connect using the Node.js driver and the mongo shell.
  - `mongodb_connection_example.js`
  - `mongodb_shell_example.js`
  - `package.json` (for the examples folder)
- `SETUP_INSTRUCTIONS.md` — Project-specific setup notes (read this first if present).
- `Week1-Assignment.md` — The assignment sheet describing the tasks to complete.
- `README.md` — (this file) overview and how-to.
- `note.txt`, screenshots — personal notes and images used while completing the assignment.

## Prerequisites

- Node.js (LTS recommended). Check with `node -v`.
- npm (comes with Node) or yarn.
- A running MongoDB instance (local or remote). You can use a local `mongod` or a cloud instance (MongoDB Atlas).

If you don't have MongoDB installed locally, follow the official docs or use the Docker quickstart. See `SETUP_INSTRUCTIONS.md` for any repo-specific notes.

## Quick setup

1. Clone this repository (if you haven't already):

```bash
git clone <repo-url>
cd mongodb-data-layer-fundamentals-and-advanced-techniques-eliaslaquimane
```

2. Install dependencies (if you plan to run the Node.js examples). The root folder may not contain a `package.json` with dependencies; check `examples/package.json` and the `examples` folder if needed:

```bash
# If there's a package.json in the root that lists dependencies
npm install

# Or, to use the examples folder's package.json
cd examples
npm install
cd ..
```

3. Ensure MongoDB is running and you have a connection string. Common local connection strings:

```text
# Default localhost
mongodb://localhost:27017

# Or with a database name
mongodb://localhost:27017/week1
```

If you use environment variables for credentials/URI, export them into your shell (or use a .env file and a loader in the scripts):

```bash
export MONGODB_URI="mongodb://localhost:27017/week1"
```

## Running the examples

From the project root you can run the simple scripts using Node. Examples below assume you have Node installed and MongoDB running.

- Insert books (example):

```bash
node insert_books.js
```

- Run the example queries file (edit `queries.js` to choose which queries to run; it may require a connection URI or to be imported as a module):

```bash
node queries.js
```

- Use the `examples` folder to see a minimal connection example:

```bash
cd examples
node mongodb_connection_example.js
```

Note: Some scripts read the connection URI from `process.env.MONGODB_URI`. If you see `process.env.MONGODB_URI` in a file, set that environment variable before running the script.

## File descriptions and recommended edits

- `insert_books.js` — A simple script that demonstrates inserting multiple documents into a `books` collection. Good for seeding a database when testing queries.
- `queries.js` — Contains sample queries for the assignment. You can open and modify this file to test different filters, projections, aggregations, and indexing strategies.
- `examples/mongodb_connection_example.js` — Minimal Node.js connection example using the official MongoDB driver. Use it as a starting point for your own scripts.

If you add a dependency (for example `dotenv` to load environment variables), update the `package.json` at the root or inside `examples/` as appropriate.

## Common troubleshooting

- Connection refused / timeout: make sure `mongod` is running and listening on the expected port. If using a cloud DB, verify network access and credentials.
- Authentication errors: double-check username, password, authSource, and uri encoding for special characters.
- Permission errors: ensure the user has privileges for the operations (read/write) you're trying.

If you run into a problem, open the script in VS Code and add `console.log` statements for the connection URI and the caught errors.

## Recommended next steps and improvements

- Add a small `package.json` in the repo root listing the Node.js dependency `mongodb` and a couple of npm scripts for convenience (e.g. `npm run seed`, `npm run queries`).
- Add a `.env.example` showing required environment variables (like `MONGODB_URI`).
- Add a small test harness or a README section that lists the exact queries to be implemented for the assignment and how to validate results.

## Screenshots and notes

There are a few screenshots and a `note.txt` in the repository. They are developer notes and visual references for the assignment steps.

## License

This repo is for coursework. If you want a license, add a `LICENSE` file (MIT is a common choice).

## Author

Elias Laquimane — repository for Week 1 of the Full Stack Specialization.

---

If you'd like, I can also:

- Add a `package.json` at the root with `mongodb` as a dependency and two npm scripts (`seed`, `start`).
- Create a `.env.example` file and wire `insert_books.js` and `queries.js` to use it.

Tell me which of the above you want and I'll implement it.