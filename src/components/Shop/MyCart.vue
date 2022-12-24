<template>
  <div class="MyCart">
   <div class="cart-head">
     <div  style="flex: 1">
       <el-checkbox v-model="checkAll"
                    :indeterminate="isIndeterminate"
                    @change="CheckAllChange">全选</el-checkbox>
     </div>
     <div style="flex: 3">
     <span>商品</span>
     </div>
     <div style="flex: 1.5">
     <span>备注</span>
     </div>
     <div style="flex: 1.5">
     <span>单价</span>
     </div>
     <div style="flex: 1">
     <span>数量</span>
     </div>
     <div style="flex: 1">
     <span>小计</span>
     </div>
     <div style="flex: 2">
     <span>操作</span>
     </div>
   </div>
    <el-divider />
   <div class="cart-body" v-for="(product,index) of cars" :key="product.id">
     <div class="cart-store"
          >
<!--         <el-checkbox-group-->
<!--             v-model="checked"-->
<!--             @change="CheckedCarsChange($event)">-->
<!--           <el-checkbox :label="product.store"></el-checkbox>-->
<!--        </el-checkbox-group>-->
     </div>
     <div class="cart-product">
       <div class="product-header">
         <div style="flex: 3;"><slot name="product-header-left"></slot></div>
         <div style="flex: 4"><slot name="product-header-center"></slot></div>
         <div style="flex: 3;"><slot name="product-header-right"></slot></div>
       </div>
       <div class="product-body">

         <div style="flex: 1;overflow: hidden;text-align:left;padding-left: 25px">
           <el-checkbox-group
               v-model="checked"
               @change="CheckedCarsChange">
               <el-checkbox :label="product">勾选</el-checkbox>
           </el-checkbox-group>
         </div>

         <div class="product-main">
           <div style="flex: 1;padding: 30px 0">
             <el-image
                 style="width: 100px; height: 100px;"
                 src="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
                 fit="cover" />
           </div>

           <div style="flex: 2;padding: 30px 10px;overflow: hidden;">{{ product.info }}</div>
           <div style="flex: 2">{{ product.remarks }}</div>
           <div style="flex: 1">{{ product.price }}</div>
           <div style="flex: 1">
             <el-input-number size="small" v-model="product.count" :min="1" />
           </div>
           <div style="flex: 1">{{ product.price*product.count}}</div>
           <div style="flex: 2">
             <el-button type="danger" @click="deleteRow(index)">删除</el-button>
           </div>
         </div>
       </div>



     </div>
   </div>
   <div class="cart-foot"></div>
  </div>
</template>

<script setup>

import {onBeforeMount, reactive, ref, watch} from "vue";
import axios from "axios";


const checkAll = ref(false);
const isIndeterminate = ref(false);
const checked = ref([])
const CheckAllChange = () => {
  isIndeterminate.value = false
  if (checkAll.value){
    checked.value = cars.value
  }else {
    checked.value = []
  }
}
const CheckedCarsChange = () => {
  if (checked.value.length && checked.value.length < cars.value.length) {
    isIndeterminate.value = true
    checkAll.value = false
  } else if (checked.value.length && checked.value.length === cars.value.length) {
    isIndeterminate.value = false
    checkAll.value = true
  } else{
    isIndeterminate.value = false
    checkAll.value = false
  }
}

const deleteRow = (index) =>  {
  cars.value.splice(index,1)
}
const cars = ref([])

  axios({
    // `url` 是用于请求的服务器 URL
    url: 'http://localhost/index.php',
    // `method` 是创建请求时使用的方法
    method: 'post', // 默认值
    //get发送的数据
    params: {
      id:1
    },
    // `data` 是作为请求体被发送的数据
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    data: {sql:"SELECT * FROM cart LIMIT 0,5"}
  }).then((r) => {
    for (let product of r.data){
      product['count'] = Number(product['count'])
      cars.value.push(product)}})
      .catch((r) => console.log(r))


/*export default {
  name: "MyCart",
  data(){
    return{
      oldValue:null,
      checkAll:false,
      isIndeterminate:false,
      checked:[],
      cars:[
        {id:"1",name:" 前置过滤器",info:"【新品销售No.1】美的前置过滤器反冲洗前置净水器全屋净水器家用过滤器前置升级6000L/时大通量 40μm双滤网 终身免换滤芯 净水器",store:"美的净饮水旗舰店",price:1800,count:1},
        {id:"6",name:" 前置过滤器升级版",info:"【新品销售No.2】美的前置过滤器反冲洗前置净水器全屋净水器家用过滤器前置升级6000L/时大通量 40μm双滤网 终身免换滤芯 净水器",store:"美的净饮水旗舰店",price:2000,count:1},
        {id:"2",name:"家用净水器",info:"海尔前置过滤器全屋6T家用净水器HP05升级迭代款40微米双网反冲洗大通量管道过滤器 全屋净水 不换芯",store:"海尔净饮水旗舰店",price:500,count:1},
        {id:"3",name:"三只松鼠零食",info:"三只松鼠零食大轰趴 送女友礼物休闲零食大礼包礼盒含肉干肉脯20袋/1898g",store:"三只松鼠旗舰店",price:190,count:1},
        {id:"4",name:"小白鞋",info:" 鞋子男ins潮流低帮韩版青少年运动鞋2022流苏小白鞋港风百搭拼接休闲板鞋NSJ55 白蓝 39",store:"楠笙记潮流店",price:100,count:1},
        {id:"5",name:"羊羔毛绒外套",info:"闪沃秋冬季新款保暖棉衣男女炸街潮牌扎染宽松情侣装羊羔毛绒外套厚款棉服 灰色 加绒 M 90-120斤",store:"闪沃品牌店",price:180,count:1},
      ],
    }
  },
  props:['products'],
  methods:{
    deleteRow(index){
      this.cars.splice(index,1)
    },
    shopping(){
      this.cars=false
      this.success = true
    },
    getTotal(){
      return this.Total
    },
    CheckAllChange(value){
      this.isIndeterminate = false
      if (this.checkAll){
        this.checked = this.cars
      }else {
        this.checked = []
      }
    },
    CheckedCarsChange(){
      if (this.checked.length && this.checked.length<this.cars.length){
        this.isIndeterminate = true
        this.checkAll = false
      }else if(this.checked.length && this.checked.length === this.cars.length){
        this.isIndeterminate = false
        this.checkAll = true
      }else {
        this.isIndeterminate = false
        this.checkAll = false
      }

    }
  },
  computed:{
    Total:{
      get(value){
        let text = "合计",id = "--",name="--",price = 0,SN="--",count=0
        for (let product of value.cars){
          count += product.count
          price += product.price * product.count
        }
        return [text,id,name,price,SN,count]
      }
    }

  },
  watch:{
    products: {
      handler(newValue, oldValue) {
        for (let product of newValue){
          let isPush = true
          for (let goods of this.cars){
            if (product.id === goods.id){
              goods.count += product.count
              isPush = false
            }
         }
        if (isPush){
          product = JSON.parse(JSON.stringify(product))
          this.cars.unshift(product)
         }
        }
      },
      deep: true
    }
  },




}*/
</script>

<style scoped>
.MyCart{
  width: 60%;
  margin: 0 auto;
  font-size: 12px;
}
.cart-head{
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  background-color: bisque;
}
.cart-body{
  margin-top: 20px;

}
.cart-body .cart-store{
  text-align: left;
  width: 100%;
}

.cart-body .cart-product{
  border: 1px solid #eee;
  border-top: 5px solid #DDDDDD;
  margin-top: 2px;
  height: 200px;
  background-color: #ffffff;

}
.cart-body .cart-product .product-header{
  width: 100%;
  height: 30px;
  overflow: hidden;
  text-align: left;
  display: flex;
}
.cart-body .cart-product .product-body{
  width: 100%;
  display: flex;
}
.product-main{
  flex: 19;
  border-top: 1px solid #eeeeee;
  display: flex;
  height: 168px;
}
.product-main div{
  margin-right: 1px;
}

.product-main div:nth-child(n+3){
  line-height: 168px;
}


</style>