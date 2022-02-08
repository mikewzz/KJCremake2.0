$(document).ready(function() {

    $("#header").load("header.html");
    $("#footer").load("footer.html");

    // $('.opening-hours li').eq(new Date().getDay()).addClass('today');

    $('#myNav a[href^="#"], .navArea a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-66.25
        }, 300);

        return false;
    });

//code to close navbar on click of link or anywhere on page
    $('.navbar a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    // $(document).on('click', function(){
    //     $('.navbar-collapse').collapse('hide');
    // });
    // $(function() {
    //   $(document).click(function (event) {
    //     $('.navbar-collapse').collapse('hide');
    //   });
    // });
    // $(document).click(function (event) {
    //     var clickover = $(event.target);
    //     var _opened = $(".navbar-collapse").hasClass("navbar-collapse");
    //     if (_opened === true && !clickover.hasClass("navbar-toggler")) {
    //         $("button.navbar-toggler").click();
    //     }
    // });

    $(document).click(function (event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");               
        var _opened = $navbar.hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {      
            $navbar.collapse('hide');
        }
    });
//reveal elements on scroll animation
    $(function() {

      var $window           = $(window),
          win_height_padded = $window.height(),
          isTouch           = Modernizr.touch;

      if (isTouch) { $('.revealOnScroll').addClass('animated'); }

      $window.on('scroll', revealOnScroll);

      function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height();

        // Showed...
        $(".revealOnScroll:not(.animated)").each(function () {
          var $this     = $(this),
              offsetTop = $this.offset().top;

          if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated ' + $this.data('animation'));
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated ' + $this.data('animation'));
            }
          }
        });
        // Hidden...
       $(".revealOnScroll.animated").each(function (index) {
          var $this     = $(this),
              offsetTop = $this.offset().top;
          if (scrolled == 0) {
            $(this).removeClass('animated fadeIn fadeInUp fadeInRight fadeInLeft fadeInDown')
          }
          // if (scrolled > $(this).height() + offsetTop) {
          //   $(this).removeClass('animated fadeInUp bounceInLeft lightSpeedIn');
          // } 
        });

        }

        // revealOnScroll();
    });
});

