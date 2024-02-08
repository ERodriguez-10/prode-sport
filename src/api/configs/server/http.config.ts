import expressServer from "./express.config";

import { createServer } from "node:http";

const httpServer = createServer(expressServer);

export default httpServer;
