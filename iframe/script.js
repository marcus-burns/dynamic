var Banner = Banner || {};


Banner.init = function(){
 Banner.animate();       
};


Banner.animate = function(){
        
	var timeline = new TimelineLite();
    
	timeline.timeScale( 1 );
       
    timeline.to('#ss1', 0, {autoAlpha:1}); 
    
    timeline.to('#ss1', 11, {y:-7950, ease:SteppedEase.config(159), repeat:0}); 
        
    //timeline.seek(5.85);  
	console.log(timeline.duration());	
}
