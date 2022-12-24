<template>
  <div >
    <!--v-model不太允许绑定props,但是element的组件dialog是靠v-model实现打开关闭的-->
    <!--那么我们用到了$attrs-->
    <!--通过自定义组件V-model依照单向数据流方式，利用$emits修改父组件的isSHOW    -->
    <el-dialog
        width="30%"
        title="登录"
        v-model="isShow"
        :lock-scroll="false">
      <el-form
          label-position="right"
          label-width="150px"
          v-model="formData"
          style="max-width: 80%;"
      >

        <el-form-item label="用户名:">
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item v-if="isCode" label="验证码:">
          <el-input :style="{width:'70%'}" v-model="formData.code" /><el-input id="code" v-model="formData.code" />
        </el-form-item>


        <el-form-item>
          <el-space wrap size="large">
            <el-button type="primary" @click="submit(formData)">提交</el-button
            >
            <router-link to="/RegisterView"><el-button @click="isShow = false">注册</el-button></router-link>

<!--            <router-link to="/forgetPwd" @click="isShow = false">忘记密码？</router-link>-->
          </el-space>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {

  name: "LoginView",
  components:{

  },
  props: {
    modelValue:Boolean
  },
  emits:['update:modelValue'],
  data(){
    return{
      formData:{username:'',password:'',code:''},
      isCode:true,
      color:"red"
    }
  },
  computed:{
    isShow:{
      set(value){
        this.$emit('update:modelValue',value)
      },
      get(){
        return this.modelValue
      }
    }
  },

  methods:{
    submit:function (value){
      this.isShow = false
      console.log(value)
    },

  }
}
</script>

<style scoped>
#code{
  width: 26%;
  height: 80%;
  border: 0;
  color: #fff;
  background-color: #000;

}
</style>