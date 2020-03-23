<template>
  <div class="myInfo">
      <div class="photo">
        <img style="width: 100%;" :src="info.photo">
      </div>
      <div class="name">
        {{ info.name }}
      </div>
      <div class="sub">
        {{ info.job }}
      </div>
      <div class="content" v-html="info.description">
      </div>
      <div class="urls">
        <i class="el-icon-user icon"></i>
        <a href="https://github.com/funtuan">https://github.com/funtuan</a><br>
        <i class="el-icon-message icon"></i>
        <a href="mailto:hank85627@gmail.com">hank85627@gmail.com</a>
      </div>
  </div>
</template>

<script>
import photo from '@/assets/photo.jpeg';
import githubImage from '@/assets/github.png';

export default {
  name: 'MyInfo',
  data: () => {
    return {
      githubImage,
      info: {
        photo,
        name: '陳柏翰',
        nickname: 'FunTuan',
        job: '全端工程師',
        description: `
        後端 Node.js 為主，未來想多使用 Golang 開發，早期則用 PHP<br>
        前端 Vue 為主，習慣 SPA 架構<br>
        除網頁外，也熱愛開發 ChatBot、Chrome Extension 等網路應用
        `,
      },
    };
  },
};
</script>

<style scoped>
  .myInfo{
    text-align: left;
    padding: 20px 20px 0 20px;
    line-height: 30px;
  }
  .photo {
    margin: 10px 0;
  }
  .name {
    font-size: 26px;
    font-weight: 600;
  }
  .sub {
    color: #353535;
    font-size: 15px;
  }
  .content {
    color: #353535;
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.7;
  }
  .urls {
    margin-top: 8px;
    font-size: 13px;
  }
  .icon {
    font-size: 15px;
    margin-right: 4px;
  }
  a {
    font-weight: bold;
    color: #5c7ca1;
    text-decoration: none;
  }
  a:hover {
    text-decoration:underline;
  }
</style>
