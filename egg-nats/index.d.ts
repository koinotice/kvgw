import { Client, ClientOpts } from "nats";



interface EggNatsOptions {
  Nats?: Client;
  default?: object;
  app?: boolean;
  agent?: boolean;

  clients?: Record<string, ClientOpts>;
}

declare module 'egg' {
  interface Application {
    nats: Client & Singleton<Client>;
  }

  interface EggAppConfig {
    mnats: EggNatsOptions;
  }
}
