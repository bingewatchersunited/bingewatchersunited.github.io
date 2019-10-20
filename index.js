(function(window){
    function BWUNavigation(){
        this.$navigation = $("#bwu-navigation");
        this.$activeElem = null;
    }

    BWUNavigation.prototype.constructor = BWUNavigation;

    (function(){
        this.add = function(item){
            if (!this.$navigation.length) return;

            var $item = $("<li>", { "class": "bwu-nav__item" }),
                $link = $("<a>", { "class": "bwu-nav__link" }),
                handler = null, text = null, id = null, children = [];
            
            if ("handler" in item){
                var h = item.handler;
                if (typeof h === "function"){
                    h = this.makeClickFn(h);
                    $link.attr("href", "#").on("click", h);
                } else {
                    $link.attr("href", h);
                }
            }

            $item.append($link);
        };
    }).call(BWUNavigation.prototype);
})(this === window ? this : window);