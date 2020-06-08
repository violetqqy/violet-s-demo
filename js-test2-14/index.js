// 全局商品对象 key为商品id 唯一
var GlobalGoods = {}

// 存在全局
function storeGoodsToGlobal(id, goods) {
  if (!GlobalGoods[id]) {
    GlobalGoods.id = goods
  }
}

// 存在 localStorage
function storeGoodsToLocal(id, goods) {
  var LocalGoods = localStorage.getItem('goods')
  if (!LocalGoods[id]) {
    LocalGoods.id = goods
    localStorage.setItem('goods', LocalGoods)
  }
}

// 商品存储方式
function GoodsStoreStrategy(type, id, goods) {
  var Strategy = {
    global: storeGoodsToGlobal(id, goods),
    local: storeGoodsToLocal(id, goods)
  }
  return Strategy[type](id, goods)
}

// 根据 id 主动更新商品信息
function fetchGoodsById(id) {
  return axios.get(id).then(goods => {
    new GoodsStoreStrategy(goods.type, id, goods)();
    return goods;
  })
}

// 商品缓存器
function GoodsMemento(goods) {
  // 合并全局缓存和localStorage缓存
  var goodsCache = goods;
  return function (goodsId) {
    // 如果有缓存，则从缓存里面取
    if (goodsCache[goodsId]) {
      return Promise.resolve(goodsCache[goodsId]);
    } else {
      // 没有缓存 获取商品信息再根据状态存储商品
      return fetchGoodsById(id)
    }
  }
}

var GoodsMementoFn = GoodsMemento({
  ...GlobalGoods,
  ...localStorage.getItem('goods'),
})
