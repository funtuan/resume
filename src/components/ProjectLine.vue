<template>
  <div class="project">
      <div class="date" :href="project.mainUrl">
        {{ showDate(project.atTime) }}
        {{ project.genre }}
      </div>
      <span>
      </span>
      <a class="title" :href="project.mainUrl">
        {{ project.title }}
      </a>
      <span class="job">
        ｜{{ project.job }}
      </span>
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
  name: 'ProjectLine',
  props: {
    project: Object,
  },
  data: () => {
    return {
    };
  },
  methods: {
    showDate(date) {
      return moment(date).format('MM/DD');
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
    padding-top: 10px;
    padding-bottom: 24px;
    padding-left: 24px;
    margin-left: 16px;
    line-height: 1.5;
  }
  .title {
    font-size: 14px;
  }
  .content {
    font-size: 13px;
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
  a:hover {
    text-decoration:underline;
  }
  .tag-list {
    font-size: 12px;
    margin-top: 4px;
  }
  .tag {
    color: #586069;
    margin-right: 10px;
  }
  .repo-language-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .project:before {
    position: absolute;
    top: 45px;
    bottom: 0;
    left: 10px;
    z-index: -1;
    display: block;
    width: 2px;
    content: "";
    background-color: #eaecef;
  }
  .job {
    font-size: 13px;
  }
</style>
