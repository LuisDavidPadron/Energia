<template lang="pug">  
.hero.hero-grow
  Header( :validSectionOver="validSectionOver" @open="setValidSectionOver" )
  Body( @mouseover="validSectionOver = true" )
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import $ from 'jquery'

export default {
  name: 'App',
  data(){
      return {
          validSectionOver: false
      }
  },
  components: {
    Body,
    Header,
  },
  mounted() {
    $("#nav-icon").unbind().click(function () {
        $(this).toggleClass("open"), 
        $("nav").toggle({ direction: "left" }, 1e3).show(), 
        $("html,body").toggleClass("menu-open").animate({ scrollTop: 0 }, "fast"), 
        $("#overlay").toggle();
    }),
    $("#overlay,.close-mobile").unbind().click(function () {
        $("html,body").toggleClass("menu-open"), $("#overlay").toggle(), $("#nav-icon").toggleClass("open"), $("nav").toggle({ direction: "left" }, 1e3).hide();
    }),
    $(".caret-home")
        .unbind()
        .click(function () {
            $("html,body").animate({ scrollTop: $(".first").offset().top - 200 }, "slow");
        }),
    $(".back-top")
        .unbind()
        .click(function () {
            console.log('hola')
            return $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
        }),
    $(".capt-mob").unbind().click(function () {        
        $(this).find("p").slideToggle(500), $(this).find(".caret").toggleClass("close");
    }),
    $(".language")
        .unbind()
        .click(function () {
            $(this).next("ul").slideToggle(500), $(".language .caret").toggleClass("close");
        });
    $(window).on("resize", function () {
        var e;
        if (
            ((e = 0),
            $(window).on("scroll", function () {
                var t = $(window).scrollTop();

                if (                                    
                    $(window).innerWidth() >= 1025
                ){
                    $('#logo-header').addClass('hidden')
                    $('#span-logo').removeClass('text-principal-logo')

                    if($(window).innerWidth() >= 1025 && $(window).innerWidth() <= 1500){
                        $("#title-col").addClass("hidden")
                        $("#title-col").removeClass("show")                        
                    } else {
                        $("#title-col").removeClass("hidden")
                        t >= $(".start").offset().top ? ($("#title-col").addClass("show")) : $("#title-col").removeClass("show")
                        t >= $(".end").offset().top ? $("#title-col").removeClass("show") : '' 
                    }

                    $(".fao-img").length && ( $(".fao-img").each( function () {
                        var e = $(this).offset().top,
                            n = $(this).outerHeight();
                        if($(window).innerWidth() >= 1500){
                            $(this).parent().parent().parent().parent().next("div.capt").removeClass("hidden")
                            t >= e - 260 && t <= e + n - 260 ? $(this).parent().parent().parent().parent().next("div.capt").addClass("show") : $(this).parent().parent().parent().parent().next("div.capt").removeClass("show");
                        } else {
                            $(this).parent().parent().parent().parent().next("div.capt").addClass("hidden")
                        }                        
                    }),                                         
                    
                    $(window).innerWidth() >= 1025 && $(window).innerWidth() <= 1440 ? $('.mobile-destacados').removeClass('mobile-infor') : $('.mobile-destacados').addClass('mobile-infor')
                    ),
                    t >= 50 ? ($("header").addClass("sticky"), $("#header-placeholder").show()) : ($("header").removeClass("sticky"), $("#header-placeholder").hide());

                    t > 0 ? ( $('#logo-header').addClass('hidden'), $('#text-header').removeClass('hidden') ) : ( $("#logo-header").addClass("show"), $("#logo-header").removeClass("hidden"), $("#text-header").addClass("hidden") )
                    
                } else {
                    $('.mobile-destacados').removeClass('mobile-infor')
                    
                    $('#span-logo').css('transform', 'skewY(-4deg)')
                    $('#logo-header').css('transform', 'skewY(-4deg)')                    
                    
                    
                    t >= 50 ? ($("header").addClass("sticky"), $("#header-placeholder").show()) : ($("header").removeClass("sticky"), $("#header-placeholder").hide());
                    
                    t > 0 ? ( $('#logo-header').addClass('hidden'), $('#text-header').removeClass('hidden') ) : ( $("#logo-header").addClass("show"), $("#logo-header").removeClass("hidden"), $("#text-header").addClass("hidden") )

                    $('#span-logo').addClass('text-principal-logo')

                    if ((t >= 0 ? $(".milestones").addClass("show") : $(".milestones").removeClass("show"), window.innerHeight + window.scrollY >= document.body.scrollHeight)) return !0;
                    document.body.getBoundingClientRect().top > e && 0 !== t ? ($("header").addClass("sticky"), $("#header-placeholder").show()) : ($("header").removeClass("sticky"), $("#header-placeholder").hide()),(e = document.body.getBoundingClientRect().top);
                }
                $(".ebook").length && (t >= $(".main-title").offset().top ? $(".ebook").addClass("show") : $(".ebook").removeClass("show"));
            }),
            $(".hero").length)
        ) {
            let e = $(".hero .container-in").offset().left;
            $(".stripe-left").css("width", e + 15), $(".stripe-right").css("width", e + 15), $(".capt").css("right", e + 15), $(".ebook").css("right", e - 180), $("#title-col").css("left", e + 20);
        }
    })
    .resize();
  },
  methods: {
    setValidSectionOver(data){
        this.validSectionOver = data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>