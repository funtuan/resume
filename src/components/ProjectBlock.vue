<template>
  <div class="project box">
      <div class="status">
        <span class="time">
          {{ project.atTime.getFullYear() + '年'
            + (parseInt(project.atTime.getMonth())+1) + '月' }}
        </span>
        <span v-if="project.online" class="online">
          <span
            class="repo-language-color"
            :style="`background-color: #61ac16`"
          ></span>
          目前運行中
        </span>
        <span v-if="!project.online" class="close">
          已停止服務
        </span>
      </div>
      <a class="title" :href="project.mainUrl">
        {{ project.title }}
      </a>
      <div class="content">
        {{ project.content }}
      </div>
      <div class="features">
        <div v-for="features in project.features" v-bind:key="features">
          {{ features }}
        </div>
      </div>
      <div class="tag-list">
        <span
          class="tag"
          v-for="lang in project.lang"
          v-bind:key="lang"
        >
          <span
            class="repo-language-color"
            :style="`background-color: ${randomColor(lang.length)}`"
          ></span>
          {{ lang }}
        </span>
        <span
          class="tag"
          v-for="tool in project.tool"
          v-bind:key="tool"
        >
          <span
            class="repo-language-color"
            :style="`background-color: ${randomColor(tool.length)}`"
          ></span>
          {{ tool }}
        </span>
      </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ProjectBlock',
  props: {
    project: Object,
  },
  data: () => {
    return {
    };
  },
  methods: {
    showDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    randomColor(seed) {
      let x = Math.sin(seed++) * 10000;
      x = x - Math.floor(x);
      return '#'+(0x1000000+x*0xffffff).toString(16).substr(1, 6);
    },
  },
};
</script>

<style scoped>
  .project {
    text-align: left;
    padding: 16px;
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 24px;
    line-height: 1.5;
  }
  .box {
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;
  }
  .title {
    font-size: 18px;
  }
  .content {
    font-size: 12px;
  }
  .features {
    margin-top: 12px;
    font-size: 12px;
    color: #517398;
    line-height: 1.7;
  }
  .date {
    font-size: 12px;
    color: #586069;
  }

  a {
    font-weight: bold;
    color: #0366d6;
    text-decoration: none;
  }
  a:hover{
    text-decoration:underline;
  }

  .tag-list {
    font-size: 12px;
    margin-top: 10px;
  }
  .tag {
    color: #586069;
    margin-right: 10px;
    line-height: 1.7;
  }
  .repo-language-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .status {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .online {
    color: #61ac16;
  }
  .close {
    color: #bdbdbd;
  }
  .time {
    margin-right: 4px;
  }
</style>
