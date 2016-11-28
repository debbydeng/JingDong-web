/**
 * Created by ZTHK10 on 2016/10/8.
 */
$(function(){
    /*header js  悬停显示类容*/
    $(".menu").hide();
    $(".down-menu").each(function(){
        var $this=$(this);
        $this.hover(function(){
            $this.css({background:"#fff",border:"1px solid #ddd"});
            $this.find(".glyphicon").addClass("up").html("&#8595");
            $this.find(".menu").css({display:"block"});
        },function(){
            $this.css({background:"transparent",border:"none"});
            $this.find(".up").html("&#8593").removeClass("up");
            $this.find(".menu").hide();
        })
    });

    /*header js  城市点击变红色*/
    function chooseCity(){
        $("header table tr th .original").addClass("red");
        $("header table tr td,header table tr th").click(function(){
            var $this=$(this);
            $("header table").find("span.red").removeClass("red");
            $this.find("span").addClass("red");
            var $value=$this.find("span").text();
            $("header span.city").text($value);
        })
    }
    chooseCity();

    function removeAds(){
       $("header .top2 span").click(function(){
           $("header .top2").hide();
       })
    }
    removeAds();
    /*content js  显示商品详细目录*/
    function showCate(){
        var t=null;
        var leave=function(){
            $(".ads .all-cate>div").addClass("hide");
            $(".content .details ul li").removeClass("focus").find("span.after").remove();
            $(".ads .all-cate").hide();
        };
        $(document).on("mouseenter",".content .details ul li",function(){
            clearTimeout(t);
            var $this=$(this);
            var $index=$this.index();
            $(".ads .all-cate").show();
            $this.siblings().find("span.after").removeClass("after");
            $this.append("<span class='after'></span>");
            $this.addClass("focus").siblings().removeClass("focus");
            $(".ads .all-cate>div").addClass("hide");
            $(".ads .all-cate>div").eq($index).removeClass("hide");
        }).on("mouseleave",".content .details ul li",function(){
            t=setTimeout(function(){
                leave();
            },200)
        }).on("mouseenter",".ads .all-cate",function(){
            clearTimeout(t);
            t=null;
        }).on("mouseleave",".ads .all-cate",function(){
            t=setTimeout(function(){
                leave();
            },200)
        })
    }
    showCate();
    /*content js  广告slide*/
    function picSlide(){
        var i=0;
        $(".content .ads .ads-pic .pic li:first").siblings().addClass("hide");
        var sliding=function(){
            i=i<4? ++i: 0;
            $(".content .ads .ads-pic .pic li").eq(i).removeClass("hide").siblings().addClass("hide");
            $(".content .ads .ads-pic .nav li").eq(i).addClass("active").siblings().removeClass("active");
        };
        var t=setInterval(function(){
            sliding();
        },2000);
        $(".content .ads .ads-pic .pic,.nav").hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(function(){
                sliding();
            },2000);
        });

        $(".content .ads .ads-pic .nav li").click(function(){
            var $this=$(this);
             i=$this.index();
            $(".content .ads .ads-pic .pic li").eq(i).removeClass("hide").siblings().addClass("hide");
            $(".content .ads .ads-pic .nav li").eq(i).addClass("active").siblings().removeClass("active");
        })
    }
    picSlide();

    /*content js  slide旁边右侧浮动news*/
    function start(){
        $(".news .info .info-details .cancel").click(function(){
            $(".news .info").addClass("hide");
            $(".news>table").removeClass("hide");
        });
        $(".news>table tr th").on("mouseenter",function(){
            var $this=$(this);
            var $index=$this.index();
            $(".news>table").addClass("hide");
            $(".news .info").removeClass("hide");
            $(".mark").eq($index).trigger("mouseenter");
        })
    }
    start();

    var $switch=function(){

        $(document).on("mouseenter",".mark",function(){
            var $this=$(this);
            var $index=$this.index();
            $this.addClass("active").siblings().removeClass("active");
            $(".page").addClass("hide").eq($index).removeClass("hide");
        });

        $(document).on("mouseenter",".mark1",function(){
            var $this=$(this);
            var $index=$this.index();
            $this.addClass("active").siblings().removeClass("active");
            $(".page1").addClass("hide").eq($index).removeClass("hide");
        });
        $(".mark1:first-child").trigger("mouseenter");

    };
    function cate(){
        $(".info table th").addClass("mark");
        $(".info .info-details>div").addClass("page hide");
        $switch();
    }
    cate();

    function telRecharge(){
        $(".info .info-details>div ul li").addClass("mark1");
        $(".info .info-details>div>div").addClass("page1 hide");
        $switch();
    }
    telRecharge();

    /*content2 js  猜你喜欢部分图片刷新*/
    function refresh(){
        var picArr=[["ea2d7b", "aa227b" ,"34ad5b" ,"122d7b", "332dfb"],["d40d5c" ,"f4aa5c" , "a45d34" ,"14df5c","445d5c" ],["d41d5c", "d45ddd", "d4521f" , "123d5c" ,"dd125c"]];
        $(".content2 .refresh").click(function(){
            var colorArr=picArr[Math.floor(Math.random()*3)];
            $(".content2 .guess ul li img").each(function(){
                var $this=$(this);
                var $index=$this.parents("li").index();
                $this.attr("src",("http://placehold.it/150x150/"+colorArr[$index]+"/fff"))
            })
        })
    }
    refresh();





});