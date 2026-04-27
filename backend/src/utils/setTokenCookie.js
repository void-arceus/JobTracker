const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "None" : "Lax",
  path: "/",
};

const setTokenCookie = (res, token) => {
  res.cookie("token", token, cookieOptions);
};

const clearTokenCookie = (res) => {
  res.clearCookie("token", cookieOptions);
};

module.exports = { setTokenCookie, clearTokenCookie };
