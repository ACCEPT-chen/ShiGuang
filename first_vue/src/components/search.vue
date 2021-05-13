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
          <el-menu-item index="/search?type=2">
            <i class="el-icon-food"></i>
            <span slot="title">肉、蛋</span>
          </el-menu-item>
          <el-menu-item index="/search?type=3">
            <i class="el-icon-food"></i>
            <span slot="title">奶类</span>
          </el-menu-item>
          <el-menu-item index="/search?type=4">
            <i class="el-icon-food"></i>
            <span slot="title">蔬果</span>
          </el-menu-item>
          <el-menu-item index="/search?type=5">
            <i class="el-icon-food"></i>
            <span slot="title">饮料</span>
          </el-menu-item>
          <el-menu-item index="/search?type=6">
            <i class="el-icon-food"></i>
            <span slot="title">豆制品</span>
          </el-menu-item>
          <el-menu-item index="/search?type=7">
            <i class="el-icon-food"></i>
            <span slot="title">油脂类</span>
          </el-menu-item>
          <el-menu-item index="/search?type=8">
            <i class="el-icon-food"></i>
            <span slot="title">调味品</span>
          </el-menu-item>
          <el-menu-item index="/search?type=9">
            <i class="el-icon-food"></i>
            <span slot="title">零食点心</span>
          </el-menu-item>
          <el-menu-item index="/search?type=10">
            <i class="el-icon-food"></i>
            <span slot="title">菜肴</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
<!--      ======正文中心========-->
      <el-main>
        <template>
<!--          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>-->
          <el-input v-model="input" placeholder="请输入内容" @keydown.native="InputFind($event)"></el-input>
        </template>
      <div>
        <el-row>
<!--          <el-col :span="8" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 3 : 3">-->
          <el-col :span="8" v-for="(item, index) in list" :key="item.id" :offset="index > 0 ? 3 : 3">
            <el-card :body-style="{ padding: '10px' }" style="margin-top: 10px">
              <div slot="header" class="clearfix">
                <span>{{item.foodname}}</span>
              </div>
              <div class="avatar_box" >
                <img src="../assets/logo.jpg" @click="getFood" style="height: 130px;width: 130px;border-radius: 50%;margin-left: 20px">
              </div>
              <hr>
<!--              <div v-for="o in 2" :key="o" class="text_1">-->
<!--&lt;!&ndash;                {{'食物详情 ' + o }}&ndash;&gt;-->
<!--                    热量 {{o.fk}}-->
<!--                    适宜 {{o.ap}}-->
<!--              </div>-->
                热量 {{item.foodcalorie}}
              <br>
                碳水化合物 {{item.carbohydrate}}
              <br>
                蛋白质 {{item.protein}}
              <br>
                脂肪 {{item.fat}}
              <br>
                纤维素 {{item.fibrin}}
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
    name: 'search',
    data() {
      return {
        isCollapsed: false,
        foodid: 2,
        size: 10,
        currentPage: 1,
        total: 0,
        type: 0,
        list: [],
        options: [],
        value: [],
        list1: [], // 搜索框
        loading: false,
        states: ['Alabama', 'Alaska', 'Arizona',
          'Arkansas', 'California', 'Colorado',
          'Connecticut', 'Delaware', 'Florida',
          'Georgia', 'Hawaii', 'Idaho', 'Illinois'
          ],
        restaurants: [],
        state: '',
        timeout: null,
        input: ''
      }
    },
    mounted() {
      this.restaurants = this.loadAll()
    },
    activated() {
      console.log('钩子函数')
      // this.goSearch()
      this.getInfo()
    },
    methods: {
      GotoUser() {
        this.$router.push({path: '/User'})
      },
      loginout() {
        this.$router.push({path: '/'})
      },
      getFood() {
        this.$axios({
          methods: 'get',
          url: '/api/getfood/',
          params: {
            foodid: this.foodid
          }
        })
          .then(res => {
            //
            // console.log('this . data ', this.data)
            this.foodname = res.data.data.fn
            this.fk = res.data.data.fk
            this.ap = res.data.data.ap
          })
          .catch(err => {
            // 执行失败
            this.$message('登录失败，请检查后端接口', err)
          })
        // this.$router.push('/main')
      },
      goSearch() {
        this.$axios({
          methods: 'get',
          url: '/api/searchByPage/',
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
          url: '/api/findByInput/',
          params: {
            foodname: this.input,
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
      // 查询信息
      async getInfo() {
        this.type = this.$route.query.type
        if (this.type !== 0 && this.input === '') {
          this.goSearch()
        } else { this.goFind() }
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options = this.list1.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.options = []
        }
      },
      loadAll() {
        return [
          { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
          { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
          { 'value': '新旺角茶餐厅', 'address': '"上海市普陀区真北路988号创邑金沙谷6号楼113' },
          { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
          { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
          { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' }
        ]
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
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
