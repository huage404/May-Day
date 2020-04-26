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