// 题目：请根据以下代码，用promise实现顺序加载图片，如果有图片加载失败，在图片位置显示加载失败的提示。

(function () {
  // 获取图片 Dom 列表
  // const imageDomList = [].slice.call(document.getElementById('pics').children)
  const imageDomList = [...document.getElementById('pics').children]
  // console.log(imageDomList)

  // 加载单张图片
  function loadASingleImage(imageDom) {
    // console.log(imageDom)
    return new Promise((resolve, reject) => {
      // 设置延时以便观察顺序加载图片的效果
      setTimeout(() => {
        // 加载图片，替换 src 属性的值为 data-src 的属性值
        const imgUrl = imageDom.getAttribute('data-src')
        imageDom.setAttribute('src', imgUrl)

        // 图片加载成功，返回 resolve
        imageDom.onload = function () {
          resolve()
        }

        // 图片加载失败，设置图片 class 属性为 error （::after样式展示失败提示），并返回 reject
        imageDom.onerror = function () {
          imageDom.setAttribute('class', 'error')
          imageDom.setAttribute('alt', '啊哦~图片加载失败了！')
          reject('图片加载失败')
        }
      }, 1000)
    })
  }

  // 顺序加载图片
  function loadImages(imageDomList) {
    let promise = Promise.resolve()
    // 遍历图片 Dom 列表以顺序执行
    imageDomList.forEach((imageDom) => {
      promise = promise.then(() => {
        return loadASingleImage(imageDom)
      }).catch((err) => {
        console.log(err)
      })
    })
  }

  loadImages(imageDomList)
})()
