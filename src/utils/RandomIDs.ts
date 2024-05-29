import * as crypto from "crypto";
import * as fs from "fs";
function randomID(length: number = 24): string {
  return crypto.randomBytes(length / 2).toString("hex");
}

function util(json: any) {
  return json?.map((item: any, index: any) => {
    if (typeof item._id !== "object") {
      item._id = { $oid: randomID() };
    }

    item.order = index + 1;
    util(item.questions);
    return item;
  });
}
