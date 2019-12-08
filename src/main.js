console.log("不要感慨时光匆匆，抓紧每一分每一秒才是关键！！！");

let html = document.querySelector("#html");

let taiji = document.querySelector("#taiji");

let sty1 = document.querySelector("#sty1");

let n = 0;
let string2 = "";

let string = `/*会动的代码:写一个会动的太极*/

/*开始简单加一下样式*/

/*字体变红*/
body{
    color:red;
 }

/*开始画太极啦！*/

/*1>先画一个圆形的div*/
div#taiji{
    width:202px;
    height:202px;
    border:1px solid black;
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

/*2>太极八卦分阴阳,左白右黑，使用背景渐变*/
div#taiji{
    background:linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}

/*3>再利用CSS伪元素画出太极的阴阳鱼*/
div#taiji::before{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border:1px solid red;
    background:white;
    border-radius:50%;
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border:none;
}
div#taiji::after{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border:1px solid red;
    background:black;
    border-radius:50%;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border:none;
}

/*4>同理使用渐变来为阴阳鱼加眼睛*/
div#taiji::before{
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
div#taiji::after{
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}

/*5>让太极动起来*/
@keyframes rot{
  from{transform: translate(-50%, -50%)rotate(0) ;}
  to{transform:translate(-50%, -50%)rotate(360deg);}
}
div#taiji{
  animation: rot 1s infinite linear;
}
`;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    //sty1.innerHTML = string2;//第一，style标签要放在script标签前面；第二：这样写，样式依然不起作用。不能在css代码里面写html代码
    sty1.innerHTML = string.substring(0, n + 1);

    //让页面自动往下滑动
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);

    n += 1;

    if (n >= string.length) {
      return;
    }
    step(); //这个step一定要写在return结束条件的后面，否则程序会一直执行！！！
  }, 10);
};

step();
// console.log(string.length);
// for (let y = 0; y <= string.length ; y++) {
//   console.log(y, string.substring(0, y));
// }//string.substring(0,string.length);这样才能把整个字符串输出
//console.log(string.substring(0, 1));
