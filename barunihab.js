var gbr1b = document.getElementById("ig1");
var gbr2b = document.getElementById("ig2");
var gbr3b = document.getElementById("ig3");
var gbr4b = document.getElementById("ig4");
var tChord = document.getElementById("spChord");
var gridb2 = document.createElement("div");
gridb2.setAttribute("id", "btxn2");
document.getElementById("DIV2").appendChild(gridb2);
for(b=0;b<35;b++){
var nmsx2b = ["Ab","Ab11","Ab13","Ab6","Ab69","Ab7","Ab7#9","Ab7b5","Ab7b9","Ab7sus4","Ab9","Ab9#11","Ab9b5","Abadd9","Abalt","Abaug","Abaug7","Abaug9","Abdim","Abdim7","Abm","Abm11","Abm6","Abm69","Abm7","Abm9","Abmadd9","Abmaj11","Abmaj13","Abmaj7","Abmaj7#5","Abmaj7b5","Abmaj9","Absus2","Absus4"];
 var rowc2 = document.createElement("div");
 rowc2.setAttribute("class", "koloms2");
 rowc2.innerHTML = nmsx2b[b];
 document.getElementById("btxn2").appendChild(rowc2);
}
var butnv = document.getElementsByClassName("koloms2");
butnv[0].onclick = function() {
  tChord.innerHTML = nmsx2b[0];
  gbr1b.src = "https://1.bp.blogspot.com/-zxc77Chj224/YMsYKWaTNxI/AAAAAAAAAcc/DWtW-qtmJWUR3f3ts5rKWmkppOLVclYwgCPcBGAsYHg/s0/ab.png";
	gbr2b.src = "https://1.bp.blogspot.com/-P1JoNyWreBI/YMsYKXk1TnI/AAAAAAAAAcc/3YeK4DSySngaTqFpUDCqKXfwo2AOr7PWwCPcBGAsYHg/s0/ab%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-sVg_sdK12kQ/YMsYKRKDdDI/AAAAAAAAAcc/nLqE95p7whI4OQsptqXCbX_FxvN9hAj-wCPcBGAsYHg/s0/ab%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-X8pZCL1VUhU/YMsYKZpX5dI/AAAAAAAAAcc/XPAPVp5H4qQNut8-luthi1rXocJ0B4wAQCPcBGAsYHg/s0/ab%2B%25283%2529.png";
}
butnv[1].onclick = function() {
  tChord.innerHTML = nmsx2b[1];
  gbr1b.src = "https://1.bp.blogspot.com/-IcxRmAj7_k8/YMsZgkxsc-I/AAAAAAAAAcs/PTl_0chlER86GkCk2MKg2zOUeHsYmiwIQCPcBGAsYHg/s0/ab11.png";
	gbr2b.src = "https://1.bp.blogspot.com/-yzWzsl0DgGU/YMsZgpCFnFI/AAAAAAAAAcs/UDlWJSbo8GA88NJRj2RZiZWyAZGPY5_1ACPcBGAsYHg/s0/ab11%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-5Q8fPzTWg_A/YMsZghIyk3I/AAAAAAAAAcs/Y7wQFe5gcB8Xf5On5drhxbPsusduXF-2QCPcBGAsYHg/s0/ab11%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-1X3jWKAdS-s/YMsZgpTqDZI/AAAAAAAAAcs/BrE3fuhxI2MY2DCB0jMYfqfZ3sTosTubQCPcBGAsYHg/s0/ab11%2B%25283%2529.png";
}
butnv[2].onclick = function() {
  tChord.innerHTML = nmsx2b[2];
  gbr1b.src = "https://1.bp.blogspot.com/-wXtR1D25fh4/YMsaEUqTxgI/AAAAAAAAAc4/wQzfGrnyTeAVc3FyejEYsDsG9pORnEpcgCPcBGAsYHg/s0/ab13.png";
	gbr2b.src = "https://1.bp.blogspot.com/-ldVIBj3Y8p4/YMsaEYfUaUI/AAAAAAAAAc4/23mOKedgSiUMclAGWG8BeQYLJnh5Fc8xwCPcBGAsYHg/s0/ab13%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-0jtXfZaS8XM/YMsaEWMHMGI/AAAAAAAAAc4/CBE27U5_OW4ZprR95SuBEWJl7FRMC71TACPcBGAsYHg/s0/ab13%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-WmeKHWUfsm8/YMsaEV7W56I/AAAAAAAAAc4/6wRGfEVKGOI-4tN6kum621pdpJSx1v-UACPcBGAsYHg/s0/ab13%2B%25283%2529.png";
}
butnv[3].onclick = function() {
 tChord.innerHTML = nmsx2b[3];
  gbr1b.src = "https://1.bp.blogspot.com/-jkor9VNpjPg/YMsaguIvjhI/AAAAAAAAAdA/9d3ko8Wt98grH6NyOSLhMucDCQLa8M50QCPcBGAsYHg/s0/ab6.png";
	gbr2b.src = "https://1.bp.blogspot.com/-4yjPup2Pzzw/YMsagm5xJ0I/AAAAAAAAAdA/2zblekP9YNYnfOVH48vEcJftV8H8baz6ACPcBGAsYHg/s0/ab6%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-48x5W7M-xDE/YMsagpxjdcI/AAAAAAAAAdA/xdB4Fb0Cn3YRJ2n9RYJPiWpvk4_2HLxJgCPcBGAsYHg/s0/ab6%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/--Zx6qJdxfZ4/YMsaglvqDAI/AAAAAAAAAdA/92IdMZIH3JoTRSFuVRD-snlnafIHq8EfQCPcBGAsYHg/s0/ab6%2B%25283%2529.png";
}
butnv[4].onclick = function() {
  tChord.innerHTML = nmsx2b[4];
  gbr1b.src = "https://1.bp.blogspot.com/-JARlEu9Va0I/YMsa7jvuqvI/AAAAAAAAAdI/iqZZcNbqLdIAeYqCYrlk3MNtZ4jYT0euwCPcBGAsYHg/s0/ab69.png";
	gbr2b.src = "https://1.bp.blogspot.com/-IFiDcr1zmxM/YMsa7lzPygI/AAAAAAAAAdI/W99kajJMmGUnEEypGj7hwFxVXPuWFXKuQCPcBGAsYHg/s0/ab69%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-s-VolGm7EoI/YMsa7u5eLkI/AAAAAAAAAdI/xbfGGeJeZU06Ikzn1vm01Z1RPgXJkxtlgCPcBGAsYHg/s0/ab69%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-j8K1gx56Nls/YMsa7smTyNI/AAAAAAAAAdI/f_qUqSVn4lgwxB689bVj7GVspa3sbZWdwCPcBGAsYHg/s0/ab69%2B%25283%2529.png";
}
butnv[5].onclick = function() {
  tChord.innerHTML = nmsx2b[5];
  gbr1b.src = "https://1.bp.blogspot.com/-tqr4-ncQUHQ/YMsbjlTCfzI/AAAAAAAAAdU/_Zly3b8__s0rlDwAPjnmYsII0cRbks8KwCPcBGAsYHg/s0/ab7.png";
	gbr2b.src = "https://1.bp.blogspot.com/-JMaCgoof2T0/YMsbjj21SbI/AAAAAAAAAdU/GCxVpHZytPMvcMD9-70kFXzXEjir_FHGQCPcBGAsYHg/s0/ab7%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-xeA0AA0EiFY/YMsbjvZh5ZI/AAAAAAAAAdU/_fCO0oJT96ASiMBKpaBZth4l_6psVKD5QCPcBGAsYHg/s0/ab7%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-zlHa-BWTUKs/YMsbjkVoY2I/AAAAAAAAAdU/FI-aaPkgS9UIA9IqoQuIkySn8Bsvw9c6ACPcBGAsYHg/s0/ab7%2B%25283%2529.png";
}
butnv[6].onclick = function() {
  tChord.innerHTML = nmsx2b[6];
  gbr1b.src = "https://1.bp.blogspot.com/-COBSC4fEoSk/YMscNJsTGHI/AAAAAAAAAdc/azHRoahSKsMgfSY69njU4nkfxTWloy2FwCPcBGAsYHg/s0/ab7%25239%2B%25283%2529.png";
	gbr2b.src = "https://1.bp.blogspot.com/-bQlbnPL8tsc/YMscNHEGreI/AAAAAAAAAdc/P4lmHP579VsEtG2-6zWZxIq4zIzIXFI7wCPcBGAsYHg/s0/ab7%25239%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-avPNz3vMYgc/YMscNGsfG_I/AAAAAAAAAdc/kDjv4ZK5XKYZBmReFyGS65jyX5TqEn1GwCPcBGAsYHg/s0/ab7%25239%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-WJVhITJQxjw/YMscNNE7krI/AAAAAAAAAdc/Gfjcver0-zYVt-G8MOIig1KvlGZu7fvqgCPcBGAsYHg/s0/ab7%25239.png";
}
butnv[7].onclick = function() {
  tChord.innerHTML = nmsx2b[7];
  gbr1b.src = "https://1.bp.blogspot.com/-NXILRFvtB_Q/YMsdA7eLFmI/AAAAAAAAAdo/Gq9KXX4kPgUsYdItZFxCNbrqClXIXiZawCPcBGAsYHg/s0/ab7b5.png";
	gbr2b.src = "https://1.bp.blogspot.com/-yBbIAHwMMWI/YMsdA0GGsHI/AAAAAAAAAdo/cOTwE9h4dPAPpAxm0s3CrmnDvvjxpES7wCPcBGAsYHg/s0/ab7b5%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-QbuVa9OePfY/YMsdA7SXbJI/AAAAAAAAAdo/2v8sYcxosmQ-DKgHJAnR7cZVyAxe2gb4ACPcBGAsYHg/s0/ab7b5%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-kPDzCcF7MGQ/YMsdA5ZXyEI/AAAAAAAAAdo/tmEv5K3BSVYzaXdug1b5nKqvMwp-ZXyxwCPcBGAsYHg/s0/ab7b5%2B%25283%2529.png";
}
butnv[8].onclick = function() {
  tChord.innerHTML = nmsx2b[8];
  gbr1b.src = "https://1.bp.blogspot.com/-pkVSKDXnJuU/YMsdkpTEgfI/AAAAAAAAAdw/AvZ3dql_Cfg2bfimTzGYivQc8GynIE9lwCPcBGAsYHg/s0/ab7b9.png";
	gbr2b.src = "https://1.bp.blogspot.com/-Hwl4Q7l0jOY/YMsdkrcNwTI/AAAAAAAAAdw/kvBI90iYFH8BQNaPAtWc8PxTNpF0P5jswCPcBGAsYHg/s0/ab7b9%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-8JkR27mAzHM/YMsdkgXSKhI/AAAAAAAAAdw/sLNhBv_NWKIwyQhjTjnUXL6cbeZ9Wxd7QCPcBGAsYHg/s0/ab7b9%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-0RNkVtfsFkA/YMsdkucOpkI/AAAAAAAAAdw/KShcKnaww18gleCd7gtbt-I0uPN4hcf2gCPcBGAsYHg/s0/ab7b9%2B%25283%2529.png";
}
butnv[9].onclick = function() {
  tChord.innerHTML = nmsx2b[9];
  gbr1b.src = "https://1.bp.blogspot.com/-79pALykXP-c/YMseGr4FB-I/AAAAAAAAAd8/bygGssrCYN84I5WWB9Xrd-aJKfje_fc1QCPcBGAsYHg/s0/ab7sus4.png";
	gbr2b.src = "https://1.bp.blogspot.com/-8jZc2mXS6vw/YMseGkih_tI/AAAAAAAAAd8/TpRqgv3nAHISSCIEX_LTo74ejwgOaDNZwCPcBGAsYHg/s0/ab7sus4%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-0P0DtE16Tps/YMseGn6YfeI/AAAAAAAAAd8/D9dNYioGa8QCFKe9aD3zqXyzi2AXvIAswCPcBGAsYHg/s0/ab7sus4%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-OnwD8ccmNLE/YMseGrXZLXI/AAAAAAAAAd8/LESr4H2mJLkrKGah18V9H3VOVlw-npQiwCPcBGAsYHg/s0/ab7sus4%2B%25283%2529.png";
}
butnv[10].onclick = function() {
  tChord.innerHTML = nmsx2b[10];
  gbr1b.src = "https://1.bp.blogspot.com/-6EMsN2CT8lI/YMseuL_wXlI/AAAAAAAAAeE/ysd2ndo6W-Ezjv5dzE0ZBPaRW1EJRpOFQCPcBGAsYHg/s0/ab9.png";
	gbr2b.src = "https://1.bp.blogspot.com/-28ZxdywLMwI/YMseuOL2zPI/AAAAAAAAAeE/OPCefAwYAfwegYJe7A6zxoaJGIp6mE4eACPcBGAsYHg/s0/ab9%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-42XV4Sp1Ehc/YMseuIDNWBI/AAAAAAAAAeE/DhZQFqJY5-kAgmJQaka1aovuNP7lHgGOgCPcBGAsYHg/s0/ab9%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-sWotlfL5S1A/YMseuKww1XI/AAAAAAAAAeE/4xuEfkjdTJQY7MFpGDvk8Bv5ATUj5K8kwCPcBGAsYHg/s0/ab9%2B%25283%2529.png";
}
butnv[11].onclick = function() {
  tChord.innerHTML = nmsx2b[11];
  gbr1b.src = "https://1.bp.blogspot.com/-6vfM13csRV0/YMsfOZd-qZI/AAAAAAAAAeQ/pKsCdXiHryAPxOzZGH2yqMHWrG4E75FgACPcBGAsYHg/s0/ab9%252311.png";
	gbr2b.src = "https://1.bp.blogspot.com/-6CQLisLKfAU/YMsfOfBkJFI/AAAAAAAAAeQ/SzB1V__RJJUFIbSKLcLGME_vygExChgDACPcBGAsYHg/s0/ab9%252311%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-shEywbNJ-Z4/YMsfOYrvuRI/AAAAAAAAAeQ/5PU28Ebr6sQGb8E8lTIB5nIzpB6jqycUQCPcBGAsYHg/s0/ab9%252311%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-9pJKzHCVr8k/YMsfOfucIlI/AAAAAAAAAeQ/ylXuTihaY10Qkr4yD7feI4WtVwJEt1cbgCPcBGAsYHg/s0/ab9%252311%2B%25283%2529.png";
}
butnv[12].onclick = function() {
  tChord.innerHTML = nmsx2b[12];
  gbr1b.src = "https://1.bp.blogspot.com/-E-KVELOpJsA/YMsfs0OTvZI/AAAAAAAAAeY/73K13vvWwFoCZ6LLPpg_e3cKzAiyW6QMACPcBGAsYHg/s0/ab9b5.png";
	gbr2b.src = "https://1.bp.blogspot.com/-9QmPxe_JvTk/YMsfs0VSzPI/AAAAAAAAAeY/vJtWVLaEUwYxssf181myHAJjqotLz_lMgCPcBGAsYHg/s0/ab9b5%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-tpwvtKWSqkA/YMsfswhdByI/AAAAAAAAAeY/jFFwvrpk-usDMiP4CxKNd-TmjzfeMGZSwCPcBGAsYHg/s0/ab9b5%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-iLaHPue4c6Y/YMsfs4QlyHI/AAAAAAAAAeY/uwzfyH5zXu44l2_m81c2NcBJtTVjJ55hwCPcBGAsYHg/s0/ab9b5%2B%25283%2529.png";
}
butnv[13].onclick = function() {
  tChord.innerHTML = nmsx2b[13];
  gbr1b.src = "https://1.bp.blogspot.com/-A6wJl-NN3PQ/YMsgMWh-fVI/AAAAAAAAAeg/_g2Rk8obCT8jgo4NhKshfY2meLlw3-q1gCPcBGAsYHg/s0/abadd9.png";
	gbr2b.src = "https://1.bp.blogspot.com/-eGCgK_uu0c4/YMsgMZW4luI/AAAAAAAAAeg/i0js4SOYxPgAQHDGgMFO70Hz8DEtf4inACPcBGAsYHg/s0/abadd9%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-_vNaZ8jUAD0/YMsgMVXFLdI/AAAAAAAAAeg/HS0UH1gHJIkiOnjthkwetiFbSTVTHpIgACPcBGAsYHg/s0/abadd9%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-X63IWWnKUCQ/YMsgMS_3MII/AAAAAAAAAeg/T4X6UgfAtl05xSnyJgD6O3Vhp5biYKmSgCPcBGAsYHg/s0/abadd9%2B%25283%2529.png";
}
butnv[14].onclick = function() {
  tChord.innerHTML = nmsx2b[14];
  gbr1b.src = "https://1.bp.blogspot.com/-lOeMYGddGmE/YMsi69Bd_cI/AAAAAAAAAes/1MPOcXE08kkinyTF1s3DnlspawBrx_tKgCPcBGAsYHg/s0/abalt.png";
	gbr2b.src = "https://1.bp.blogspot.com/-VMK4NZg9o8M/YMsi63G0BGI/AAAAAAAAAes/L_8psg5dwjIPdANGxXHetUk-jB_IAFdkgCPcBGAsYHg/s0/abalt%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-kLRjsu4E2gg/YMsi6xhz9QI/AAAAAAAAAes/CXt0XO0cs5cPfvy8p0zaFe9N7a3ZkWZVACPcBGAsYHg/s0/abalt%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-wnt_0KUZoA8/YMsi62y_KdI/AAAAAAAAAes/wNPOLrwzYJ4_84YcOs4uzJ8MqdE_xERpACPcBGAsYHg/s0/abalt%2B%25283%2529.png";
}
butnv[15].onclick = function() {
  tChord.innerHTML = nmsx2b[15];
  gbr1b.src = "https://1.bp.blogspot.com/-cvsSYcB0t9o/YMsjsixMPBI/AAAAAAAAAe0/bhxifBn08DwwxY7tcP0o3i-qmaZGfktfgCPcBGAsYHg/s0/abaug.png";
	gbr2b.src = "https://1.bp.blogspot.com/-XH54CcNErkA/YMsjsnhPk3I/AAAAAAAAAe0/x_8ttQ3U-CI1dWBI9mETj3XKkA7k6cb1wCPcBGAsYHg/s0/abaug%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-YqZTGALnbmo/YMsjsgyUPjI/AAAAAAAAAe0/CX6uDgHVxckYnhf5BZ45EZFPhX1wyv8NgCPcBGAsYHg/s0/abaug%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-CrYc8wsCUW4/YMsjsoQcgQI/AAAAAAAAAe0/sQY3LhpAKscocsSyUpl9jn3vTHpmL7NrACPcBGAsYHg/s0/abaug%2B%25283%2529.png";
}
butnv[16].onclick = function() {
  tChord.innerHTML = nmsx2b[16];
  gbr1b.src = "https://1.bp.blogspot.com/-yD2997JB8g4/YMspMS5boQI/AAAAAAAAAfA/FS1pfMyK5J03D5l89gr-UNcpbNdejDhggCPcBGAsYHg/s0/abaug7.png";
	gbr2b.src = "https://1.bp.blogspot.com/-5mQfF8JxHk4/YMspMS102-I/AAAAAAAAAfA/1ojYxmyVcN0YTsGoCPt3zTlZkYH3BC4NACPcBGAsYHg/s0/abaug7%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-lO4_heXOdFE/YMspMUtDlsI/AAAAAAAAAfA/0zTJgCR3Z9gPj1p-EZ4H0kUyCdCzNoCAQCPcBGAsYHg/s0/abaug7%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-bgNGhxdGMEQ/YMspMfjD7YI/AAAAAAAAAfA/9FwL5uhulxYlEMY_KfM414E_qGExVl9-ACPcBGAsYHg/s0/abaug7%2B%25283%2529.png";
}
butnv[17].onclick = function() {
  tChord.innerHTML = nmsx2b[17];
  gbr1b.src = "https://1.bp.blogspot.com/-SW_1PY_a54M/YMsp2RHS7GI/AAAAAAAAAfI/gg8QXiWPinAdX_Mu5MqCGcd8xv-wR7AXACPcBGAsYHg/s0/abaug9.png";
	gbr2b.src = "https://1.bp.blogspot.com/-Th7S0LS8_rk/YMsp2YpJ0EI/AAAAAAAAAfI/PwEUUQ2OxFM5jg0JHWhx3e0gJm41_Pi_gCPcBGAsYHg/s0/abaug9%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-a97YPBoHeeE/YMsp2R5jjXI/AAAAAAAAAfI/QzIAs7seOTYDNB91jkyAIFpnovsZHO3gQCPcBGAsYHg/s0/abaug9%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-YviAxuzYc40/YMsp2aXkUWI/AAAAAAAAAfI/sBMO8idMk8osd5ry9wWbG7n5y068ASkrACPcBGAsYHg/s0/abaug9%2B%25283%2529.png";
}
butnv[18].onclick = function() {
  tChord.innerHTML = nmsx2b[18];
  gbr1b.src = "https://1.bp.blogspot.com/-Mz-QrRBhSX4/YMsqbFFN7_I/AAAAAAAAAfU/zrVkuvEs8hYwJtZPL7CxQs5XEUqk7zyjQCPcBGAsYHg/s0/abdim.png";
	gbr2b.src = "https://1.bp.blogspot.com/-rxqIQYPX9Cw/YMsqbNjWG3I/AAAAAAAAAfU/vSLC2jqLoZATG-z12z9VPMHHxCjEMQuJACPcBGAsYHg/s0/abdim%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-g196WNdl_cY/YMsqbMkl9qI/AAAAAAAAAfU/n37roKVuIdUQWzMp7KUShGpHgkAXcj3NQCPcBGAsYHg/s0/abdim%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-Zb-_xM1lvfg/YMsqbKHUXvI/AAAAAAAAAfU/eSdRstd9TFMsahuHgxa4sigcqB4wel7eACPcBGAsYHg/s0/abdim%2B%25283%2529.png";
}
butnv[19].onclick = function() {
  tChord.innerHTML = nmsx2b[19];
  gbr1b.src = "https://1.bp.blogspot.com/-WBYmoIYA3p4/YMsq-utBfPI/AAAAAAAAAfc/VTpYO2H2Ktg1E4zb1ZW-lfR0GHRS-7J4gCPcBGAsYHg/s0/abdim7.png";
	gbr2b.src = "https://1.bp.blogspot.com/-mM5wekGyGkA/YMsq-m-CiLI/AAAAAAAAAfc/EAluDLCbSAUpHEGJBT5-lJi6gteviW1lQCPcBGAsYHg/s0/abdim7%2B%25282%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-o5xuyMVb_kA/YMsq-tT8WdI/AAAAAAAAAfc/cqwTBAZgkSwFqI4gmFOSNo0_NPrZLZGqQCPcBGAsYHg/s0/abdim7%2B%25281%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-V_A2UrV8zjM/YMsq-tO-bkI/AAAAAAAAAfc/LuG0_SPDv2gHIU-LOE95ej3xQtvbcZKzACPcBGAsYHg/s0/abdim7%2B%25283%2529.png";
}
butnv[20].onclick = function() {
  tChord.innerHTML = nmsx2b[20];
  gbr1b.src = "https://1.bp.blogspot.com/-732dj-CQ2Sk/YMsriwsKQjI/AAAAAAAAAfo/XuFIdIhNygUIp3pr9J6pNVOb1dieX7LoACPcBGAsYHg/s0/abm.png";
	gbr2b.src = "https://1.bp.blogspot.com/-CmjWrg-hDcQ/YMsri99sZpI/AAAAAAAAAfo/ZIa_K1l03Kkae4hMPMRuyJW9yW9zXAm8QCPcBGAsYHg/s0/abm%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-Nbmz_9Fl5WY/YMsri9CL6mI/AAAAAAAAAfo/-9GnXXp0cPwwlV1wTiDhbfwt7m0jM-AEgCPcBGAsYHg/s0/abm%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-Sv1Iks1126s/YMsrixEPg5I/AAAAAAAAAfo/-o5J-B-fBNYYuq-E88Y4g4D6ggMn-FCLQCPcBGAsYHg/s0/abm%2B%25283%2529.png";
}
butnv[21].onclick = function() {
  tChord.innerHTML = nmsx2b[21];
  gbr1b.src = "https://1.bp.blogspot.com/-d-IjeKPpEDQ/YMss8uOM8NI/AAAAAAAAAf4/pjIcjMg6vVwJItjp6YekUh-yjEiicQPxACPcBGAsYHg/s0/abm11.png";
	gbr2b.src = "https://1.bp.blogspot.com/-ItQ4ZskGVtc/YMss8qEU3UI/AAAAAAAAAf4/dLZxjz4ruYgJs-u3CVs_JmCTwBUJFQj4ACPcBGAsYHg/s0/abm11%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-u9kUgqnTP8E/YMss8mktmKI/AAAAAAAAAf4/xGp-odiW-8oTH8DgNJDO3kkDCr1tONcSgCPcBGAsYHg/s0/abm11%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-dzFEghP2O24/YMss8ucjCZI/AAAAAAAAAf4/jjuit5r0CEE-TajjiZrTiEcN-eSGGnr1gCPcBGAsYHg/s0/abm11%2B%25283%2529.png";
}
butnv[22].onclick = function() {
  tChord.innerHTML = nmsx2b[22];
  gbr1b.src = "https://1.bp.blogspot.com/-iJYVACO1QTI/YMstmsFoOjI/AAAAAAAAAgA/nFFHOv8PAgYAZHxtKKOxWdlrXx2rTZm_ACPcBGAsYHg/s0/abm6.png";
	gbr2b.src = "https://1.bp.blogspot.com/-HdZ6wvwHUKg/YMstmhsY7MI/AAAAAAAAAgA/v573Wi9LYbs4TQxBBfVFeipi8Np2ZsaAgCPcBGAsYHg/s0/abm6%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-1E9Bg2S-cX0/YMstmquxXcI/AAAAAAAAAgA/7WKZoo7hsjIPxVNqYHLww7zL_egvEs_DwCPcBGAsYHg/s0/abm6%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-8pOqcE7vB0k/YMstmg5B9ZI/AAAAAAAAAgA/E5C1stz5joAgj5M_2IBORldBPcQ6RcQzwCPcBGAsYHg/s0/abm6%2B%25283%2529.png";
}
butnv[23].onclick = function() {
  tChord.innerHTML = nmsx2b[23];
  gbr1b.src = "https://1.bp.blogspot.com/-rLT1awojczQ/YMstyX_fxrI/AAAAAAAAAgE/-YLbwxbu1LsHFpmyLzWRf1CiHpuJF7AMQCPcBGAsYHg/s0/abm69.png";
	gbr2b.src = "https://1.bp.blogspot.com/-RFk6yX7WDrY/YMstyen64aI/AAAAAAAAAgE/1AgVo1h6B_wO-HWygMLu5GguCNWYCPBPACPcBGAsYHg/s0/abm69%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-WyE6yaqYJe0/YMstyQh_mQI/AAAAAAAAAgE/bRIRW3Rys4INIyEQe3hIspyed-AkaDg5ACPcBGAsYHg/s0/abm69%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-YsQMTXDoc4I/YMstyRPHo-I/AAAAAAAAAgE/afzKx8tfRXsghvMNxCTaiFWGMDjNn_u-wCPcBGAsYHg/s0/abm69%2B%25283%2529.png";
}
butnv[24].onclick = function() {
  tChord.innerHTML = nmsx2b[24];
  gbr1b.src = "https://1.bp.blogspot.com/-8LF0iTYDrq4/YMsviaC3SoI/AAAAAAAAAgQ/2zTO3bqmuIc3RY6jeT0-ZyyPOzhYQyVEgCPcBGAsYHg/s0/abm7.png";
	gbr2b.src = "https://1.bp.blogspot.com/-HCRzRsMZ-2I/YMsvifRN_NI/AAAAAAAAAgQ/9PDFsIKQ3uQ9feQAIbHhFUfRYWIXIR3SQCPcBGAsYHg/s0/abm7%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-h2X87rceQbM/YMsviQOwEiI/AAAAAAAAAgQ/Semz0t8TvR0iB6FkCe3cXbfIApQxfNESACPcBGAsYHg/s0/abm7%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-FbKYPMcdgKU/YMsviYTj9UI/AAAAAAAAAgQ/ssoTQFydhZ8DYfk3u_G7XalljiSUKNajgCPcBGAsYHg/s0/abm7%2B%25283%2529.png";
}
butnv[25].onclick = function() {
  tChord.innerHTML = nmsx2b[25];
  gbr1b.src = "https://1.bp.blogspot.com/-RJTzpPc-O8g/YMsvqWkfaWI/AAAAAAAAAgU/uv9A41ehd8wePMop2aub4mhBnbSdY7olQCPcBGAsYHg/s0/abm9.png";
	gbr2b.src = "https://1.bp.blogspot.com/-Khrce7XnkwI/YMsvqYQeh8I/AAAAAAAAAgU/8Rr1j5Ij390io9d95vZ_eiM6ocYyjnRhgCPcBGAsYHg/s0/abm9%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-bvpzHPS4xas/YMsvqTLyutI/AAAAAAAAAgU/MK5wo1jhohUdXmZDQ9VepmjXYi9Ze48zgCPcBGAsYHg/s0/abm9%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-hv1AMY6S-7Q/YMsvqV1NnDI/AAAAAAAAAgU/9Wdy2zUwCBUjGlBTV4QacgFRSUita2hNQCPcBGAsYHg/s0/abm9%2B%25283%2529.png";
}
butnv[26].onclick = function() {
  tChord.innerHTML = nmsx2b[26];
  gbr1b.src = "https://1.bp.blogspot.com/-FVBiyDFZw0M/YMswvl-PkCI/AAAAAAAAAgg/X1F0gACc4KU8wGzNJLBCycPGdj54xZRAQCPcBGAsYHg/s0/abmadd9.png";
	gbr2b.src = "https://1.bp.blogspot.com/-Mvi4JvCjcMY/YMswvg5D-SI/AAAAAAAAAgg/dNrCOmFg0igrvE8D_X0ooX4cEoGeZQw7ACPcBGAsYHg/s0/abmadd9%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-5xZ6_onxZQM/YMswvh6qjbI/AAAAAAAAAgg/Thv_OxzeCXYyn4XvpwwbCOUHfPMC-fmqACPcBGAsYHg/s0/abmadd9%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-lfe0AbrSBPE/YMswvr-mr0I/AAAAAAAAAgg/1u-TvBreEooEyKgsAEw_C1vLWBfIsm2kwCPcBGAsYHg/s0/abmadd9%2B%25283%2529.png";
}
butnv[27].onclick = function() {
  tChord.innerHTML = nmsx2b[27];
  gbr1b.src = "https://1.bp.blogspot.com/-dFjVovK5uFE/YMsw7PNjt9I/AAAAAAAAAgk/-jVY3n8-WVQxxJa_QAxjjD2SlJ2agzIlwCPcBGAsYHg/s0/abmaj11.png";
	gbr2b.src = "https://1.bp.blogspot.com/-ypQshwbdfQ0/YMsw7B3cIbI/AAAAAAAAAgk/Aj7pJ1c6gwsAsbuKSNtMzPN6dEIp4qpmQCPcBGAsYHg/s0/abmaj11%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-jLu3anZZxdk/YMsw7M4YNZI/AAAAAAAAAgk/uIHqDWaSH-Q-09qZK3Mt0Xw9lT8IRj1gACPcBGAsYHg/s0/abmaj11%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-XCQBL6sZC5U/YMsw7EQaEiI/AAAAAAAAAgk/Bi5HfpSSmaYdUKeoThgKg0LTvPIERYY9ACPcBGAsYHg/s0/abmaj11%2B%25283%2529.png";
}
butnv[28].onclick = function() {
  tChord.innerHTML = nmsx2b[28];
  gbr1b.src = "https://1.bp.blogspot.com/-fNb9eG54nuI/YMsyKVtbPRI/AAAAAAAAAgw/WcjymTxe9b4CScNrIkfQtoaP2gNL7QaFwCPcBGAsYHg/s0/abmaj13.png";
	gbr2b.src = "https://1.bp.blogspot.com/-4dVMdHoQbrM/YMsyKRDrg1I/AAAAAAAAAgw/r5v1d0sSZJYIiLmrSzPjnqqLE7dsUIbHQCPcBGAsYHg/s0/abmaj13%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-4nT3INyfAt0/YMsyKQ8h0II/AAAAAAAAAgw/pRw3TFEEKS0iz0ZSsz5RYuYHPgKuOBZmACPcBGAsYHg/s0/abmaj13%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-zoY3_ZIEctU/YMsyKdZj66I/AAAAAAAAAgw/wD_CuhodXpE5bdgVRJvNFBr0bW3ZqUz2gCPcBGAsYHg/s0/abmaj13%2B%25283%2529.png";
}
butnv[29].onclick = function() {
  tChord.innerHTML = nmsx2b[29];
  gbr1b.src = "https://1.bp.blogspot.com/-_VXkiDmNRQY/YMsyRzz-kOI/AAAAAAAAAg0/Op703W5xGsg_vJT_P_SE7wuep-BS3SQfgCPcBGAsYHg/s0/abmaj7.png";
	gbr2b.src = "https://1.bp.blogspot.com/-ui0UDBfI4Mg/YMsyRwG65RI/AAAAAAAAAg0/EwzNtvbnMTg4cYdhQz3reOjRHz8unCx_gCPcBGAsYHg/s0/abmaj7%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-ZbBPVBYTmTw/YMsyRxanZrI/AAAAAAAAAg0/WNddimFd3VMrtKWpDW9Y7psiUynHAo5egCPcBGAsYHg/s0/abmaj7%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-CUQ5Quhojrg/YMsyR8ALqhI/AAAAAAAAAg0/ejP7OtzMjSAGVZO29NlhY3IgRAw6bbT5wCPcBGAsYHg/s0/abmaj7%2B%25283%2529.png";
}
butnv[30].onclick = function() {
  tChord.innerHTML = nmsx2b[30];
  gbr1b.src = "https://1.bp.blogspot.com/-tAgV180zXOE/YMszmm0ENQI/AAAAAAAAAhA/FNUn9SIL7ykaa9sg6lDrG81zqoeQZYA7QCPcBGAsYHg/s0/abmaj%25235.png";
	gbr2b.src = "https://1.bp.blogspot.com/-xllflwZB8vU/YMszmgg7KBI/AAAAAAAAAhA/B-q9tWjmSqcg_z7qTawqNQNAo_zdh9YXACPcBGAsYHg/s0/abmaj%25235%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-Lc0_hMaesj4/YMszmg7Co8I/AAAAAAAAAhA/13jZKDmhrTgPpFfpgozYg1Crx65Os6CdACPcBGAsYHg/s0/abmaj%25235%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-zw3EJCDspQ0/YMszmm1yGNI/AAAAAAAAAhA/csjYrl5GkNw4so_8Aa5ZWGfGeCK5yRIKACPcBGAsYHg/s0/abmaj%25235%2B%25283%2529.png";
}
butnv[31].onclick = function() {
  tChord.innerHTML = nmsx2b[31];
  gbr1b.src = "https://1.bp.blogspot.com/-MVpwYhHQOP4/YMsz0Gec0pI/AAAAAAAAAhE/xWZBIfYSnA0keCbxYXN8zLGpio24XkZ-ACPcBGAsYHg/s0/abmajb5.png";
	gbr2b.src = "https://1.bp.blogspot.com/-UmcgJ3rgFlk/YMsz0ARzmoI/AAAAAAAAAhE/3bb5Su3-PVUCMD_MwIJNud2-3VA6CCuFACPcBGAsYHg/s0/abmajb5%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-gOQgJipTrbc/YMsz0ES4LRI/AAAAAAAAAhE/KWmmXGcCBQAo-8ksrLCHY5lCW7CA_K1SwCPcBGAsYHg/s0/abmajb5%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-LH_jgEwZpEY/YMsz0BSnB3I/AAAAAAAAAhE/OOTRp9JdmIIPC2sPsilMJTsAbifyfNSdACPcBGAsYHg/s0/abmajb5%2B%25283%2529.png";
}
butnv[32].onclick = function() {
  tChord.innerHTML = nmsx2b[32];
  gbr1b.src = "https://1.bp.blogspot.com/-5p6q9X17xTA/YMs0KYMWSNI/AAAAAAAAAhM/twstiju3KGUaW62MC4k_s7xBdawPdtN6QCPcBGAsYHg/s0/abmaj9.png";
	gbr2b.src = "https://1.bp.blogspot.com/-5AohVoNUfh4/YMs0Kcon1WI/AAAAAAAAAhM/zx42aY0RgVoWKtTJIN-3WaqQ5_3IDvpuQCPcBGAsYHg/s0/abmaj9%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-9-gIMBQV-xU/YMs0KZnWSpI/AAAAAAAAAhM/AnXOLVUR3OIa8cPgwjB9rNMoh0djulAxgCPcBGAsYHg/s0/abmaj9%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-d9gDSV4RWBw/YMs0KW3ajQI/AAAAAAAAAhM/ewPkMRDIRBoLSUXIbN6k21_h-J_nRueggCPcBGAsYHg/s0/abmaj9%2B%25283%2529.png";
}
butnv[33].onclick = function() {
  tChord.innerHTML = nmsx2b[33];
  gbr1b.src = "https://1.bp.blogspot.com/-dWnTC0qm1i0/YMs1tsuTUvI/AAAAAAAAAhY/jv-HEG4ck50ullHwW4OQUtjRXssCfWS1QCPcBGAsYHg/s0/absus2.png";
	gbr2b.src = "https://1.bp.blogspot.com/-f1JJUiEikIo/YMs1tojnPHI/AAAAAAAAAhY/bSHw2lN1Hrkzz_gaaPFUCG2YRuj1UynSQCPcBGAsYHg/s0/absus2%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-g0VtLfOOG-U/YMs1tnsTSfI/AAAAAAAAAhY/dWdYcLBSOXIyvkbvyd7NwaAJ07F6gzhWwCPcBGAsYHg/s0/absus2%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-tO-1rCp4abY/YMs1tmEsDUI/AAAAAAAAAhY/EhxLc1E03dAJhPB3G46ysN4dDx0OO8FtACPcBGAsYHg/s0/absus2%2B%25283%2529.png";
}
butnv[34].onclick = function() {
  tChord.innerHTML = nmsx2b[34];
  gbr1b.src = "https://1.bp.blogspot.com/-zck4loLFYW4/YMs1zKbXOAI/AAAAAAAAAhc/EBU8Goadp2w-O9TL_tds9pyNAkpk7X-4QCPcBGAsYHg/s0/absus4.png";
	gbr2b.src = "https://1.bp.blogspot.com/-Tk-7yDXxS30/YMs1zHhNq8I/AAAAAAAAAhc/F-ItcUzOP5wctJrUfpvGjY_xQE8cbEvlwCPcBGAsYHg/s0/absus4%2B%25281%2529.png";
	gbr3b.src = "https://1.bp.blogspot.com/-gC5K1L0c51c/YMs1zG4q0OI/AAAAAAAAAhc/bnnxldZsuy0HmQBvyD4R7SV6dtjNIykNwCPcBGAsYHg/s0/absus4%2B%25282%2529.png";
	gbr4b.src = "https://1.bp.blogspot.com/-xudnoLbY2BQ/YMs1zJxKJaI/AAAAAAAAAhc/q9zuJTmcZIMAGlUKtxrv1m7i7MSSsVKKQCPcBGAsYHg/s0/absus4%2B%25283%2529.png";
}
