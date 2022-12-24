<template>
  <div class="navbar">
<!--    <div v-for="(item,index) of productsClassify"-->
<!--         class="navbar_item"-->
<!--         :class="{Active:CurrentIndex === index}"-->
<!--         :key="item"-->
<!--         @click="CurrentIndex=index">-->
<!--      <span>{{ item }}</span>-->
<!--    </div>-->



  </div>
  <hr>
    <div v-for="(item,index) of product_data" :key="item.id"
         @mousemove="CurrentIndex = index"
         class="product_show" :class="{Active:CurrentIndex === index}" >
      <p>商品名：{{ item.name }}</p>
      <p>商品信息：{{ item.info }}</p>
      <p>商品信息：{{ item.store }}</p>
      <p>商店价格：{{ item.price }}</p>
      <p>商店库存：{{ item.count }}</p>
      <div style="position: absolute;bottom: 5px;left: 25%">
      <button>直接购买</button><button @click="addCart(item)">加入购物车</button>
      </div>
    </div>


</template>

<script setup>

import {ref} from "vue";

const CurrentIndex = ref(0)
const productsClassify = ref(['衣服','裤子','鞋子','书籍'])
const product_data = ref([

   ])


//获取数据库商品信息
import axios from "axios";
axios({
  // `url` 是用于请求的服务器 URL
  url: 'http://localhost/index.php',
  // `method` 是创建请求时使用的方法
  method: 'post', // 默认值
  params: {
  },
  // `data` 是作为请求体被发送的数据
  // 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: FormData, File, Blob
  // - Node 专属: Stream, Buffer
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  data: {sql:"SELECT * FROM product LIMIT 0,30"}

})
    .then((r) => {
  for (let product of r.data){
    product_data.value.push(product)}})
    .catch((r) => console.log(r))




// 发送加入购物车事件
// const emit = defineEmits(['addCart'])
// const addCart = (product)=> {emit('addCart',product)}


//发送加入购物车
const addCart = (item) => {
  axios({
    // `url` 是用于请求的服务器 URL
    url: 'http://localhost/insertCart.php',
    // `method` 是创建请求时使用的方法
    method: 'post', // 默认值
    params: {
    },
    // `data` 是作为请求体被发送的数据
    // 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
    // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属: FormData, File, Blob
    // - Node 专属: Stream, Buffer
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    data: {sql:"INSERT INTO cart(id,name,info,store,price,count) VALUES("+item.id+",'"+item.name+"','"+item.info+"','"+item.store+"','"+item.price+"','"+item.count+"')"}

  }).then((r)=> console.log(r)).catch((r)=> console.log(r))
}
</script>

<style scoped>
.navbar{
  display: flex;
}
.product_show{
  text-align: center;
  width: 300px;
  height: 300px;
  border: 1px solid #008800;
  float: left;
  margin: 10px 7.5px;
  position: relative;
}
.navbar_item{
  flex: 1;
  font-size: 24px;
  padding: 50px;
}

.Active{
  color: red;
  border: 1px solid red;
}
</style>