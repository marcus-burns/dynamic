var Banner = Banner || {};


Banner.init = function(){
 Banner.animate();       
};


Banner.animate = function(){
        
	var timeline = new TimelineLite();
    
	timeline.timeScale( 1 );
       
    timeline.to('#ss1', 0, {autoAlpha:1}); 
    
    timeline.to('#ss', 0, {autoAlpha:0}); 
    
    timeline.to('#ss1', 9, {y:-6550, ease:SteppedEase.config(131), repeat:0}); 
        
    timeline.to('#ss1', 0.5, {autoAlpha:0}); 
    
    timeline.to('#cta', 0.666, {x:-130, ease: Power1.easeOut}, "a"); 
    
    timeline.to('#logo', 0.666, {x:-130, ease: Power1.easeOut}, "a"); 
    
    timeline.to('#text1', 0.5, {autoAlpha:1, delay:0.5}, "a");
    
    
    //timeline.seek(5.85);  
	console.log(timeline.duration());	
}
