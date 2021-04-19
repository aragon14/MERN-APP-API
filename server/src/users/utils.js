import crypto from "crypto";
export async function hash(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(8).toString("hex");

    crypto.scrypt(password, salt, 64, (err, derivekey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivekey.toString("hex")}`);
    });
  });
}

export async function verify(password, hash) {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":");
    crypto.scrypt(password, salt, 64, (err, derivekey) => {
      if (err) reject(err);
      resolve(key === derivekey.toString("hex"));
    });
  });
}
