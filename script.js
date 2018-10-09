var Banner = Banner || {};


Banner.init = function(){
 Banner.animate();       
};


Banner.animate = function(){
        
	var timeline = new TimelineLite();
    
	timeline.timeScale( 1 );
    
    // initial params //
    
    
    timeline.to('#footer', 0.0, {autoAlpha:1});
    
    timeline.to('#ss', 3, {y:-5330, ease:SteppedEase.config(26), repeat:0}, 'spriteseq'); 
    
    //timeline.to('#ssfade', 0.5, {autoAlpha:1, delay:2.5}, 'spriteseq'); 
    
     
    
    //timeline.to('#line', 0.5, {autoAlpha:0}, "e");
    //
    timeline.to('#ss', 0.0, {autoAlpha:0}); 
    timeline.to('#topper', 0.0, {autoAlpha:1});
    
    
    timeline.to('#pic1', 0.5, {autoAlpha:1}, "a");
    timeline.to('#pic1', 2.0, {scale:1.05}, "a");
    timeline.to('#t1', 0.75, {autoAlpha:1}, "a");
    timeline.to('#pic1', 0.15, {autoAlpha:0, delay:1.85}, "a");
    
    
    timeline.to('#pic2', 0.5, {autoAlpha:1}, "b");
    timeline.to('#pic2', 2.0, {scale:1.05}, "b");
    timeline.to('#pic2', 0.15, {autoAlpha:0, delay:1.85}, "b");
    
    
    timeline.to('#pic3', 0.5, {autoAlpha:1}, "c");
    timeline.to('#pic3', 2.0, {scale:1.05}, "c");
    
    
    timeline.to('#white', 0.5, {autoAlpha:1}); 
    
    timeline.to('#pic1', 0.0, {autoAlpha:0}, "e");
    timeline.to('#pic2', 0.0, {autoAlpha:0}, "e");
    timeline.to('#pic3', 0.0, {autoAlpha:0}, "e");
    timeline.to('#t1', 0.0, {autoAlpha:0}, "e");
    
    timeline.to('#topper', 0.0, {autoAlpha:0}, "e");
    
    
    timeline.set({},{},"+=0.1");
    
    
    
    timeline.to('#endimg', 0.75, {autoAlpha:1, ease: Power4.easeOut, scale:1.0, transformOrigin: "center center"}, "h");
    timeline.to('#logo', 0.75, {autoAlpha:1}, "h");
    
    
    timeline.set({},{},"+=0.25");
    
    timeline.to('#txt1', 0.75, {autoAlpha:1});
    timeline.to('#txt2', 0.75, {autoAlpha:1, delay:0.2});
    
    timeline.set({},{},"+=0.25");
    timeline.to('#cta', 0.75, {autoAlpha:1});
    

    //timeline.seek(8);  
	console.log(timeline.duration());	
}
