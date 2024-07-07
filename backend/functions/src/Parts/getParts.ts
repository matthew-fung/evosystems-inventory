import { onCall } from "firebase-functions/v2/https";
import { db } from "../common/db";

export const getParts = onCall({ cors: true }, async (request) => {
  const parts = await db.collection("Parts").get();
  return parts.docs.map((doc) => doc.data());
});
