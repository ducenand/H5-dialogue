/**
 * Created by ducen on 16/7/20.
 */
var fileBasePath = '../';
var myDate = new Date(),timers = [],timer=null,timer1=null,index = 'yangyi';
var obj = {
    'yangyi':{
        'name':'杨艺',
        'time':getNowFormatDate(),
        'huihua':{
            1:'你还好吗?',
            2:'最近跳广场舞了吗?'+' <img src="../img/meo.jpg">',//img为表情
            3:'我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我其实有好多话想给你说,先看看下面的小视频吧!',
            4:'<img class="video animated zoomIn" src="../img/yangyi/video-yangyi.jpg"><img class="bofang animated flip" src="../img/bofang.jpg">'
        }
    },
    'gegewu':{
        'name':'格格巫',
        'time':getNowFormatDate(myDate.getTime()-100000),
        'huihua':{
            1:'我创作了新的舞蹈,不知道你喜欢吗?',
            2:'格格巫、',
            3:'我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我们其实有好多话想给你说,先看看下面的小视屏吧!',
            4:'<img class="video animated zoomIn" src="../img/yangyi/video-yangyi.jpg"><img class="bofang animated flip" src="../img/bofang.jpg">'
        }
    },
    'meijiu':{
        'name':'美久',
        'time':getNowFormatDate(myDate.getTime()-200000),
        'huihua':{
            1:'东奔西走,很累,但一想到你,就很开心。发放萨芬 方式水电费萨芬 浮点数',
            2:'最近跳广场舞了吗?',
            3:'我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我们其实有好多话想给你说,先看看下面的小视屏吧!'
        }
    }
}


var fileList = [
    'img/background.png',
    'img/meo.jpg',
    'img/bofang.jpg',
    'img/dibudaohang.jpg',
    'img/mes.jpg',
    'img/jia.png',
    'img/search.png',
    'img/arrow-return.png',
    'img/arrow-1.png',
    // 'img/emo.png',
    // 'img/video.jpg',
    // 'img/1.mp3',
    'img/2.mp3',
    'img/bgmusic.mp3',
    // 'img/4.mp3'
];

//加载所有头像所有视频图片
for(var j in obj){
    if(obj.hasOwnProperty(j)) {
        fileList.push('img/' + j + '/head-' + j + '.jpg');
        fileList.push('img/' + j + '/video-' + j + '.jpg');
        if (j == 'yangyi') {//加载杨艺老师视频页面图片

            for (var i = 1; i <= 15; i++) {
                fileList.push('img/' + j + '/page-' + i + '.png');
            }
        }
    }
}





//资源加载
var loader = new WxMoment.Loader();

for (var i = 0; i < fileList.length; i++) {
    //添加资源
    loader.addImage(fileBasePath + fileList[i]);
}
//加载百分比
loader.addProgressListener(function (e) {
    $('#loading').css('display','block');
    var percent = Math.round((e.completedCount / e.totalCount) * 100);

});
//监听资源加载完成事件
loader.addCompletionListener(function () {

    setTimeout(function(){
        $('#loading').css('display','none');
        $('#im').addClass('show');

        timer1 = setTimeout(function () {
            $('#zhezhao').css('display','block');
            $('#zhezhao').addClass('fadeIn');
        },5000);

    },1000);

    _czc.push(["_trackEvent", "页面加载", "状态",'页面加载完成']);

    // _hmt.push(['_trackEvent', '页面加载', '状态', '页面加载完成']);
});
// +++++++++所有图片资源加载完成+++++++++||

$(function() {
    //屏幕旋转提示
    new WxMoment.OrientationTip();
    //启动资源加载管理器
    loader.start();
    _czc.push(["_trackEvent", "页面加载", "状态",'页面加载开始']);

    autoHeight();
    //窗口变动修改一些页面的高度
    $(window).bind('resize',function(){
        autoHeight();
    });

    var isAndroid = 0;
    //检测浏览器
    var browser = {
        versions : function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或uc浏览器
            };
        }()
    };
    if ( browser.versions.android ) {
        isAndroid = 1;
        $('body').addClass('animate');//body添加动画

    } else {
        $('body').addClass('animate');//body添加动画
    }

    //第一屏动态插入
    var totalNum = 0;
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            totalNum++;
            $('#im .main ul').append('<li class="'+key+'">' +
                '<div class="main-left">' +
                '<span>1</span>' +
                '<img src="'+'../img/'+key+'/head-'+key+'.jpg" alt="">' +
                '</div>' +
                '<div class="main-right">' +
                '<h3>'+obj[key]['name']+'</h3>' +
                '<p>'+obj[key]['huihua'][1]+'</p>' +
                '<time>'+obj[key]['time']+'</time>' +
                '</div>' +
                '</li>');
        }


    }
    $('#im em.total-num').text(totalNum);//插入总信息条数

    history.pushState(1, "page 1", "index.html");//记录用于单页面后退

    $('#zhezhao .z-confirm').on('touchend',function () {
        $('#zhezhao').css('display','none');
        _czc.push(["_trackEvent", "关闭遮罩", "点击","第一屏5秒弹出遮罩"]);

    })



    //第一屏信息点击进入第二屏开始


    $('#im .main ul li').bind('touchend',function(event){
        clearTimeout(timer1);//有行为就关闭定时器
        _czc.push(["_trackEvent", "聊天会话开始", "点击","第二屏聊天会话"]);

        event.preventDefault();
        history.pushState(1, "page1", "index.html#list");//记录用于单页面后退

        $('#im').addClass('hide');
        $('#chat').addClass('show');
        $('#chat').removeClass('hide');//后退时需要删除

        index = $(this).attr('class');
        var name=obj[index]['name'],html='',huihua=obj[index]['huihua'];

        $('#chat .time .name').text(name);
        //动态插入对话信息
        for(var k in huihua){
            if(k==1){
                html +='<li class="animated fadeIn" style="display:block;">\
                            <img src="'+'../img/'+index+'/head-'+index+'.jpg" class="head">\
                            <div class="detail">\
                                <p>'+huihua[k]+'</p>\
                            </div>\
                        </li>';
            }else {
                html +='<li class="animated fadeIn">\
                            <img src="'+'../img/'+index+'/head-'+index+'.jpg" class="head">\
                            <div class="detail">\
                                <p>'+huihua[k]+'</p>\
                            </div>\
                        </li>';
            }
        }

        $('#chat ul.list').append(html);

        $('#audio-chat')[0].play();
        //实现顺序弹出对话
        for(var i in huihua){
            showMessage(i);
        }

        YangYiswipe.init(index);//初始化第三屏动画


    });

    //第二屏后退功能

    $('#chat').on('touchend','.back',back);

    

    //点击视频进入第三屏
    $('#chat').on('touchend','.bofang',function(){
        history.pushState(2, "page2", "index.html#video");
        $('#chat').addClass('hide');
        $('#video').addClass('show');
        $('#video').removeClass('hide');
        _czc.push(["_trackEvent", "播放视频开始", "点击","第三屏视频开始"]);
        YangYiswipe.firstSwipe();//开始播放动画
        YangYiswipe.beginMusic();//开始播放音乐

    });
    
    //点击视频下载
    $('body').on('click','#video .screen5',function () {
        if(isAndroid==1){
            _czc.push(["_trackEvent", "Android下载", "点击","点击视频第五屏下载"]);
        }else{
            _czc.push(["_trackEvent", "IOS下载", "点击","点击视频第五屏下载"]);
        }
        location.href = 'http://www.999d.com/app/dl.php?fr=tiaowujiuqutiao';
    })


    
    
    

    //浏览器前进后退
    window.addEventListener('popstate', function(e){

        if(history.state==1 || history.state==2){

            back();//后退
        }else{
            history.replaceState(null, document.title, location.href);
        }

    },false);


})

//后退
function back(){
    $('#audio-chat')[0].currentTime = 0;//停止音乐
    $('#audio-chat')[0].pause();
    YangYiswipe.stopMusic();//停止播放音乐
    //清除所有谈话框所有定时器
    for(var i = 0;i < timers.length;i++){
        clearTimeout(timers[i]);
    }

    $('#im').removeClass('hide');
    $('#im').addClass('show');
    $('#chat').removeClass('show');
    $('#chat').addClass('hide');
    //初始化动态添加的dom
    $('#chat ul.list li').remove();
    YangYiswipe.removeVideo();//初始化第三屏动画
}

//修改im主题高度----------------------------
function autoHeight() {
    var height = $('body').height();
    $('#im .main').height(height-193);
    $('#chat .scroll').height(height-94);
}
//格式化当前时间
function getNowFormatDate(otime) {
    if(otime){
        var date = new Date(otime);
    }else{
        var date = new Date();
    }
    var minutes = date.getMinutes()
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    var currentdate =  date.getHours() + ':' + minutes;

    return currentdate;
}
//实现顺序弹出对话

function showMessage(i){
    i-=1;
    timer = setTimeout(function(){
        $('#audio-chat')[0].currentTime = 0;
        $('#audio-chat')[0].play();
        $('#chat .list li').eq(i).show();
        $('#chat .scroll').scrollTop( $('#chat .scroll')[0].scrollHeight );
    },1500*i);
    timers.push(timer);

    setInterval(function(){
        $('#chat .bofang').removeClass('animated flip');
        setTimeout(function () {
            $('#chat .bofang').addClass('animated flip');
        },3000);
    },2000);
}



// ---------------------------------




