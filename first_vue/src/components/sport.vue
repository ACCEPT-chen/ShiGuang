<template>
  <el-container class="main_container">
    <el-header style="height: 60.5px;">
      <div class="left_box">
        <img src="../assets/logo.jpg">
        <span>食 光</span>
      </div>
      <div class="right_box">
        <el-menu
          :default-active="$route.path"
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
            <el-menu-item index="/search?type=1">主食</el-menu-item>
            <el-menu-item index="/search?type=2">肉、蛋类</el-menu-item>
            <el-menu-item index="/search?type=3">奶类</el-menu-item>
            <el-menu-item index="/search?type=4">蔬果</el-menu-item>
            <el-menu-item index="/search?type=5">饮料</el-menu-item>
            <el-menu-item index="/search?type=6">豆制品</el-menu-item>
            <el-menu-item index="/search?type=7">油脂类</el-menu-item>
            <el-menu-item index="/search?type=8">调味品</el-menu-item>
            <el-menu-item index="/search?type=9">零食点心</el-menu-item>
            <el-menu-item index="/search?type=10">菜肴</el-menu-item>
          </el-submenu>
          <el-submenu index="/sport">
            <template slot="title" >运动</template>
            <el-menu-item index="/sport?type=1">走路</el-menu-item>
            <el-menu-item index="/sport?type=2">跑步</el-menu-item>
            <el-menu-item index="/sport?type=3">体操舞蹈</el-menu-item>
            <el-menu-item index="/sport?type=4">瑜伽</el-menu-item>
            <el-menu-item index="/sport?type=5">自行车</el-menu-item>
            <el-menu-item index="/sport?type=6">球类</el-menu-item>
            <el-menu-item index="/sport?type=7">日常</el-menu-item>
            <el-menu-item index="/sport?type=8">其他</el-menu-item>
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
          :default-active="$route.path"
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
          <el-menu-item index="/search?type=1">
            <i class="el-icon-food"></i>
            <span slot="title">主食</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=1">
            <i class="el-icon-bicycle"></i>
            <span slot="title">走路</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=2">
            <i class="el-icon-bicycle"></i>
            <span slot="title">跑步</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=3">
            <i class="el-icon-bicycle"></i>
            <span slot="title">体操舞蹈</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=4">
            <i class="el-icon-bicycle"></i>
            <span slot="title">瑜伽</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=5">
            <i class="el-icon-bicycle"></i>
            <span slot="title">自行车</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=6">
            <i class="el-icon-bicycle"></i>
            <span slot="title">球类</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=7">
            <i class="el-icon-bicycle"></i>
            <span slot="title">日常</span>
          </el-menu-item>
          <el-menu-item index="/sport?type=8">
            <i class="el-icon-bicycle"></i>
            <span slot="title">其他</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--      ======正文中心========-->
      <el-main>
        <template>
          <el-input v-model="input" placeholder="请输入内容" @keydown.native="InputFind($event)"></el-input>
        </template>
        <div>
          <el-row>
            <el-col :span="8" v-for="(item, index) in list" :key="item.id" :offset="index > 0 ? 3 : 3">
              <el-card :body-style="{ padding: '10px' }" style="margin-top: 10px">
                <div slot="header" class="clearfix">
                  <span>{{item.sportname}}</span>
                </div>
                <div class="avatar_box" >
                  <img src="../assets/logo.jpg"  style="height: 130px;width: 130px;border-radius: 50%;margin-left: 20px">
                </div>
                <hr>
                消耗热量 {{item.sportcalorie}}
              </el-card>
            </el-col>
          </el-row>
        </div>
        <el-pagination
          background
          :page-size="size"
          :page-sizes = "[10, 50, 100]"
          layout="prev, pager, next, sizes"
          :total="total"
          @current-change ="currentChangeHandle"
          @size-change ="sizeChangeHandle"
          style="margin-top: 25px">
        </el-pagination>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'sport',
    data() {
      return {
        isCollapsed: false,
        type: 0,
        input: '',
        size: 10,
        currentPage: 1,
        total: 0,
        list: []
      }
    },
    activated() {
      console.log('钩子函数')
      this.getInfo()
    },
    methods: {
      GotoUser() {
        this.$router.push({path: '/User'})
      },
      loginout() {
        this.$router.push({path: '/'})
      },
      // 查询信息
      async getInfo() {
        console.log('this.$route.query.type', this.$route.query.type)
        this.type = this.$route.query.type
        if (this.type !== 0 && this.input === '') {
          console.log('执行gosearch')
          this.goSearch()
        } else { this.goFind() }
      },
      goSearch() {
        this.$axios({
          methods: 'get',
          url: '/api/sportByPage/',
          params: {
            type: this.type,
            pageSize: this.size,
            pageIndex: this.currentPage
          }
        })
          .then(res => {
            console.log('检查所传参数', this.type)
            console.log(res.data.data)
            console.log('返回数据')
            this.list = res.data.data
            this.total = res.data.total
          })
          .catch(err => {
            // 执行失败
            this.$message('搜索失败，请检查后端接口', err)
          })
      },
      InputFind(e) {
        var keyCode = e.keyCode || e.which || e.charCode
        if (keyCode === 13) {
          // 按下回车键执行内容
          console.log('查找')
          this.goFind()
        }
      },
      goFind() {
        this.$axios({
          methods: 'get',
          url: '/api/findSportByInput/',
          params: {
            sportname: this.input,
            pageSize: this.size,
            pageIndex: this.currentPage
          }
        })
          .then(res => {
            console.log(res.data.data)
            console.log('返回数据')
            this.list = res.data.data
            this.total = res.data.total
          })
          .catch(err => {
            // 执行失败
            this.$message('搜索失败，请检查后端接口', err)
          })
      },
      // 每页显示的条数改变
      sizeChangeHandle(val) {
        this.size = val
        // 改变每页显示的条数
        this.currentPage = 1
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.getInfo()
        // 点击每页显示的条数时，显示第一页
        console.log(`每页 ${val} 条`)
      },
      // current-change用于监听页数改变，而内容也发生改变
      currentChangeHandle(val) {
        this.currentPage = val
        this.getInfo()
        console.log(`当前页: ${val}`)
      },
      handleSelect(item) {
        console.log(item)
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
