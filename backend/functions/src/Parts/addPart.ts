import {error, log} from "firebase-functions/logger";
import {onCall} from "firebase-functions/v2/https";
import {db} from "../common/db";

export const addPart = onCall({cors: true}, async (request) => {
  const {type, brand, model, price, inUse} = request.data;

  // Validate request body
  if (
    typeof type !== "string" ||
    typeof brand !== "string" ||
    typeof model !== "string" ||
    typeof price !== "number" ||
    typeof inUse !== "boolean"
  ) {
    return;
  }

  try {
    const newPart = {
      type,
      brand,
      model,
      price,
      inUse,
    };

    const docRef = await db.collection("Parts").add(newPart);
    log("Part added with ID: ", docRef.id);
  } catch (err) {
    error("Error adding part", err);
  }
});
