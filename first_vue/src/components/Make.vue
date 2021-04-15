<template>
  <el-container class="main_container">
    <el-header style="height: 60.5px;">
      <div class="left_box">
        <img src="../assets/logo.jpg">
        <span>食 光</span>
      </div>
      <div class="right_box">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="black"
          text-color="white"
          active-text-color="#ffd04b"
          router="true">
          <el-menu-item index="/main">首页</el-menu-item>
          <el-submenu index="/search">
            <template slot="title" >食物</template>
            <el-menu-item index="/search">蔬菜</el-menu-item>
            <el-menu-item index="/search">肉类</el-menu-item>
            <el-menu-item index="/search">水果</el-menu-item>
            <el-menu-item index="/search">主食</el-menu-item>
            <el-menu-item index="/search">坚果</el-menu-item>
            <el-menu-item index="/search">饮品</el-menu-item>
            <el-menu-item index="/search">其他</el-menu-item>
          </el-submenu>
          <el-submenu index="/sport">
            <template slot="title" >运动</template>
            <el-menu-item index="/sport">上肢</el-menu-item>
            <el-menu-item index="/sport">下肢</el-menu-item>
            <el-menu-item index="/sport">腹部</el-menu-item>
            <el-menu-item index="/sport">全身</el-menu-item>
          </el-submenu>
          <el-menu-item index="/make">制作菜单</el-menu-item>
          <el-dropdown>
            <img src="../assets/img1.jpg">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-house" @click.native="GotoUser">个人界面</el-dropdown-item>
              <el-dropdown-item icon="el-icon-edit" @click.native="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
      </div>
    </el-header>
    <el-col :span="11">
      <el-card class="box-card" style="margin-left:380px;margin-top: 20px;margin-bottom: 20px;height: 500px;width: 500px">
        <div slot="header" class="clearfix">
          <span style="margin-left: 20px">制定食材</span>
<!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <div class="text item">
          <el-form :model="fillForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="总热量" prop="calorie">
              <el-input v-model="fillForm.calorie"></el-input>
            </el-form-item>
            <el-form-item label="时间" required>
              <el-col :span="11">
                <el-form-item prop="date">
                  <el-date-picker type="date" placeholder="选择日期" v-model="fillForm.date" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="喜爱的类别" prop="type">
              <el-checkbox-group v-model="fillForm.type">
                <el-checkbox label="蔬菜类" name="type"></el-checkbox>
                <el-checkbox label="水果类" name="type"></el-checkbox>
                <el-checkbox label="肉类" name="type"></el-checkbox>
                <el-checkbox label="坚果类" name="type"></el-checkbox>
                <el-checkbox label="饮品类" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="搭配主食" prop="staplefood">
              <el-radio-group v-model="fillForm.staplefood">
                <el-radio label="Yes"></el-radio>
                <el-radio label="No"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="喜爱的食材" prop="desc">
              <el-input type="textarea" v-model="fillForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('fillForm')">立即创建</el-button>
              <el-button @click="resetForm('fillForm')">重置</el-button>
            </el-form-item>
          </el-form>
          <el-form :model="fillForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="总热量" prop="name">
              <el-input v-model="fillForm.calorie"></el-input>
            </el-form-item>
            <el-form-item label="时间" required>
              <el-col :span="11">
                <el-form-item prop="date">
                  <el-date-picker type="date" placeholder="选择日期" v-model="fillForm.date" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="喜爱的类别" prop="type">
              <el-checkbox-group v-model="fillForm.type">
                <el-checkbox label="蔬菜类" name="type"></el-checkbox>
                <el-checkbox label="水果类" name="type"></el-checkbox>
                <el-checkbox label="肉类" name="type"></el-checkbox>
                <el-checkbox label="坚果类" name="type"></el-checkbox>
                <el-checkbox label="饮品类" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="搭配主食" prop="resource">
              <el-radio-group v-model="fillForm.staplefood">
                <el-radio label="Yes"></el-radio>
                <el-radio label="No"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="喜爱的食材" prop="desc">
              <el-input type="textarea" v-model="fillForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('fillForm')">立即创建</el-button>
              <el-button @click="resetForm('fillForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-col>
    <el-col>
      <el-card class="box-card" style="margin-left: 380px;margin-top: 0px;margin-bottom: 20px;height: 500px;width: 500px">
        <div slot="header" class="clearfix">
          <span style="margin-left: 20px">制定菜单表</span>
          <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <div class="text item">
          <el-form :model="fillForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="早餐" prop="name1">

            </el-form-item>
            <el-form-item label="午餐" prop="name2">

            </el-form-item>
            <el-form-item label="晚餐" prop="name3">

            </el-form-item>

          </el-form>
        </div>
      </el-card>
    </el-col>

  </el-container>
</template>

<script>
  export default {
    name: 'make',
    data() {
      return {
        fillForm: {
          calorie: '',
          date: '',
          type: [],
          staplefood: '',
          desc: ''
        },
        rules: {
          calorie: [
            { required: true, message: '请输入卡路里', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择是否搭配主食', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写最喜爱菜哦！', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      GotoUser() {
        this.$router.push({path: '/User'})
      },
      loginout() {
        this.$router.push({path: '/'})
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style lang="less" scoped>
  //下拉菜单
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 10px;
  }
  .el-icon-arrow-down {
    font-size: 10px;
  }
  //主界面
  .main_container {
    height: 100%;
  }
  //头部
  .el-header {
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    text-align: center;
    //line-height: 77px;
    //左边框
    .left_box{
      display: flex;
      align-content: center;

      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: black;
        margin: 5px 5px 10px 25px;
      }
      span{
        margin-left: 10px;
        margin-top: 20px;
      }
    }
    //右边框
    .right_box{
      .el-dropdown>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: black;
        margin: 5px 5px 0px 15px;
      }
    }
  }

  //卡片
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>
