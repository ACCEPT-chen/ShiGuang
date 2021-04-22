<template>
  <el-container class="main_container">
    <el-header style="height: 60.5px;">
      <div class="left_box">
        <img src="../assets/logo.jpg">
        <span>食 光</span>
      </div>
      <div class="right_box">
        <el-menu
          :default-active="this.$route.path"
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
              <el-dropdown-item icon="el-icon-house" @click.native="GotoUser()">个人页面</el-dropdown-item>
              <el-dropdown-item icon="el-icon-edit" @click.native="loginout()">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
      </div>

    </el-header>
    <el-container>
      <!--  ============== 侧边栏-->
      <el-aside width="180px">
        <div class="avatar_box">
          <img src="../assets/logo.jpg">
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse=this.isCollapsed
          :collapse-transition="false"
          :unique-opened="true"
        router="true">
          <el-menu-item index="/user">
            <i class="el-icon-food"></i>
            <span slot="title">个人菜单</span>
          </el-menu-item>
          <el-menu-item index="/add">
            <i class="el-icon-food"></i>
            <span slot="title">添加记录</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
<!--    ===========中间记录===============-->
      <el-main>
        <h3>每日记录：</h3>
        <el-collapse v-for="o in 6" :key="o" v-model="activeNames" @change="handleChange" style="width: 800px;margin-left: 100px">
          <el-collapse-item title="--2021年1月20日" name="1">
            <div style="margin-left: 20px">早餐：{{text1}}</div>
            <div style="margin-left: 20px">午餐：{{text2}}</div>
            <div style="margin-left: 20px">晚餐：{{text3}}</div>
            <div style="margin-left: 20px">运动：{{text4}}</div>
          </el-collapse-item>
        </el-collapse>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        isCollapsed: false
      }
    },
    methods: {
      GotoUser() {
        this.$router.push({path: '/User'})
      },
      loginout() {
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style lang="less" scoped>
  //下拉菜单
  .el-dropdown {
    vertical-align : top;
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
      .el-menu{
        border-right: none;
        border-bottom: none;
      }
    }
    //右边框
    .right_box{
      .el-dropdown>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: black;
        margin: 0px 5px 0px 15px;
      }
    }
  }
  //侧边栏
  .el-aside {
    background-color: #545c64;
    .el-menu{
      border-right: none;
    }
    .toggle_box{
      background-color: black;
      font-size: 15px;
      font-weight: bold;
      line-weight: 24px;
      color: #FFFF;
      letter-spacing: 0.2em;
      text-align: center;
      cursor: pointer;
    }

  }
//主题记录部分
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    h3{
      align: center;
      margin-left: 110px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
   //头像
  .avatar_box{
    width: 100px;
    height: 100px;
    boder: 1px solid #EEEEEE;
    border-radius: 50%;
    padding: 10px;
    margin-top: 10px;
    margin-left: 10px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    background-color: #FFFFFF;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #EEEEEE;
    }
  }
  //时间列表
  activeNames{
    div{
      margin-left: 20px;
      text-align: center;
    }
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
