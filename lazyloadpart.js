$(function() {
    var loading=function(){
        $(".lazypart textarea").addClass("hide");
        $(".lazypart>div").each(function(){
            var $this=$(this);
            var contheight=$(window).height();
            var contop=$this.offset().top;
            var scrolltop=$(window).scrollTop();
            var post=contop-scrolltop;var posb=post+$this.height();
            if((post>=0&&post<contheight)||(posb>0&&posb<contheight)){
                $this.html($this.find("textarea").val());
                var $img=$this.find("img");
                $img.each(function(){
                    var $url=$(this).attr("data-src");
                    $(this).attr("src",$url)
                })
            }
        });
    };
    loading();

    $(window).on("scroll",function(){
        loading();
        $change();
    });

    var $switch = function (a,b) {
        $(document).on("mouseenter", a, function () {
            var $this = $(this);
            var $index = $this.index();
            $this.addClass("active").siblings().removeClass("active");
            b.addClass("hide").eq($index).removeClass("hide");
        });
    };

    var $change=function(){
        $(".lazyload").each(function(){
            $(this).find(".details .changeable>div:first-child").siblings().addClass("hide");
            var $cate="."+this.className.slice(0,6)+" .title ul li";
            var $list=$(this).find(".details .changeable>div");
            $switch($cate,$list );
        });
    };
    $change();
    




    
    
});