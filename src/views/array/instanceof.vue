<template>
<div>
  <card>
    <codemirror v-model="source" />
  </card>
  <card title="回答内容">
    <codemirror v-model="code" />
  </card>
  <card title="整理复习">
    <div>
      <h3>js数据类型和判断数据类型方法</h3>
      <p>最新的 ECMAScript 标准定义了7种数据类型</p>
      <p class="text-danger">身为前端能不能专业点 🙄️，【●】就用 &lt;li&gt; 嘛，记得把项目中所有地方都改回来</p>
      <ul>
        <li>六种基本数据类型</li>
        <li>对象</li>
      </ul>
    </div>
    <mavon-editor v-model="review" />
  </card>
</div>
</template>

<script>
export default {
  data() {
    return {
      source: '',
      code:
`// !这是代码编辑器，就别用 markdown 语法了

// 用Array.isArray()方法判断
console.log(Array.isArray(array))                  //true

// 用typeof()判断
console.log(typeof array)                          //object 不可行 typeof判断null和复杂数据类型都是obj

// 用Object.prototype.toString.call()判断 代码太长
console.log(Object.prototype.toString.call(array)) //array

// 使用constructor方法
console.log(array.constructor == Array)            //true

// 使用instanceof方法[A是不是B造出来的]
console.log(array instanceof Array)                //true

// 下面整理中写了 instanceof 这里为啥不举例？🙄️`,
     review:
`- js里判断数据类型的方法
    + 最常见的typeof [判断简单数据类型可以，返回一个字符串]
      - 有两种使用方式typeof(表达式)[对表达式做运算]和typeof变量名[对变量做运算]
      - 另外typeof 可以判断function的类型
    + 判断已知对象类型的方法 instanceof
      - instanceof用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
    + Object.prototype.toString.call [通用 但有点长]
    + jquery.type()`
    }
  },
  created(){
    this.getSubject(this)
  },
  methods: {
    save(){
      this.saveSubject(this)
    }
  }
}
</script>