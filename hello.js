(function (window){
    var hellospeaker=new Object();
    hellospeaker.speak= function(name)
    {
        console.log("Hello " + name);
    }
    window.hellospeaker=hellospeaker;
})(window);