let data = reacitve({
  count: 0
});
document.getElementById("add").addEventListener("click", function () {
  data.count++;
});
let str;
watch(() => {
  str = `点击了 ${data.count} 次`;
  document.getElementById("app").innerText = str;
});
