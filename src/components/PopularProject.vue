<template>
  <div class="popular-project">
    <div class="title">
      {{hot?'熱門作品集':'所有作品集'}}
    </div>
    <el-row>
      <el-col
        :xs="24" :sm="12"
        v-for="project in projectData"
        v-bind:key="project.atTime"
      >
        <ProjectBlock :project="project" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProjectBlock from '@/components/ProjectBlock.vue';
import projectData from '@/data/projectData.js';

export default {
  name: 'PopularProject',
  props: {
    hot: Boolean,
  },
  components: {
    ProjectBlock,
  },
  data: () => {
    return {
      projectData,
    };
  },
  created: function() {
    if (this.hot) {
      this.projectData = this.projectData.filter((one) => one.hot);
    }
  },
  methods: {
  },
};
</script>

<style scoped>
  .popular-project{
    text-align: left;
  }
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-top: 12px;
    margin-bottom: 15px;
  }
  .year {
    margin: 10px 0;
  }
</style>
