'use server';

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

hashPassword('123').then((hash) => console.log(hash));

export async function authenticate(
  login: string,
  password: string
): Promise<boolean> {
  if (
    !login ||
    login !== process.env.LOGIN ||
    !password ||
    !process.env.PASSWORD_HASH
  ) {
    return false;
  }

  return await bcrypt.compare(password, process.env.PASSWORD_HASH);
}
