 /** @class  */
var Person = Class.create(
    /**
      @lends Person.prototype
    */
    {
        initialize: function (name) {
            this.name = name;
        },
        say: function (message) {
            return this.name + ': ' + message;
        },
        /** like say but more musical */
    	sing: function(song) {
    	}
    },
    /** @lends Person */
    {
    	getCount: function() {
    	}
    }
 );