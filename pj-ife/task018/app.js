/**
 * Created by violet_qqy on 16/3/28.
 */

/**
 * 判断输入是否为数字
 * @param num
 * @returns {boolean}
 */
function isNumber(num) {
    if (isNaN(parseInt(num))) {
        alert('请输入数字!');
        return false;
    }
    return true;
}

/**
 * 左侧入
 */
function leftInput() {
    var number = document.getElementById('number').value;
    if (isNumber(number)) {
        // alert('输入合法');
        var childDiv = document.createElement('div');
        childDiv.innerHTML = number;
        childDiv.className = 'square';
        childDiv.setAttribute('onclick', 'removeThis(this)');
        var parentsDiv = document.getElementById('content');
        parentsDiv.insertBefore(childDiv, parentsDiv.firstChild);
    }
}

/**
 * 右侧入
 */
function rightInput() {
    var number = document.getElementById('number').value;
    if (isNumber(number)) {
        // alert('输入合法');
        var childDiv = document.createElement('div');
        childDiv.innerHTML = number;
        childDiv.className = 'square';
        childDiv.setAttribute('onclick', 'removeThis(this)');
        var parentsDiv = document.getElementById('content');
        parentsDiv.appendChild(childDiv);
    }
}

/**
 * 左侧出
 */
function leftRemove() {
    var parentsDiv = document.getElementById('content');
    // console.log(parentsDiv.firstElementChild);
    if (parentsDiv.firstElementChild) {
        alert(parentsDiv.firstElementChild.innerHTML);
        parentsDiv.removeChild(parentsDiv.firstElementChild);
    } else {
        alert('啊哦!没有可删除的元素了呢~');
    }
}

/**
 * 右侧出
 */
function rightRemove() {
    var parentsDiv = document.getElementById('content');
    if (parentsDiv.lastElementChild) {
        alert(parentsDiv.lastElementChild.innerHTML);
        parentsDiv.removeChild(parentsDiv.lastElementChild);
    } else {
        alert('啊哦!没有可删除的元素了呢~');
    }
}

/**
 * 点击删除
 * @param div
 */
function removeThis(div) {
    alert(div.innerHTML);
    div.remove();
}

