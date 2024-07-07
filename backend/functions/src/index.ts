import * as functions from "firebase-functions";
import { addPart } from "./Parts";

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export { addPart };
