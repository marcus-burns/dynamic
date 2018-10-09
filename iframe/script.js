var Banner = Banner || {};


Banner.init = function(){
 Banner.animate();       
};


Banner.animate = function(){
        
	var timeline = new TimelineLite();
    
	timeline.timeScale( 1 );
    
    //timeline.to('#picture1', 0.0, {scale:0.25, x:-560, y:-373});             
    //timeline.to('#picture1', 0.0, {autoAlpha:1});    
   
    
    timeline.set({},{},"+=0.1");
      
    
    
    timeline.to('#pink', 0.0, {top:-50});
    
    timeline.to('#pink', 0.0, {opacity:1});
    
    timeline.to('#pink', 0.5, {top:0});
    
    timeline.to('#t1', 0.5, {opacity:1});
    
    timeline.set({},{},"+=0.25");
    
    timeline.to('#t2', 0.5, {opacity:1});
    
    timeline.set({},{},"+=0.25");
    
    timeline.to('#i1', 0.5, {opacity:1}, "a");
    timeline.to('#i1', 2.0, {scale:1.1, transformOrigin:"50px"}, "a");
    
    //timeline.set({},{},"+=0.5");
    
    timeline.to('#i2', 0.5, {opacity:1}, "b");
    timeline.to('#i2', 2.0, {scale:1.1, transformOrigin:"50px"}, "b");
    
    timeline.to('#i1', 0.0, {opacity:0});
    timeline.to('#logo', 0.0, {top:-11});
    timeline.to('#endimg', 0.0, {opacity:1});
    timeline.to('#cta', 0.0, {autoAlpha:1});
    
    timeline.to('#i2', 0.5, {opacity:0}, "c");
    timeline.to('#t1', 0.5, {opacity:0}, "c");
    timeline.to('#t2', 0.5, {opacity:0}, "c");
    timeline.to('#pink', 0.5, {top:50}, "c");
    
    timeline.set({},{},"+=0.25");
    
    timeline.to('#endtxt', 0.5, {opacity:1});
    
    
    
    //timeline.seek(5.85);  
	console.log(timeline.duration());	
}
