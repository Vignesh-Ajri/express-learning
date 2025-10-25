// hashing-passwords.js
import bcrypt from "bcryptjs";

// Example plain password
const plainPassword = "MySecurePass123";

// Hashing the password
async function hashPassword(password) {
  try {
    const saltRounds = 10; // higher = more secure but slower
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("🔐 Plain Password:", password);
    console.log("🔑 Hashed Password:", hashedPassword);
    return hashedPassword;
  } catch (err) {
    console.error("Error hashing password:", err);
  }
}

// Comparing a plain password with a hashed one
async function verifyPassword(plain, hashed) {
  try {
    const isMatch = await bcrypt.compare(plain, hashed);
    console.log(isMatch ? "✅ Passwords match!" : "❌ Invalid password!");
  } catch (err) {
    console.error("Error verifying password:", err);
  }
}

// Run the demo
(async () => {
  const hashed = await hashPassword(plainPassword);
  await verifyPassword("MySecurePass123", hashed);  //match
  await verifyPassword("WrongPassword", hashed);     //mismatch
})();
