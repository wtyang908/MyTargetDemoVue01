<template>
  <div>
    <div class="form-container">
      <el-form :inline="true" :model="nameSearchQuery">
        <el-form-item label="搜索：">
          <el-input v-model="nameSearchQuery.name" placeholder="请输入搜索内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="redirectTTDMes">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import TtdMessages from '@/views/TtdMessages'

export default {
  components: {TtdMessages},
  data() {
    return {
      nameSearchQuery: {
        name: "",
      },
      nameResult: [],
    };
  },
  methods: {
    redirectTTDMes() {
      console.log("--------------------------!!!0----------------------------------------------------------------------");
      this.$router.push({path: '/TtdMessages',query: {searchInfo: this.nameSearchQuery.name,}});
      console.log("--------------------------!!!1----------------------------------------------------------------------");
    },
  },
};
</script>


<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* 容器高度 */
}
</style>
