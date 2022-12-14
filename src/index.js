import { dapp } from "./composables/dapp/dapp.js";
import { rGet, rSet } from "./utils/index.js";
import "./style/reset.css";

export async function initTulipe (app, args) {
  const tulipeCustomConfig = args;

  try {
    dapp.init(tulipeCustomConfig);
  }
  catch (e) {
    if (dapp && dapp.status) {
      dapp.status.set("ERROR")
    }
    throw e
  }

  // Makes the dapp stores available globally in the project.
  app.config.globalProperties.dapp = dapp;
  app.config.globalProperties.rGet = rGet;
  app.config.globalProperties.rSet = rSet;
  window.dapp = dapp;

  // Initialize Tulipe components.
  const components = await import("./components/index.js");
  app.component('OnDappSafe', components.OnDappSafe);
  app.component('OnProviderSafe', components.OnProviderSafe);
  app.component('OnSignerSafe', components.OnSignerSafe);
  app.component('OnContractReadSafe', components.OnContractReadSafe);
  app.component('OnContractWriteSafe', components.OnContractWriteSafe);

  // Set the DApp safe.
  dapp.status.set("INITIALIZED");
}

export { dapp } from "./composables/dapp/dapp.js";
export * from "./components/index.js";
export * from "./composables/index.js";
export * from "./utils/index.js";
