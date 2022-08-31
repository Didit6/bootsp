
function elem(id){
	var element = document.getElementById(id);
	return element;}
function pickString(thisString){if(pick == true) clickString(thisString);}
function clickString(thisString) {elem('title_s').className='imgTitle';	elem(thisString).className = "string";
	window[thisString].currentTime = 0;	window[thisString].play();
	var thisNote = thisString+"Note";	elem(thisString).className = "string playingSound";	elem(thisNote).className = "lightOn";
	setTimeout(function(){ if(window[thisString].loop != true){
			elem(thisString).className = "string";	elem(thisNote).className = "lightOff";	if(document.querySelectorAll('.playingSound').length==0){	elem('title_s').className='';
			}		}	}, 3500);}
	function holdSound(){	if(s1.loop != true){	s1.loop = s2.loop = s3.loop = s4.loop = s5.loop = s6.loop = true;	elem('btnHold').className = "active";	} else {	s1.loop = s2.loop = s3.loop = s4.loop = s5.loop = s6.loop = false;	elem('btnHold').className = "inactive";	s1.pause(); s2.pause(); s3.pause(); s4.pause(); s5.pause(); s6.pause();	stopStrings();	}}
function stopStrings(){	elem('title_s').className='';
	s1.pause(); s2.pause(); s3.pause(); s4.pause(); s5.pause(); s6.pause();	var auxString = document.querySelectorAll('.playingSound');	for (var x in auxString) {
		if(auxString[x]!==undefined){	auxString[x].className = "string";		}	}
	var auxNote = document.querySelectorAll(".lightOn");
	for (x in auxNote) {if(auxNote[x]!==undefined){
			auxNote[x].className = "lightOff";		}	}}
function usePick(){	var x = elem('btnPick').className;
	if(x == 'inactive'){	elem('btnPick').className = 'active';
		pick = true;	elem("guitarBody").className = 'pickActive';	
	} else {	elem('btnPick').className = 'inactive';
		pick = false;	elem("guitarBody").className = '';	}}
/* ON LOAD */
(function() {	setTimeout(function(){ 	clickString('s4');
	}, 500);})();
function ngls(){ var scbk = document.getElementById('ojk');
   var ojk = scbk.options[scbk.selectedIndex];
   if(scbk.value == 'tnsj1') {  document.getElementById('s1Note').innerHTML = 'e';  document.getElementById('s2Note').innerHTML = 'B'; document.getElementById('s3Note').innerHTML = 'G'; document.getElementById('s4Note').innerHTML = 'D'; document.getElementById('s5Note').innerHTML = 'A'; document.getElementById('s6Note').innerHTML = 'E';
    s1 = new Audio('/nyaring/strt/doebcekd.ogg'); s2 = new Audio('/nyaring/strt/kqycrbfn.ogg'); s3 = new Audio('/nyaring/strt/faiufcgfm.ogg'); s4 = new Audio('/nyaring/strt/aktxydzd.ogg'); s5 = new Audio('/nyaring/strt/amtxauv.ogg'); s6 = new Audio('/nyaring/strt/ucvxdEzd.ogg');}
 else if(scbk.value == 'tnsj2') { 
    document.getElementById('s1Note').innerHTML = 'e4';
    document.getElementById('s2Note').innerHTML = 'B3';
    document.getElementById('s3Note').innerHTML = 'G3';
    document.getElementById('s4Note').innerHTML = 'D3';
   	document.getElementById('s5Note').innerHTML = 'A2';
    document.getElementById('s6Note').innerHTML = 'E2';   
  s1 = new Audio('/nyaring/eflt/rxfvg.ogg'); s2 = new Audio('/nyaring/eflt/txhidg.ogg'); s3 = new Audio('/nyaring/eflt/bixtcc.ogg'); s4 = new Audio('/nyaring/eflt/ygzycy.ogg'); s5 = new Audio('/nyaring/eflt/tcyvxr.ogg'); s6 = new Audio('/nyaring/eflt/rzrxxt.ogg');} 
 else if(scbk.value == 'tnsj3') {
 	document.getElementById('s1Note').innerHTML = 'f4';
    document.getElementById('s2Note').innerHTML = 'C4';
    document.getElementById('s3Note').innerHTML = 'G#3';
    document.getElementById('s4Note').innerHTML = 'D#3';
   	document.getElementById('s5Note').innerHTML = 'A#2';
    document.getElementById('s6Note').innerHTML = 'F2';
  s1 = new Audio('/nyaring/frt/rcfubx.ogg'); s2 = new Audio('/nyaring/frt/wibxfn.ogg'); s3 = new Audio('/nyaring/frt/uezhv.ogg'); s4 = new Audio('/nyaring/frt/rxuvsr.ogg'); s5 = new Audio('/nyaring/frt/urzru.ogg'); s6 = new Audio('/nyaring/frt/tcyccy.ogg');   
}
 else if(scbk.value == 'tnsj4') {
 	document.getElementById('s1Note').innerHTML = 'f#4';
    document.getElementById('s2Note').innerHTML = 'C#4';
    document.getElementById('s3Note').innerHTML = 'A3';
    document.getElementById('s4Note').innerHTML = 'E3';
   	document.getElementById('s5Note').innerHTML = 'B2';
    document.getElementById('s6Note').innerHTML = 'F#2';       
      s1 = new Audio('/nyaring/scr/knEzm.ogg'); s2 = new Audio('/nyaring/scr/otxgcR.ogg'); s3 = new Audio('/nyaring/scr/oqpxF.ogg'); s4 = new Audio('/nyaring/scr/kwfxjb.ogg'); s5 = new Audio('/nyaring/scr/iqinxe.ogg'); s6 = new Audio('/nyaring/scr/utxzgg.ogg');   
} 
 else if(scbk.value == 'tnsj5') {
 	document.getElementById('s1Note').innerHTML = 'g4';
    document.getElementById('s2Note').innerHTML = 'D4';
    document.getElementById('s3Note').innerHTML = 'A#3';
    document.getElementById('s4Note').innerHTML = 'F3';
   	document.getElementById('s5Note').innerHTML = 'C3';
    document.getElementById('s6Note').innerHTML = 'G2';        
        s1 = new Audio('/nyaring/thr/lqdtxf.ogg'); s2 = new Audio('/nyaring/thr/pqzfzd.ogg'); s3 = new Audio('/nyaring/thr/txhidg.ogg'); s4 = new Audio('/nyaring/thr/owxts.ogg'); s5 = new Audio('/nyaring/thr/lqxgm.ogg'); s6 = new Audio('/nyaring/thr/jbrxtc.ogg');   }
 else if(scbk.value == 'tnsj6') {
 	document.getElementById('s1Note').innerHTML = 'e4';
    document.getElementById('s2Note').innerHTML = 'C4';
    document.getElementById('s3Note').innerHTML = 'G3';
    document.getElementById('s4Note').innerHTML = 'C3';
   	document.getElementById('s5Note').innerHTML = 'G2';
    document.getElementById('s6Note').innerHTML = 'C2';      
      s1 = new Audio('/nyaring/opc/doebcekd.ogg'); s2 = new Audio('/nyaring/opc/wibxfn.ogg'); s3 = new Audio('/nyaring/opc/faiufcgfm.ogg'); s4 = new Audio('/nyaring/opc/lqxgm.ogg'); s5 = new Audio('/nyaring/opc/jbrxtc.ogg'); s6 = new Audio('/nyaring/opc/qkxrx.ogg');   
} 
 else if(scbk.value == 'tnsj7') {
 	document.getElementById('s1Note').innerHTML = 'd4';
    document.getElementById('s2Note').innerHTML = 'A3';
    document.getElementById('s3Note').innerHTML = 'F#3';
    document.getElementById('s4Note').innerHTML = 'D3';
   	document.getElementById('s5Note').innerHTML = 'A2';
    document.getElementById('s6Note').innerHTML = 'D2';      
    s1 = new Audio('/nyaring/opnd/pqzfzd.ogg'); s2 = new Audio('/nyaring/opnd/oqpxF.ogg'); s3 = new Audio('/nyaring/opnd/bixtcc.ogg'); s4 = new Audio('/nyaring/opnd/aktxydzd.ogg'); s5 = new Audio('/nyaring/opnd/amtxauv.ogg'); s6 = new Audio('/nyaring/opnd/bgazd.ogg');   
  }
  else if(scbk.value == 'tnsj8') {
  	document.getElementById('s1Note').innerHTML = 'd4';
    document.getElementById('s2Note').innerHTML = 'B3';
    document.getElementById('s3Note').innerHTML = 'G3';
    document.getElementById('s4Note').innerHTML = 'D3';
   	document.getElementById('s5Note').innerHTML = 'G2';
    document.getElementById('s6Note').innerHTML = 'D2';        
    s1 = new Audio('/nyaring/opg/pqzfzd.ogg'); s2 = new Audio('/nyaring/opg/kqycrbfn.ogg'); s3 = new Audio('/nyaring/opg/faiufcgfm.ogg'); s4 = new Audio('/nyaring/opg/aktxydzd.ogg'); s5 = new Audio('/nyaring/opg/jbrxtc.ogg'); s6 = new Audio('/nyaring/opg/bgazd.ogg');         
    } 
  else if(scbk.value == 'tnsj9') {
  	document.getElementById('s1Note').innerHTML = 'd4';
    document.getElementById('s2Note').innerHTML = 'A3';
    document.getElementById('s3Note').innerHTML = 'G3';
    document.getElementById('s4Note').innerHTML = 'D3';
   	document.getElementById('s5Note').innerHTML = 'A2';
    document.getElementById('s6Note').innerHTML = 'D2';        
   s1 = new Audio('/nyaring/mdl/pqzfzd.ogg'); s2 = new Audio('/nyaring/mdl/oqpxF.ogg'); s3 = new Audio('/nyaring/mdl/faiufcgfm.ogg'); s4 = new Audio('/nyaring/mdl/aktxydzd.ogg'); s5 = new Audio('/nyaring/mdl/amtxauv.ogg'); s6 = new Audio('/nyaring/mdl/bgazd.ogg');             
    }
  else if(scbk.value == 'tnsj10') {
  	document.getElementById('s1Note').innerHTML = 'd4';
    document.getElementById('s2Note').innerHTML = 'C4';
    document.getElementById('s3Note').innerHTML = 'G3';
    document.getElementById('s4Note').innerHTML = 'D3';
   	document.getElementById('s5Note').innerHTML = 'G2';
    document.getElementById('s6Note').innerHTML = 'D2';       
  s1 = new Audio('/nyaring/mdg/pqzfzd.ogg'); s2 = new Audio('/nyaring/mdg/wibxfn.ogg'); s3 = new Audio('/nyaring/mdg/faiufcgfm.ogg'); s4 = new Audio('/nyaring/mdg/aktxydzd.ogg'); s5 = new Audio('/nyaring/mdg/jbrxtc.ogg'); s6 = new Audio('/nyaring/mdg/bgazd.ogg'); } 
  else if(scbk.value == 'tnsj11') {
  	document.getElementById('s1Note').innerHTML = 'd4';
    document.getElementById('s2Note').innerHTML = 'A3';
    document.getElementById('s3Note').innerHTML = 'F3';
    document.getElementById('s4Note').innerHTML = 'C3';
   	document.getElementById('s5Note').innerHTML = 'G2';
    document.getElementById('s6Note').innerHTML = 'C2';        
  s1 = new Audio('/nyaring/drc/pqzfzd.ogg'); s2 = new Audio('/nyaring/drc/oqpxF.ogg'); s3 = new Audio('/nyaring/drc/owxts.ogg'); s4 = new Audio('/nyaring/drc/lqxgm.ogg'); s5 = new Audio('/nyaring/drc/jbrxtc.ogg'); s6 = new Audio('/nyaring/drc/qkxrx.ogg');    }
  else if(scbk.value == 'tnsj12') {
  	document.getElementById('s1Note').innerHTML = 'e4';
    document.getElementById('s2Note').innerHTML = 'B3';
    document.getElementById('s3Note').innerHTML = 'G3';
    document.getElementById('s4Note').innerHTML = 'D3';
   	document.getElementById('s5Note').innerHTML = 'A2';
    document.getElementById('s6Note').innerHTML = 'D2';         
  s1 = new Audio('/nyaring/drd/doebcekd.ogg'); s2 = new Audio('/nyaring/drd/kqycrbfn.ogg'); s3 = new Audio('/nyaring/drd/faiufcgfm.ogg'); s4 = new Audio('/nyaring/drd/aktxydzd.ogg'); s5 = new Audio('/nyaring/drd/amtxauv.ogg'); s6 = new Audio('/nyaring/drd/bgazd.ogg');} 
  else if(scbk.value == 'tnsj13') {
  	document.getElementById('s1Note').innerHTML = 'g#4';
    document.getElementById('s2Note').innerHTML = 'E4';
    document.getElementById('s3Note').innerHTML = 'C4';
    document.getElementById('s4Note').innerHTML = 'G#3';
   	document.getElementById('s5Note').innerHTML = 'E3';
    document.getElementById('s6Note').innerHTML = 'C3';          
  s1 = new Audio('/nyaring/mjrt/qzdeth.ogg'); s2 = new Audio('/nyaring/mjrt/doebcekd.ogg'); s3 = new Audio('/nyaring/mjrt/wibxfn.ogg'); s4 = new Audio('/nyaring/mjrt/uezhv.ogg'); s5 = new Audio('/nyaring/mjrt/kwfxjb.ogg'); s6 = new Audio('/nyaring/mjrt/lqxgm.ogg'); }
  else if(scbk.value == 'tnsj14') {
  	document.getElementById('s1Note').innerHTML = 'd#4';
    document.getElementById('s2Note').innerHTML = 'C4';
    document.getElementById('s3Note').innerHTML = 'A3';
    document.getElementById('s4Note').innerHTML = 'F#3';
   	document.getElementById('s5Note').innerHTML = 'D#3';
    document.getElementById('s6Note').innerHTML = 'C3';        
 s1 = new Audio('/nyaring/mnrt/rxfvg.ogg'); s2 = new Audio('/nyaring/mnrt/wibxfn.ogg'); s3 = new Audio('/nyaring/mnrt/oqpxF.ogg'); s4 = new Audio('/nyaring/mnrt/bixtcc.ogg'); s5 = new Audio('/nyaring/mnrt/rxuvsr.ogg'); s6 = new Audio('/nyaring/mnrt/lqxgm.ogg');}
else if(scbk.value == 'tnsj15') {
	document.getElementById('s1Note').innerHTML = 'c#4';
    document.getElementById('s2Note').innerHTML = 'G#3';
    document.getElementById('s3Note').innerHTML = 'E3';
    document.getElementById('s4Note').innerHTML = 'B2';
   	document.getElementById('s5Note').innerHTML = 'F#2';
    document.getElementById('s6Note').innerHTML = 'C#2';
s1 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/dobjvgx.mp3'); 
s2 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/apfbjvj.mp3');
s3 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/hqhcfc.mp3');
s4 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/bosgcg.mp3');
s5 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/makvskh.mp3');
s6 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/gpgcjbm.mp3');
}
else if(scbk.value == 'tnsj16') {
	document.getElementById('s1Note').innerHTML = 'c4';
    document.getElementById('s2Note').innerHTML = 'G3';
    document.getElementById('s3Note').innerHTML = 'D#3';
    document.getElementById('s4Note').innerHTML = 'A#2';
   	document.getElementById('s5Note').innerHTML = 'F2';
    document.getElementById('s6Note').innerHTML = 'C2';
s1 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/kjadhvx.mp3');
s2 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/oxhvvgc.mp3');
s3 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/haicbv.mp3');
s4 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/vajdhc.mp3');
s5 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/ldhdxvh.mp3');
s6 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/tsughc.mp3');  
}
else if(scbk.value == 'tnsj17') {
	document.getElementById('s1Note').innerHTML = 'c#4';
    document.getElementById('s2Note').innerHTML = 'G#3';
    document.getElementById('s3Note').innerHTML = 'E3';
    document.getElementById('s4Note').innerHTML = 'B2';
   	document.getElementById('s5Note').innerHTML = 'F#2';
    document.getElementById('s6Note').innerHTML = 'B1';
s1 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/dobjvgx.mp3');
s2 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/apfbjvj.mp3');
s3 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/hqhcfc.mp3');
s4 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/bosgcg.mp3');
s5 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/makvskh.mp3');
s6 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/mtvhvce.mp3');
}
else if(scbk.value == 'tnsj18') {
	document.getElementById('s1Note').innerHTML = 'd4';
    document.getElementById('s2Note').innerHTML = 'B3';
    document.getElementById('s3Note').innerHTML = 'G3';
    document.getElementById('s4Note').innerHTML = 'D3';
   	document.getElementById('s5Note').innerHTML = 'A2';
    document.getElementById('s6Note').innerHTML = 'D2';
s1 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/spdhbhv.mp3');
s2 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/fifxcvg.mp3');
s3 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/oxhvvgc.mp3');
s4 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/wivgchvh.mp3');
s5 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/ifxcvhv.mp3');
s6 = new Audio('/nyaring/aovhctsd/gtrakelc/sevn/cirdxgvv.mp3');
}}
