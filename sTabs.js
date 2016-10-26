(function($){$.fn.sTabs = function(options){
   var settings = $.extend({
        liClass: "sTabsLi",
        activeClass: "sTabsLiActive",
        contentClass: "sTabsContent",
    }, options);

    $.each(this.find('ul li'), function(key, i){
        $($(i).addClass(settings.liClass).find('a').attr('href')).addClass(settings.contentClass).hide();
            $(i).on("click", function() {
                $('.'+settings.liClass).removeClass(settings.activeClass);
                $(this).addClass(settings.activeClass);
                $('.'+settings.contentClass).hide();
                $($(this).find('a').attr('href')).show();
            });
    });
    $(this.find('ul li').first().addClass(settings.activeClass).find('a').attr('href')).show();
  return this;
}})(jQuery);
