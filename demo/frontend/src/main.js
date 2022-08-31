import { createApp } from "vue"
import { initVuethers } from "../../../src/index.js"
import App from "./App.vue"
import { vuethersConfig } from "../vuethers.config.js"

const app = createApp(App)

await initVuethers(app, vuethersConfig)

app.mount("#app")
