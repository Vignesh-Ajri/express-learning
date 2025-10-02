# 📘 MongoDB Basics (NoSQL Concepts)

## 1. What is NoSQL?

- **NoSQL = "Not Only SQL"**
- Designed for **unstructured / semi-structured data**
- Flexible schemas (no fixed table structure like SQL)
- High performance, horizontal scalability
- Types of NoSQL databases:
  - **Document-based** (MongoDB, CouchDB)
  - **Key-Value** (Redis, DynamoDB)
  - **Column-based** (Cassandra, HBase)
  - **Graph-based** (Neo4j, ArangoDB)

---

## 2. MongoDB Overview

- Open-source **document-oriented NoSQL database**
- Stores data in **BSON** (Binary JSON)
- Organized into:
  - **Database** → contains collections
  - **Collection** → like a SQL table, but schema-free
  - **Document** → JSON-like record
  - **Field** → key-value pair inside document

Example:

```json
{
  "_id": 1,
  "name": "Alice",
  "age": 25,
  "skills": ["Python", "MongoDB"],
  "address": { "city": "Bangalore", "pincode": 560001 }
}
```

---

## 3. MongoDB Shell / Commands

### 3.1 Database Commands

```js
show dbs;                  // list databases
use mydatabase;            // switch / create database
db.dropDatabase();         // delete current database
```

### 3.2 Collection Commands

```js
db.createCollection("users");   // create collection
show collections;               // list collections
db.users.drop();                // drop collection
```

### 3.3 Insert Documents

```js
db.users.insertOne({ name: "Alice", age: 25 });
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
]);
```

### 3.4 Query Documents

```js
db.users.find(); // get all
db.users.find({ age: 25 }); // filter
db.users.find({ age: { $gt: 25 } }); // greater than
db.users.find({ name: /^A/ }); // regex (starts with A)
```

### 3.5 Projection (select specific fields)

```js
db.users.find({}, { name: 1, age: 1, _id: 0 });
```

### 3.6 Update Documents

```js
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } });

db.users.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } } // increment age
);
```

### 3.7 Delete Documents

```js
db.users.deleteOne({ name: "Bob" });
db.users.deleteMany({ age: { $gt: 40 } });
```

---

## 4. Query Operators

- **Comparison Operators**

  - `$eq` (equal), `$ne` (not equal)
  - `$gt`, `$gte`, `$lt`, `$lte`
  - `$in`, `$nin`

```js
db.users.find({ age: { $gte: 25, $lte: 30 } });
```

- **Logical Operators**

  - `$and`, `$or`, `$not`, `$nor`

```js
db.users.find({ $or: [{ age: { $lt: 25 } }, { city: "Delhi" }] });
```

- **Element Operators**

  - `$exists`, `$type`

```js
db.users.find({ address: { $exists: true } });
```

- **Array Operators**

  - `$all`, `$elemMatch`, `$size`

```js
db.users.find({ skills: { $all: ["Python", "MongoDB"] } });
db.users.find({ skills: { $size: 2 } });
```

---

## 5. Aggregation Framework

Used for **advanced data processing** (like GROUP BY in SQL).

Example: Average age of users by city

```js
db.users.aggregate([
  { $group: { _id: "$address.city", avgAge: { $avg: "$age" } } },
]);
```

Other stages: `$match`, `$project`, `$sort`, `$limit`, `$unwind`, `$lookup` (joins).

---

## 6. Indexing

Improves query performance.

```js
db.users.createIndex({ name: 1 }); // ascending
db.users.createIndex({ age: -1 }); // descending
```

---

## 7. Relationships

- **Embedded documents** (denormalization)

```json
{
  "name": "Alice",
  "address": { "city": "Bangalore", "pincode": 560001 }
}
```

- **Reference documents** (normalization)

```json
{
  "user_id": 1,
  "order_id": 101
}
```

And orders collection stores order details separately.

---

## 8. Transactions

MongoDB supports multi-document transactions (like SQL).

```js
const session = db.getMongo().startSession();
session.startTransaction();
try {
  db.users.insertOne({ name: "Test" }, { session });
  db.orders.insertOne({ order_id: 1, user: "Test" }, { session });
  session.commitTransaction();
} catch (e) {
  session.abortTransaction();
}
```

---

## 9. Security & Best Practices

- Use **role-based access** (`db.createUser`)
- Always **index frequently queried fields**
- Use **replica sets** for high availability
- Use **sharding** for horizontal scaling
- Prefer **embedded documents** when data is mostly read together
