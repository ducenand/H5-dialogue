function back(){$("#audio-chat")[0].currentTime=0,$("#audio-chat")[0].pause(),YangYiswipe.stopMusic();for(var e=0;e<timers.length;e++)clearTimeout(timers[e]);$("#im").removeClass("hide"),$("#im").addClass("show"),$("#chat").removeClass("show"),$("#chat").addClass("hide"),$("#chat ul.list li").remove(),YangYiswipe.removeVideo()}function autoHeight(){var e=$("body").height();$("#im .main").height(e-193),$("#chat .scroll").height(e-94)}function getNowFormatDate(e){if(e)var i=new Date(e);else var i=new Date;var n=i.getMinutes();n>=0&&9>=n&&(n="0"+n);var t=i.getHours()+":"+n;return t}function showMessage(e){e-=1,timer=setTimeout(function(){$("#audio-chat")[0].currentTime=0,$("#audio-chat")[0].play(),$("#chat .list li").eq(e).show(),$("#chat .scroll").scrollTop($("#chat .scroll")[0].scrollHeight)},1500*e),timers.push(timer),setInterval(function(){$("#chat .bofang").removeClass("animated flip"),setTimeout(function(){$("#chat .bofang").addClass("animated flip")},3e3)},2e3)}!function(e){e.Callbacks=function(i){i=e.extend({},i);var n,t,a,s,o,r,c=[],m=!i.once&&[],l=function(e){for(n=i.memory&&e,t=!0,r=s||0,s=0,o=c.length,a=!0;c&&o>r;++r)if(c[r].apply(e[0],e[1])===!1&&i.stopOnFalse){n=!1;break}a=!1,c&&(m?m.length&&l(m.shift()):n?c.length=0:d.disable())},d={add:function(){if(c){var t=c.length,r=function(n){e.each(n,function(e,n){"function"==typeof n?i.unique&&d.has(n)||c.push(n):n&&n.length&&"string"!=typeof n&&r(n)})};r(arguments),a?o=c.length:n&&(s=t,l(n))}return this},remove:function(){return c&&e.each(arguments,function(i,n){for(var t;(t=e.inArray(n,c,t))>-1;)c.splice(t,1),a&&(o>=t&&--o,r>=t&&--r)}),this},has:function(i){return!(!c||!(i?e.inArray(i,c)>-1:c.length))},empty:function(){return o=c.length=0,this},disable:function(){return c=m=n=void 0,this},disabled:function(){return!c},lock:function(){return m=void 0,n||d.disable(),this},locked:function(){return!m},fireWith:function(e,i){return!c||t&&!m||(i=i||[],i=[e,i.slice?i.slice():i],a?m.push(i):l(i)),this},fire:function(){return d.fireWith(this,arguments)},fired:function(){return!!t}};return d}}(Zepto),function(e){function i(n){var t=[["resolve","done",e.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",e.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",e.Callbacks({memory:1})]],a="pending",s={state:function(){return a},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var n=arguments;return i(function(i){e.each(t,function(t,a){var r=e.isFunction(n[t])&&n[t];o[a[1]](function(){var n=r&&r.apply(this,arguments);if(n&&e.isFunction(n.promise))n.promise().done(i.resolve).fail(i.reject).progress(i.notify);else{var t=this===s?i.promise():this,o=r?[n]:arguments;i[a[0]+"With"](t,o)}})}),n=null}).promise()},promise:function(i){return null!=i?e.extend(i,s):s}},o={};return e.each(t,function(e,i){var n=i[2],r=i[3];s[i[1]]=n.add,r&&n.add(function(){a=r},t[1^e][2].disable,t[2][2].lock),o[i[0]]=function(){return o[i[0]+"With"](this===o?s:this,arguments),this},o[i[0]+"With"]=n.fireWith}),s.promise(o),n&&n.call(o,o),o}var n=Array.prototype.slice;e.when=function(t){var a,s,o,r=n.call(arguments),c=r.length,m=0,l=1!==c||t&&e.isFunction(t.promise)?c:0,d=1===l?t:i(),u=function(e,i,t){return function(s){i[e]=this,t[e]=arguments.length>1?n.call(arguments):s,t===a?d.notifyWith(i,t):--l||d.resolveWith(i,t)}};if(c>1)for(a=new Array(c),s=new Array(c),o=new Array(c);c>m;++m)r[m]&&e.isFunction(r[m].promise)?r[m].promise().done(u(m,o,r)).fail(d.reject).progress(u(m,s,a)):--l;return l||d.resolveWith(o,r),d.promise()},e.Deferred=i}(Zepto);var YangYiswipe=function(){function swipe_0(){_czc.push(["_trackEvent","视屏播放","状态","第一屏"]),$("#video .screen1 .box").addClass("animated");var e=function(){var e=$.Deferred();return setTimeAnimate([$("#video .screen1 .box .bak-img")],500,e)};e().then(function(){$("#video .screen1").siblings(".screen").find("img").removeClass("animated showpic");var e=$.Deferred();return setTimeAnimate([$(".screen1 .bak-top")],1500,e)}).then(function(){var e=$.Deferred();return setTimeAnimate([$(".screen1 .bak-bottom")],1500,e)}).then(function(){var e=$.Deferred();return setTimeAnimate([$(".screen1 .bak-bottom-logo")],1500,e)}).then(function(){var e=$.Deferred();return setTimeAnimate(null,3500,e,1,!0)})}function swipe_1(){_czc.push(["_trackEvent","视屏播放","状态","第二屏"]),$("#video .screen2 .box").addClass("animated");var e=function(){var e=$.Deferred();return setTimeAnimate([$(".screen2 .box .bak-img")],500,e)};e().then(function(){$("#video .screen2").siblings(".screen").find("img").removeClass("animated showpic");var e=$.Deferred();return setTimeAnimate([$(".screen2 .box .bak-top")],2e3,e)}).then(function(){var e=$.Deferred();return setTimeAnimate(null,5e3,e,2,!0)})}function swipe_2(){_czc.push(["_trackEvent","视屏播放","状态","第三屏"]),$("#video .screen3 .box").addClass("animated");var e=function(){var e=$.Deferred();return setTimeAnimate([$(".screen3 .box .bak-img")],500,e)};e().then(function(){$("#video .screen3").siblings(".screen").find("img").removeClass("animated showpic");var e=$.Deferred();return setTimeAnimate([$(".screen3 .box .bak-top")],2e3,e)}).then(function(){var e=$.Deferred();return setTimeAnimate(null,5e3,e,3,!0)})}function swipe_3(){_czc.push(["_trackEvent","视屏播放","状态","第四屏"]),$("#video .screen4 .box").addClass("animated");var e=function(){var e=$.Deferred();return setTimeAnimate([$(".screen4 .box .bak-img")],500,e)};e().then(function(){$("#video .screen4").siblings(".screen").find("img").removeClass("animated showpic"),$("#video .screen5").siblings(".screen").find("a").removeClass("animated showpic");var e=$.Deferred();return setTimeAnimate([$(".screen4 .box .bak-top")],2e3,e)}).then(function(){var e=$.Deferred();return setTimeAnimate(null,5e3,e,4,!0)})}function swipe_4(){_czc.push(["_trackEvent","视屏播放","状态","第五屏"]),$("#video .screen5 .bak-img").height($("body").height()-208);var e=function(){var e=$.Deferred();return setTimeAnimate([$(".screen5 .box .bak-img"),$(".screen5 .box .bak-phone"),$(".screen5 .bak-box-bottom"),$(".screen5 .box-bottom")],500,e)};e().then(function(){$("#video .screen5").siblings(".screen").find("img").removeClass("animated showpic"),$("#video .screen5").siblings(".screen").find("a").removeClass("animated showpic");var e=$.Deferred();return setTimeAnimate([$(".screen5 .box .bak-likedance")],2e3,e)}).then(function(){var e=$.Deferred();return setTimeAnimate([$(".screen5 .box .uploading")],2e3,e)}).then(function(){var e=$.Deferred();return setTimeAnimate([$(".screen5 .box .bak-huihua")],2e3,e)}).then(function(){timer=setInterval(function(){$(".screen5 .uploading").removeClass("animated bounce"),setTimeout(function(){$(".screen5 .uploading").addClass("animated bounce")},3e3)},2e3)})}function init(index){removeVideo(),html='<section id="video" class="warp hide">',html+='<section class="screen screen1"><div class="box fadeInLeft"><img class="bak-top pulse" src="../img/'+index+'/page-4.png" alt=""><img class="bak-img fadeIn" src="../img/'+index+'/page-1.png" alt=""><img class="bak-bottom tada" src="../img/'+index+'/page-2.png" alt=""><img class="bak-bottom-logo fadeInRight" src="../img/'+index+'/page-3.png" alt=""></div></section>',html+='<section class="screen screen2"><div class="box flipInX"><img class="bak-top fadeInDown" src="../img/'+index+'/page-6.png" alt=""><img class="bak-img lightSpeedIn" src="../img/'+index+'/page-5.png" alt=""></div></section>',html+='<section class="screen screen3"><div class="box fadeInDown"><img class="bak-top bounceInDown" src="../img/'+index+'/page-8.png" alt=""><img class="bak-img zoomIn" src="../img/'+index+'/page-7.png" alt=""> </div></section>',html+='<section class="screen screen4"><div class="box fadeInRight"><img class="bak-top fadeInLeft" src="../img/'+index+'/page-10.png" alt=""><img class="bak-img zoomIn" src="../img/'+index+'/page-9.png" alt=""></div></section>',html+='<section class="screen screen5" ><div class="box flip"><img class="bak-img fadeInLeft" src="../img/'+index+'/page-11.png" alt=""><img class="bak-huihua zoomInRight" src="../img/'+index+'/page-12.png" alt=""><img class="bak-phone fadeInLeft" src="../img/'+index+'/page-14.png" alt=""><img class="bak-likedance bounce" src="../img/'+index+'/page-15.png" alt=""><a class="uploading bounce"  href="javascript:;">点击下载 <i>99广场舞手机版</i></a><div class="box-bottom fadeInRight"><img class="bak-box-bottom fadeInRight" src="../img/'+index+'/page-13.png" alt=""></div></div></section>',html+="</section>",$("#chat").after(html),pageSlider=new WxMoment.PageSlider({pages:$(".screen"),onSwipeUp:function(){4!==this.index&&(cleartime(),eval("swipe_"+(this.index+1).toString()+"()"),this.next())},onSwipeDown:function(){0!==this.index&&(cleartime(),eval("swipe_"+(this.index-1).toString()+"()"),this.prev())}})}function setTimeAnimate(arrEle,time,defer,index,bloon){return timer=setTimeout(function(){if(bloon)pageSlider.next(),eval("swipe_"+index.toString()+"()");else for(var i=0;i<arrEle.length;i++)arrEle[i].addClass("showpic animated");defer.resolve()},time),setTime.push(timer),defer.promise()}function removeVideo(){pageSlider=null,$("#video").remove(),cleartime()}function cleartime(){for(var e=0;e<setTime.length;e++)clearTimeout(setTime[e])}function startMuisc(){$("#music").css("display","block"),$(".music_bg").css("display","block"),$(".music_pic").css("animation","music 2s linear infinite"),$("#music .aud")[0].play()}function stopMusic(){$("#music .aud")[0].pause(),$("#music").css("display","none"),$(".music_bg").css("display","none"),$(".music_pic").css("animation","none")}function pauseMusic(){$("#music .aud")[0].pause(),$(".music_bg").css("display","none"),$(".music_pic").css("animation","none")}function beginMusic(){var e=1;startMuisc(),$("#music").on("touchend",function(){1==e?(pauseMusic(),e=2):2==e&&(startMuisc(),e=1)})}var html="",pageSlider=null,timer=null,setTime=[];return{init:init,firstSwipe:swipe_0,removeVideo:removeVideo,startMuisc:startMuisc,pauseMusic:pauseMusic,beginMusic:beginMusic,stopMusic:stopMusic}}(),fileBasePath="../",myDate=new Date,timers=[],timer=null,timer1=null,index="yangyi",obj={yangyi:{name:"杨艺",time:getNowFormatDate(),huihua:{1:"你还好吗?",2:'最近跳广场舞了吗? <img src="../img/meo.jpg">',3:"我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我其实有好多话想给你说,先看看下面的小视频吧!",4:'<img class="video animated zoomIn" src="../img/yangyi/video-yangyi.jpg"><img class="bofang animated flip" src="../img/bofang.jpg">'}},gegewu:{name:"格格巫",time:getNowFormatDate(myDate.getTime()-1e5),huihua:{1:"我创作了新的舞蹈,不知道你喜欢吗?",2:"格格巫、",3:"我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我们其实有好多话想给你说,先看看下面的小视屏吧!",4:'<img class="video animated zoomIn" src="../img/yangyi/video-yangyi.jpg"><img class="bofang animated flip" src="../img/bofang.jpg">'}},meijiu:{name:"美久",time:getNowFormatDate(myDate.getTime()-2e5),huihua:{1:"东奔西走,很累,但一想到你,就很开心。发放萨芬 方式水电费萨芬 浮点数",2:"最近跳广场舞了吗?",3:"我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我们其实有好多话想给你说,先看看下面的小视屏吧!"}}},fileList=["img/background.png","img/meo.jpg","img/bofang.jpg","img/dibudaohang.jpg","img/mes.jpg","img/jia.png","img/search.png","img/arrow-return.png","img/arrow-1.png","img/2.mp3","img/bgmusic.mp3"];for(var j in obj)if(obj.hasOwnProperty(j)&&(fileList.push("img/"+j+"/head-"+j+".jpg"),fileList.push("img/"+j+"/video-"+j+".jpg"),"yangyi"==j))for(var i=1;15>=i;i++)fileList.push("img/"+j+"/page-"+i+".png");for(var loader=new WxMoment.Loader,i=0;i<fileList.length;i++)loader.addImage(fileBasePath+fileList[i]);loader.addProgressListener(function(e){$("#loading").css("display","block");Math.round(e.completedCount/e.totalCount*100)}),loader.addCompletionListener(function(){setTimeout(function(){$("#loading").css("display","none"),$("#im").addClass("show"),timer1=setTimeout(function(){$("#zhezhao").css("display","block"),$("#zhezhao").addClass("fadeIn")},5e3)},1e3),_czc.push(["_trackEvent","页面加载","状态","页面加载完成"])}),$(function(){new WxMoment.OrientationTip,loader.start(),_czc.push(["_trackEvent","页面加载","状态","页面加载开始"]),autoHeight(),$(window).bind("resize",function(){autoHeight()});var e=0,i={versions:function(){var e=navigator.userAgent;navigator.appVersion;return{mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1}}()};i.versions.android?(e=1,$("body").addClass("animate")):$("body").addClass("animate");var n=0;for(var t in obj)obj.hasOwnProperty(t)&&(n++,$("#im .main ul").append('<li class="'+t+'"><div class="main-left"><span>1</span><img src="../img/'+t+"/head-"+t+'.jpg" alt=""></div><div class="main-right"><h3>'+obj[t].name+"</h3><p>"+obj[t].huihua[1]+"</p><time>"+obj[t].time+"</time></div></li>"));$("#im em.total-num").text(n),history.pushState(1,"page 1","index.html"),$("#zhezhao .z-confirm").on("touchend",function(){$("#zhezhao").css("display","none"),_czc.push(["_trackEvent","关闭遮罩","点击","第一屏5秒弹出遮罩"])}),$("#im .main ul li").bind("touchend",function(e){clearTimeout(timer1),_czc.push(["_trackEvent","聊天会话开始","点击","第二屏聊天会话"]),e.preventDefault(),history.pushState(1,"page1","index.html#list"),$("#im").addClass("hide"),$("#chat").addClass("show"),$("#chat").removeClass("hide"),index=$(this).attr("class");var i=obj[index].name,n="",t=obj[index].huihua;$("#chat .time .name").text(i);for(var a in t)n+=1==a?'<li class="animated fadeIn" style="display:block;">                            <img src="../img/'+index+"/head-"+index+'.jpg" class="head">                            <div class="detail">                                <p>'+t[a]+"</p>                            </div>                        </li>":'<li class="animated fadeIn">                            <img src="../img/'+index+"/head-"+index+'.jpg" class="head">                            <div class="detail">                                <p>'+t[a]+"</p>                            </div>                        </li>";$("#chat ul.list").append(n),$("#audio-chat")[0].play();for(var s in t)showMessage(s);YangYiswipe.init(index)}),$("#chat").on("touchend",".back",back),$("#chat").on("touchend",".bofang",function(){history.pushState(2,"page2","index.html#video"),$("#chat").addClass("hide"),$("#video").addClass("show"),$("#video").removeClass("hide"),_czc.push(["_trackEvent","播放视频开始","点击","第三屏视频开始"]),YangYiswipe.firstSwipe(),YangYiswipe.beginMusic()}),$("body").on("click","#video .screen5",function(){1==e?_czc.push(["_trackEvent","Android下载","点击","点击视频第五屏下载"]):_czc.push(["_trackEvent","IOS下载","点击","点击视频第五屏下载"]),location.href="http://www.999d.com/app/dl.php?fr=tiaowujiuqutiao"}),window.addEventListener("popstate",function(e){1==history.state||2==history.state?back():history.replaceState(null,document.title,location.href)},!1)});