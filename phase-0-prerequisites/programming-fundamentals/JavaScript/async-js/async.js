/********************************************
 * JavaScript Asynchronous Programming - All in One
 ********************************************/

/* ============================
   01 - Callbacks
===============================*/

// Simple Callback Example
function greet(name, callback) {
    console.log("Preparing to greet...");
    callback(name);
}

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice", sayHello);

// Callback Hell Example (nested callbacks)
function getUser(id, callback) {
    setTimeout(() => {
        console.log(`Fetched user with id: ${id}`);
        callback({ id: id, name: "Alice" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log(`Fetched posts for userId: ${userId}`);
        callback(["Post1", "Post2", "Post3"]);
    }, 1000);
}

// Nested callbacks (callback hell)
getUser(1, (user) => {
    getPosts(user.id, (posts) => {
        console.log(`${user.name} has posts: ${posts.join(", ")}`);
    });
});

/* ============================
   02 - Promises
===============================*/

// Creating a Promise
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) resolve({ id, name: "Bob" });
            else reject("Invalid user id");
        }, 1000);
    });
}

// Using .then() and .catch()
fetchUser(2)
    .then(user => console.log("User fetched:", user))
    .catch(err => console.error("Error:", err));

// Promise chaining
function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["PostA", "PostB"]);
        }, 1000);
    });
}

fetchUser(2)
    .then(user => {
        console.log("Chaining user:", user);
        return fetchPosts(user.id);
    })
    .then(posts => console.log("Posts:", posts))
    .catch(err => console.error("Error in chain:", err));

// Promise.all / Promise.race
const p1 = Promise.resolve("Fast Result");
const p2 = new Promise(res => setTimeout(() => res("Slow Result"), 1500));

Promise.all([p1, p2]).then(results => console.log("Promise.all:", results));
Promise.race([p1, p2]).then(result => console.log("Promise.race:", result));

/* ============================
   03 - Async / Await
===============================*/

// Async function example
async function getUserAsync(id) {
    return { id, name: "Charlie" };
}

async function main() {
    const user = await getUserAsync(3);
    console.log("Async/Await user:", user);

    // Error handling with try-catch
    try {
        const posts = await fetchPosts(user.id);
        console.log("Async/Await posts:", posts);
    } catch (err) {
        console.error("Async/Await error:", err);
    }
}

main();

/* ============================
   04 - API Practice (Node.js / Browser)
===============================*/

// Using fetch (Node.js 18+ or browsers)
async function fetchRandomUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log("Random user:", data.results[0].name);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchRandomUser();

// Multiple requests in parallel
async function fetchMultipleUsers() {
    const urls = [
        "https://randomuser.me/api/",
        "https://randomuser.me/api/"
    ];

    try {
        const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
        results.forEach((data, idx) => {
            console.log(`User ${idx + 1}:`, data.results[0].name);
        });
    } catch (err) {
        console.error("Error fetching multiple users:", err);
    }
}

fetchMultipleUsers();

// Handling errors in fetch
async function fetchWithError() {
    try {
        const response = await fetch("https://randomuser.me/apix/"); // wrong URL
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Handled fetch error:", err.message);
    }
}

fetchWithError();
