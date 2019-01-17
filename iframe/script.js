var Banner = Banner || {};


Banner.init = function(){
 Banner.animate();       
};


Banner.animate = function(){
        
    
    var timeline = new TimelineLite();    
	timeline.timeScale( 1 );
    
    
    timeline.to('#icons', 0.0, {scale:0.4, x:71, y:-28});    
    
    
    timeline.to('#eco_std', 0.0, {left:37.5});    
    timeline.to('#auto_std', 0.0, {left:117.5});    
    timeline.to('#boost_std', 0.0, {left:197.5});
        
    timeline.to('#eco_alt', 0.0, {left:296.25});    
    timeline.to('#auto_alt', 0.0, {left:417.5});    
    timeline.to('#boost_alt', 0.0, {left:497.5});
    
    
    timeline.to('#logo2', 0.125, {autoAlpha:1}, "init");
    timeline.set({},{},"+=0.45");
    timeline.to('#logo2', 0.24, {autoAlpha:0}, "xfade");
    
    timeline.to('#ss_start', 0.3, {autoAlpha:1}, "xfade");
    
    
    timeline.set({},{},"+=0.05");
    
    
    timeline.to('#ss_middle', 0.0, {autoAlpha:1});    
    timeline.to('#ss_middle', 1.6, {y:-1700, ease:SteppedEase.config(34), repeat:0});    
    timeline.to('#ss_end', 0.125, {autoAlpha:1});
    
    
    timeline.set({},{},"+=0.235");
    
    
    
    
    timeline.to('#black3', 0.5, {autoAlpha:1}, "ab");
    
    
    
    
    timeline.to('#ss_start', 0.0, {autoAlpha:0});
    timeline.to('#ss_middle', 0.0, {autoAlpha:0});
    timeline.to('#ss_end', 0.0, {autoAlpha:0});    
    
    
    
    
    timeline.to('#slide', 0.25, {autoAlpha:1}, "slider");    
    timeline.to('#slide', 1.75, {scale:1.1, ease: Power1.easeInOut}, "slider");
    timeline.to('#slide', 0.25, {delay:1.5, autoAlpha:0}, "slider"); 
    
    timeline.to('#black', 0.0, {autoAlpha:1});
    
    timeline.to('#icons', 0.3, {autoAlpha:1}, "c"); 
    
    
    timeline.to('#txt1', 0.3, {autoAlpha:1, delay:0.1}, 'mode1');
    timeline.to('#eco_std', 0.5, {left:18.75, ease: Power1.easeIn}, 'mode1');    
    timeline.to('#auto_std', 0.5, {scale:1.5, ease: Power1.easeIn}, 'mode1');    
    timeline.to('#boost_std', 0.5, {left:216.25, ease: Power1.easeIn}, 'mode1');
        
    timeline.to('#auto_mag', 0.1, {autoAlpha:1, delay:0.0});    
    timeline.to('#auto_std', 0.1, {scale:1.0});
    
    
    
    timeline.set({},{},"+=0.5");
    timeline.to('#z1', 0.35, {autoAlpha:1}, "i1");
    timeline.to('#z1', 1.85, {scale:1.04}, "i1");
    timeline.to('#z1', 0.5, {autoAlpha:0, delay:1.35}, "i1");
    timeline.to('#txt1', 0.5, {autoAlpha:0, delay:1.35}, "i1"); 
    
    
    
    timeline.to('#txt2', 0.35, {autoAlpha:1}, 'mode2');
    
    
    
    timeline.to('#eco_std', 0.5, {left:-61.25, ease: Power1.easeIn}, 'mode2');    
    timeline.to('#auto_std', 0.5, {left:18.75, ease: Power1.easeIn}, 'mode2');    
    timeline.to('#boost_std', 0.5, {left:117.5, ease: Power1.easeIn}, 'mode2');    
    timeline.to('#eco_alt', 0.5, {left:216.25, ease: Power1.easeIn}, 'mode2');    
    timeline.to('#auto_alt', 0.5, {left:296.25, ease: Power1.easeIn}, 'mode2');    
    timeline.to('#auto_mag', 0.5, {left:-125, ease: Power1.easeIn}, 'mode2');    
    timeline.from('#boost_mag', 0.5, {left:125, ease: Power1.easeIn}, 'mode2');    
    timeline.to('#boost_mag', 0.0, {autoAlpha:1}, 'mode2');
    
    
    timeline.set({},{},"+=0.5");
    timeline.to('#z2', 0.35, {autoAlpha:1}, "i2");
    timeline.to('#z2', 1.85, {scale:1.04}, "i2");
    timeline.to('#z2', 0.5, {autoAlpha:0, delay:1.35}, "i2");
    timeline.to('#txt2', 0.5, {autoAlpha:0, delay:1.35}, "i2"); 
    
    
    timeline.to('#txt3', 0.35, {autoAlpha:1}, 'mode3');
    
    
    
    timeline.to('#auto_std', 0.5, {left:-61.25, ease: Power1.easeIn}, 'mode3');    
    timeline.to('#boost_std', 0.5, {left:18.75, ease: Power1.easeIn}, 'mode3');    
    timeline.to('#eco_alt', 0.5, {left:117.5, ease: Power1.easeIn}, 'mode3');    
    timeline.to('#auto_alt', 0.5, {left:216.25, ease: Power1.easeIn}, 'mode3');    
    timeline.to('#boost_alt', 0.5, {left:296.25, ease: Power1.easeIn}, 'mode3');    
    timeline.to('#boost_mag', 0.5, {left:-125, ease: Power1.easeIn}, 'mode3');    
    timeline.from('#eco_mag', 0.5, {left:125, ease: Power1.easeIn}, 'mode3');    
    timeline.to('#eco_mag', 0.0, {autoAlpha:1}, 'mode3');
    
    
    timeline.set({},{},"+=0.5");
    timeline.to('#z3', 0.35, {autoAlpha:1}, "i3");
    timeline.to('#z3', 1.75, {scale:1.04}, "i3");
    timeline.to('#icons', 0.0, {autoAlpha:0, delay:1.0}, "i3");
    
    
    
   
    timeline.set({},{},"+=0.1");
    
    
    
    timeline.to('#white3', 0.333, {autoAlpha:1}, "i4");    
    
    timeline.to('#z3', 0, {autoAlpha:0});
    timeline.to('#txt3', 0, {autoAlpha:0}); 
    
    timeline.to('#logo1', 0.3, {autoAlpha:1}, "r1");
    timeline.to('#cta', 0.3, {autoAlpha:1}, "r1");   
    timeline.to('#claim', 0.3, {autoAlpha:1}, "r1"); 
    
    
    timeline.set({},{},"+=1.4");
    
    timeline.to('#claim', 0.3, {autoAlpha:0});
    
    
    
    timeline.to('#end', 0.3, {autoAlpha:1}); 
      
    //timeline.seek(9.0);  
	console.log(timeline.duration());	
}
function showMessages(message1){
  console.log(message1);
}
