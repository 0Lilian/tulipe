<script setup>
import { dapp } from "../../index.js";
import { ref } from "vue";

const props = defineProps({
  contract: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  }
})

const contract = dapp.contracts[props.contract]
let eventInfos = ref({});
let event = ref({});
let count = ref(0);
let logs = ref([]);

contract.onReadSafe(() => {
  eventInfos.value = contract.interface.events[props.event];
  event.value = contract.filters[eventInfos.value.name];

  contract.on(event.value, (listenedEvent) => {
    // Increment counter.
    count.value++;

    // Build and append log.
    let log = `Block ${listenedEvent.blockNumber} -> {`
    for(const input of eventInfos.value.inputs) {
      log += `${input.name}:${listenedEvent.args[input.name]}, `
    }
    log = log.substring(0, log.length - 2) + "}"
    logs.value.push(log)
  })
})
</script>

<template>
  <OnContractReadSafe :contract="props.contract">
    <div class="EventInteractor">
      <p>{{ eventInfos.name }}</p>
      <ul>
        <li>Count : {{ count }}</li>
        <li>Logs:
          <ul>
            <li v-for="log of logs">{{ log }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </OnContractReadSafe>
</template>
