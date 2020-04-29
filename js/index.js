// 自动播放音乐
var music = document.getElementById('video');
// 设置初始音量
music.volume = 0.5;
var state = 0;
document.addEventListener('touchstart', function () {
    if (state == 0) {
        music.play();
        state = 1;
    }
}, false);
document.addEventListener("WeixinJSBridgeReady", function () {
    music.play();
}, false);
//循环播放
music.onended = function () {
    music.load();
    music.play();
}


// 向页面填充数据


let data = postData();

function changData(data) {
    const introduction = document.getElementsByClassName('introduction-text')[0];
    const productBox = document.getElementsByClassName('product-box')[0];

    const nameDom = document.getElementsByClassName('name');
    const priceDom = document.getElementsByClassName('price');
    const introDom = document.getElementsByClassName('intro');
    const imagesDom = document.getElementsByClassName('images');
    const houseTypeDom = document.getElementsByClassName('houseType');



    const apartment = data['houseData']['apartment'];
    const residence = data['houseData']['residence'];
    const villa = data['houseData']['villa'];
    let template = '';


    function addInfo() {
        const template01 = `
            <div>
                <a href="javascript:;" class="links">
                    <img src="./images/星悦汇.jpg" alt="绿地儒乐星镇" class="images">
                    <div class="info">
                        <h4 class="name">项目名称，项目名称</h4>
                        <p>价格: <em class="price">12000</em>元/㎡</p>
                        <p>户型: <em class="houseType">建面约27-84㎡地铁口LOFT公寓</em></p>
                        <p>简介：<em class="intro">特惠风暴 赣江头排平层SOHO8套特惠8字头！</em></p>
                    </div>
                </a>
            </div>
        `;
        const template02 = `
            <div>
                <a href="javascript:;" class="links">
                    <div class="info">
                        <h4 class="name">项目名称，项目名称</h4>
                        <p>价格: <em class="price">12000</em>元/㎡</p>
                        <p>户型: <em class="houseType">建面约27-84㎡地铁口LOFT公寓</em></p>
                        <p>简介：<em class="intro">特惠风暴 赣江头排平层SOHO8套特惠8字头！</em></p>
                    </div>
                    <img src="./images/星悦汇.jpg" alt="绿地儒乐星镇" class="images">
                </a>
            </div>
        `;
        const box = [template01, template02];
        let templateA = '';
        let templateB = '';
        let templateC = '';



        if (!(apartment.length % 2)) {
            for (let i = 0; i < apartment.length; i++) {
                templateA += box[i];
            }
        }
        if (!(residence.length % 2)) {
            for (let i = 0; i < residence.length; i++) {
                templateB += box[i];
            }
        }
        if (!(villa.length % 2)) {
            for (let i = 0; i < villa.length; i++) {
                templateC += box[i];
            }
        }
        template = `<h3></h3>` + templateA + templateB + templateC;
        createElm()
    }

    /* 下面这段代码主要将上面创建的产品模板填充到页面上
        实现过程
        获取 product-box ——> 根据数据中 houseData 的数量创建 product 节点（DIV）并添加类名
    
    
    */
    function createElm() {
        let productDom = null;
        let textBox = '';
        introduction.innerHTML = data['introduction'];
        for (let j = 0; j < data['houseData'].length; j++) {
            productDom = document.createElement('div');
            productDom.calssName = 'product';
            productDom.innerHTML = template;
            textBox += productDom;
        }
        productBox.innerHTML = textBox;
        console.log('1');
        console.log(productBox);
        console.log(textBox);
        console.log(template);
    }

    addInfo()

    console.log('2');
    // 开始向页面填充数据
    for (let i = 0; i < apartment.length; i++) {
        nameDom[i].innerHTML = apartment[i]['name']; // 项目名
        priceDom[i].innerHTML = apartment[i]['price']; // 价格
        houseTypeDom[i].innerHTML = apartment[i]['houseType']; // 户型
        introDom[i].innerHTML = apartment[i]['intro']; // 简介
    }

}

changData(data);