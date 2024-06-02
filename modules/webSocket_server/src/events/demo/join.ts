import { DecodedToken } from "../../types";

const join = async ({
  data = {},
}, decoded: DecodedToken, socketId: string) => {
  return { status: "success", message: "User is connected.", data: null };
};

module.exports.params = {
  authRequired: true,
};

export default join;
