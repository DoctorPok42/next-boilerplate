import chalk from "chalk";
import jwt from "jsonwebtoken";

const themeColors = {
  text: "#2B2",
  variable: "#42f5e0",
  error: "#f5426c",
} as any;

export const getThemeColor = (color: any) =>
  Number(`0x${themeColors[color].substring(1)}`);

export const color = (color: any, message: any) => {
  return chalk.hex(themeColors[color])(message);
};

export const createAuthToken = async (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
};

export const verifyAuthToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};

export const checkAuthToken = (token: string) => {
  if (!token) return null;

  const decoded = verifyAuthToken(token) as any;
  if (!decoded?.id) return null;

  return decoded;
};
