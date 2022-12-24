<template>


    <div id="app" class="common-layout">
      <el-container>
        <el-header id="header">
            <el-menu
                mode="horizontal"
                @select="CurrentSelectIndex"
                id="navbar"
                router
            >
                <img alt="VU logo" src="./assets/logo.png">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/MovieView">影视</el-menu-item>
                <el-menu-item index="/MusicView">音乐</el-menu-item>
                <el-menu-item index="/GameView">游戏</el-menu-item>
                <el-menu-item index="/LiveView">直播</el-menu-item>
                <el-menu-item index="/ShopView">购物</el-menu-item>
                <el-menu-item index="/ProduceView">设计</el-menu-item>
                <el-menu-item index="/ScienceView">学术</el-menu-item>



                <el-menu-item index="/MessageView">消息<el-badge v-show="MessageCounter" :value="MessageCounter" class="item" type="primary"></el-badge></el-menu-item>
                <el-menu-item index="/WorkView">创作工坊</el-menu-item>
                <el-menu-item index="/MyView">个人中心</el-menu-item>
                <el-menu-item @click="openDialog(true)">登录/注册</el-menu-item>
                <Login v-model="isShow"></Login>
                <el-menu-item index="/头像"><el-avatar :style="{backgroundImage:'url('+require('./assets/avatar.png')+')',backgroundSize:40+'px'}"></el-avatar></el-menu-item>

            </el-menu>

        </el-header>


        <el-main id="main">
         <!-- vue3不能使用这种方式
          <keep-alive>
              <RouterView/>
          </keep-alive>
          -->

<!--    v-slot也可以传值  ，怎么传？    -->
<!--    hi组件中在插槽slot的属性上定义绑定自定义属性之后 -->
<!--    就可以在父组件中通过slot="slotProps访问"   -->
<!--        <hi v-slot="slotProps">-->
<!--          <button @click="test(slotProps)"></button>-->
<!--        </hi>-->




          <router-view v-slot="{Component}">

              <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"/>

            <keep-alive>
              <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"/>
            </keep-alive>

          </router-view>

        </el-main>

        <el-footer id="footer">
          Power By Yi
        </el-footer>
      </el-container>
    </div>





</template>

<script setup>
import Login from "@/components/Login";
import {ref} from "vue";

// 当前索引
const CurrentIndex = ref("/")
const CurrentSelectIndex = (key) => CurrentIndex.value = key

// 消息计数器
const MessageCounter = ref(1)

// 打开登陆界面
const isShow = ref(false)
const openDialog = (value) => isShow.value = value

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.common-layout{
  position: relative;
}
#header {
  padding: 0 15%;
  border-bottom: 1px solid #eeeeee;
}
#navbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#navbar>:nth-child(n+10){
  float: right;
}

#main{
  width: 100%;
  padding: 0;
  overflow: hidden;
  min-height:calc(100vh + 300px);
}


#footer{
  background-color: #111111;
  height: 300px;
  width: 100%;
  padding: 0;
  color: #eeeeee;
}

.item {
  bottom: 10px;
  right: 1px;
}


.login-enter-from,
.login-leave-to{
  opacity: 0;
}

.login-enter-to,
.login-leave-from{
  opacity: 1;
}

.login-enter-active,
.login-leave-active{
  transition: all 2s;
}
</style>
