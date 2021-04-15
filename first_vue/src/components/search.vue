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
<!--      侧边栏-->
      <el-aside width="180px">
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
        :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-food"></i>
              <span>肉类</span>
            </template>
            <el-menu-item-group>
              <span slot="title">肉类</span>
              <el-menu-item index="1-1">家禽类</el-menu-item>
              <el-menu-item index="1-2">水产类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-food"></i>
            <span slot="title">蔬菜类</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-food"></i>
            <span slot="title">水果类</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-food"></i>
            <span slot="title">豆制品</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-food"></i>
            <span slot="title">主食类</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-food"></i>
            <span slot="title">坚果类</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-food"></i>
            <span slot="title">其他类</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
<!--      ======正文中心========-->
      <el-main>
      <div>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 3 : 3">
            <el-card :body-style="{ padding: '10px' }" style="margin-top: 10px">
              <div slot="header" class="clearfix">
                <span>食物名称</span>
              </div>
              <div class="avatar_box" >
                <img src="../assets/logo.jpg" style="height: 130px;width: 130px;border-radius: 50%;margin-left: 20px">
              </div>
              <hr>
              <div v-for="o in 2" :key="o" class="text_1">
                {{'食物详情 ' + o }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'search',
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
    height: 100%;
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

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    .text_1{
      font-size: 15px;
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  //卡片
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100px;
    height: 100px;
    display: block;
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
    width: 100px;
    height: 100px;
    .el-card__body{
      width: 100px;
      height: 100px;
    }
  }
</style>
