(function(window){
    function BWUNavigation(){
        this.$navigation = $("#bwu-navigation");
        this.$activeElem = null;
    }

    BWUNavigation.prototype.constructor = BWUNavigation;

    (function(){
        function noop(){}

        this.makeClickFn = function(callback){
            if (arguments.length === 0) callback = noop;

            return function(event){
                event.preventDefault();

                callback.call(this, event);
            };
        };

        this.add = function(item){
            if (!this.$navigation.length) return;

            var $item = $("<li>", { "class": "bwu-nav__item" }),
                $link = $("<a>", { "class": "bwu-nav__link" }),
                handler = null, text = null, id = null, children = [];
            
            if ("handler" in item){
                handler = item.handler;
                if (typeof handler === "function"){
                    handler = this.makeClickFn(h);
                    $link.attr("href", "#").on("click", handler.bind(this));
                } else {
                    $link.attr("href", handler);
                }
            }

            if (handler === null) $link.attr("href", "#").on("click", this.makeClickFn());

            $item.append($link);

            if ("text" in item){
                text = item.text;
                $link.text(text);
            }

            if ("id" in item){
                id = item.id;
                $item.attr("id", id);
            }

            if ("children" in item){
                if (item.children instanceof Array){
                    var c = [].slice.call(item.children);

                    while (c.length) children.push(c.shift());

                    var $subnav = this.createSubnav(children);

                    $item.append($subnav);
                }
            }
        };

        this.createSubnav = function(children, level){
            if (typeof level !== "number" || level < 1) level = 1;

            var wrapper_cl = "bwu-nav__subnav" + (level > 1 ? level : ""),
                subnav_cl = "bwu-subnav" + (level > 1 ? level : ""),
                $wrapper = $("<nav>", { "class": wrapper_cl }),
                $subnav = $("<ul>", { "class": subnav_cl });
            
            $wrapper.append($subnav);
            
            var c = [].slice.call(children);

            while (c.length){
                var item = c.shift();

                var $item = $("<li>", { "class": subnav_cl + "__item" }),
                    $link = $("<a>", { "class": subnav_cl + "__link" }),
                    handler = null, text = null, id = null, children = [];
                
                if ("handler" in item){
                    handler = item.handler;
                    if (typeof handler === "function"){
                        handler = this.makeClickFn(h);
                        $link.attr("href", "#").on("click", handler.bind(this));
                    } else {
                        $link.attr("href", handler);
                    }
                }
    
                if (handler === null) $link.attr("href", "#").on("click", this.makeClickFn());
    
                $item.append($link);
    
                if ("text" in item){
                    text = item.text;
                    $link.text(text);
                }
    
                if ("id" in item){
                    id = item.id;
                    $item.attr("id", id);
                }
    
                if ("children" in item){
                    if (item.children instanceof Array){
                        var c = [].slice.call(item.children);
    
                        while (c.length) children.push(c.shift());
    
                        var $subnavc = this.createSubnav(children, level++);
    
                        $item.append($subnavc);
                    }
                }

                $subnav.append($item);
            }

            return $wrapper;
        };
    }).call(BWUNavigation.prototype);
})(this === window ? this : window);