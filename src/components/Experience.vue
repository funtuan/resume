/* eslint-disable indent */
<template>
  <div class="experience">
    <div class="title">個人經歷</div>
    <div class="lock-page" v-if="lock">
      <el-input class="key" v-model="key" placeholder="請輸入金鑰"></el-input>
      <el-button @click="getExperience(key)">送出</el-button>
      <div class="sub">需輸入金鑰解密才可查看</div>
    </div>
    <div class="view" v-if="!lock">
      <div
        class="box"
        v-for="experience in experiences"
        v-bind:key="experience.organization"
      >
        <div class="date">
          {{ showDate(experience.start) }} - {{ showDate(experience.end) }}
        </div>
        <div class="organization">
          {{ experience.organization }}
        </div>
        <div class="unit">
          {{ experience.unit }}
        </div>
        <div class="content-list">
          <div
            class="content"
            v-for="content in experience.content"
            v-bind:key="content"
          >
            {{ content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import CryptoJS from 'crypto-js';
import tripledes from 'crypto-js/tripledes';
import experienceData from '@/data/experienceData.js';

export default {
  name: 'Experience',
  components: {
  },
  data: () => {
    return {
      key: window.location.hash.replace('#', ''),
      lock: true,
      experiences: [],
    };
  },
  created: function() {
  },
  methods: {
    getExperience(key) {
      try {
        const plaintext = tripledes
            .decrypt(experienceData, key)
            .toString(CryptoJS.enc.Utf8);
        this.experiences = JSON.parse(plaintext);
        this.lock = false;
      } catch (error) {
        return;
      }
    },
    showDate(date) {
      return moment(date).format('YYYY/MM');
    },
  },
};
</script>

<style scoped>
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-top: 12px;
    margin-bottom: 15px;
  }
  .key{
    width: 150px;
  }
  .lock-page {
    line-height: 32px;
  }
  .lock-page .sub {
    color: #878787;
  }
  .date {
    color: #878787;
    font-size: 14px;
  }
  .organization {
    font-weight: bold;
    margin-top: 6px;
    font-size: 20px;
  }
  .unit {
    font-size: 14px;
  }
  .content-list {
    font-size: 16px;
    margin-top: 15px;
    line-height: 1.5;
  }
  .box {
    padding: 15px;
    margin-bottom: 25px;
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 5px;
  }
</style>
