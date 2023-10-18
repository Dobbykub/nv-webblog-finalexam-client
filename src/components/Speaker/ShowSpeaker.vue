<template>
    <div>
      <h1>Show Speaker</h1>
      <p>Model: {{ speaker.model }}</p>
        <p>Brand: {{ speaker.brand }}</p>
        <p>Watt: {{ speaker.watt }}</p>
        <p>Power: {{ speaker.power_input }}</p>
        <p>Stats: {{ speaker.status }}</p>
        <p>Type: {{ speaker.type }}</p>
    </div>
  </template>
  <script>
  import SpeakerService from "@/services/SpeakerService";
  
  export default {
    data() {
      return {
        speaker: null
      };
    },
    async created() {
      let speakerId = this.$route.params.speakerId;
      this.speaker = (await SpeakerService.show(speakerId)).data
      console.log(this.speakerId)
    }
  };
  </script>
  <style scoped></style>