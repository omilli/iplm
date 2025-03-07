import cors from "cors";
import { getModelServer } from "./getModelServer"
import { getDatabase, setupModelRoute } from "../../database";

const modelServer = getModelServer();
const port = 3000;

modelServer.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With']
}));

(async () => {
  await getDatabase({ name: "models", shouldInit: true });
  await setupModelRoute();
})();

modelServer.listen(port, () => {
  console.log(`iplmdb listening on port ${port}...`);
});
