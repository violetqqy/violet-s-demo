let active;
let watch = (callback) => {
  active = callback;
  active();
  active = null;
};

class Dep {
  constructor() {
    this.deps = new Set();
  }
  depend() {
    if (active) {
      this.deps.add(active);
    }
  }
  notify() {
    this.deps.forEach(dep => dep());
  }
}

let reactive = (target) => {
  let data = target;
  Object.keys(data).forEach(key => {
    let internalValue = data[key];
    let dep = new Dep();
    Object.defineProperty(data, key, {
      get() {
        // console.log(`Getting ${key}: ${internalValue}`);
        dep.depend();
        return internalValue;
      },
      set(newValue) {
        // console.log(`Setting ${key}: ${newValue}`);
        internalValue = newValue;
        dep.notify();
      }
    })
  })
  return data;
}

let data = reactive({
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
