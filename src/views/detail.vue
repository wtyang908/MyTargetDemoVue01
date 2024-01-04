<template>
  <div>
    <h2>Target Detail</h2>
    <el-row :gutter="30">
      <el-col :span="24" >
      <el-form label-width="100px">
          <el-form-item label="Target ID">
            {{ targetDetail.targetid }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Former ID">
            {{ targetDetail.formerid }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="UniProt ID">
            {{ targetDetail.uniproid }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Target Name">
            {{ targetDetail.targname }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Gene Name">
            {{ targetDetail.genename }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Target Type">
            {{ targetDetail.targtype }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Synonyms">
            {{ targetDetail.synonyms }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Functions">
            {{ targetDetail.functions }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="PDB Structure">
            {{ targetDetail.pdbstruc }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Bio Class">
            {{ targetDetail.bioclass }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="EC Number">
            {{ targetDetail.ecnumber }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Sequence">
            {{ targetDetail.sequence }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Drug Information">
            {{ targetDetail.druginfo }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="KEGG Pathway">
            {{ targetDetail.keggpath }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="WikiPathway">
            {{ targetDetail.wikipath }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="WhizPath">
            {{ targetDetail.whizpath }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="Reactome Pathway">
            {{ targetDetail.reacpath }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="NetPath">
            {{ targetDetail.net_path }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="IntePath">
            {{ targetDetail.intepath }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="PANTHER Pathway">
            {{ targetDetail.pantpath }}
          </el-form-item>
          <el-divider></el-divider>

          <el-form-item label="BioCarta Pathway">
            {{ targetDetail.biocpath }}
          </el-form-item>
          <el-divider></el-divider>

        <el-form-item label="clinicalStatus">
          {{disease.clinicalStatus}}
        </el-form-item>
          <!-- 其他需要显示的目标详细信息 -->
        </el-form>
      </el-col>
    </el-row>
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
      console.log(this.targetId);
      // 发送请求获取目标详细信息
      axios.get(`http://localhost:8080/api/target/queryById/${this.targetId}`)
        .then((res) => {
          console.log(res.data)
          this.targetDetail = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTTDDisease() {
      console.log(this.targetId);
      axios.get(`http://localhost:8080/api/targetDiseaseMappping/queryByTargetId/${this.targetId}`)
        .then((res) => {
          console.log(res.data)
          this.disease = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
