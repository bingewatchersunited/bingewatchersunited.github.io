(function(window){
    function Timer(callback){
        if (!(this instanceof Timer)) return new Timer(callback);

        this.remaining = 0;
        this.start = 0;
        this.limit = 5;
        this.active = false;
        this.paused = false;
        this.stopped = false;
        this.leadingZeros = false;
        this.padNumbers = false;
        this.$targetElem = null;
        this.interval = null;
        this.time = {};

        if (typeof callback === "function") callback.call(this);

        return this.process();
    }

    Timer.prototype.constructor = Timer;

    Timer.prototype.process = function(){
        // Years
        this.time["years"] = {
            active: false,
            value: 31536000,
            curr: 0
        };
        // Months
        this.time["months"] = {
            active: false,
            value: 2628000,
            curr: 0
        };
        // Weeks
        this.time["weeks"] = {
            active: false,
            value: 604800,
            curr: 0
        };
        // Days
        this.time["days"] = {
            active: false,
            value: 86400,
            curr: 0
        };
        // Hours
        this.time["hours"] = {
            active: false,
            value: 3600,
            curr: 0
        };
        // Minutes
        this.time["minutes"] = {
            active: true,
            value: 60,
            curr: 0
        };
        // Seconds
        this.time["seconds"] = {
            active: true,
            value: 1,
            curr: 0
        };
    };

    Timer.prototype.calculate = function(callback){
        var rem = 0 + this.remaining, k = Object.keys(this.time);

        while (k.length){
            var time = k.shift(), 
                obj = this.time[time];
            
            if (!obj.active) continue;

            var value = obj.value;

            obj.curr = parseInt(this.remaining / value, 10);

            rem = rem % value;
        }

        if (typeof callback === "function") callback.call(this);
    };

    Timer.prototype.setElement = function(element){
        if (element instanceof jQuery){
            this.$targetElem = element;
        } else {
            this.$targetElem = $(element);
        }
    };

    Timer.prototype.convert = function(){
        var k = Object.keys(this.time);

        while (k.length){
            var key = k.shift(), c = this.time[key],
                $target = this.$targetElem.find("[data-time=" + key + "");
            
            if (!$target.length) continue;

            var curr = c.curr, $elem = null, v = curr;

            if (curr >= Math.pow(10, this.limit)){
                $elem = $("<div>", { "class": "emp" });

                var $e = [];

                var $m = $("<em>"), $n = $("<sup>");

                var e = this.toExponential(curr, this.limit),
                    m = 0, n = 1;
                
                if (typeof e === "number"){
                    m = e;
                    if (m >= 0) v = m;
                    else v = 1;
                } else {
                    m = e[0];
                    n = e[1];
                    if (n > 1){
                        $m.text(m);
                        $n.text(n);

                        $e.push($m, $n);

                        $target.html($elem.html($e));
                        continue;
                    } else v = n;
                }
            }

            $elem = $("<em>").text(this.pad(v));

            $target.html($elem);
        }
    };

    Timer.prototype.pad = function(n){
        if (!this.padNumber) return n;

        if (parseInt(n, 10) < 10) n = "0" + n;

        return n;
    };

    Timer.prototype.toExponential = function(n, limit){
        var x = n;

        if (n >= Math.pow(10, limit)){
            x = parseFloat(n).toExponential(2).split("e").map(Number);
            x = x.filter((_n) => !isNaN(_n) || isFinite(_n));

            if (x.length === 1) x[1] = 1;

            if (x[1] === 1) x = x[0];
            else if (x[1] === 0) x = 1;
        }

        return x;
    };

    Timer.prototype.parse = function(){
        var k = Object.keys(this.time);

        while (k.length){
            var key = k.shift(), 
                $target = this.$targetElem.find("[data-time=" + key + "]");
            
            if (!$target.length) continue;

            var value = 0;
            if ($target.find(".exp > sup").length){
                var $r = $target.find(".exp"),
                    m = $r.children("em").text(),
                    n = $r.children("sup").text();
                
                m = Number(m);
                n = parseInt(n, 10);

                if (isNaN(m)) continue;
                if (isNaN(n)) n = 1;

                var x = Math.pow(m, n);

                if (isNaN(x) || x < 0) continue;

                value = v;
            } else {
                value = parseInt($target.text(), 10);

                if (isNaN(value) || value < 0) continue;
            }
            var t = this.time[key], v = t.value;

            this.start += (value * v);
        }
    };

    Timer.prototype.activate = function(name){
        return this.validate(function(){
            if (!(name in this.time)) return;
            var c = this.time[name];

            if (c.active) return;

            c.active = true;

            return c;
        });
    };

    Timer.prototype.deactivate = function(name){
        return this.validate(function(){
            if (!(name in this.time)) return;

            var c = this.time[name];

            if (!c.active) return;

            c.active = false;

            return c;
        });
    };

    Timer.prototype.toggle = function(name){
        return this.validate(function(){
            if (!(name in this.time)) return;

            var c = this.time[name];

            if (!c.active) return this.activate(name);
            else return this.deactivate(name);
        });
    };

    Timer.prototype.start = function(){
        return this.validate(function(){
            this.active = true;
            this.interval = setInterval(() => {
                this.parse();
                this.time--;
                this.update();
            }, 1000);
        });
    };

    Timer.prototype.pause = function(){
        return this.validate(function(){
            clearInterval(this.interval);
            this.interval = null;
            this.active = false;
            this.paused = true;
        });
    };

    Timer.prototype.stop = function(){
        
    };
})(this === window ? this : window);