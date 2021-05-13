<template>
    <div  class="loginContainer">
      <div class="avatar_box">
        <img src="../assets/logo.jpg">
      </div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
       <h4 align="center" style="margin-top: 10px;margin-left: 30px">用户登录</h4>
    <el-form-item label="用户名" prop="username" >
      <el-input type="text" v-model.trim="loginForm.username"  prefix-icon="el-icon-user-solid"></el-input>
    </el-form-item>
    <el-form-item label="密 码" prop="password">
      <el-input type="password" v-model.trim="loginForm.password"  prefix-icon="el-icon-lock"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      <el-button @click="resetForm('loginForm')">注册</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      var checkname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
        callback()
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'))
        }
        callback()
        }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
         username: [
            { validator: checkname, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
           // this.$message('登录成功！')
            this.$axios({
              methods: 'get',
              url: '/api/login/',
              params: {
                username: this.loginForm.username,
                password: this.loginForm.password
              }
            })
              .then(res => {
                // 执行成功
                // console.log(res.data.result)
                console.log('loginform:', this.loginForm.username)
                localStorage.setItem('username', this.loginForm.username)
                if (res.data === 1) {
                  this.$router.push('/main')
                } else {
                  this.$message('查无此人,请重新输入')
                }
              })
              .catch(err => {
                // 执行失败
                this.$message('登录失败，请检查后端接口', err)
              })
            // this.$router.push('/main')
          } else {
            console.log('error submit!!')
            this.$message('登录失败！')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      change(e) {
        this.$forceUpdate()
      },
        GotoUser() {
          this.$router.push({path: '/User'})
        },
        loginout() {
          this.$router.push({path: '/'})
        }
    }
  }
</script>

<style lang="less">
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 15px 75px 15px 35px;
    background: white;
    border: 1px solid #667693;
    box-shadow:  0 0 25px #55667d;
  }
  //头像
  .avatar_box{
    width: 100px;
    height: 100px;
    boder: 1px solid #EEEEEE;
    border-radius: 50%;
    padding: 10px;
    margin-top: -70px;
    margin-left: 130px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    background-color: #FFFFFF;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #EEEEEE;
    }
  }
  .background{
    background-image: url("../assets/bg1.jpg");
    background-size: 150px 200px;
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
