<template>
  <div class="home">
    <el-row>
      <el-col :xs="24" :sm="6">
        <MyInfo/>
      </el-col>
      <el-col :xs="24" :sm="18">
        <el-tabs v-model="page" class="tabs">
          <el-tab-pane label="Overview" name="Overview">
            <PopularProject :hot="true"/>
            <TimeLine/>
          </el-tab-pane>
          <el-tab-pane label="Projects" name="Projects">
            <PopularProject :hot="false"/>
          </el-tab-pane>
          <el-tab-pane label="Experience" name="Experience">
            <Experience />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyInfo from '@/components/MyInfo.vue';
import PopularProject from '@/components/PopularProject.vue';
import TimeLine from '@/components/TimeLine.vue';
import Experience from '@/components/Experience.vue';

export default {
  name: 'Home',
  components: {
    MyInfo,
    PopularProject,
    TimeLine,
    Experience,
  },
  data: function() {
    return {
      page: 'Overview',
    };
  },
};
</script>

<style scoped>
  .home{
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
  .tabs{
    text-align: left;
    padding: 20px;
  }
</style>
