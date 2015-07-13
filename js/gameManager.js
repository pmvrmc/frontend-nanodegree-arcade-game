var GameManager = (function(){
    var instance;

    function init(){
        var _gameWidth = 505;
        var _gameHeight = 606;
        var _nCols = 5;
        var _sizeCols = 101;
        var _nRows = 6;
        var _sizeRows = 83;
        var _nEnemies = 5;

        return {
            getNCols: function(){
                return _nCols;
            },
            getNRows: function(){
                return _nRows;
            },
            getSizeCols: function(){
                return _sizeCols;
            },
            getSizeRows: function(){
                return _sizeRows;
            },
            getGameWidth: function(){
                return _gameWidth;
            },
            getGameHeight: function(){
                return _gameHeight;
            },
            getNEnemies: function(){
                return _nEnemies;
            }
        };
    };

    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        },
    }
})();
