# Exercise — JWT Token Flow

## 🎯 Goal
Understand how tokens are generated, sent, and verified.

## 🧠 Concepts
- `jwt.sign(payload, secret, {expiresIn})`
- `jwt.verify(token, secret)`
- Token expiration and decoding

## 🧰 Run
1. Create a `.env` file with `JWT_SECRET=mysupersecretkey`.
2. Run `node tokenFlowDemo.js`.
