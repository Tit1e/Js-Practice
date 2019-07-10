## **说明**
### **接口地址**
本项目中所有接口的地址前缀都为 `http://129.204.79.16:3000`
### **请求说明**
* 项目中的请求可直接使用 `this.$axios.post` 或 `this.$axios.get` 进行请求，用法同传统的 `axios`。
* 带 `*` 的参数为必传项
### **返回数据说明**
接口返回的数据共有三个字段，分别为 `code`，`data`，`msg`
| code 值 | 说明 |
| ------ | ------ |
| 200 | 请求成功 |
| 0 | sql 执行出错 |
| -1 | 参数验证失败 |
### **分页说明**
项目中的获取列表的接口中，分页相关参数都统一为下表参数
  | 参数名 | 参数说明 |
  | ------ | ------|
  | page | 页码，默认 1 |
  | page_size | 每页条数，默认 10 |

返回示例：
``` js
{
  code: 200,
  data: {
    list: [],
    total: 0
  },
  msg: '获取成功'
}
```
## **接口列表**
### **全局公共接口**
#### **获取广告类别**
* url：/api/common/ad_class
* type: get
* 请求参数：无
* 成功返回示例
  ```js
  {
    code: 200,
    data: [],
    msg: '获取成功'
  }
  ```
#### **获取商业类别**
* url：/api/common/bessniss_class
* type: get
* 请求参数：无
* 成功返回示例
  ```js
  {
    code: 200,
    data: [],
    msg: '获取成功'
  }
  ```
#### **获取违法类别**
* url：/api/common/illegal_type
* type: get
* 请求参数：无
* 成功返回示例
  ```js
  {
    code: 200,
    data: [],
    msg: '获取成功'
  }
  ```
#### **获取违法表现及违法表现代码**
* url：/api/common/illegal_expression
* type: get
* 请求参数：无
* 成功返回示例
  ```js
  {
    code: 200,
    data: [],
    msg: '获取成功'
  }
  ```
#### **获取全国行政区划**
* url：/api/common/region
* type: get
* 请求参数：无
* 成功返回示例
  ```js
  {
    code: 200,
    data: [],
    msg: '获取成功'
  }
  ```
### **人员管理**
#### **获取人员列表**
* url：/api/user/query
* type: post
* 请求参数
  | 参数名 | 参数说明 |
  | ------ | ------ |
  | admin* | 是否为管理员：-1全部，0否，1是 |
  | name | 用户名称，用于模糊查询 |
  | create_time | 用户创建时间 |
  | page | 页码 |
  | page_size | 每页条数 |
* 成功返回示例
  ```js
  {
    code: 200,
    data: {
      list: [
        {
          "id": 10, // 用户 id
          "name": "a", // 用户名
          "admin": 0, // 是否为管理员：0否，1是
          "status": 1, //用户是否有效：0无效或删除，1有效
          "create_time": 12312321 // 用户创建时间
        }
      ],
      total: 1
    },
    msg: '获取成功'
  }
  ```
#### **添加人员**
* url：/api/user/add
* type: post
* 请求参数
  | 参数名 | 参数说明|
  | ------ | ------|
  | name * | 用户名 |
  | password * | 密码 |
  | checkPassword * | 验证密码 |
  | admin * | 是否为管理员：0否，1是 |
* 成功返回示例
  ```js
  {
    code: 200,
    data: {},
    msg: '添加成功'
  }
  ```
#### **删除人员**
* url：/api/user/delete
* type: get
* 请求参数
  | 参数名 | 参数说明|
  | ------ | ------|
  | id * | 用户唯一 id |
* 成功返回示例
  ```js
  {
    code: 200,
    data: {},
    msg: '删除成功'
  }
  ```
#### **编辑人员**
* url：/api/user/update
* type: post
* 请求参数
  | 参数名 | 参数说明|
  | ------ | ------|
  | id * | 用户唯一 id |
  | name * | 用户名 |
  | admin * | 是否为管理员：0否，1是 |
  | password | 用户密码 |
  | checkPassword | 用户密码 |
* 成功返回示例
  ```js
  {
    code: 200,
    data: {},
    msg: '修改成功'
  }
  ```