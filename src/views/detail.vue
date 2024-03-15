<template>
  <div>
  <div>
    <h2>Target Detail</h2>
    <el-row :gutter="25">
      <el-col :span="24" >
      <el-form label-width="100px">
          <el-form-item label="Target ID" v-if="targetDetail.targetid !== null && targetDetail.targetid !== ''">
            {{ targetDetail.targetid }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="Former ID" v-if="targetDetail.formerid !== null && targetDetail.formerid !== ''">
            {{ targetDetail.formerid }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="UniProt ID"  v-if="targetDetail.uniproid !== null && targetDetail.uniproid !== ''">
            {{ targetDetail.uniproid }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="Target Name" v-if="targetDetail.targname !== null && targetDetail.targname !== ''">
            {{ targetDetail.targname }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="Gene Name" v-if="targetDetail.genename!== null && targetDetail.genename !== ''">
            {{ targetDetail.genename }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="Target Type" v-if="targetDetail.targtype !== null && targetDetail.targtype !== ''">
            {{ targetDetail.targtype }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="Synonyms" v-if="targetDetail.synonyms !== null && targetDetail.synonyms !== ''">
            {{ targetDetail.synonyms }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="Functions"  v-if="targetDetail.functions !== null && targetDetail.functions !== ''">
            {{ targetDetail.functions }}
            <el-divider></el-divider>
          </el-form-item>

          <el-form-item label="PDB Stru"   v-if="targetDetail.pdbstruc!= null && targetDetail.pdbstruc != ''">
            {{ targetDetail.pdbstruc }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="Bio Class" v-if="targetDetail.bioclass != null && targetDetail.bioclass != ''">
            {{ targetDetail.bioclass }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="EC Number" v-if="targetDetail.ecnumber != null && targetDetail.ecnumber != ''">
            {{ targetDetail.ecnumber }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="Sequence" v-if="targetDetail.sequence != null && targetDetail.sequence != ''">
            {{ targetDetail.sequence }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="Drug Information" v-if="targetDetail.druginfo != null && targetDetail.druginfo != ''">
            {{ targetDetail.druginfo }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="KEGG Pathway" v-if="targetDetail.keggpath != null && targetDetail.keggpath != ''">
            {{ targetDetail.keggpath }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="WikiPathway" v-if="targetDetail.wikipath != null && targetDetail.wikipath != ''">
            {{ targetDetail.wikipath }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="WhizPath" v-if=" targetDetail.whizpath  != null&& targetDetail.whizpath != ''">
            {{ targetDetail.whizpath }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="Reactome Pathway" v-if=" targetDetail.reacpath  != null&& targetDetail.reacpath != ''">
            {{ targetDetail.reacpath }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="NetPath" v-if=" targetDetail.net_path  != null&& targetDetail.net_path != ''">
            {{ targetDetail.net_path }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="IntePath" v-if=" targetDetail.intepath  != null&& targetDetail.intepath != ''">
            {{ targetDetail.intepath }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="PANTHER Pathway" v-if=" targetDetail.pantpath  != null&& targetDetail.pantpath != ''">
            {{ targetDetail.pantpath }}
            <el-divider></el-divider>
          </el-form-item>


          <el-form-item label="BioCarta Pathway" v-if=" targetDetail.biocpath  != null&& targetDetail.biocpath != ''">
            {{ targetDetail.biocpath }}
            <el-divider></el-divider>
          </el-form-item>


        <el-form-item label="clinicalStatus" v-if="disease.clinicalStatus != null && disease.clinicalStatus != ''">
          {{disease.clinicalStatus}}
        </el-form-item>
          <!-- 其他需要显示的目标详细信息 -->
        </el-form>
      </el-col>
    </el-row>
  </div>

  <div class="wrap">
    <iframe ref="iframe" :src="htmlSrc" width="100%" height="50%" frameborder="0"></iframe>
  </div>

  </div>
</template>







<script>
import axios from "axios";
export default {
  data() {
    return {
      targetDetail: {},
      disease: {},
      targetId: '',
      htmlSrc : 'static/pdbShow.html',
    };
  },
  created() {
    // 在 created 钩子中通过路由参数获取 targetId
    this.targetId = this.$route.query.targetId;

    // 根据 targetId 请求目标详细信息
    // 这里需要根据实际情况调整 API 地址
    this.fetchTargetDetail();
    this.getTTDDisease();
  },
  methods: {
    fetchTargetDetail() {
      // console.log(this.targetId);
      // 发送请求获取目标详细信息
      axios.get(`http://localhost:8080/api/target/queryById/${this.targetId}`)
        .then((res) => {
          console.log(JSON.stringify(res.data))
          this.targetDetail = res.data.data;
          var pdbStrc= this.targetDetail.pdbstruc;
          var fruitArray = pdbStrc.split(';');
          // 获取分割后的第一个字符串
          var firstFruit = fruitArray[0];
          // console.log("----------------------------pdbstrc----------------------------------------------------");
          // console.log(firstFruit);

          //给html页面传参
          let myFrame = this.$refs['iframe'];
          if (myFrame.attachEvent) {
            myFrame.attachEvent('onload', function() {
              const iframeWin = myFrame.contentWindow;
              iframeWin.postMessage({ firstFruit: firstFruit }, '*');
            });
          } else {
            myFrame.onload = function() {
              const iframeWin = myFrame.contentWindow;
              iframeWin.postMessage({ firstFruit: firstFruit }, '*');
            };
          }


        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTTDDisease() {
      // console.log(this.targetId);
      axios.get(`http://localhost:8080/api/targetDiseaseMappping/queryByTargetId/${this.targetId}`)
        .then((res) => {
          // console.log(res.data)
          this.disease = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
};
</script>

<style>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 使用视窗的100%高度 */
}

iframe {
  width: 60%; /* 设置iframe宽度为80% */
  height: 100vh; /* 设置iframe高度为80%视窗高度 */
}
/* 样式适配el-form-item */

</style>

