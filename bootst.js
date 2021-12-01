function elem(id){
	var element = document.getElementById(id);
	return element;
}
/* tuner functions */
function pickString(thisString){
	if(pick == true) clickString(thisString);
}
function clickString(thisString) {
	elem('title_s').className='imgTitle';
	elem(thisString).className = "string";
	window[thisString].currentTime = 0;
	window[thisString].play();
	var thisNote = thisString+"Note";
	elem(thisString).className = "string playingSound";
	elem(thisNote).className = "lightOn";
	setTimeout(function(){ 		
		if(window[thisString].loop != true){
			elem(thisString).className = "string";
			elem(thisNote).className = "lightOff";
			if(document.querySelectorAll('.playingSound').length==0){
				elem('title_s').className='';
			}
		}
	}, 3500);
	
}
	function holdSound(){
	if(s1.loop != true){
		s1.loop = s2.loop = s3.loop = s4.loop = s5.loop = s6.loop = true;
		elem('btnHold').className = "active";
	} else {
		s1.loop = s2.loop = s3.loop = s4.loop = s5.loop = s6.loop = false;
		elem('btnHold').className = "inactive";
		s1.pause(); s2.pause(); s3.pause(); s4.pause(); s5.pause(); s6.pause();	
		stopStrings();
	}
}
function stopStrings(){
	elem('title_s').className='';
	s1.pause(); s2.pause(); s3.pause(); s4.pause(); s5.pause(); s6.pause();
	var auxString = document.querySelectorAll('.playingSound');	
	for (var x in auxString) {
		if(auxString[x]!==undefined){
			auxString[x].className = "string";
		}
	}
	var auxNote = document.querySelectorAll(".lightOn");
	for (x in auxNote) {
		if(auxNote[x]!==undefined){
			auxNote[x].className = "lightOff";
		}
	}
}
function usePick(){
	var x = elem('btnPick').className;
	if(x == 'inactive'){
		elem('btnPick').className = 'active';
		pick = true;
		elem("guitarBody").className = 'pickActive';	
	} else {
		elem('btnPick').className = 'inactive';
		pick = false;
		elem("guitarBody").className = '';	
	}
}
/* ON LOAD */
(function() {
	setTimeout(function(){ 		
		clickString('s4');
	}, 500);
})();
function kunci(elm){
  	document.getElementById('.string');
  	var thk = this.value;
  	var vlbs = "<b>String</b>"+"&nbsp;";   
  	document.getElementById('abcd').innerHTML = vlbs + elm.value; 
  }
function ngls(){
   var scb = document.getElementById('ojk');
   var ojk = scb.options[scb.selectedIndex];     	
   
if(scb.value == 'tns1') {
    document.getElementById('modTun').innerHTML = "Standard Tuning"; 
    document.getElementById('s1').value = "1 = <strong>e4</strong>";
    document.getElementById('s2').value = "2 = <strong>B3</strong>";
    document.getElementById('s3').value = "3 = <strong>G3</strong>";
    document.getElementById('s4').value = "4 = <strong>D3</strong>";
   	document.getElementById('s5').value = "5 = <strong>A2</strong>";
    document.getElementById('s6').value = "6 = <strong>E2</strong>";
    s1 = new Audio('https://dl.dropbox.com/s/g8ha96eots9ysmf/doebcekd.ogg?dl=0');
    s2 = new Audio('https://dl.dropbox.com/s/w6avzx8zo77t01q/kqycrbfn.ogg?dl=0');
    s3 = new Audio('https://dl.dropbox.com/s/xwaju2f94qpr443/faiufcgfm.ogg?dl=0');
    s4 = new Audio('https://dl.dropbox.com/s/y3j0a084p2a8oes/aktxydzd.ogg?dl=0');
    s5 = new Audio('https://dl.dropbox.com/s/2xtumwjlm1dhyhq/amtxauv.ogg?dl=0');
    s6 = new Audio('https://dl.dropbox.com/s/wa4e1t9ue99j14d/ucvxdEzd.ogg?dl=0');
}
 else if(scb.value == 'tns2') { 
       document.getElementById('s1').value = "1 = <strong>d#4</strong>";
    document.getElementById('s2').value = "2 = <strong>A#3</strong>";
    document.getElementById('s3').value = "3 = <strong>F#3</strong>";
    document.getElementById('s4').value = "4 = <strong>C#3</strong>";
   	document.getElementById('s5').value = "5 = <strong>G#2</strong>";
    document.getElementById('s6').value = "6 = <strong>D#2</strong>";
       document.getElementById('modTun').innerHTML = "E Flat";      
  s1 = new Audio('https://dl.dropbox.com/s/wbahltv0ezojxhh/rxfvg.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/wyllf74pm5je8s1/txhidg.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/q3qhaj23t8o9vhe/bixtcc.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/dvyw5xlhyd2grud/ygzycy.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/467gijts395lvex/tcyvxr.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/9itg6i91x092rpd/rzrxxt.ogg?dl=0');
} 
 else if(scb.value == 'tns3') { 
       document.getElementById('s1').value = "1 = <strong>f4</strong>";
    document.getElementById('s2').value = "2 = <strong>C4</strong>";
    document.getElementById('s3').value = "3 = <strong>G#3</strong>";
    document.getElementById('s4').value = "4 = <strong>D#3</strong>";
   	document.getElementById('s5').value = "5 = <strong>A#2</strong>";
    document.getElementById('s6').value = "6 = <strong>F2</strong>";
        document.getElementById('modTun').innerHTML = "First Fret";     
  s1 = new Audio('https://dl.dropbox.com/s/3e9ow4ptobn8vw1/rcfubx.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/uvekx8o52s11hw2/wibxfn.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/dfuxjwcm0okt3ml/uezhv.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/ur1q2mh8ni38eo8/rxuvsr.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/juxxt379ntp49r3/urzru.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/r4x1q9e5kd4qafw/tcyccy.ogg?dl=0');   
}
 else if(scb.value == 'tns4') { 
     document.getElementById('s1').value = "1 = <strong>f#4</strong>";
    document.getElementById('s2').value = "2 = <strong>C#4</strong>";
    document.getElementById('s3').value = "3 = <strong>A3</strong>";
    document.getElementById('s4').value = "4 = <strong>E3</strong>";
   	document.getElementById('s5').value = "5 = <strong>B2</strong>";
    document.getElementById('s6').value = "6 = <strong>F#2</strong>";
       document.getElementById('modTun').innerHTML = "Second Fret";
      s1 = new Audio('https://dl.dropbox.com/s/arrt5l06kdczmn2/knEzm.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/ia30evx2y0igba9/otxgcR.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/smc501j7rsxh56q/oqpxF.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/e18x1g8jx5st0mj/kwfxjb.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/tdr2wmdlruylssn/iqinxe.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/pxxbnmw9xm514jk/utxzgg.ogg?dl=0');   
} 
 else if(scb.value == 'tns5') { 
      document.getElementById('s1').value = "1 = <strong>g4</strong>";
    document.getElementById('s2').value = "2 = <strong>D4</strong>";
    document.getElementById('s3').value = "3 = <strong>A#3</strong>";
    document.getElementById('s4').value = "4 = <strong>F3</strong>";
   	document.getElementById('s5').value = "5 = <strong>C3</strong>";
    document.getElementById('s6').value = "6 = <strong>G2</strong>";
        document.getElementById('modTun').innerHTML = "Third Fret";
        s1 = new Audio('https://dl.dropbox.com/s/zhu4vs87dixeddc/lqdtxf.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/57vitiz6lry9kcs/pqzfzd.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/xi6vdy1xn1gy9qj/txhidg.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/35qw7y40mifz330/owxts.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/007voq7l7w2d60l/lqxgm.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/rv5cdd8m2zru2ax/jbrxtc.ogg?dl=0');   
}
 else if(scb.value == 'tns6') { 
     document.getElementById('s1').value = "1 = <strong>e4</strong>";
    document.getElementById('s2').value = "2 = <strong>C4</strong>";
    document.getElementById('s3').value = "3 = <strong>G3</strong>";
    document.getElementById('s4').value = "4 = <strong>C3</strong>";
   	document.getElementById('s5').value = "5 = <strong>G2</strong>";
    document.getElementById('s6').value = "6 = <strong>C2</strong>";
      document.getElementById('modTun').innerHTML = "Open C";
      s1 = new Audio('https://dl.dropbox.com/s/2oca6efjd6pvw9t/doebcekd.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/wj17aj0nweieh65/wibxfn.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/3tnxcjqwyze3mnp/faiufcgfm.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/gdzvhbw1i3xpxjz/lqxgm.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/tnh9cu5y4utabgo/jbrxtc.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/vrl1pzyt3b8935s/qkxrx.ogg?dl=0');   
} 
 else if(scb.value == 'tns7') { 
    document.getElementById('s1').value = "1 = <strong>d4</strong>";
    document.getElementById('s2').value = "2 = <strong>A3</strong>";
    document.getElementById('s3').value = "3 = <strong>F#3</strong>";
    document.getElementById('s4').value = "4 = <strong>D3</strong>";
   	document.getElementById('s5').value = "5 = <strong>A2</strong>";
    document.getElementById('s6').value = "6 = <strong>D2</strong>";
      document.getElementById('modTun').innerHTML = "Open D";
    s1 = new Audio('https://dl.dropbox.com/s/sj4ehvwc4l2lz4o/pqzfzd.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/11prbo9bf2870rw/oqpxF.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/tpecifyg536h34b/bixtcc.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/alkkv1dyvw19hhm/aktxydzd.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/56a4gk9sfo3m5j2/amtxauv.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/9efdy6rpe9ac1ig/bgazd.ogg?dl=0');   
  }
  else if(scb.value == 'tns8') { 
     document.getElementById('s1').value = "1 = <strong>d4</strong>";
    document.getElementById('s2').value = "2 = <strong>B3</strong>";
    document.getElementById('s3').value = "3 = <strong>G3</strong>";
    document.getElementById('s4').value = "4 = <strong>D3</strong>";
   	document.getElementById('s5').value = "5 = <strong>G2</strong>";
    document.getElementById('s6').value = "6 = <strong>D2</strong>";
        document.getElementById('modTun').innerHTML = "Open G";
    s1 = new Audio('https://dl.dropbox.com/s/exibzw3yuwu11ip/pqzfzd.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/ok3j08eab4xugs4/kqycrbfn.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/ta7ydy1yfy8ww61/faiufcgfm.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/m0edkrvkucr3mze/aktxydzd.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/0436zqkj7ci59rc/jbrxtc.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/al8izna9ifrll99/bgazd.ogg?dl=0');         
    } 
  else if(scb.value == 'tns9') { 
     document.getElementById('s1').value = "1 = <strong>d4</strong>";
    document.getElementById('s2').value = "2 = <strong>A3</strong>";
    document.getElementById('s3').value = "3 = <strong>G3</strong>";
    document.getElementById('s4').value = "4 = <strong>D3</strong>";
   	document.getElementById('s5').value = "5 = <strong>A2</strong>";
    document.getElementById('s6').value = "6 = <strong>D2</strong>";
        document.getElementById('modTun').innerHTML = "Modal D";
   s1 = new Audio('https://dl.dropbox.com/s/b61mjoebno955dr/pqzfzd.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/97fa8dx6f1zmpkc/oqpxF.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/6dmwkjk70fz71kh/faiufcgfm.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/aypmjsie8qx88pn/aktxydzd.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/8cng1evrtfkn900/amtxauv.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/qop5cz5b2uh51pr/bgazd.ogg?dl=0');             
    }
  else if(scb.value == 'tns10') { 
     document.getElementById('s1').value = "1 = <strong>d4</strong>";
    document.getElementById('s2').value = "2 = <strong>C4</strong>";
    document.getElementById('s3').value = "3 = <strong>G3</strong>";
    document.getElementById('s4').value = "4 = <strong>D3</strong>";
   	document.getElementById('s5').value = "5 = <strong>G2</strong>";
    document.getElementById('s6').value = "6 = <strong>D2</strong>";
       document.getElementById('modTun').innerHTML = "Modal G";
  s1 = new Audio('https://dl.dropbox.com/s/xb0cyrjl004bor7/pqzfzd.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/40iq0wv02ju3sll/wibxfn.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/p1d1ig45v48n0og/faiufcgfm.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/edtk0eojkcyzw1q/aktxydzd.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/uy1rwkteady5yae/jbrxtc.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/asvp0n9wvrgsqw6/bgazd.ogg?dl=0');              
    } 
  else if(scb.value == 'tns11') { 
      document.getElementById('s1').value = "1 = <strong>d4</strong>";
    document.getElementById('s2').value = "2 = <strong>A3</strong>";
    document.getElementById('s3').value = "3 = <strong>F3</strong>";
    document.getElementById('s4').value = "4 = <strong>C3</strong>";
   	document.getElementById('s5').value = "5 = <strong>G2</strong>";
    document.getElementById('s6').value = "6 = <strong>C2</strong>";
        document.getElementById('modTun').innerHTML = "Drop C";
  s1 = new Audio('https://dl.dropbox.com/s/oj28pw76tn1xwub/pqzfzd.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/4k1x55tqa49xphx/oqpxF.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/r8im4qhgyylz0qd/owxts.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/vtfqh827usrc942/lqxgm.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/motyudil5h80rox/jbrxtc.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/oqhjvqtac243zhd/qkxrx.ogg?dl=0');              
    }
  else if(scb.value == 'tns12') { 
      document.getElementById('s1').value = "1 = <strong>e4</strong>";
    document.getElementById('s2').value = "2 = <strong>B3</strong>";
    document.getElementById('s3').value = "3 = <strong>G3</strong>";
    document.getElementById('s4').value = "4 = <strong>D3</strong>";
   	document.getElementById('s5').value = "5 = <strong>A2</strong>";
    document.getElementById('s6').value = "6 = <strong>D2</strong>";
         document.getElementById('modTun').innerHTML = "Drop D";
  s1 = new Audio('https://dl.dropbox.com/s/pg23vtwyak28p59/doebcekd.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/3yvy5g14df10fpa/kqycrbfn.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/rze2uqxkoshp7vs/faiufcgfm.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/4p9xo9f794nyaz4/aktxydzd.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/ycxpqtlu3omogbp/amtxauv.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/ab2vr5pwngue0ra/bgazd.ogg?dl=0');            
    } 
  else if(scb.value == 'tns13') { 
       document.getElementById('s1').value = "1 = <strong>g#4</strong>";
    document.getElementById('s2').value = "2 = <strong>E4</strong>";
    document.getElementById('s3').value = "3 = <strong>C4</strong>";
    document.getElementById('s4').value = "4 = <strong>G#3</strong>";
   	document.getElementById('s5').value = "5 = <strong>E3</strong>";
    document.getElementById('s6').value = "6 = <strong>C3</strong>";
          document.getElementById('modTun').innerHTML = "Major 3";
  s1 = new Audio('https://dl.dropbox.com/s/hpc4n4qylnapsp5/qzdeth.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/wpiphzq59xpvuna/doebcekd.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/znmlxmgtapykob3/wibxfn.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/54tfpv2zber5wwy/uezhv.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/isuvqxjq4kxc46o/kwfxjb.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/r1nn2fzbwjenm1h/lqxgm.ogg?dl=0');            
    }
  else if(scb.value == 'tns14') { 
      document.getElementById('s1').value = "1 = <strong>d#4</strong>";
    document.getElementById('s2').value = "2 = <strong>C4</strong>";
    document.getElementById('s3').value = "3 = <strong>A3</strong>";
    document.getElementById('s4').value = "4 = <strong>F#3</strong>";
   	document.getElementById('s5').value = "5 = <strong>D#3</strong>";
    document.getElementById('s6').value = "6 = <strong>C3</strong>";
        document.getElementById('modTun').innerHTML = "Minor 3";
 s1 = new Audio('https://dl.dropbox.com/s/b2z9grrbgjv9vi7/rxfvg.ogg?dl=0');
  s2 = new Audio('https://dl.dropbox.com/s/7jbqw5ruyb0dpuz/wibxfn.ogg?dl=0');
  s3 = new Audio('https://dl.dropbox.com/s/srgl44e9zm5fi7p/oqpxF.ogg?dl=0');
  s4 = new Audio('https://dl.dropbox.com/s/llvxxysd4gg8hn2/bixtcc.ogg?dl=0');
  s5 = new Audio('https://dl.dropbox.com/s/wruil1juxdhz4p7/rxuvsr.ogg?dl=0');
  s6 = new Audio('https://dl.dropbox.com/s/jk7g5c8c7d1zzss/lqxgm.ogg?dl=0');               
    }
}
