import { SSTConfig } from "sst";
import { WebSocketStack } from "./stacks/WebSocketStack";

export default {
  config(_input) {
    return {
      name: "git-auto-sync-ws",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(WebSocketStack);
  }
} satisfies SSTConfig;
