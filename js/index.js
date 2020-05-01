// // 自动播放音乐
// var music = document.getElementById('video');
// // 设置初始音量
// music.volume = 0.5;
// var state = 0;
// document.addEventListener('touchstart', function () {
//     if (state == 0) {
//         music.play();
//         state = 1;
//     }
// }, false);
// document.addEventListener("Weixin[i]SBridgeReady", function () {
//     music.play();
// }, false);
// //循环播放
// music.onended = function () {
//     music.load();
//     music.play();
// }


// 向页面填充数据


let data = postData();

function changData(data) {
    const houseData = data['houseData'];
    const introduction = document.getElementsByClassName('introduction-text')[0];

    const nameDom = document.getElementsByClassName('name');
    const priceDom = document.getElementsByClassName('price');
    const introDom = document.getElementsByClassName('intro');
    const houseTypeDom = document.getElementsByClassName('houseType');
    const linksDom = document.getElementsByClassName('links');
    const imagesDom = document.getElementsByClassName('images');




    // 开始向页面填充数据
    introduction.innerHTML = data['introduction'];

    for (let i = 0; i < houseData.length; i++) {
        addData(i)


        console.log('end')
    }

    function addData(j) {
        nameDom[j].innerHTML = houseData[j]['name'];
        priceDom[j].innerHTML = houseData[j]['price'];
        introDom[j].innerHTML = houseData[j]['intro'];
        houseTypeDom[j].innerHTML = houseData[j]['houseType'];
        linksDom[j].href = houseData[j]['links'];
        imagesDom[j].alt = houseData[j]['name'];
        imagesDom[j].src = './images/picture/' + houseData[j]['name'] + '.jpg';
    }

}

changData(data);