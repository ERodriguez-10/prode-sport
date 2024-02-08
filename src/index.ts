const PORT = process.env.PORT || 8000;

import httpServer from "./api/configs/server/http.config";
import connectDB from "./database/connectDB";

const initializeServer = async () => {
  try {
    await connectDB();

    httpServer.listen(PORT, () => {
      console.log(`[Server]: Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR] Server has an error ` + error);
  }
};

initializeServer();
