<template>
    <div>
      <h1>Get All </h1>
      <button class="btn btn-success btn-sm sizetext" v-on:click="navigateTo('/speaker/create')">Create Cafe</button>
      <div>จํานวนผู้ใช้งาน {{ speakers.length }}</div>
      <div v-for="speaker in speakers" v-bind:key="speaker.id">
        <div>Model {{ speaker.model }}</div>
        <div>Brand {{ speaker.brand }}</div>
        <p>
          <button v-on:click="navigateTo('/speaker/' + speaker.id)">
            ดูข้อมูลผู้ใช้
          </button>
          <button v-on:click="navigateTo('/speaker/edit/' + speaker.id)">
            แกไขข้อมูล
          </button>
          <button v-on:click="deleteSpeaker(speaker)">ลบข้อมูล</button>
        </p>
        <hr />
      </div>
    </div>
  </template>
  <script>
  import SpeakerServices from "@/services/SpeakerService";
  export default {
    data() {
      return {
        speakers: []
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      async deleteSpeaker(speaker) {
        let result = confirm("Want to delete?");
        if (result) {
          try {
            await SpeakerServices.delete(speaker);
            this.refreshData()
          } catch (err) {
            console.log(err);
          }
        }
      },
      async refreshData() {
        this.speakers = (await SpeakerServices.index()).data;
      }
    },
    async created() {
      this.speakers = (await SpeakerServices.index()).data;
    }
  };
  </script>
  <style scoped></style>
  