var gbr1f = document.getElementById("ig1");
var gbr2f = document.getElementById("ig2");
var gbr3f = document.getElementById("ig3");
var gbr4f = document.getElementById("ig4");
var tChord = document.getElementById("spChord");
var gridb6 = document.createElement("div");
gridb6.setAttribute("id", "btxn6");
document.getElementById("DIV6").appendChild(gridb6);
for(f=0;f<36;f++){
var nmsx2f = ["C#","C#11","C#13","C#6","C#69","C#7","C#7#9","C#7b5","C#7b9","C#7sus4","C#9","C#9#11","C#9b5","C#add9","C#alt","C#aug","C#aug7","C#aug9","C#dim","C#dim7","C#m","C#m11","C#m6","C#m69","C#m7","C#m7b5","C#m9","C#madd9","C#maj11","C#maj13","C#maj7","C#maj9","C#mmaj7","C#mmaj9","C#sus2","C#sus4"];
 var rowc6 = document.createElement("div");
 rowc6.setAttribute("class", "koloms6");
 rowc6.innerHTML = nmsx2f[f];
 document.getElementById("btxn6").appendChild(rowc6);
}
var butnv = document.getElementsByClassName("koloms6");
butnv[0].onclick = function() {
  tChord.innerHTML = nmsx2f[0];
  gbr1f.src = "https://1.bp.blogspot.com/-xBRxxVrqzzI/YNhiUqTuvjI/AAAAAAAABig/L_U-IEO3DGEmTYlWpgFhjlUmOgEsv0l6ACPcBGAsYHg/s0/AddText_06-26-07.04.37.png";
	gbr2f.src = "https://1.bp.blogspot.com/-tAPEHXfWzSo/YNhiUsuNxOI/AAAAAAAABig/pht0cE3OX6Up3Ywy2ThEJAHvvIwz2ypuQCPcBGAsYHg/s0/AddText_06-26-07.05.59.png";
	gbr3f.src = "https://1.bp.blogspot.com/-aEdyMXLKVkw/YNhiUun_dFI/AAAAAAAABig/m5tyiy133is6WhkJuozijVPLqz5i9-fPwCPcBGAsYHg/s0/AddText_06-26-07.07.38.png";
	gbr4f.src = "https://1.bp.blogspot.com/-_eRjSc65oNQ/YNhiUgT5i3I/AAAAAAAABig/3Qdva9c0Tq0K6glbxc7aApKNCje7TLnEwCPcBGAsYHg/s0/AddText_06-26-07.08.59.png";
}
butnv[1].onclick = function() {
  tChord.innerHTML = nmsx2f[1];
  gbr1f.src = "https://1.bp.blogspot.com/-XkLnxSR80AY/YNhittfEoVI/AAAAAAAABis/VEDWzjw0VagRmfy3BzCD269n97aGHjy6QCPcBGAsYHg/s0/AddText_06-26-07.14.15.png";
	gbr2f.src = "https://1.bp.blogspot.com/-ea7jJA839WY/YNhitsGEf2I/AAAAAAAABis/83rZ4kmaJOARyItHR5I1134Lra36tDh2QCPcBGAsYHg/s0/AddText_06-26-07.15.28.png";
	gbr3f.src = "https://1.bp.blogspot.com/-C4wxiFB1DDA/YNhitgmwGTI/AAAAAAAABis/AeaZIorwtGQMYu3W4CJr9OuttQJJWvwWQCPcBGAsYHg/s0/AddText_06-26-07.16.21.png";
	gbr4f.src = "https://1.bp.blogspot.com/--l4P3Q8JmtY/YNhitoP3tWI/AAAAAAAABis/SCaldpKH48cOiIh7S4059yowzzcfCUFQgCPcBGAsYHg/s0/AddText_06-26-07.17.52.png";
}
butnv[2].onclick = function() {
  tChord.innerHTML = nmsx2f[2];
  gbr1f.src = "https://1.bp.blogspot.com/-WG7hkylCHpw/YNhiz4ASvfI/AAAAAAAABiw/RYG3YkzcUXwErNcQ_W1NEnGTNaUn3-1fQCPcBGAsYHg/s0/AddText_06-26-07.51.48.png";
	gbr2f.src = "https://1.bp.blogspot.com/-9seU8FvTLDM/YNhiz6iaOOI/AAAAAAAABiw/XO0pA6jGg88SVmFdlLYY8yPwXJ3IZNbLwCPcBGAsYHg/s0/AddText_06-26-07.53.37.png";
	gbr3f.src = "https://1.bp.blogspot.com/-ZVepyjnOv1w/YNhiz_tbJCI/AAAAAAAABiw/aIZtPwHImLANjzn4A3AWmgP85aN41JyUgCPcBGAsYHg/s0/AddText_06-26-07.54.29.png";
	gbr4f.src = "https://1.bp.blogspot.com/-vrG44g44PbE/YNhizw4FkwI/AAAAAAAABiw/KAGHCkf3OE4vjxtsEN65cBB7hiVKJkvMQCPcBGAsYHg/s0/AddText_06-26-07.55.49.png";
}
butnv[3].onclick = function() {
  tChord.innerHTML = nmsx2f[3];
  gbr1f.src = "https://1.bp.blogspot.com/-bigZzPsVMzE/YNhi8zAwO5I/AAAAAAAABi0/zZ7edCxKk1Ue5JxbsES-LY5dywakckJSwCPcBGAsYHg/s0/AddText_06-26-07.57.37.png";
	gbr2f.src = "https://1.bp.blogspot.com/-DbdIzBFaGgY/YNhi8zcBKDI/AAAAAAAABi0/RhOQGgwf6MwQL5fgXUY-PKHe4f8BwmCDQCPcBGAsYHg/s0/AddText_06-26-07.58.51.png";
	gbr3f.src = "https://1.bp.blogspot.com/-4yKm7hAACEU/YNhi8-QS6II/AAAAAAAABi0/roTIzlcUL7gfuxCTeBda-c8USL1m3xd2wCPcBGAsYHg/s0/AddText_06-26-08.00.04.png";
	gbr4f.src = "https://1.bp.blogspot.com/-R_zCuQ9qoj0/YNhi82dlG6I/AAAAAAAABi0/I7JwudkDPvAra8HcajLr9QIdL6YTsi__ACPcBGAsYHg/s0/AddText_06-26-08.01.26.png";
}
butnv[4].onclick = function() {
  tChord.innerHTML = nmsx2f[4];
  gbr1f.src = "https://1.bp.blogspot.com/-szVb4BZwplM/YNhjCtwdUNI/AAAAAAAABi4/Jdq8eGcHD2AlCz9BZ8wPXq0vzKR6uT9iACPcBGAsYHg/s0/AddText_06-26-08.11.17.png";
	gbr2f.src = "https://1.bp.blogspot.com/-Qs5UWaGhc2w/YNhjCl_1ARI/AAAAAAAABi4/KZxz05AgS4A6BGykjmTq87Xb5pqCn8fYwCPcBGAsYHg/s0/AddText_06-26-08.14.50.png";
	gbr3f.src = "https://1.bp.blogspot.com/-ldSPOQA64ps/YNhjCt2ByOI/AAAAAAAABi4/c6hUK8t622IiJFw5ifjZTk8LA1HYqX5bACPcBGAsYHg/s0/AddText_06-26-08.12.54.png";
	gbr4f.src = "https://1.bp.blogspot.com/-1YjyTNFdwEU/YNhjCroYAwI/AAAAAAAABi4/a1FEfVTsn4ANrms51Fy4-6iz5x7oI6COgCPcBGAsYHg/s0/AddText_06-26-08.16.32.png";
}
butnv[5].onclick = function() {
  tChord.innerHTML = nmsx2f[5];
  gbr1f.src = "https://1.bp.blogspot.com/-JV4XjJAV0oY/YNhjKa_ns8I/AAAAAAAABi8/q1B5KDkBztM6Krt8MxKetZjjDABNvuJCQCPcBGAsYHg/s0/AddText_06-26-08.18.09.png";
	gbr2f.src = "https://1.bp.blogspot.com/-eJHKiIUdyjk/YNhjKbPw4kI/AAAAAAAABi8/rHFBNLVx4HkHhE6RmvkzNE1MmUoYg-I_QCPcBGAsYHg/s0/AddText_06-26-08.19.31.png";
	gbr3f.src = "https://1.bp.blogspot.com/-Gw5tJJprMRY/YNhjKSSihSI/AAAAAAAABi8/KliwngJCttQSPjmEK5pJbJYVjeoC7ZRWgCPcBGAsYHg/s0/AddText_06-26-08.20.34.png";
	gbr4f.src = "https://1.bp.blogspot.com/-ssTC1YBmtiE/YNhjKdn2dgI/AAAAAAAABi8/C4RAlzbgknwtfkyuWkITtS1b3c5RF-94wCPcBGAsYHg/s0/AddText_06-26-08.21.48.png";
}
butnv[6].onclick = function() {
  tChord.innerHTML = nmsx2f[6];
  gbr1f.src = "https://1.bp.blogspot.com/-HDNKfPWjRkg/YNhjTEwz9aI/AAAAAAAABjA/I3tCYb3ux54UwR5wPUdUUZUcswoAvCbzwCPcBGAsYHg/s0/AddText_06-26-08.25.36.png";
	gbr2f.src = "https://1.bp.blogspot.com/-X3qu-Ib3rFM/YNhjTIU8hiI/AAAAAAAABjA/er4x0ZRKpHUePUgXiE-qfBH5pt3VfHb4gCPcBGAsYHg/s0/AddText_06-26-08.26.59.png";
	gbr3f.src = "https://1.bp.blogspot.com/-BjshyQKIems/YNhjTHauJZI/AAAAAAAABjA/nShYByxzUXkuRpjT2DkQYpGA-tobxAk6ACPcBGAsYHg/s0/AddText_06-26-08.28.15.png";
	gbr4f.src = "https://1.bp.blogspot.com/-fYLSh9WdcSM/YNhjTAej7UI/AAAAAAAABjA/p6rzGAxI7igEEAYPcq-FlQsa3B8ERm-cACPcBGAsYHg/s0/AddText_06-26-08.29.32.png";
}
butnv[7].onclick = function() {
  tChord.innerHTML = nmsx2f[7];
  gbr1f.src = "https://1.bp.blogspot.com/-Vu2NEpX-lRQ/YNhjgQV2PMI/AAAAAAAABjE/QxEZgddVA6YNpSxC6X1pkQkBQ-iQYq-hwCPcBGAsYHg/s0/AddText_06-26-08.31.40.png";
	gbr2f.src = "https://1.bp.blogspot.com/-dkvtRKrqZZ8/YNhjgTORmeI/AAAAAAAABjE/Ev-jmRsZ4H0YzmmVmLFnZ_ugR5fyKHEXgCPcBGAsYHg/s0/AddText_06-26-08.33.08.png";
	gbr3f.src = "https://1.bp.blogspot.com/-bTu2_ixfNL0/YNhjgT0RZFI/AAAAAAAABjE/gW03c0K3Wr8Vencl2XLPqMWkWcUX84pSQCPcBGAsYHg/s0/AddText_06-26-08.34.34.png";
	gbr4f.src = "https://1.bp.blogspot.com/-BQFngpvK4r4/YNhjgb3jVnI/AAAAAAAABjE/ByoXY5YULh4jX1ZO-cv-LyRSMJ0e6HxJQCPcBGAsYHg/s0/AddText_06-26-08.36.57.png";
}
butnv[8].onclick = function() {
  tChord.innerHTML = nmsx2f[8];
  gbr1f.src = "https://1.bp.blogspot.com/-nlAQLvguH20/YNhjmsRMiBI/AAAAAAAABjI/NH5XnpKYOJoi4C8TIVUn43ALqSk3i672wCPcBGAsYHg/s0/AddText_06-26-08.39.35.png";
	gbr2f.src = "https://1.bp.blogspot.com/-aRcQU8EU4Kk/YNhjmgeSK-I/AAAAAAAABjI/a-_-hz7ahx4BTOtL2BUywnKPG-gt-m6YgCPcBGAsYHg/s0/AddText_06-26-08.41.26.png";
	gbr3f.src = "https://1.bp.blogspot.com/-kgDizEsPc1s/YNhjmnn95NI/AAAAAAAABjI/l3RelJRLy-MHGx1fZGqSZ0aGOXwBPw4uACPcBGAsYHg/s0/AddText_06-26-08.42.55.png";
	gbr4f.src = "https://1.bp.blogspot.com/-TmXAuzltP7E/YNhjmnAioKI/AAAAAAAABjI/SmMwFS2sGJsXSXpdDt6kniCORHpHZaAsQCPcBGAsYHg/s0/AddText_06-26-08.44.05.png";
}
butnv[9].onclick = function() {
  tChord.innerHTML = nmsx2f[9];
  gbr1f.src = "https://1.bp.blogspot.com/-GZFrW4umL1k/YNhjtRILsII/AAAAAAAABjM/H7peEY2j_Pg85HH2M3MGUa_iqt9GwfatwCPcBGAsYHg/s0/AddText_06-26-08.47.44.png";
	gbr2f.src = "https://1.bp.blogspot.com/-3M_HrxHPQVg/YNhjtRLx5FI/AAAAAAAABjM/0L1Qdo_-DuUesojjvjK7RrgaTuzewRQswCPcBGAsYHg/s0/AddText_06-26-08.51.37.png";
	gbr3f.src = "https://1.bp.blogspot.com/-jpKNcmkSSg8/YNhjtcuVmTI/AAAAAAAABjM/EPrw9FEV3pQkghuSkO-ujkFyq3OUzyvXACPcBGAsYHg/s0/AddText_06-26-08.52.54.png";
	gbr4f.src = "https://1.bp.blogspot.com/-DUXgBbYjja0/YNhjtYV29QI/AAAAAAAABjM/9wNqvTvV654uZj9bD4jfXsT-KLu__MuTgCPcBGAsYHg/s0/AddText_06-26-08.54.12.png";
}
butnv[10].onclick = function() {
  tChord.innerHTML = nmsx2f[10];
  gbr1f.src = "https://1.bp.blogspot.com/-Emb2YdJLtyA/YNhmXSTqOkI/AAAAAAAABjg/oIrnVkTsB5QGOZ2benjjQE9uqIy6gpeIQCPcBGAsYHg/s0/AddText_06-26-01.40.15.png";
	gbr2f.src = "https://1.bp.blogspot.com/-ZWqADfKYIRs/YNhmXVhFFZI/AAAAAAAABjg/y896aLBaMYAlC72QJfayigA1M9PUT4p1gCPcBGAsYHg/s0/AddText_06-26-01.41.32.png";
	gbr3f.src = "https://1.bp.blogspot.com/-FJ5PlKUb90g/YNhmXSWApPI/AAAAAAAABjg/FMkqNAyULisruK1MF8aiPa7h_V7H3W9QQCPcBGAsYHg/s0/AddText_06-26-01.42.55.png";
	gbr4f.src = "https://1.bp.blogspot.com/-G8Qhnj3ic_A/YNhmXUvwVbI/AAAAAAAABjg/bQ5sRzI1FI0SE4C5Zi6c8_n8HQvunHmhgCPcBGAsYHg/s0/AddText_06-26-01.43.46.png";
}
butnv[11].onclick = function() {
  tChord.innerHTML = nmsx2f[11];
  gbr1f.src = "https://1.bp.blogspot.com/-oe2RG6eUGTE/YNhmfCpAxaI/AAAAAAAABjk/tK4nKZPU_RYkoShwrvDncIIoAB7kQK24wCPcBGAsYHg/s0/AddText_06-26-01.45.24.png";
	gbr2f.src = "https://1.bp.blogspot.com/-feQh5WKmLb0/YNhmfPt1HnI/AAAAAAAABjk/nFAiU_utSNwRr-U58hKlHcJwyRbs6BJHQCPcBGAsYHg/s0/AddText_06-26-01.47.19.png";
	gbr3f.src = "https://1.bp.blogspot.com/-RsfpoGuALtY/YNhmfLhTZKI/AAAAAAAABjk/qJM2-ZT2W8UVKqLF_StP9jN8FQMbbCg7ACPcBGAsYHg/s0/AddText_06-26-01.48.38.png";
	gbr4f.src = "https://1.bp.blogspot.com/-_0apEzJe55M/YNhmfBFUOKI/AAAAAAAABjk/ydtk6Tqzc98JgI_RedpXleWQzUGFC6KuwCPcBGAsYHg/s0/AddText_06-26-01.49.53.png";
}
butnv[12].onclick = function() {
  tChord.innerHTML = nmsx2f[12];
  gbr1f.src = "https://1.bp.blogspot.com/-6ZfQmG6RbP0/YNhmwVKERoI/AAAAAAAABjs/Q7lYts0dDrcloHBhWIDX2IO6l2Vie2z-wCPcBGAsYHg/s0/AddText_06-26-08.49.43.png";
	gbr2f.src = "https://1.bp.blogspot.com/-Taf0bJyYrMo/YNhmwXaEPWI/AAAAAAAABjs/0dISTs86TLcOhL3gt2K2fpLXjjiGrSymwCPcBGAsYHg/s0/AddText_06-26-08.52.02.png";
	gbr3f.src = "https://1.bp.blogspot.com/-5o-YIHhivOo/YNhmwd0k73I/AAAAAAAABjs/ObVDPTOarI0DRGnBr9BKEzH-87CSKLFjQCPcBGAsYHg/s0/AddText_06-26-08.53.53.png";
gbr4f.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyGJUJMRRwJBvdDNnt5gXdB8EgQTqbUbQutgVc_1WqfU0i7cJut6CKctKqJnblAgEmqibwCHd41A-4fz694dXH1wy7hSv91W_4tz9ScZmzgxiatSiZIa7IgNEFL6fSdSjVKIg3tzM8b6AjON4aNE9mtEKChlKT3-bFTjCNx3ztrIOOAYzTartBC8yyt_N0/s1600/wt.png";
}
butnv[13].onclick = function() {
  tChord.innerHTML = nmsx2f[13];
  gbr1f.src = "https://1.bp.blogspot.com/-c8w0r0ZGNiI/YNhm91pf-1I/AAAAAAAABjw/9i5F2zlvzrkTev0BMglyoZyhbRT3rFixgCPcBGAsYHg/s0/AddText_06-27-05.07.15.png";
	gbr2f.src = "https://1.bp.blogspot.com/-Rxuc6ruAS-8/YNhm9yncHbI/AAAAAAAABjw/L9GUvb1m07MN7t1V2YshKLWWeHBcmx_7ACPcBGAsYHg/s0/AddText_06-27-07.46.51.png";
	gbr3f.src = "https://1.bp.blogspot.com/-leXccr_iZqc/YNhm92mRloI/AAAAAAAABjw/UBHzxPObJhk-j02j5u9oW7MZ4vGot9iEACPcBGAsYHg/s0/AddText_06-27-07.52.24.png";
	gbr4f.src = "https://1.bp.blogspot.com/-gXRbQbXHftI/YNhm918WY0I/AAAAAAAABjw/1A43rO-rhJ062snhrQKZUxgbAKpKyxOUgCPcBGAsYHg/s0/AddText_06-27-07.54.33.png";
}
butnv[14].onclick = function() {
  tChord.innerHTML = nmsx2f[14];
  gbr1f.src = "https://1.bp.blogspot.com/-lQpRoz3AAvc/YNhnHiBDEsI/AAAAAAAABj0/U4KRLR9dX4gHgT7kl5CqSNKhksmgLIVSwCPcBGAsYHg/s0/AddText_06-27-08.01.54.png";
	gbr2f.src = "https://1.bp.blogspot.com/-DPjaC3BsNAA/YNhnHjyJjVI/AAAAAAAABj0/Wo9Y5ZDBGQYaCzcc79NbnCn2e6TmXtN6QCPcBGAsYHg/s0/AddText_06-27-08.03.04.png";
	gbr3f.src = "https://1.bp.blogspot.com/-6yiCwKp1SYo/YNhnHlXHl_I/AAAAAAAABj0/O8WZmmN99UY-cDOg9YqVwbc7r1YXsB2-QCPcBGAsYHg/s0/AddText_06-27-08.04.37.png";
	gbr4f.src = "https://1.bp.blogspot.com/-HuJPxexrBb8/YNhnHvk_tiI/AAAAAAAABj0/dgkSwAmEXl4GVJMczLLFVE18TvdwESG-wCPcBGAsYHg/s0/AddText_06-27-08.06.38.png";
}
butnv[15].onclick = function() {
  tChord.innerHTML = nmsx2f[15];
  gbr1f.src = "https://1.bp.blogspot.com/-rraHLUO7Myo/YNhtHYrIopI/AAAAAAAABkA/WJ3dbM0j9n8Uaz_ymAq9KNFzpNPtJ7o0ACPcBGAsYHg/s0/AddText_06-27-08.13.27.png";
	gbr2f.src = "https://1.bp.blogspot.com/-T4kHNPgIQmg/YNhtHYykCvI/AAAAAAAABkA/dbPgM3lk2MoD2HpaWBcoNzFekktq41VjACPcBGAsYHg/s0/AddText_06-27-08.16.25.png";
	gbr3f.src = "https://1.bp.blogspot.com/-YgDHHOo89GI/YNhtHWMPNBI/AAAAAAAABkA/nv7ifK5EBZwHJnMARyVr8GhT5sjX5r3KQCPcBGAsYHg/s0/AddText_06-27-08.17.12.png";
	gbr4f.src = "https://1.bp.blogspot.com/-3KQL3TIkZNo/YNhtHQdLE1I/AAAAAAAABkA/ee1Ze9ErS-Qn5jAX1rRM8a-zkFDpCRxgACPcBGAsYHg/s0/AddText_06-27-08.19.41.png";
}
butnv[16].onclick = function() {
  tChord.innerHTML = nmsx2f[16];
  gbr1f.src = "https://1.bp.blogspot.com/-RfwTxcQlkcE/YNhtPNrS-QI/AAAAAAAABkE/buoc_2s1qs8m-kwFxseOXY7dGOKEkuZZgCPcBGAsYHg/s0/AddText_06-27-08.21.37.png";
	gbr2f.src = "https://1.bp.blogspot.com/-VcTwk6gmA3c/YNhtPIx6N4I/AAAAAAAABkE/OHPrrzz-cFs5svcH-q-pcF9j8GF9GI01gCPcBGAsYHg/s0/AddText_06-27-08.23.00.png";
	gbr3f.src = "https://1.bp.blogspot.com/--_IRh0C2qvM/YNhtPG1j2uI/AAAAAAAABkE/PSDoyq_Nljk0qEiNlC4yEZ2ledDcVAUjwCPcBGAsYHg/s0/AddText_06-27-08.24.35.png";
	gbr4f.src = "https://1.bp.blogspot.com/-cjdQD33FzNo/YNhtPL07jnI/AAAAAAAABkE/ZXRK26p9KFMg_dQovgYYR54QGdxFlA6CwCPcBGAsYHg/s0/AddText_06-27-08.25.51.png";
}
butnv[17].onclick = function() {
  tChord.innerHTML = nmsx2f[17];
  gbr1f.src = "https://1.bp.blogspot.com/-VI0PuWJ_7V8/YNhtZGx-VeI/AAAAAAAABkI/fQ5q_rrpVrkoCsY7fbpBJHlaqi_6XNd8wCPcBGAsYHg/s0/AddText_06-27-08.30.21.png";
	gbr2f.src = "https://1.bp.blogspot.com/-8H6-Q-ZNIfM/YNhtZDewhII/AAAAAAAABkI/hcgDSB2YomwyglLLyHf--fyCIoMBUtgowCPcBGAsYHg/s0/AddText_06-27-08.33.09.png";
	gbr3f.src = "https://1.bp.blogspot.com/-VmW2zlS2-7o/YNhtZG0J06I/AAAAAAAABkI/L4oebwwHjjgoP-1gRlZqmVM2NoHsdAbEACPcBGAsYHg/s0/AddText_06-27-08.36.02.png";
	gbr4f.src = "https://1.bp.blogspot.com/-7jWzqMV2CHM/YNhtZLZy0SI/AAAAAAAABkI/PhClOT7Vomc0ZoMjbHeJlSOVrg0nnSqYQCPcBGAsYHg/s0/AddText_06-27-08.40.23.png";
}
butnv[18].onclick = function() {
  tChord.innerHTML = nmsx2f[18];
  gbr1f.src = "https://1.bp.blogspot.com/-tiOZbD8qtHs/YNhtlGx3JBI/AAAAAAAABkM/KqZ5oTeuS7w6R0s3IrQ1yxvKYCRPi4JXgCPcBGAsYHg/s0/AddText_06-27-08.45.03.png";
	gbr2f.src = "https://1.bp.blogspot.com/-k3Gb5ud5lRA/YNhtlNFUSJI/AAAAAAAABkM/kOHK4q_ufLM6lJaRiaXXAVcYcKpb2CvkQCPcBGAsYHg/s0/AddText_06-27-08.46.28.png";
	gbr3f.src = "https://1.bp.blogspot.com/-dbSqciPBfmU/YNhtlKg4T9I/AAAAAAAABkM/AKNPq_GpvJQnjUjPt7fWF2V55mxQ-pNWgCPcBGAsYHg/s0/AddText_06-27-08.47.46.png";
	gbr4f.src = "https://1.bp.blogspot.com/-KO-M9NF4CEk/YNhtlA4PVbI/AAAAAAAABkM/dFU-8POyLHgZp20JguxBmMxEXN6i9AlEwCPcBGAsYHg/s0/AddText_06-27-08.49.06.png";
}
butnv[19].onclick = function() {
  tChord.innerHTML = nmsx2f[19];
  gbr1f.src = "https://1.bp.blogspot.com/-H-8dbuwVX3M/YNhtw6rJmbI/AAAAAAAABkQ/cWIkGGkJ2bkLy9iL3zrBGiITZx7TwjglACPcBGAsYHg/s0/AddText_06-27-09.22.39.png";
	gbr2f.src = "https://1.bp.blogspot.com/-jab7OzHC_Fc/YNhtw-SlCFI/AAAAAAAABkQ/u1wgkcqZ8q8qCZFbeG-2ElVHATZvNlTEwCPcBGAsYHg/s0/AddText_06-27-09.20.20.png";
	gbr3f.src = "https://1.bp.blogspot.com/-dqWxhHl65is/YNhtw53EqJI/AAAAAAAABkQ/0bZkypdQEOw9jfRDqGrc8VASwrELm-fDgCPcBGAsYHg/s0/AddText_06-27-09.23.56.png";
	gbr4f.src = "https://1.bp.blogspot.com/-HZl0GQU_hXc/YNhtw-a6RSI/AAAAAAAABkQ/Y47RkbPg-oYMQjEx4aJcEZQndIj3jR9ogCPcBGAsYHg/s0/AddText_06-27-09.24.52.png";
}
butnv[20].onclick = function() {
  tChord.innerHTML = nmsx2f[20];
  gbr1f.src = "https://1.bp.blogspot.com/-LIk1THEUHWc/YNht6h6OVCI/AAAAAAAABkU/7y1vSI2psngr-QN0Ph3HeGdwyS-UndSDQCPcBGAsYHg/s0/AddText_06-27-09.29.41.png";
	gbr2f.src = "https://1.bp.blogspot.com/-w6pYoYan8m8/YNht6tN4nXI/AAAAAAAABkU/g7n5fWDk7WgnyJHomcJ14UfjZU7YRH-GgCPcBGAsYHg/s0/AddText_06-27-09.30.45.png";
	gbr3f.src = "https://1.bp.blogspot.com/-A1k09eAgsAI/YNht6v5aL6I/AAAAAAAABkU/uLtH71OgFlkgEClLeHNq4tP7avs-DKnGACPcBGAsYHg/s0/AddText_06-27-09.31.56.png";
	gbr4f.src = "https://1.bp.blogspot.com/-Dlw3lvPa6uo/YNht6tVjzbI/AAAAAAAABkU/6KqBiEyVcz0sgCJhwHHBF2ovHM9sqw4jgCPcBGAsYHg/s0/AddText_06-27-09.26.20.png";
}
butnv[21].onclick = function() {
  tChord.innerHTML = nmsx2f[21];
  gbr1f.src = "https://1.bp.blogspot.com/-7b83hB5V8SA/YNhuCiD5HEI/AAAAAAAABkY/1a6Wn1768qsYQXqsexa3uYjGjiLMWft9gCPcBGAsYHg/s0/AddText_06-27-09.34.48.png";
	gbr2f.src = "https://1.bp.blogspot.com/-ShmRPtrlGF0/YNhuCgF9bxI/AAAAAAAABkY/0wZu8p9_CjksCaSW-tytQaLX-A6FBYhTQCPcBGAsYHg/s0/AddText_06-27-09.35.33.png";
	gbr3f.src = "https://1.bp.blogspot.com/-s38P8lMD7-k/YNhuCvz6EPI/AAAAAAAABkY/m4xHbomiKe84G1V4i4aRyrH9V4UFc0pNgCPcBGAsYHg/s0/AddText_06-27-09.37.31.png";
	gbr4f.src = "https://1.bp.blogspot.com/-io1R5SuPp-M/YNhuCuQnNkI/AAAAAAAABkY/7vEDLfn1ZNUi21LpWlytSBa2FEfrEiz4wCPcBGAsYHg/s0/AddText_06-27-09.38.40.png";
}
butnv[22].onclick = function() {
  tChord.innerHTML = nmsx2f[22];
  gbr1f.src = "https://1.bp.blogspot.com/-IVo_R5h-xng/YNhuPgh-aLI/AAAAAAAABkc/KZdwHXbLJX4k6jg3CB3eY4asiOGv_1dywCPcBGAsYHg/s0/AddText_06-27-09.40.28.png";
	gbr2f.src = "https://1.bp.blogspot.com/-JPskIPooH6w/YNhuPlkDikI/AAAAAAAABkc/NodJ0vfNPHIut4CJVxt00damUheblrIlgCPcBGAsYHg/s0/AddText_06-27-09.43.56.png";
	gbr3f.src = "https://1.bp.blogspot.com/-gngZimh0IbQ/YNhuPqKa-jI/AAAAAAAABkc/HxSAkEJ5giQRMiFpzqHBmVWP-MU96B9UACPcBGAsYHg/s0/AddText_06-27-09.45.46.png";
	gbr4f.src = "https://1.bp.blogspot.com/-Mz8i9_eeuOs/YNhuPmn4cFI/AAAAAAAABkc/QqAcD4wReDAb9u2teopIw4b3aO1TNhY9ACPcBGAsYHg/s0/AddText_06-27-09.47.15.png";
}
butnv[23].onclick = function() {
  tChord.innerHTML = nmsx2f[23];
  gbr1f.src = "https://1.bp.blogspot.com/-Me-AZoctZ5Y/YNhvFGYqOpI/AAAAAAAABkw/tRn9Cwp7Engjsv2yg2uy1clDd2hv6oGOgCPcBGAsYHg/s0/AddText_06-27-09.50.14.png";
	gbr2f.src = "https://1.bp.blogspot.com/-dnssXQJA-hI/YNhvFLmKzPI/AAAAAAAABkw/4OwZgjQ9vQorDKgTR7M6zofzs2vt4yH9QCPcBGAsYHg/s0/AddText_06-27-09.51.45.png";
	gbr3f.src = "https://1.bp.blogspot.com/-MqWRvVS46Os/YNhvFB-2BJI/AAAAAAAABkw/7NxsI9X2pYoSA1aGt4vCuL239q8BxtA1gCPcBGAsYHg/s0/AddText_06-27-09.52.58.png";
	gbr4f.src = "https://1.bp.blogspot.com/-t9xXjda780M/YNhvFIKJ2EI/AAAAAAAABkw/_MUdluLE-zwzXdm1VZkd3_sheurYGvNFACPcBGAsYHg/s0/AddText_06-27-09.54.06.png";
}
butnv[24].onclick = function() {
  tChord.innerHTML = nmsx2f[24];
  gbr1f.src = "https://1.bp.blogspot.com/-TvqBp-9UUD0/YNhvt4KacUI/AAAAAAAABk4/jiQLRIZXt0kv8nmfcSNNYJeuaun53rOsgCPcBGAsYHg/s0/AddText_06-27-09.55.52.png";
	gbr2f.src = "https://1.bp.blogspot.com/-eKw2RHeMKPI/YNhvt-XdPfI/AAAAAAAABk4/uLfNmAPvctQoEKbjcs8kZ7k60-S8LrssQCPcBGAsYHg/s0/AddText_06-27-09.56.43.png";
	gbr3f.src = "https://1.bp.blogspot.com/-bDIeWmI5edo/YNhvt7L_5CI/AAAAAAAABk4/F8x07_RBO4ABCoYGgcpA8d3HJMNGbsENACPcBGAsYHg/s0/AddText_06-27-09.57.55.png";
	gbr4f.src = "https://1.bp.blogspot.com/-xrxs_KefzCs/YNhvt80VHEI/AAAAAAAABk4/Sxkv1ML1udU3VVQ1Ytgi95HjjP4R6AE8wCPcBGAsYHg/s0/AddText_06-27-09.59.18.png";
}
butnv[25].onclick = function() {
  tChord.innerHTML = nmsx2f[25];
  gbr1f.src = "https://1.bp.blogspot.com/-oSe6UvArVnc/YNhwLuaoapI/AAAAAAAABlE/Tpzf7BLu7akV3jylC47iB99EOm5GSl9CQCPcBGAsYHg/s0/AddText_06-27-10.01.07.png";
	gbr2f.src = "https://1.bp.blogspot.com/-wN-RAwE7iv8/YNhwLifraHI/AAAAAAAABlE/hjPYhjJHS2EhoKGmseLeSv9dpFw7WeTAgCPcBGAsYHg/s0/AddText_06-27-10.03.33.png";
	gbr3f.src = "https://1.bp.blogspot.com/-f-McrZxDTH8/YNhwLsJaw2I/AAAAAAAABlE/qG03GF2XtMU1Xb3Kd99Wbu4YTcS12vJqwCPcBGAsYHg/s0/AddText_06-27-10.04.48.png";
	gbr4f.src = "https://1.bp.blogspot.com/-BnV8x4A5SLo/YNhwLprXmJI/AAAAAAAABlE/Iy1mSvsj87McovnsRApWvPWbO5Z9iZkygCPcBGAsYHg/s0/AddText_06-27-10.07.42.png";
}
butnv[26].onclick = function() {
  tChord.innerHTML = nmsx2f[26];
  gbr1f.src = "https://1.bp.blogspot.com/-0H90XxOAjhc/YNh4DW2D8QI/AAAAAAAABlY/STK_K-Moc4s61nX1L4iuLDh1zZF9uDaWACPcBGAsYHg/s0/AddText_06-27-10.14.50.png";
	gbr2f.src = "https://1.bp.blogspot.com/-JEhz7Tmr0xo/YNh4DaxfZVI/AAAAAAAABlY/han11d860cgXa2VjBaJvLwjLm8qDV6lDgCPcBGAsYHg/s0/AddText_06-27-10.18.32.png";
	gbr3f.src = "https://1.bp.blogspot.com/-w6ZLGbdTx_o/YNh4DYtXjpI/AAAAAAAABlY/_s_UqJ2_ORsUekHpfzRTC_hZ_vKHH3gCwCPcBGAsYHg/s0/AddText_06-27-10.19.44.png";
	gbr4f.src = "https://1.bp.blogspot.com/-rqNoD9-fkIs/YNh4Df8AylI/AAAAAAAABlY/orDOYvBMDmABHhzfY1xErv3aYr1DBdgxwCPcBGAsYHg/s0/AddText_06-27-10.20.47.png";
}
butnv[27].onclick = function() {
  tChord.innerHTML = nmsx2f[27];
  gbr1f.src = "https://1.bp.blogspot.com/-uYANkrZmvOM/YNh4OUnMH5I/AAAAAAAABlc/AYWzlIMHqoUYvF6Wls9DbSlZmxzJpSh1wCPcBGAsYHg/s0/AddText_06-27-10.36.21.png";
	gbr2f.src = "https://1.bp.blogspot.com/-3P4RGOnBPiI/YNh4Od8BGKI/AAAAAAAABlc/Rz8ft6rCQGgE5_Xyfndy0nxdlNuCp6FvgCPcBGAsYHg/s0/AddText_06-27-10.38.01.png";
	gbr3f.src = "https://1.bp.blogspot.com/-k4p32DNkrgU/YNh4OXGvlDI/AAAAAAAABlc/Mx_e5mquaYQTbnQNHdrYid16jliK_AnjQCPcBGAsYHg/s0/AddText_06-27-10.40.00.png";
	gbr4f.src = "https://1.bp.blogspot.com/-Mfoxynr6nLg/YNh4ORODFcI/AAAAAAAABlc/eHFpE3_v_nclazwWw8LmbUJh2-WSPMR1wCPcBGAsYHg/s0/AddText_06-27-10.41.09.png";
}
butnv[28].onclick = function() {
  tChord.innerHTML = nmsx2f[28];
  gbr1f.src = "https://1.bp.blogspot.com/-Xur6pdY4Npk/YNh4Ya-tx_I/AAAAAAAABlg/qrpx9SkeFcUg_3XzTDW231aOPCuGdIjDACPcBGAsYHg/s0/AddText_06-27-10.42.44.png";
	gbr2f.src = "https://1.bp.blogspot.com/-R1dO0WAQ41E/YNh4YTvZFWI/AAAAAAAABlg/Y0GGgNcBLYo3mqlCmWAM3s60IUp6S87IgCPcBGAsYHg/s0/AddText_06-27-10.44.32.png";
	gbr3f.src = "https://1.bp.blogspot.com/--QSI0tlFd_Y/YNh4YRhedxI/AAAAAAAABlg/mh3vCsTk2QsduEgZfewiGSlCVPUInFB6wCPcBGAsYHg/s0/AddText_06-27-10.45.56.png";
	gbr4f.src = "https://1.bp.blogspot.com/-wGP-bef6BlE/YNh4YaIe-ZI/AAAAAAAABlg/_2W9n4BV_NQR3Zyr2sZYKugSyfu-1VhdQCPcBGAsYHg/s0/AddText_06-27-10.47.17.png";
}
butnv[29].onclick = function() {
  tChord.innerHTML = nmsx2f[29];
  gbr1f.src = "https://1.bp.blogspot.com/-rGZ7VFKwxxQ/YNh4pD569pI/AAAAAAAABlo/n_VWDeB0CXsNzmi1k-OruYU0d1Ayv8AOACPcBGAsYHg/s0/AddText_06-27-10.48.56.png";
	gbr2f.src = "https://1.bp.blogspot.com/-qphCr3BBE6c/YNh4pEu6uII/AAAAAAAABlo/We7UjITvJSwxzwR6jsz2P2m822y5D5TAwCPcBGAsYHg/s0/AddText_06-27-10.50.41.png";
	gbr3f.src = "https://1.bp.blogspot.com/-jGq7BqweKyo/YNh4pMWVHdI/AAAAAAAABlo/xMAlx0sk-Q4hBI-aYgfV8M5Po1DSFR0FACPcBGAsYHg/s0/AddText_06-27-11.04.16.png";
	gbr4f.src = "https://1.bp.blogspot.com/-sjd7wv-vTVM/YNh4pD4U7SI/AAAAAAAABlo/3gH04UvVRVckROj4T4jMwtFza3N73vKiQCPcBGAsYHg/s0/AddText_06-27-11.08.24.png";
}
butnv[30].onclick = function() {
  tChord.innerHTML = nmsx2f[30];
  gbr1f.src = "https://1.bp.blogspot.com/-faDlB22p1XE/YNh5K78dTBI/AAAAAAAABl0/70IqUZY0r1UXMT988YYTGQsOTbFEEFGuACPcBGAsYHg/s0/AddText_06-27-11.10.31.png";
	gbr2f.src = "https://1.bp.blogspot.com/-gMkdy-rWB9E/YNh5K6ofrJI/AAAAAAAABl0/uuwt2cZLbPENwJ-Eylq1JiTKTPzzDJQsACPcBGAsYHg/s0/AddText_06-27-11.11.55.png";
	gbr3f.src = "https://1.bp.blogspot.com/-uqwFJgpxRDk/YNh5K3uYwxI/AAAAAAAABl0/MX_faXknkfsOOXAz8SZHDNUvky2VtGORwCPcBGAsYHg/s0/AddText_06-27-11.12.48.png";
	gbr4f.src = "https://1.bp.blogspot.com/-hU-9cNBuo6Q/YNh5K6QvC5I/AAAAAAAABl0/ZZGeQVntVHULV33Vs-MC1fRR5Aev8XJpgCPcBGAsYHg/s0/AddText_06-27-11.13.47.png";
}
butnv[31].onclick = function() {
  tChord.innerHTML = nmsx2f[31];
  gbr1f.src = "https://1.bp.blogspot.com/-yggA1OeK6iY/YNh5rEbRBbI/AAAAAAAABl8/KTEPlFBWUO4sXKYgXbTE1ZjLxNmE8hMgwCPcBGAsYHg/s0/AddText_06-27-11.33.55.png";
	gbr2f.src = "https://1.bp.blogspot.com/-0nKsy-I_mF4/YNh5rEKilmI/AAAAAAAABl8/Mersyw8BatwfJnctEaLmN4hh9yOy6oJzgCPcBGAsYHg/s0/AddText_06-27-11.35.13.png";
	gbr3f.src = "https://1.bp.blogspot.com/-bpCU5vC9c8w/YNh5rENIhkI/AAAAAAAABl8/XIZUOW--nz85LWFMHEfNGPFECd-K8h45gCPcBGAsYHg/s0/AddText_06-27-11.36.37.png";
	gbr4f.src = "https://1.bp.blogspot.com/-hYODgi_j2eY/YNh5rFiCXlI/AAAAAAAABl8/bYKeD1yiApcit30Ev2ano325FuAxPP6tgCPcBGAsYHg/s0/AddText_06-27-11.37.39.png";
}
butnv[32].onclick = function() {
  tChord.innerHTML = nmsx2f[32];
  gbr1f.src = "https://1.bp.blogspot.com/--rdGAEb0IlM/YNh54KTtTTI/AAAAAAAABmA/ypiOUWxyS5436YlMPvbR17tRBCL-SDjIQCPcBGAsYHg/s0/AddText_06-27-11.40.03.png";
	gbr2f.src = "https://1.bp.blogspot.com/-zjpJ3LGlKAQ/YNh54PyyLII/AAAAAAAABmA/ZZy6p0XirKwWtLQhGHhXGyx5ItzCTOTygCPcBGAsYHg/s0/AddText_06-27-11.40.44.png";
	gbr3f.src = "https://1.bp.blogspot.com/-s6bVlxEznLk/YNh54OrgCMI/AAAAAAAABmA/fU-d1T-kvKQa2j8qj_jl4dKCaOflyjNQgCPcBGAsYHg/s0/AddText_06-27-11.41.39.png";
	gbr4f.src = "https://1.bp.blogspot.com/--TC0211ZzA8/YNh54P_XKaI/AAAAAAAABmA/-8dAvO0FgSscZ4TUUfO0zwDHn0_Jr20NQCPcBGAsYHg/s0/AddText_06-27-11.42.50.png";
}
butnv[33].onclick = function() {
  tChord.innerHTML = nmsx2f[33];
  gbr1f.src = "https://1.bp.blogspot.com/-5ixpTIGYMYk/YNh6DWVKwcI/AAAAAAAABmE/28ak8pjQaF8Y6NQX97WClhHMJiwEVXfFwCPcBGAsYHg/s0/AddText_06-27-11.47.08.png";
	gbr2f.src = "https://1.bp.blogspot.com/-FCXF8q23Y-I/YNh6DaERAII/AAAAAAAABmE/Rth5f0ybp-g9lRLFMSzhCaP4dLNLrnBRACPcBGAsYHg/s0/AddText_06-27-12.06.30.png";
	gbr3f.src = "https://1.bp.blogspot.com/-xMaUYhdcZzw/YNh6DaTyuBI/AAAAAAAABmE/_uzN_EX5xeECIqi7yA9hzcIVbGVeA5R4wCPcBGAsYHg/s0/AddText_06-27-12.45.35.png";
	gbr4f.src = "https://1.bp.blogspot.com/-pg8szRTV5u8/YNh6Dbfe9NI/AAAAAAAABmE/Rck6sq7wH5Ic9N9Gq7DonUmjeZ9kwSECACPcBGAsYHg/s0/AddText_06-27-12.47.15.png";
}
butnv[34].onclick = function() {
  tChord.innerHTML = nmsx2f[34];
  gbr1f.src = "https://1.bp.blogspot.com/-xPNzFs2hSU0/YNh6LssCC-I/AAAAAAAABmI/vUgaqfJ0MI4ujCBDhGrfYCmR3zPnSyBDACPcBGAsYHg/s0/AddText_06-27-02.49.59.png";
	gbr2f.src = "https://1.bp.blogspot.com/-MVV5jIFJpRw/YNh6Lqb8bvI/AAAAAAAABmI/JoMsSt8rgd4pIyIU2yX2Fky5-B_4KjuzgCPcBGAsYHg/s0/AddText_06-27-02.55.40.png";
	gbr3f.src = "https://1.bp.blogspot.com/-th_hwngWRZ0/YNh6Lt40GxI/AAAAAAAABmI/ej22HrGYdn0P3AM9sseFBkQDa_sV3beVwCPcBGAsYHg/s0/AddText_06-27-02.53.08.png";
	gbr4f.src = "https://1.bp.blogspot.com/-Ax3lXf_Hl1M/YNh6LkRZYSI/AAAAAAAABmI/GNpJnEKKjz0cW-HcrtpDspk5yHnp2oMygCPcBGAsYHg/s0/AddText_06-27-02.56.46.png";
}
butnv[35].onclick = function() {
  tChord.innerHTML = nmsx2f[35];
  gbr1f.src = "https://1.bp.blogspot.com/-lnjFQ5-x--g/YNh6XYEZ1EI/AAAAAAAABmM/woLmPTz2z0I6Fn2f6gCCV1_B_YQUp_hhACPcBGAsYHg/s0/AddText_06-27-02.59.58.png";
	gbr2f.src = "https://1.bp.blogspot.com/-p-lwcsxBTXw/YNh6XYGiC9I/AAAAAAAABmM/W-PDgfvfgAgcH1_aUj-8q_69wk53u-begCPcBGAsYHg/s0/AddText_06-27-03.01.35.png";
	gbr3f.src = "https://1.bp.blogspot.com/-oQTYXixq7ao/YNh6XSmBJMI/AAAAAAAABmM/6r9jxBuNb6o6Xn8pxSTTTIJPNcTrT6v7ACPcBGAsYHg/s0/AddText_06-27-03.02.57.png";
	gbr4f.src = "https://1.bp.blogspot.com/-KmiXzeR2C2c/YNh6XRd8UJI/AAAAAAAABmM/YQZQX8JYTioPMlWN1P5YYNlefDd_jMJiwCPcBGAsYHg/s0/AddText_06-27-03.04.07.png";
}
