<!--<template>-->
<!--  <div>-->
<!--    &lt;!&ndash; 按 name 搜索框 &ndash;&gt;-->
<!--    <div>-->
<!--      <div v-if="nameResult.length > 0">-->
<!--        搜索结果:-->
<!--        <table>-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th>Target ID</th>-->
<!--            <th>Former ID</th>-->
<!--            <th>Gene Name</th>-->
<!--            <th>Synonyms</th>-->
<!--            <th>操作</th> &lt;!&ndash; 新增一列用于放置按钮 &ndash;&gt;-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr v-for="item in nameResult" :key="item.targetid">-->
<!--            <td>{{ item.targetid }}</td>-->
<!--            <td>{{ item.formerid }}</td>-->
<!--            <td>{{ item.genename }}</td>-->
<!--            <td>{{ item.synonyms }}</td>-->
<!--            <td>-->
<!--              &lt;!&ndash; 按钮绑定点击事件，调用详情页面跳转方法 &ndash;&gt;-->
<!--              <button @click="goToDetailPage(item.targetid)">查看详情</button>-->
<!--            </td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div>
    <!-- 按 name 搜索框 -->
    <div>
      <div v-if="nameResult.length > 0">
        <el-table :data="nameResult" style="width: 100%">
          <el-table-column prop="targetid" label="Target ID"></el-table-column>
          <el-table-column prop="formerid" label="Former ID"></el-table-column>
          <el-table-column prop="genename" label="Gene Name"></el-table-column>
          <el-table-column prop="synonyms" label="Synonyms"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- 按钮绑定点击事件，调用详情页面跳转方法 -->
              <el-button type="primary" @click="goToDetailPage(scope.row.targetid)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nameSearchQuery: {
        name: "",
      },
      nameResult: [],
    };
  },
  created() {
    this.nameSearchQuery.name = this.$route.query.searchInfo;
    this.searchByName();
  },
  methods: {
    searchByName() {
      axios
        .get(
          `http://localhost:8080/api/target/queryByIdNameAndSynonyms/${this.nameSearchQuery.name}`
        )
        .then((res) => {
          this.nameResult = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goToDetailPage(targetId) {
      // 根据点击按钮传递的 targetId 跳转到详情页面
      this.$router.push({path: '/detail',query: {targetId: targetId,}});
    },
  },
};
</script>
