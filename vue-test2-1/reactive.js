// 在响应式课程中我们学习了 ref 函数， 
// ref函数是将一个基本类型的值通过包装并返回可监控get、set操作的对象的函数。
// 现在请你参考ref函数 和 在JS课程中学习过的深拷贝完成 reactive 函数， 
// 使得以下操作成立(即页面上有一个按钮add，每当按钮被点击后，页面上响应式地输出‘点击了x次的文案’)：
// html:
// <!DOCTYPE html>
// <html lang="cn">
//   <body>
//     <button id="add">add</button>
//     <div id="app"></div>
//   </body>
// </html>
// js:
// let data = reacitve({
//   count: 0
// });
// document.getElementById("add").addEventListener("click", function() {
//   data.count++;
// });
// let str;
// watch(() => {
//   str = `点击了 ${data.count} 次`;
//   document.getElementById("app").innerText = str;
// });
