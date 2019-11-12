(function(window){
    function safeJSONparse(string){
        var res = string;

        try {
            res = res.replace(/\/\*/g, "").trim();
            res = JSON.parse(string);
        } catch (ignore){ res = string; }

        return res;
    }

    function JeopardyBoard(){
        if (!(this instanceof JeopardyBoard)) return new JeopardyBoard();

        this.currRound = 0;
        this.teams = [];
        this.teamCount = 0;
        this.rounds = [];
        this.cols = 6;
        this.rows = 5;
        this.allowWager = false;
        this.maxWager = 1000000;
        this.isWinningTeam = -1;
        
        return this;
    }

    JeopardyBoard.prototype.constructor = JeopardyBoard;

    JeopardyBoard.prototype.load = function(){
        var storage = localStorage.getItem("JeopardyBoard");

        if (typeof (storage = safeJSONparse(storage)) === "object"){
            storage = Object.assign({}, storage);
        } else storage = Object.create(null);
    };

    JeopardyBoard.prototype.generateTeam = function(name){
        var storage = this.load(), team = null;

        if (team in storage){ team = storage[name]; } 
        else { team = {}; }

        return team;
    };

    JeopardyBoard.prototype.addTeam = function(name){
        var team = this.generateTeam(name);
        this.setDefaults(team);

        this.teamCount = this.teams.push(team);
    };

    JeopardyBoard.prototype.removeTeam = function(name){
        var team = this.getTeam(name);

        if (team !== null){
            var index = team.index;

            this.teamCount = this.teams.splice(index, 1);
        } else return;
    };
})(this === window ? this : window);