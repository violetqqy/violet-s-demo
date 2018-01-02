/**
 * Created by violet_qqy on 16/3/28.
 */

/**
 * 判断输入数字的合法性
 * @param num
 * @returns {boolean}
 */
function isNumber(num) {
    // console.log(num);
    var content = document.getElementById('content');
    // console.log(content.childElementCount);
    if (num !== '' && content.childElementCount > 60) {
        alert('列表已满 禁止输入');
        return false;
    } else if (isNaN(parseInt(num))) {
        alert('请输入数字!');
        return false;
    } else if (parseInt(num) < 10 || parseInt(num) > 100) {
        alert('请输入10-100之间的数字');
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
        var wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'wrapper';
        var squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        squareDiv.style.height = parseInt(number) + '%';
        wrapperDiv.appendChild(squareDiv);
        var parentsDiv = document.getElementById('content');
        parentsDiv.insertBefore(wrapperDiv, parentsDiv.firstChild);
    }
}

/**
 * 右侧入
 */
function rightInput() {
    var number = document.getElementById('number').value;
    if (isNumber(number)) {
        // alert('输入合法');
        var wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'wrapper';
        var squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        squareDiv.style.height = parseInt(number) + '%';
        wrapperDiv.appendChild(squareDiv);
        var parentsDiv = document.getElementById('content');
        parentsDiv.appendChild(wrapperDiv);
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
// function removeThis(div) {
//     alert(div.innerHTML);
//     div.remove();
// }

/**
 * 冒泡排序
 */
function bubbleSort() {
    var content = document.getElementById('content');
    var length = content.children.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (content.children[j].firstElementChild.style.height > content.children[j + 1].firstElementChild.style.height) {
                var lowerElement = content.children[j + 1];
                var higherElement = content.children[j];
                content.insertBefore(lowerElement, higherElement);

                // alert(content.children[j].firstElementChild.style.height + '>' + content.children[j + 1].firstElementChild.style.height)
            }
        }
    }
}
