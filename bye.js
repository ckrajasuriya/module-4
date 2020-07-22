(function (window){
    byespeaker=new Object();
    byespeaker.speak= function(name){
        console.log("GOOD BYE "+ name);
    }
    window.byespeaker=byespeaker;
})(window);