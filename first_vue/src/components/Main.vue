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
        <el-menu-item index="make">制作菜单</el-menu-item>
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
     <!--活动框-->
        <div class="block">
          <el-carousel height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>

    <div style="background-color: white">
    <!--    卡片显示-->
    <el-row>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '12px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'Main',
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

  //走马灯
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

   //卡片显示
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
    width: 400px;
   // display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
