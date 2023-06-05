var gbr1 = document.getElementById("ig1");
var gbr2 = document.getElementById("ig2");
var gbr3 = document.getElementById("ig3");
var gbr4 = document.getElementById("ig4");
var gmcx1 = document.getElementById("ix1");
var gmcx2 = document.getElementById("ix2");
var gmcx3 = document.getElementById("ix3");
var gridb1 = document.createElement("div");
gridb1.setAttribute("id", "btxn1");
document.getElementById("DIV1").appendChild(gridb1);
for(let a=0;a<47;a++) {
 var nmsx1 = ["A","A/C#","A/E","A/F","A11","A13","A6","A69","A7","A7#9","A7b5","A7b9","A7sus4","A9","A9#11","A9b5","Aadd9","Aalt","Aaug","Aaug7","Aaug9","Adim","Adim7","Am","Am/C","Am/E","Am/F","Am/F#","Am/G","Am11","Am6","Am69","Am7","Am7b5","Am9","Amadd9","Amaj11","Amaj13","Amaj7","Amaj7#5","Amaj7b5","Amaj9","AmMaj11","AmMaj7","AmMaj9","Asus2","Asus4"];
 var rowc1 = document.createElement("div");
 rowc1.setAttribute("class", "koloms1");
 rowc1.innerHTML = nmsx1[a];
 document.getElementById("btxn1").appendChild(rowc1);
}
var butnv = document.getElementsByClassName("koloms1");
butnv[0].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-3SA2EeKQRLM/YMUpNH0NQAI/AAAAAAAAAFk/dHGeAJ5tEZAicS_T5Kjvb5_iqj6KN8hSgCLcBGAsYHQ/s0/a.png";
	gbr2.src = "https://1.bp.blogspot.com/-xipr0CwKiLo/YMUpMIluLoI/AAAAAAAAAFY/i6x8RFCL1LU3NWWZ-VfLcwqIj-8-WcCsgCLcBGAsYHQ/s0/a%2B%25283%2529.png";
	gbr3.src = "https://1.bp.blogspot.com/-LuRVSByY0eg/YMUpMZiUDwI/AAAAAAAAAFg/EVnc0r9lu_0H6SqnOpnicsP7PUeUy13ygCLcBGAsYHQ/s0/a%2B%25281%2529.png";
	gbr4.src = "https://1.bp.blogspot.com/-ezj4jYUXczY/YMUpMKgMppI/AAAAAAAAAFc/DYn-JsAx2PMfh2l-kSv1oQGw30qYsEF6ACLcBGAsYHQ/s0/a%2B%25282%2529.png";
}
butnv[1].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-lZlYR5Rssks/YMYJUlo1fVI/AAAAAAAAARo/L95q4TDZJTsTAH0Th1oZd00qSMeIPGdmgCPcBGAYYCw/s0/AddText_06-10-04.25.33.png";
	gmcx2.src = "https://1.bp.blogspot.com/-6d_11Qn52uo/YMYJUsp_iYI/AAAAAAAAARo/KUiJWE8J4mkDX8HJoKYxjN6jRI5cnFhWgCPcBGAYYCw/s0/AddText_06-10-04.21.42.png";
	gmcx3.src = "https://1.bp.blogspot.com/-0sh1rOLA6-8/YMYJUUvW9kI/AAAAAAAAARs/32zKlp9x9UcKdobL1jxBKVgw4FBKelSYgCPcBGAYYCw/s0/AddText_06-10-04.18.06.png";
}
butnv[2].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-2dgxXgDh03I/YMYJVpsbAAI/AAAAAAAAARI/YmI6tl7QV5QbHz5FLV9DWn9V3wg4SkE1wCPcBGAYYCw/s0/AddText_06-10-04.39.23.png";
	gmcx2.src = "https://1.bp.blogspot.com/-NC7gVUa40Lg/YMYJV326IqI/AAAAAAAAARA/hELhph_kJgALCMWfQgxCm7nSuv3iuWajgCPcBGAYYCw/s0/AddText_06-10-04.36.42.png";
	gmcx3.src = "https://1.bp.blogspot.com/-0eMUlc9_p8w/YMYJVUiIcoI/AAAAAAAAARo/UzxA714UYCMEOeH7Zj8r6GDhgwZkBmU-wCPcBGAYYCw/s0/AddText_06-10-04.33.19.png";
}
butnv[3].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-6jc0ZQlreFs/YMYJWxR2cMI/AAAAAAAAAQ4/EDJmDoDYh3ENk4xBxxdAJBsXTKQiUMsRQCPcBGAYYCw/s0/AddText_06-10-04.48.30.png";
	gmcx2.src = "https://1.bp.blogspot.com/-ABZYN4UDp0E/YMYJWwMej_I/AAAAAAAAARo/JdZ3Whq_KAwjcPdBui1oJhwsJgY9DGcgACPcBGAYYCw/s0/AddText_06-10-04.45.55.png";
	gmcx3.src = "https://1.bp.blogspot.com/-a32g3-mzDeM/YMYJWV_pOPI/AAAAAAAAARI/jMDrAv7ZfVg-XlAEdGz-eDFfBGodFa9YACPcBGAYYCw/s0/AddText_06-10-04.43.26.png";
}
butnv[4].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-O-KnML0LT2I/YMYJYX-vRHI/AAAAAAAAARA/bDil6p8tbfsxizYvmVTrbz_l52FEmgquwCPcBGAYYCw/s0/AddText_06-10-05.03.45.png";
	gbr2.src = "https://1.bp.blogspot.com/-ZRoW-bQAqIU/YMYJYFGfZpI/AAAAAAAAARY/8cdLQtILtFkDCCHiS8TlUlAi7y9bfoi9wCPcBGAYYCw/s0/AddText_06-10-05.01.10.png";
	gbr3.src = "https://1.bp.blogspot.com/-EWN_xCKpcoU/YMYJXwSLQjI/AAAAAAAAARo/k-wkDYzmmKowAmqzGk4GfPQ2jtgM-OF1wCPcBGAYYCw/s0/AddText_06-10-04.58.31.png";
	gbr4.src = "https://1.bp.blogspot.com/-PrPZbz-4-3g/YMYJXS9_onI/AAAAAAAAARU/d-Y9zw6XrIUbjYw723RZ7GzSkfyfdLdFACPcBGAYYCw/s0/AddText_06-10-04.52.04.png";
}
butnv[5].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-eifpfyXU50c/YMYJZ3f2uyI/AAAAAAAAARI/UnefXzZCGI4HHDZ8XMi4svQ2aSBaLsWCwCPcBGAYYCw/s0/AddText_06-10-05.15.02.png";
	gbr2.src = "https://1.bp.blogspot.com/-GKhiudhqqlI/YMYJZQdkZcI/AAAAAAAAARU/gkTKf7ZsKIEYtxKXV_NrKskzx-ExtAPeACPcBGAYYCw/s0/AddText_06-10-05.12.35.png";
	gbr3.src = "https://1.bp.blogspot.com/-XAIQ8lj6brU/YMYJZIQMx7I/AAAAAAAAARA/5PiGQhDtzpsmcmDTpf2jz_czO1DR0wyOgCPcBGAYYCw/s0/AddText_06-10-05.09.59.png";
	gbr4.src = "https://1.bp.blogspot.com/-Sc3kjybjoKA/YMYJY74-SSI/AAAAAAAAARs/n_0YnSjoYAAaXVMtF721ScOVfah_WKHBwCPcBGAYYCw/s0/AddText_06-10-05.07.55.png";
}
butnv[6].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-eTNjqNK3gh4/YMYJdd2DrQI/AAAAAAAAAQ0/hQrAZEMuz5sGJROV8GrFYZS274HNRocdwCPcBGAYYCw/s0/AddText_06-10-05.25.30.png";
	gbr2.src = "https://1.bp.blogspot.com/-WoIDDUjahjM/YMYJbVE19EI/AAAAAAAAARU/F7YfYKZ5ntITUwUXqQsAyOiWIPen-UjeACPcBGAYYCw/s0/AddText_06-10-05.23.09.png";
	gbr3.src = "https://1.bp.blogspot.com/-PQ3OaMSa-14/YMYJaRrZCaI/AAAAAAAAARs/kChfFwjK_70XTJHSGEySsiM5Pe4NASdfgCPcBGAYYCw/s0/AddText_06-10-05.21.24.png";
	gbr4.src = "https://1.bp.blogspot.com/-XmCZRWbHdVU/YMYJaS_wQBI/AAAAAAAAARI/mePSIQh2Gr82Ldj2-_4tDjsSnwKxXgBfwCPcBGAYYCw/s0/AddText_06-10-05.18.21.png";
}
butnv[7].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-7enUkBQmR9U/YMYJevF52iI/AAAAAAAAARI/dJsvY4fEt6c-xt2T1WIhfeUPCXZsGVXvgCPcBGAYYCw/s0/AddText_06-10-05.44.26.png";
	gbr2.src = "https://1.bp.blogspot.com/-0UTclnWDmZ0/YMYJehU7jLI/AAAAAAAAARI/W7_MxyOmk3IWdazBtiKMa_uqnKrleOqeACPcBGAYYCw/s0/AddText_06-10-05.42.10.png";
	gbr3.src = "https://1.bp.blogspot.com/-klSpPIEknbY/YMYJeLXxA6I/AAAAAAAAARU/q3x7EENod-0bPUtNRwVyWGdxc3R3DdZ5ACPcBGAYYCw/s0/AddText_06-10-05.40.23.png";
	gbr4.src = "https://1.bp.blogspot.com/-K0h0xk4573E/YMYJdKk32RI/AAAAAAAAARA/_Cz7Ufr84JUAyHCVoQR2t3ezuCH0XXPRwCPcBGAYYCw/s0/AddText_06-10-05.37.15.png";
}
butnv[8].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-ZnWRJUiaWZs/YMYJiegjiRI/AAAAAAAAARA/_HhKOhppBE0P4EyIoq1HB0BdQnJGl1EAgCPcBGAYYCw/s0/AddText_06-10-05.54.24.png";
	gbr2.src = "https://1.bp.blogspot.com/-dYK-DctZUYY/YMYJhY373uI/AAAAAAAAARo/V0RnRnEjG0Q4AVNYfalE8IdFlT00obe-wCPcBGAYYCw/s0/AddText_06-10-05.52.14.png";
	gbr3.src = "https://1.bp.blogspot.com/-b8bb1-F8Gmk/YMYJhfBY8ZI/AAAAAAAAARA/iKYKtlXPkZ86hpgwKgnFa0eCwPD5I2oVQCPcBGAYYCw/s0/AddText_06-10-05.50.20.png";
	gbr4.src = "https://1.bp.blogspot.com/-0nFzCvIZg7U/YMYJhZ2CuYI/AAAAAAAAARU/8KESvF00mc04X8XPyFyL1bUrdJNqFJFwQCPcBGAYYCw/s0/AddText_06-10-05.48.36.png";
}
butnv[9].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-JSzBKJgY-kE/YMYJjqJdU5I/AAAAAAAAARI/biyx6j0OdoEHtrKtBBLwq01MIBJWkduMACPcBGAYYCw/s0/AddText_06-10-06.04.41.png";
	gbr2.src = "https://1.bp.blogspot.com/-Aw5jmzCKn4o/YMYJjvQ-wWI/AAAAAAAAARA/XJNWPELmNs8DGru4zPmU5FEiUp5Yqnw4ACPcBGAYYCw/s0/AddText_06-10-06.02.07.png";
	gbr3.src = "https://1.bp.blogspot.com/-dO8lOX8hzYU/YMYJiuQniUI/AAAAAAAAARo/lk7EeYnpYtY9kmHnQsVpcY5t1SfXGqy9ACPcBGAYYCw/s0/AddText_06-10-06.00.14.png";
	gbr4.src = "https://1.bp.blogspot.com/-xfILy7BygPY/YMYJiW7CeVI/AAAAAAAAARI/sSNtGH2hErUIcTslIAw5jCgukTIMkdTxgCPcBGAYYCw/s0/AddText_06-10-05.58.09.png";
}
butnv[10].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-teUpBC9xmJk/YMYJj-wNTMI/AAAAAAAAARI/jFT61yFIOAwUYcFqVgEbj2FvvocxRNYlQCPcBGAYYCw/s0/AddText_06-10-06.08.32.png";
	gbr2.src = "https://1.bp.blogspot.com/-IxUmXmLjWb4/YMYJkn8DZOI/AAAAAAAAARk/fHFCuXL9thMmLPPamoML4uyQ-GlNh59NgCPcBGAYYCw/s0/AddText_06-10-06.12.18.png";
	gbr3.src = "https://1.bp.blogspot.com/-z58XgLENUvk/YMYJlTI_xdI/AAAAAAAAARY/E9qOQDa3JewYuc9sXsoXh40-HwLS3w66gCPcBGAYYCw/s0/AddText_06-10-06.14.35.png";
	gbr4.src = "https://1.bp.blogspot.com/-ANVjdPk6LFM/YMYJlZupcMI/AAAAAAAAARk/00lIOpjwGH43FOmtlfjRW2f4Taf8ovDxACPcBGAYYCw/s0/AddText_06-10-06.18.25.png";
}
butnv[11].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-aROcxiFVC7I/YMYJl22DM6I/AAAAAAAAAQ0/QUUY5aj4wuMv6ECjceQQVS7Lam_Ymk8mQCPcBGAYYCw/s0/AddText_06-10-07.03.06.png";
	gbr2.src = "https://1.bp.blogspot.com/-xdrrxA6D1_c/YMYJmXlwxAI/AAAAAAAAARA/jz6BacYu2f8ZeCT2Jz7RYg3UvCbFKNYxACPcBGAYYCw/s0/AddText_06-10-07.06.51.png";
	gbr3.src = "https://1.bp.blogspot.com/-asJSJMSUb1w/YMYJmoaY5qI/AAAAAAAAARE/YO8of-JY45kPyvRqGvGViyq18lseCMWFQCPcBGAYYCw/s0/AddText_06-10-07.09.31.png";
	gbr4.src = "https://1.bp.blogspot.com/-c0jfF6w7oKI/YMYJmwXVfaI/AAAAAAAAARY/8Q8CRMajxDwSyIJjnnP1j6KcF5qQ9ZokwCPcBGAYYCw/s0/AddText_06-10-07.12.06.png";
}
butnv[12].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-qD8pLk-8Jew/YMYJnUDkHMI/AAAAAAAAARA/D-OtHvegN5IWjI229uRbhKG27qA7tjY-ACPcBGAYYCw/s0/AddText_06-10-07.15.46.png";
	gbr2.src = "https://1.bp.blogspot.com/-4ZtPkI-sDRg/YMYJoPSWuLI/AAAAAAAAARY/L7RpkFrmFLM0IWeH2YaSpAlOQvl3yeylwCPcBGAYYCw/s0/AddText_06-10-07.25.45.png";
	gbr3.src = "https://1.bp.blogspot.com/-NVCyyhWB5EE/YMYJnmThwgI/AAAAAAAAARY/BKHL4C1fHV0ZMgNfD_e2BcENSHABc0Y-ACPcBGAYYCw/s0/AddText_06-10-07.18.01.png";
	gbr4.src = "https://1.bp.blogspot.com/-133_3UgwTUI/YMYJouY2wKI/AAAAAAAAARE/8Cewa_w9R6c0uYmgZ0Mt--gU-qkmQEtpgCPcBGAYYCw/s0/AddText_06-10-07.27.41.png";
}
butnv[13].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-zXoozyK9ZNM/YMYJoz5tqDI/AAAAAAAAARA/R9OMJ3niKKcrHH02kX2TAjRsRegZDSKbACPcBGAYYCw/s0/AddText_06-10-07.30.53.png";
	gbr2.src = "https://1.bp.blogspot.com/-hUNa7PugTJg/YMYJpEx0G7I/AAAAAAAAARk/T102pZVfCtMB061WNIvGdp2gScZnR0CxgCPcBGAYYCw/s0/AddText_06-10-07.32.56.png";
	gbr3.src = "https://1.bp.blogspot.com/-r3MYr5u53VE/YMYJpz4xYgI/AAAAAAAAARk/9SHrOTQbzIMkakoPVXwp87UyzqBAyDGLgCPcBGAYYCw/s0/AddText_06-10-07.35.00.png";
	gbr4.src = "https://1.bp.blogspot.com/-ADIZ5KTDyqw/YMYJpnbExyI/AAAAAAAAARE/6SaTabUNwc8Kc0SuVLzf_hxBIHiUQx-QwCPcBGAYYCw/s0/AddText_06-10-07.37.40.png";
}
butnv[14].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-EFxGIK8oX0A/YMYJqFCkH-I/AAAAAAAAAQ0/9pwY-xlFheEtfBzQhidAxFNAy63uCdgagCPcBGAYYCw/s0/AddText_06-10-07.41.16.png";
	gbr2.src = "https://1.bp.blogspot.com/-1nwYc3wzWAM/YMYJqoldBsI/AAAAAAAAAQ0/04lEorfFfW4O7QxMqX0pz6j0bjyd71IhACPcBGAYYCw/s0/AddText_06-10-07.44.02.png";
	gbr3.src = "https://1.bp.blogspot.com/-9K-cCDDB8Ug/YMYJq__9EDI/AAAAAAAAARU/kIRqTo_GWaY8x1DHlumfuuN_h2p9fOG1wCPcBGAYYCw/s0/AddText_06-10-07.46.00.png";
	gbr4.src = "https://1.bp.blogspot.com/-cXcmx_rXuFE/YMYJrJ2YjvI/AAAAAAAAARE/RHmXZgTpROsXtluiOI0vVKyJxLe2_nAdwCPcBGAYYCw/s0/AddText_06-10-07.48.11.png";
}
butnv[15].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-ehEmM3Otatw/YMYJrsxBJsI/AAAAAAAAARY/ikaES5-_PqYNT0b5dlMFOyHO4KMuR61LwCPcBGAYYCw/s0/AddText_06-10-07.52.54.png";
	gbr2.src = "https://1.bp.blogspot.com/-dlfETh8SfqY/YMYJr6kBV4I/AAAAAAAAARA/G4u-Sr6seFcfMQABhRLeEKD5P1UL6A29gCPcBGAYYCw/s0/AddText_06-10-07.56.31.png";
	gbr3.src = "https://1.bp.blogspot.com/-cBcPlqg50I8/YMYJsWuH2VI/AAAAAAAAARY/gkpKoncgAa0rR7c-PGzmuBgAC3fHBE6fwCPcBGAYYCw/s0/AddText_06-10-07.58.05.png";
	gbr4.src = "https://1.bp.blogspot.com/-6SIJwwW1mdo/YMYJs9fJrMI/AAAAAAAAARY/k1yZM1TKRd0ATOTbKXrbdRFwGEKoQUMYQCPcBGAYYCw/s0/AddText_06-10-07.59.47.png";
}
butnv[16].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-I0ZOUZZJlxo/YMYJs1zsscI/AAAAAAAAARE/evpTAhWTr6wJnNB6xy2-Hf05pQEMe-5qACPcBGAYYCw/s0/AddText_06-10-08.02.27.png";
	gbr2.src = "https://1.bp.blogspot.com/-SMDIwZW2up4/YMYJteOwvhI/AAAAAAAAARo/06YIBhnDDxUlzuDxMuE2ZHOH_4GhCkfZwCPcBGAYYCw/s0/AddText_06-10-08.04.44.png";
	gbr3.src = "https://1.bp.blogspot.com/-YnMNVJT5rTI/YMYJtnEffWI/AAAAAAAAARE/ebQGcdHc6OsYjG3WrYJQAhZdFe0B2TiKQCPcBGAYYCw/s0/AddText_06-10-08.06.39.png";
	gbr4.src = "https://1.bp.blogspot.com/-ujOcxULnrqg/YMYJtzkCzBI/AAAAAAAAARY/FIO3zpoyGTc55s-a0IGYdSjYlfm_s4FIACPcBGAYYCw/s0/AddText_06-10-08.17.55.png";
}
butnv[17].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-_6YB599KwP0/YMYJuUJDe1I/AAAAAAAAARo/DHwSBUGEcSwR8T8C5aYAq9guztXwbB1GgCPcBGAYYCw/s0/AddText_06-10-08.22.30.png";
	gbr2.src = "https://1.bp.blogspot.com/-p9w-9olbym4/YMYJuw2yEQI/AAAAAAAAARQ/yPzEWEjVhTEUQ7Ggd9NuP9_o0_lhHKAiwCPcBGAYYCw/s0/AddText_06-10-08.25.20.png";
	gbr3.src = "https://1.bp.blogspot.com/-XOGklT_zec0/YMYJu0x5nHI/AAAAAAAAARY/KVb3sKEp0DMkJOHsf7uFlfooCYaWgBQJQCPcBGAYYCw/s0/AddText_06-10-08.28.04.png";
	gbr4.src = "https://1.bp.blogspot.com/-aqepJylXrMc/YMYJvc_o0lI/AAAAAAAAARk/r15K4mgtFoMpEd_uJBA5y2Hqk6XN8GCzgCPcBGAYYCw/s0/AddText_06-10-08.30.04.png";
}
butnv[18].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-J6d0PkWGMZ8/YMYJwgy7p3I/AAAAAAAAAQ0/eV7hdG53QNwPTge4WnjI1WA9Au_HaMEzwCPcBGAYYCw/s0/AddText_06-10-09.08.08.png";
	gbr2.src = "https://1.bp.blogspot.com/-2yBZRV8LM4o/YMYJwt1_0zI/AAAAAAAAARU/SCMP8SqdheAK7Elg11jMMtm39qk8FgOJgCPcBGAYYCw/s0/AddText_06-10-09.11.17.png";
	gbr3.src = "https://1.bp.blogspot.com/-ODEYUHcp-n8/YMYJwEmRnpI/AAAAAAAAARk/FVoJmVnscA8g2ZNAUUoeX6DdkWCZDM2xQCPcBGAYYCw/s0/AddText_06-10-09.13.27.png";
	gbr4.src = "https://1.bp.blogspot.com/-FkMeTr52VWQ/YMYJxMGPuPI/AAAAAAAAARg/A6sDmUR0WVE_qT8wufMeOQii_RQaaS2MgCPcBGAYYCw/s0/AddText_06-10-09.15.58.png";
}
butnv[19].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-GL9kzeuWkCU/YMYJxkEHwQI/AAAAAAAAARA/1vCJb9HSp8wxSK-gIUVja5c2GeVsALciACPcBGAYYCw/s0/AddText_06-10-09.19.16.png";
	gbr2.src = "https://1.bp.blogspot.com/-cIXjUBh9epM/YMYJxjQ5RzI/AAAAAAAAARk/hNFemhbjuY4KAUvS9a2-NMS9XzVMMm_2gCPcBGAYYCw/s0/AddText_06-10-09.21.33.png";
	gbr3.src = "https://1.bp.blogspot.com/-D2WSSDpm8Ow/YMYJyPELNlI/AAAAAAAAARk/paLSqYJFE-olVoKGkrzSe_3DZ51RkcwAQCPcBGAYYCw/s0/AddText_06-10-09.23.14.png";
	gbr4.src = "https://1.bp.blogspot.com/-cklwn1m7j60/YMYJyqevHhI/AAAAAAAAARk/H1ZZa3EPRpQVuxfILcqAwX5dM8mgXXmrACPcBGAYYCw/s0/AddText_06-10-09.25.07.png";
}
butnv[20].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-P_32NvYn95k/YMYJy9XrxOI/AAAAAAAAAQ0/othxUjW9wSsH-SPErOVURj57BOgZEQ5AgCPcBGAYYCw/s0/AddText_06-10-09.29.01.png";
	gmcx2.src = "https://1.bp.blogspot.com/-LWc4zMppkkI/YMYJ0ZYa-4I/AAAAAAAAARk/SQEwYSdxUj48Bvtm162CtjWFXhMOyZ7VgCPcBGAYYCw/s0/AddText_06-10-09.33.33.png";
	gmcx3.src = "https://1.bp.blogspot.com/-ow_BpThJNGs/YMYJ0WYkStI/AAAAAAAAAQ8/FVQYLm28YNQq3KpT3h32Oqb8dwavR-eLwCPcBGAYYCw/s0/AddText_06-10-09.38.55.png";
}
butnv[21].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-xM581K-csEg/YMYJ1R77EzI/AAAAAAAAAQ8/TnNZpsF66PY84saxf2xSmuDIh5TTBZ5bQCPcBGAYYCw/s0/AddText_06-10-09.45.59.png";
	gbr2.src = "https://1.bp.blogspot.com/-ybdNJOSthJc/YMYJ1h1r50I/AAAAAAAAAQ8/JGjwySrmEOo721iGRmTwBzaE0R9oPV6-QCPcBGAYYCw/s0/AddText_06-10-09.49.18.png";
	gbr3.src = "https://1.bp.blogspot.com/-lR0pErFsdUg/YMYJ13eR-oI/AAAAAAAAARk/GqHE637CUSQCiEzlTnYo3FCEeI82rIobQCPcBGAYYCw/s0/AddText_06-10-09.51.58.png";
	gbr4.src = "https://1.bp.blogspot.com/-qqksY4K1Wac/YMYJ2Q2OvgI/AAAAAAAAAQ0/oNNYCs0wEYAC3GC49Izhfg5S6pEDoj8GwCPcBGAYYCw/s0/AddText_06-10-09.53.53.png";
}
butnv[22].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-2IjMK2B52T4/YMYJ2VgN7MI/AAAAAAAAARQ/78m-L4GsozgxBYyBQpS8EEqnFU_gYM6ywCPcBGAYYCw/s0/AddText_06-10-11.07.10.png";
	gbr2.src = "https://1.bp.blogspot.com/-z8C0WUNCul8/YMYJ2uIvf_I/AAAAAAAAARU/gpk4nF_Gt4oLLI_ygEEihuFLqdiDkttAACPcBGAYYCw/s0/AddText_06-10-11.09.58.png";
	gbr3.src = "https://1.bp.blogspot.com/-ksqx77ds-Xg/YMYJ3LZ1eoI/AAAAAAAAARg/zu0IO0u51fwXEyMPZD_JeyLY5zjeTnxuQCPcBGAYYCw/s0/AddText_06-10-11.12.49.png";
	gbr4.src = "https://1.bp.blogspot.com/-pxdaG6ctwqY/YMYJ3fnlElI/AAAAAAAAAQ8/LFbLB93G8XE4a1-SnYc0FsgYi3ppUIKHgCPcBGAYYCw/s0/AddText_06-10-11.15.13.png";
}
butnv[23].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-xeQQ_ppW33c/YMYJ38x2QYI/AAAAAAAAAQ8/w_UNGNcdGzo_4-kcR76-CFt3pjwcBe58wCPcBGAYYCw/s0/AddText_06-10-11.18.12.png";
	gbr2.src = "https://1.bp.blogspot.com/-33gSGhh_Mr8/YMYJ4VKxyAI/AAAAAAAAARU/wRWMCIeYTRczXKLNgE8cYqXE_3_a4RYfACPcBGAYYCw/s0/AddText_06-10-11.19.35.png";
	gbr3.src = "https://1.bp.blogspot.com/-05KWFEq35YI/YMYJ4VF8IVI/AAAAAAAAARk/JztTlaBA_4cLGbHJCORNJSmn8XKn1m-9wCPcBGAYYCw/s0/AddText_06-10-11.22.07.png";
	gbr4.src = "https://1.bp.blogspot.com/-RVJgvTdknlw/YMYJ4mA1C7I/AAAAAAAAARg/pT3O_KA7V8snB6-EiMK9iAhGt2Zm3OO6gCPcBGAYYCw/s0/AddText_06-10-11.23.54.png";
}
butnv[24].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-7i56pE-hEQg/YMYJ5ct1ZnI/AAAAAAAAARg/RXlOY5yv3Sgt6VsO0wyo-XpoS6tc9BChQCPcBGAYYCw/s0/AddText_06-10-11.27.43.png";
	gmcx2.src = "https://1.bp.blogspot.com/-B2-JvWRdNas/YMYJ5URpt7I/AAAAAAAAARk/nyUyoHBbJWAr7A_4yOnNm--46QZD8kqmwCPcBGAYYCw/s0/AddText_06-10-11.30.02.png";
	gmcx3.src = "https://1.bp.blogspot.com/-cU_aMqAUt30/YMYJ5mNCZSI/AAAAAAAAARk/-sFnW14M7FIbHan7lBFvqvxXqdbHwHVVACPcBGAYYCw/s0/AddText_06-10-11.32.13.png";
}
butnv[25].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-yfNvkBSG9mE/YMYJ6JRBmqI/AAAAAAAAARE/5ZtC38S5Te0W0ynkHlHQ1mJjjBdVaUMVwCPcBGAYYCw/s0/AddText_06-10-11.36.10.png";
	gmcx2.src = "https://1.bp.blogspot.com/-phHLWkp_oFo/YMYJ69Hny_I/AAAAAAAAARU/XBERKlIENwwQVMiLEOziI_9uJb3YldRlQCPcBGAYYCw/s0/AddText_06-10-11.37.37.png";
	gmcx3.src = "https://1.bp.blogspot.com/-EIllIn2IJV8/YMYJ7cMwcgI/AAAAAAAAARk/VjZt9t8M0tkUWmb7CKeXQbfCnWymTLZRwCPcBGAYYCw/s0/AddText_06-10-11.39.19.png";
}
butnv[26].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-dHxhtCpRj9c/YMYJ7WJHRwI/AAAAAAAAARU/FkVH6L37imcOkGXYxuRwhXLiAE0XZf8pQCPcBGAYYCw/s0/AddText_06-10-11.42.35.png";
	gmcx2.src = "https://1.bp.blogspot.com/-s3ihHk2nJH0/YMYJ7kY72fI/AAAAAAAAAQ8/rieW7BuonBEYLJOTQpl3_euhOXHQIwpmwCPcBGAYYCw/s0/AddText_06-10-11.45.35.png";
	gmcx3.src = "https://1.bp.blogspot.com/-xNa2A9b9o_Y/YMYJ9HWmEfI/AAAAAAAAARU/_lGYhgareGErggKJMR4lzQwcF_Uk9ehOQCPcBGAYYCw/s0/AddText_06-10-11.48.55.png";
}
butnv[27].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-R1xwGFF5rxE/YMYJ9ACVn2I/AAAAAAAAARM/MLeyxTNWtk8xmgVeSk2KnOzo6wct7L9ZACPcBGAYYCw/s0/AddText_06-10-11.51.57.png";
	gmcx2.src = "https://1.bp.blogspot.com/-HSJdYKsQXZA/YMYJ9ON-SWI/AAAAAAAAARc/EUeuD9pZNaomayZxCZ728mcTcIswelMbgCPcBGAYYCw/s0/AddText_06-10-11.53.41.png";
	gmcx3.src = "https://1.bp.blogspot.com/-0Coc3I-oLP4/YMYJ90vz0wI/AAAAAAAAAQ8/CwrESh82QN4DaPxHGNuHJmbZaLSA5mZtwCPcBGAYYCw/s0/AddText_06-10-11.55.20.png";
}
butnv[28].onclick = function() {
  modal2.style.display = "block";
  gmcx1.src = "https://1.bp.blogspot.com/-OdEuPNQ3E1M/YMYKWu5FhNI/AAAAAAAAARE/Ke4gCUj4CaU3TTQOZJZt6SpgOFw_DtFSQCPcBGAYYCw/s0/AddText_06-11-12.01.27.png";
	gmcx2.src = "https://1.bp.blogspot.com/-a8-NnNEIO0M/YMYKXzSU3vI/AAAAAAAAARc/swZJGSe_qfEPmhfW816DGpcTAaqPmqUfgCPcBGAYYCw/s0/AddText_06-11-12.04.53.png";
	gmcx3.src = "https://1.bp.blogspot.com/-fH0UcDTGXdI/YMYKYc212UI/AAAAAAAAARQ/oEA1n40_vLoQVYN3jV4PK3SYA6zgKpogACPcBGAYYCw/s0/AddText_06-11-12.06.44.png";
}
butnv[29].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-RGdQ7pwswqY/YMYKYdnoipI/AAAAAAAAARE/c1HOuUYyGioRSluZ-p6JAWjbLMtmRjDnQCPcBGAYYCw/s0/AddText_06-11-12.12.05.png";
	gbr2.src = "https://1.bp.blogspot.com/-_GwO3BF-zeU/YMYKYi99adI/AAAAAAAAARc/8R-Vywu3G_kCHt2Hg7bDONhN8fHYkOmIwCPcBGAYYCw/s0/AddText_06-11-12.13.50.png";
	gbr3.src = "https://1.bp.blogspot.com/-nfszUHc3ykU/YMYKZ832hLI/AAAAAAAAARM/cQwgFmu0pI4C1bZrHBJrsBownxgYneEEQCPcBGAYYCw/s0/AddText_06-11-12.16.22.png";
	gbr4.src = "https://1.bp.blogspot.com/-kfvd68u_Dgk/YMYKZ5OKZgI/AAAAAAAAARQ/ZB6_hSNbKG8Q4mR2464q8D8k5bGG-TLtACPcBGAYYCw/s0/AddText_06-11-12.18.36.png";
}
butnv[30].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-fWsUIgMkbJM/YMYKZ6N4BUI/AAAAAAAAARc/P0TxAkuTxS4cbnZA3lV3t7pCQ1-7KG3_ACPcBGAYYCw/s0/AddText_06-11-12.23.30.png";
	gbr2.src = "https://1.bp.blogspot.com/-rwG5a68_XXY/YMYKatKbZcI/AAAAAAAAARc/aDgefROPCUkBpveKX8RiG4IentEL-7HqACPcBGAYYCw/s0/AddText_06-11-12.24.56.png";
	gbr3.src = "https://1.bp.blogspot.com/-HMPdbQboKUE/YMYKbGYCUqI/AAAAAAAAARc/DfC0qQKoSlIDTgXV5yejx0LVvpUrC6rjwCPcBGAYYCw/s0/AddText_06-11-12.28.08.png";
	gbr4.src = "https://1.bp.blogspot.com/-ezor8-NRWLo/YMYKbQqviAI/AAAAAAAAARg/igEzzyTPArkgOrzXlnelF9gKbFp2E6h7ACPcBGAYYCw/s0/AddText_06-11-12.29.49.png";
}
butnv[31].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-gOw_nL0DONY/YMYKDpm5aUI/AAAAAAAAARQ/IffY5DMHW-QYOkzGUIzYNn59AejG59YgwCPcBGAYYCw/s0/AddText_06-11-03.30.25.png";
	gbr2.src = "https://1.bp.blogspot.com/-OZph-Rs7w0s/YMYKDwPfnGI/AAAAAAAAARg/iqrdzzMWOjw2VRx470mXOGlYWpgopIGkwCPcBGAYYCw/s0/AddText_06-11-03.33.01.png";
	gbr3.src = "https://1.bp.blogspot.com/-T-xoiZx2aUw/YMYKExM1zjI/AAAAAAAAARg/BdQCVhEkN5Q4YU5ANuv6h0oPQ9yvWLZbACPcBGAYYCw/s0/AddText_06-11-03.38.33.png";
	gbr4.src = "https://1.bp.blogspot.com/-V0IOmi2P8EM/YMYKCCXDp0I/AAAAAAAAARg/WJ8NO4N31-YXbcM5rLYvhmC8_YlA0PA-wCPcBGAYYCw/s0/AddText_06-11-03.25.04.png";
}
butnv[32].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-X-j69He2GXw/YMYJ-CXT65I/AAAAAAAAAQ0/XDIgEEGSsLY0CuMkTeiP0UFcNVs_ga7UwCPcBGAYYCw/s0/AddText_06-11-02.52.35.png";
	gbr2.src = "https://1.bp.blogspot.com/-ox1gVwi66cs/YMYJ-FWoWHI/AAAAAAAAAQ0/N12j2KMInpoI4XRpLLbFHrNkGkHwdklfACPcBGAYYCw/s0/AddText_06-11-02.54.05.png";
	gbr3.src = "https://1.bp.blogspot.com/-XZrWGL5yXfk/YMYJ_A1UAQI/AAAAAAAAAQ8/viV_CpKUUXUWgLhWMPk93v7lB-9GRSKHgCPcBGAYYCw/s0/AddText_06-11-02.56.19.png";
	gbr4.src = "https://1.bp.blogspot.com/-dAHZk38c-Ck/YMYJ_ILbc_I/AAAAAAAAARE/2MG45H1ZUnAc2x5Nw7yjsw4GP1mvwpOIACPcBGAYYCw/s0/AddText_06-11-02.58.02.png";
}
butnv[33].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-rTnIDd8eWig/YMYJ_THraKI/AAAAAAAAARc/luWi8Or6zpc8XcHmRuJ_v2o24UzdZ1gMgCPcBGAYYCw/s0/AddText_06-11-03.01.35.png";
	gbr2.src = "https://1.bp.blogspot.com/-te3LMt5nd6w/YMYKACF-B3I/AAAAAAAAARg/nELTryhRnfIIlwU7LVMJT3BPFnXWpTolgCPcBGAYYCw/s0/AddText_06-11-03.03.27.png";
	gbr3.src = "https://1.bp.blogspot.com/-MvJRLICxeSo/YMYKAD7LSFI/AAAAAAAAARM/Nowk3rSbzXo5XAkCAJlrQCs4iRwOTLBTwCPcBGAYYCw/s0/AddText_06-11-03.05.29.png";
	gbr4.src = "https://1.bp.blogspot.com/-sCQNVx-IgEI/YMYKARHJ30I/AAAAAAAAARQ/yXSqAb8mF58GR3X7zN6Z7SILRuJ4MnzHwCPcBGAYYCw/s0/AddText_06-11-03.07.38.png";
}
butnv[34].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-VcN5OfTXpcU/YMYKBB0cdwI/AAAAAAAAARg/eLx8Iw8b9kYDXLKtI-mVcc4vCNC26OfcACPcBGAYYCw/s0/AddText_06-11-03.13.30.png";
	gbr2.src = "https://1.bp.blogspot.com/-l27hxlWVkxU/YMYKA0fE4iI/AAAAAAAAAQ8/ZC-gFIDBM6gQIpvYB0RF0XgOs04d0JUwACPcBGAYYCw/s0/AddText_06-11-03.15.40.png";
	gbr3.src = "https://1.bp.blogspot.com/-p--a1UwC8wI/YMYKBcsH6VI/AAAAAAAAARc/hlwtABWnTascqwhQFXdR29_sHLq6lffVACPcBGAYYCw/s0/AddText_06-11-03.17.16.png";
	gbr4.src = "https://1.bp.blogspot.com/-ldPkaRvk9qM/YMYKB_sY8mI/AAAAAAAAAQ0/KOUl_xKECYcZHxlDJoBhLc8dbtVN9OCgwCPcBGAYYCw/s0/AddText_06-11-03.19.30.png";
}
butnv[35].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-dW9ZYBd-A_E/YMYKB35JrBI/AAAAAAAAAQ8/ZT1HQXXoDRYksqrPcbwCIF7cU4JP4lUhACPcBGAYYCw/s0/AddText_06-11-03.22.29.png";
	gbr2.src = "https://1.bp.blogspot.com/--uHU0masskU/YMYKCkHrVpI/AAAAAAAAARM/U0cJZ1E-RmsLJtb_PaM4sEVRpWyfr2rQACPcBGAYYCw/s0/AddText_06-11-03.25.43.png";
	gbr3.src = "https://1.bp.blogspot.com/-UHmfvRKRdVk/YMYKC8BZH_I/AAAAAAAAAQ0/PG5zonpVAQAHerhAzQ_knFg1rQAUN5BeQCPcBGAYYCw/s0/AddText_06-11-03.28.08.png";
	gbr4.src = "https://1.bp.blogspot.com/-9NHfQ90TTnc/YMYKDO47plI/AAAAAAAAARg/ixp2Qp26xogzSFqNqFvSik9vD_iVFQCMwCPcBGAYYCw/s0/AddText_06-11-03.30.07.png";
}
butnv[36].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-x8JisvIjfcY/YMYKD3rehyI/AAAAAAAAARM/xbZqYkCZVRIC-OGk-UOO492SQBIXoXupwCPcBGAYYCw/s0/AddText_06-11-03.33.41.png";
	gbr2.src = "https://1.bp.blogspot.com/-B2cbKVR0Cec/YMYKETm05XI/AAAAAAAAARM/V_5W-GA56vUQzzU6bHagnh4pRAsRAyFvQCPcBGAYYCw/s0/AddText_06-11-03.35.05.png";
	gbr3.src = "https://1.bp.blogspot.com/-kqdP6eNFY3A/YMYKEuIDmkI/AAAAAAAAARM/u2G7RfYJpm0w_-82P4qNp40644VgBduWwCPcBGAYYCw/s0/AddText_06-11-03.37.23.png";
	gbr4.src = "https://1.bp.blogspot.com/-jrrmcfwlbME/YMYKFcc319I/AAAAAAAAARQ/4jBrZGf2OzcZQiRssvh_n49OKccmKMRvQCPcBGAYYCw/s0/AddText_06-11-03.39.02.png";
}
butnv[37].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-wKNbpEOrf9E/YMYKGYq5J_I/AAAAAAAAARQ/WEZpBrtTFXEIUs6nOV1reUplFMZbXesAACPcBGAYYCw/s0/AddText_06-11-04.16.10.png";
	gbr2.src = "https://1.bp.blogspot.com/-9fFw7QcHySk/YMYKGkB3arI/AAAAAAAAARM/Qv4IJV7Gzqo24IVShNtVSsN1PKPsLdM4QCPcBGAYYCw/s0/AddText_06-11-04.18.38.png";
	gbr3.src = "https://1.bp.blogspot.com/-QeE4_yvHGos/YMYKGzq5mNI/AAAAAAAAARg/ptd-PqetAqgm4e0-zJJngNGSwagqbzQMACPcBGAYYCw/s0/AddText_06-11-04.20.24.png";
	gbr4.src = "https://1.bp.blogspot.com/-zJZ13e0yawg/YMYKHfRSAOI/AAAAAAAAARg/sRpxArJ2eZIaHUGsUb1MMSCUeqF9omZVQCPcBGAYYCw/s0/AddText_06-11-04.21.59.png";
}
butnv[38].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-iPCFFNVSmNQ/YMYKHrrY1GI/AAAAAAAAAQ0/Am9dIf59mAk-1PCQSp5jtwDlgcMyIc6_gCPcBGAYYCw/s0/AddText_06-11-04.25.44.png";
	gbr2.src = "https://1.bp.blogspot.com/-_Fa6e3PYkwA/YMYKH3GTeZI/AAAAAAAAAQ8/2_ekvjd_gW4lMix0HKX5iVGYkuAO8TyogCPcBGAYYCw/s0/AddText_06-11-04.27.20.png";
	gbr3.src = "https://1.bp.blogspot.com/-1018Fw-0IkA/YMYKIGbgOsI/AAAAAAAAARM/8peddj7OBgALgcO_dIXqqE1K98HqbYJuwCPcBGAYYCw/s0/AddText_06-11-04.29.07.png";
	gbr4.src = "https://1.bp.blogspot.com/-mtKfcaDIYB8/YMYKIb-_e-I/AAAAAAAAARQ/ny_3HMmKt2U8O66L4Sh_G0P4apNmtY-mACPcBGAYYCw/s0/AddText_06-11-04.31.41.png";
}
butnv[39].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-hhya1SQoaF0/YMYKIwUYzAI/AAAAAAAAAQ0/zD3M9cj12rkvej0-WRWyd2gn-KXoTIyXwCPcBGAYYCw/s0/AddText_06-11-04.36.33.png";
	gbr2.src = "https://1.bp.blogspot.com/-3e8l1f9U2u4/YMYKJOr2e4I/AAAAAAAAARE/9xQVJDAyRDwEXhqG0n3b2f9FF1ZefLH5QCPcBGAYYCw/s0/AddText_06-11-04.39.10.png";
	gbr3.src = "https://1.bp.blogspot.com/-uFzfKCqGCxU/YMYKJZTCCpI/AAAAAAAAARM/mRAXBX2IFIwWctgvojP7KviGJ2vEcUqIgCPcBGAYYCw/s0/AddText_06-11-04.41.11.png";
	gbr4.src = "https://1.bp.blogspot.com/-BbYZl9pJsWI/YMYKJufCpeI/AAAAAAAAARM/8EkD9EiNVGsrAQFvtgolTrklgl-eb4LLACPcBGAYYCw/s0/AddText_06-11-04.43.24.png";
}
butnv[40].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-q_ZSRDGv2I4/YMYKJxqbsVI/AAAAAAAAARQ/wNejqrj4NWMdOjZye15WvGtnLis21EiwwCPcBGAYYCw/s0/AddText_06-11-04.47.34.png";
	gbr2.src = "https://1.bp.blogspot.com/-tu8UONoYpO0/YMYKKjCbqAI/AAAAAAAAAQ8/Zyv9KKUyB48u_lEOMtA5nyAzwGHwr5G0QCPcBGAYYCw/s0/AddText_06-11-04.49.28.png";
	gbr3.src = "https://1.bp.blogspot.com/-bPqZ6lCvXrk/YMYKLlmrhVI/AAAAAAAAARE/pwJhyFmYMygq_76aEAV2Po4yqNf40E_PwCPcBGAYYCw/s0/AddText_06-11-04.51.39.png";
	gbr4.src = "https://1.bp.blogspot.com/--oQGd_Doess/YMYKLt3IoSI/AAAAAAAAARc/KBhroghiXgUXQ0kyiBwHGCAeaawhLgFAgCPcBGAYYCw/s0/AddText_06-11-04.53.28.png";
}
butnv[41].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-AaSSSpdCKE4/YMYKLvMJjqI/AAAAAAAAARE/8G_rw1G1v2A8LHOOLB9376vlSQk0b-I5wCPcBGAYYCw/s0/AddText_06-11-04.57.53.png";
	gbr2.src = "https://1.bp.blogspot.com/-ivZ4yf-XI5A/YMYKMzCCOcI/AAAAAAAAAQ0/ozFNEx1usJw2nI9LMuTIa4rzqL3BWmfUQCPcBGAYYCw/s0/AddText_06-11-04.59.54.png";
	gbr3.src = "https://1.bp.blogspot.com/-43NDKwvFqMs/YMYKNTBCFnI/AAAAAAAAAQ8/kt89q2ck6SI9urF_iLWr7BMbkadOzUL1wCPcBGAYYCw/s0/AddText_06-11-05.01.57.png";
	gbr4.src = "https://1.bp.blogspot.com/-wRy54x2i6y4/YMYKNcSajbI/AAAAAAAAAQ8/ReksxkXPZDA7x-EmBevbd6cnUejNZRiRwCPcBGAYYCw/s0/AddText_06-11-05.03.59.png";
}
butnv[42].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-3X-wzI5lVyE/YMYKNpPbuXI/AAAAAAAAARc/DObZ5lndn1QCM89hp1-X-YHWWJD1QPPQgCPcBGAYYCw/s0/AddText_06-11-06.14.01.png";
	gbr2.src = "https://1.bp.blogspot.com/-9hwtU3jPDss/YMYKONCLjxI/AAAAAAAAARQ/5loouWHcJ_kXqQiPQjYvZOMZjFuE86O7wCPcBGAYYCw/s0/AddText_06-11-06.24.50.png";
	gbr3.src = "https://1.bp.blogspot.com/-RM8jKq1_b14/YMYKOQbhwWI/AAAAAAAAARg/u9heef0y1q8UD-jKTF9QNNrQWOsg5YDJgCPcBGAYYCw/s0/AddText_06-11-06.26.26.png";
	gbr4.src = "https://1.bp.blogspot.com/-fAm4QA-iqEs/YMYKOQhVgrI/AAAAAAAAARQ/e10R8FjqjRAl2S1O1mqOuT8d_m1BD45DgCPcBGAYYCw/s0/AddText_06-11-06.28.10.png";
}
butnv[43].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-B2UACqY2DhA/YMYKPM8EWII/AAAAAAAAARM/Cu48VTPSBAQkX1YiOQK5RzksJ4jQyJ_NwCPcBGAYYCw/s0/AddText_06-11-06.42.14.png";
	gbr2.src = "https://1.bp.blogspot.com/-Id2iStCwHuM/YMYKPTbfAoI/AAAAAAAAARM/TKtFSDLCc-8XvVWU1ISF4adcSJcoRrvhQCPcBGAYYCw/s0/AddText_06-11-06.48.04.png";
	gbr3.src = "https://1.bp.blogspot.com/-GeFUUZ9zjpo/YMYKPsv203I/AAAAAAAAARE/ZJ_dmE_3zAAjewCy9oCuKCFig6BxoKUnwCPcBGAYYCw/s0/AddText_06-11-06.49.45.png";
	gbr4.src = "https://1.bp.blogspot.com/-zLCT2-1fWqE/YMYKQ48XcPI/AAAAAAAAARg/ELqkayL5a_ohkD9q6csx2yxTskquHf9cwCPcBGAYYCw/s0/AddText_06-11-06.53.27.png";
}
butnv[44].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-Xs1TNi0MUCk/YMYKRIDFCJI/AAAAAAAAARQ/8F7EW1ABvBUVbWHFtlcyqaTBoQJs9oaZgCPcBGAYYCw/s0/AddText_06-11-06.59.03.png";
	gbr2.src = "https://1.bp.blogspot.com/-7ljdDdr8ba8/YMYKRXRx8uI/AAAAAAAAARQ/GEJpkjcI2MciGI_DeWNklTbKflDAsAW_gCPcBGAYYCw/s0/AddText_06-11-07.00.49.png";
	gbr3.src = "https://1.bp.blogspot.com/-Vd_8kXnsAUk/YMYKR_owrxI/AAAAAAAAARc/CB6aQHz6FzEbejwxy1F3SwqJBMjMmqgGACPcBGAYYCw/s0/AddText_06-11-07.02.41.png";
	gbr4.src = "https://1.bp.blogspot.com/-cx2kEa-8C_A/YMYKSB7AbEI/AAAAAAAAARc/tfnSurwkN-MCixLMshKXeHJ9wb0heIUtACPcBGAYYCw/s0/AddText_06-11-07.04.23.png";
}
butnv[45].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-g9siM8suvWE/YMYKTOsjfAI/AAAAAAAAAQ0/90D1auYVc2kHUfw_fplUedTK8QHxY6EMACPcBGAYYCw/s0/AddText_06-11-07.08.01.png";
	gbr2.src = "https://1.bp.blogspot.com/-I8J_v-H-15A/YMYKS_qjQDI/AAAAAAAAARc/pe-5dh2KBGQvCu9-1NOxF2uz5GOqcQRdQCPcBGAYYCw/s0/AddText_06-11-07.09.08.png";
	gbr3.src = "https://1.bp.blogspot.com/-_2VQcNRjF54/YMYKTEF_QmI/AAAAAAAAARc/hBi6naCZnpUaw56n5V_b2iOtkj1WWwBIQCPcBGAYYCw/s0/AddText_06-11-07.10.31.png";
	gbr4.src = "https://1.bp.blogspot.com/-frvMovqMGcw/YMYKT0Ps9RI/AAAAAAAAARM/V0vYVbVCxHUhGInuzfnVFqtxnVKEast_wCPcBGAYYCw/s0/AddText_06-11-07.12.00.png";
}
butnv[46].onclick = function() {
  modal.style.display = "block";
  gbr1.src = "https://1.bp.blogspot.com/-k7ZdUi-7srM/YMYKUdkSwPI/AAAAAAAAARc/mRqNGB8qs9QXrNqM27PwZWOS4Ayy4FPNgCPcBGAYYCw/s0/AddText_06-11-07.14.13.png";
	gbr2.src = "https://1.bp.blogspot.com/-plt46eQTMuQ/YMYKUVYzYUI/AAAAAAAAAQ8/Ei8wyelGxDgayESYgxqCsG1wg2JQ9SrYQCPcBGAYYCw/s0/AddText_06-11-07.16.01.png";
	gbr3.src = "https://1.bp.blogspot.com/-Wi3luPLMeE4/YMYKWUcXFYI/AAAAAAAAARE/oBR-yJXD8jEskryPXRZUYdzBSlt9TsyLQCPcBGAYYCw/s0/AddText_06-11-07.17.42.png";
	gbr4.src = "https://1.bp.blogspot.com/-dGJJfnVMEDI/YMYKWWroaCI/AAAAAAAAARM/QqsrJuLP4YU5I65LZdebGv5PmZDNTvgzwCPcBGAYYCw/s0/AddText_06-11-07.18.50.png";
}
