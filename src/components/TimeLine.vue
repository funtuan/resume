<template>
  <div class="timeline">
    <el-row>
      <el-col :span="24">
        <div class="title">
          作品集時間軸
        </div>
        <div
          v-for="project in projectData"
          v-bind:key="project.atTime"
          class="projects"
        >
          <ProjectLine v-if="project.type === 'project'" :project="project" />
          <div v-if="project.type === 'year'" class="year-line">
            {{ project.year }}
          </div>
        </div>
      </el-col>
      <!-- <el-col :span="4">
        <div v-for="year in years" v-bind:key="year" class="year">
          <el-button
            :type="atYear === year?'primary':''"
            @click="setYears(year)"
            size="mini"
            plain
          >
            {{ year }}
          </el-button>
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import ProjectLine from '@/components/ProjectLine.vue';
import projectData from '@/data/projectData.js';

export default {
  name: 'TimeLine',
  components: {
    ProjectLine,
  },
  data: () => {
    return {
      projectData,
      projectList: [],
      years: [],
      atYear: '',
    };
  },
  created: function() {
    this.loadYears();
    console.log(projectData[0]);
    this.addYears();
  },
  methods: {
    loadYears() {
      this.projectData.forEach((one) => {
        const year = one.atTime.getFullYear();
        if (this.years.indexOf(year) === -1) {
          this.years.push(year);
        }
      });

      this.setYears(this.years[0]);
    },
    addYears() {
      this.projectData.map((one) => {
        one.type = 'project';
      });
      let lastyear = '';
      this.projectData.forEach((one, index) => {
        const year = one.atTime.getFullYear();
        if (lastyear !== year) {
          this.projectData.splice(index, 0, {
            type: 'year',
            year,
          });
        }
        lastyear = year;
      });
    },
    setYears(year) {
      this.atYear = year;
      this.projectList = this.projectData.filter((one) => {
        return one.atTime.getFullYear() === this.atYear;
      });
    },
  },
};
</script>

<style scoped>
  .timeline{
    text-align: left;
  }
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 12px;
  }
  .year {
    margin: 10px 0;
  }
  .year-line {
    font-size: 14px;
    padding: 10px 0;
    background-color: #fff;
  }
</style>
