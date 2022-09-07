import { dapp, Status, OnProviderSafe } from "../../index.js";
import { computed, watch, getCurrentInstance } from "vue";


export class ProviderARS {

  constructor () {
    this.status = new Status("provider", [
      "DISCONNECTED",  // Default status. Doesn't change if the dapp cannot connect to any provider.
      "ERROR",         // Set when an error occurs during provider connection.
      "WRONG_NETWORK", // Set when DApp connected to a provider not contained in the available networks.
      "CONNECTED",     // Set when DApp connected to a provider contained in the available networks.
    ])

    // Initialize safers properties.
    this.isSafe = computed(() => {
      return dapp.isSafe.value && !this.status.isIn(["DISCONNECTED", "ERROR"]);
    })
    this.OnSafe = OnProviderSafe;
  }

  init() {
    // dapp.provider.on("network", (newNetwork, oldNetwork) => {
    //   if (oldNetwork && oldNetwork !== newNetwork) {
    //     window.location.reload();
    //   }
    // });

    // dapp.provider.onProviderChange(() => {
    //
    // })
    // 1) Purge old ethersInstance ARS
    // UNNECESSARY : Since the whole frontend is reloaded when the providerInstance
    // changes (see below), we don't have to purge the old ethersInstance ARS

    // 2) Reload the app on network change. (SECURITY, see : https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes)

    // 3) Set status to ERROR on provider error.
    // this.on("error", () => {
    //   this.status.set("ERROR");
    // })
  }

  onSafe (func) {
    const component = getCurrentInstance();
    if (this.isSafe.value) {
      func(component)
    }
    else {
      const unwatch = watch(this.isSafe, () => {
          if (this.isSafe.value) {
              func(component)
              unwatch()
          }
      })
    }
  }
}
