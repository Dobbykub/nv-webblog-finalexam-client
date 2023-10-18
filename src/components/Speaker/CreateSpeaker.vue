<template>
    <div>
      <h1>Create speakers</h1>
      <form v-on:submit.prevent="createSpeaker">
        <p>Model: <input type="text" v-model="speaker.model" /></p>
        <p>Brand: <input type="text" v-model="speaker.brand" /></p>
        <p>Watt: <input type="text" v-model="speaker.watt" /></p>
        <p>Power: <input type="text" v-model="speaker.power_input" /></p>
        <p>Stats: <input type="text" v-model="speaker.status" /></p>
        <p>Type: <input type="text" v-model="speaker.type" /></p>
        <p><button type="submit">create speaker</button></p>
      </form>
      <hr />
      <div>
        <p>Model: {{ speaker.model }}</p>
        <p>Brand: {{ speaker.brand }}</p>
        <p>Watt: {{ speaker.watt }}</p>
        <p>Power: {{ speaker.power_input }}</p>
        <p>Stats: {{ speaker.status }}</p>
        <p>Type: {{ speaker.type }}</p>
      </div>
    </div>
  </template>
  <script>
  import SpeakersService from "@/services/SpeakerService";
  
  export default {
    data() {
      return {
        speaker: {
          model: "",
          brand: "",
          watt: "",
          power_input: "",
          status: "",
          type: ""
        }
      };
    },
    methods: {
      async createSpeaker() {
        try {
          await SpeakersService.post(this.speaker);
          this.$router.push({
            name: "speakers"
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  <style scoped></style>
  