### 1.0.7-alpha.1
h5中cml.open打开的地址支持weex页面

### 1.0.7
chameleon-bridge: 0.2.2版本升级

### 1.0.6
chameleon-bridge: 0.2.1版本升级

### 1.0.5
修复navigateTo和redirectTo在小程序端中文参数乱码问题
https://github.com/didi/chameleon/issues/387

### 1.0.4
修复了1.0.3版本中中  web端编译报错的问题

### 1.0.3-alpha.2

1、 音频api的使用问题
2、 request的优化
3、 解决http请求formdata加密后会被置空的问题

### 1.0.3-alpha.1

支持 开发者网络请求可以覆盖 Content-Type 的默认值；
### 1.0.0
cml 1.0发布

### 0.5.4
更新chameleon-bridge依赖 支持tt/quickapp

### 0.5.3
缓存systemInfo insdk, 不再每次调用都重新获取

### 0.5.2
优化getRect方法

### 0.5.1
解决 px <==> cpx 方法调用时重复获取屏幕宽度的操作

### 0.5.0
增加audio能力, 兼容了qq依赖编译时报错的问题

### 0.4.8
增加request调用时的兼容处理

### 0.4.7
增加支付宝小程序端request方法对httpRequest的兼容处理

### 0.4.6
修改了request方法在method为'GET', 'PUT', 'DELETE'时, 对data的处理.

### 0.4.5
修复了支付宝小程序getStorage的参数取值问题

### 0.4.4
取消了request请求失败时错误抛出的处理. 使接口返回格式一致

### 0.3.3
修复单测问题,修复动画warning

### 0.3.2
修改weex单位转换逻辑px <=> cpx

### 0.3.1
修复apiPrefix默认值问题

### 0.2.7
locationInfo 更改errno类型使其符合interface的规范

### 0.2.6
navigate方法改为依赖运行时模块

### 0.2.5
request增加credentials参数

### 0.2.0
支持百度和支付宝小程序api调用

### 0.1.1
修复getRect问题
