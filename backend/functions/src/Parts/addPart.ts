import * as functions from "firebase-functions";
import { db } from "../common/db";

export const addPart = functions.https.onRequest(async (request, response) => {
  if (request.method !== "POST") {
    response.status(405).send("Method Not Allowed");
    return;
  }

  const { type, brand, model, price, inUse } = request.body;

  // Validate request body
  if (
    typeof type !== "string" ||
    typeof brand !== "string" ||
    typeof model !== "string" ||
    typeof price !== "number" ||
    typeof inUse !== "boolean"
  ) {
    response.status(400).send("Invalid request body");
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
    response.status(201).send(`Part added with ID: ${docRef.id}`);
  } catch (error) {
    functions.logger.error("Error adding part", error);
    response.status(500).send("Internal Server Error");
  }
});
