const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        name : { type: String, required: true },
        email : { type: String, unique: true, lowercase: true, required: true },
        password : { type: String, required: true, minlength: 6 }
    },
    {
        timestamps: true,
    }
);

// pre-save hashing: only if password is modified or new
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model('User', userSchema);