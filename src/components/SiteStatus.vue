<template>
  <div class="input-wrapper">
    <h1>Safe Browsing App</h1>
    <p>
      This app checks against Google's Safe Browsing API. The purpose of this
      app is to send a request to the API with the provided website URL and
      receive a response indicating whether the website is flagged as a known
      threat or safe. Currently only detecting for Malware, Social Engineering
      and Unwanted Software.
    </p>
    <ul class="example-urls">
      <span>Here are some example URLs to check with:</span>
      <li>https://testsafebrowsing.appspot.com/s/phishing.html</li>
      <li>https://testsafebrowsing.appspot.com/s/malware.html</li>
      <li>https://testsafebrowsing.appspot.com/s/malware_in_iframe.html</li>
      <li>https://testsafebrowsing.appspot.com/s/unwanted.html</li>
    </ul>
    <div class="input-container">
      <input v-model="siteUrl" placeholder="Enter Site URL" />
      <button @click="handleCheckSite">Check</button>
    </div>
    <div v-if="siteStatus" class="result-container">
      <h2>{{ siteUrl }}</h2>
      <ul>
        <li v-for="match in siteStatus" :key="match.threat.url">
          <span style="font-weight: bold">Site: </span>{{ match.threat.url }} is
          flagged under
          <span style="color: red; font-weight: bold">{{
            match.threatType
          }}</span>
        </li>
      </ul>
    </div>
    <div v-else>Looks Good. No Flags Detected.</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SiteView",
  data() {
    return {
      siteUrl: "",
    };
  },
  computed: {
    ...mapState(["siteStatus"]),
  },
  methods: {
    ...mapActions(["checkSite"]),
    handleCheckSite() {
      this.checkSite(this.siteUrl, import.meta.env.VITE_API_KEY);
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  margin: 0 auto;
  padding: 4em;
  background-color: #1f2124;
  border-radius: 8px;
  color: #ffffff;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  margin-bottom: 1.5em;
}

.example-urls {
  margin-bottom: 1.5em;
}

.example-urls span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.example-urls li {
  margin-bottom: 0.5em;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #ffffff;
  color: #1f2124;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #0056b3;
}

.result-container {
  margin-top: 20px;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 5px;
}

/* Dark mode styles */
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

.dark-mode input {
  background-color: #ffffff;
  color: #1f2124;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark-mode .result-container {
  background-color: #1f2124;
}
</style>
