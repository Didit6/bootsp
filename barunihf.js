// Create grid container Ab
var cnmsk = document.getElementById("tekschrd");
var gbr1k = document.getElementById("ig1");
var gidc2k = document.createElement('div');
gidc2k.setAttribute("id","grd10");
document.getElementById("DIV10").appendChild(gidc2k);
for(k=0;k<31;k++){
var nmsx2k = ["F","F#","F#+","F#/E","F#11","F#4","F#7","F#9","F#m","F#m6","F#7-5","F#maj","F#maj7","Fadd9","F/A","F/C","F/G","F11","F4","F6","F7","F7/A","F9","FaddG","Fm","Fm6","Fm7","Fmaj7","Fmaj7(+5)","Fmaj7/A","Fmmaj7"];
var btnx2k = document.createElement("div");
btnx2k.innerHTML = nmsx2k[k];
btnx2k.setAttribute("class","koloms10");
document.getElementById("grd10").appendChild(btnx2k);
}
var tmbl2k = document.getElementsByClassName("koloms10");
tmbl2k[0].onclick = function(){
	cnmsk.innerHTML = nmsx2k[0];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZeNznjHRZk5RpBfsX7EUR1NK_H74503EkYu8AvXq7z3rpu3spoexvB2W4-y1oejb2aNJU_UKIY0eBexbkQqkE6vHHXxm6I_O40r6pfmpXK7R46J_QERPx16QjkP0SiGSBIwY958scNTaXeTXe3QCj3BnZPP7XrRAyEAcRnqpR-oXpX9R7c6J_7W8Z5Q/s1600/AddText_06-17-04.10.18.png";
}
tmbl2k[1].onclick = function(){
	cnmsk.innerHTML = nmsx2k[1];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieH_XSxUfX8eLDHFMepyvIZG_hskYkZeUaqI7gAA6p-LV22l6MZ9_8a_e-crjfP2xVyZrnhVW_hjkEPxq9nmQZUF67T7A1rYUtqT-B6LyoPQtxcuOVZ-8Y0OfvEiVKoDDXRD2jzLdxvSFgdGLgERXt0LwSuzuvt5-uehJJz3fPadNCZG85h3-OGMkPXA/s1600/AddText_06-17-04.13.43.png";
}
tmbl2k[2].onclick = function(){
	cnmsk.innerHTML = nmsx2k[2];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRWCbknOFX0VboxqJ_W-uYTmYmmV773-fC2QKK9wY7WZdeYZGVLpYzNolfXBX9oa21IbBeyJouwboiMmVG6McqlBQQcalvjf_vtyDED1yTdsJsTlWFbCFVuiWfZSXtcV3PRGSd59K1Ti3tAEndZVo_ci5tBZ1mfcvYBenmK6s9LSsC2w8slg-r7Q7Eig/s1600/AddText_06-17-04.17.36.png";
}
tmbl2k[3].onclick = function(){
	cnmsk.innerHTML = nmsx2k[3];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_-B-Wd1iC_A42ygFrJD8zAAgIq1eMNn1I_X0pqGC_2Q1i0Yy4VJbxLQIU9VcUJVqsgsxczKl39dY5lpG-eNd9dSWklC-KDtEvbAjI-a4VIyp17R-i4TeT9-HrAIQ2iHkgjL6ePvYBF85-IdU1qjvBC77USS-yrZCeVe2owGboImDtdjXB9l0zzlnwHw/s1600/AddText_06-17-04.22.16.png";
}
tmbl2k[4].onclick = function(){
	cnmsk.innerHTML = nmsx2k[4];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKLu5Wq47QE7ifkJQEsfYtMEcQ4LWPIs3f_pqF1ffUl537p1mfEVp2KPyjwuER5Q55KU92q7iPs5yK2r5Pxq0rqbkO3FqPfou3O2tv7r5Zr3G_AVvmHDasfzE6fLv9tbJgL3iDvsIS1kRZPA0zw4vb35sUn5dsRYRK7N3CyBneEGV99untPy8_AlSjXg/s1600/AddText_06-17-04.24.51.png";
}
tmbl2k[5].onclick = function(){
	cnmsk.innerHTML = nmsx2k[5];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXgewrGTTwXBREQ-lFNQ7er2mzDmCWMsOjwfw1bf8fZCGKAoPQHnlPO6Lhaugs1Ii8E0jHHmp3xRMvrXLVw37JPK5CKc9FTvQNdexv5Vf4wOy2x06VzU7ePbHZz5POPozsM0lJhi7xXotKIZjE8DS0LSAAKRixlCXMHkU8QEcIY8_IyKN9DU2PY1c83g/s1600/AddText_06-17-04.27.07.png";
}
tmbl2k[6].onclick = function(){
	cnmsk.innerHTML = nmsx2k[6];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgp0jQlqAVW6pl5_BBOeW7BEOxtpITGIO-_8BYjGO5gMu7q33puj-F1p9rg29jRHGkABOZGKDYvjcBndvaKMf1d6mwLiSoS5MEl6t_GhUzxZFO69FsF8bu53wwvT1sB-StI6ATdg-0JsqBGxL6E0TeCxLr4ppOQJlOl-SxOpJBtU2Uv5bVB1X3D0SBe2g/s1600/AddText_06-17-04.32.37.png";
}
tmbl2k[7].onclick = function(){
	cnmsk.innerHTML = nmsx2k[7];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiM22i6oTZCWPa4lXbzhW32HrNBJlRmvN9I4jWmB_EIyqlmq2ewoEcUA0FBmMrPv7mIKoEtzq4_TfuU_mgFFzEw3b8Mouci-aCORcEVDP_12tG1J0XgKSlvra9-Wk4aKI8bTBY6QOpADa2KduiiCytANyhh78l-7V3K1QNV7oM0vb8NNiDTZl8pI6P9rA/s1600/AddText_06-17-04.33.52.png";
}
tmbl2k[8].onclick = function(){
	cnmsk.innerHTML = nmsx2k[8];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIq_65Uh8GUyYw2xik03h4-SW0BQFPHih1HMWebpoaW8wrQ2iLXT2JBecEN-b2cAnGrsY43YYYH1v5r6FoAjBUH9pZc-l_XXRj6JOKeJ3OLZ_omxDco3yLU8PuCZMlEhl0-twZolEaantuX1m5hVIt8dNBToHx-tAmrJqRQfYUdX7hQc7MxVzPf_UnRw/s1600/AddText_06-17-04.35.15.png";
}
tmbl2k[9].onclick = function(){
	cnmsk.innerHTML = nmsx2k[9];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzXU_YsnSly6ON_b6kL2ZHZRWoU-4xe3JT4_GpTS9evRJQgIa8qHTmYJURcZ1fV9DlV20N2Fvx4sQTvky29zO1L_p0_CremEWueAQdgVolOEeV1oWZ6JGzAsPWLnk8q7cxVIY3Rn8EW5sgJ_bx8S5hM9X7b3HhHdFQe2Ew5N4qu5ijds0oAkWERUbXPA/s1600/AddText_06-17-04.37.52.png";
}
tmbl2k[10].onclick = function(){
	cnmsk.innerHTML = nmsx2k[10];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEih5w53ZwuBujECGEtJ4yk_Bl-xoXfUL_4Q4mkkLVccfmBK63N4fU_Qn5k4J_OR63lo8A4aUuTit_ko6ZRb0rjlPhxIoZFIhHWRB8MBvhTLDSOFvFK9OaCr1S8u7qM2LHuXaZ7HnAbXD6kKcnEJLquTRir9-BnfTLg3EH14ho0Qh2Brh-km9gzhNzn7IA/s1600/AddText_06-17-04.41.27.png";
}
tmbl2k[11].onclick = function(){
	cnmsk.innerHTML = nmsx2k[11];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJevYVjOEs1dNMdfl9OKB40p_pr9OXFOvOBhwE7KjJRKREnWyiZclM9cvj6MIs4SVm3wpIKUtvpIWYoAlk7-cUnRpAFfLtVk4l1OcZMtTNBA46RsUihUSPo3aKVlK-3xxhMkKBwr4IaJgke219LUayxy52cFH44ZwzdHBDFlvt6D8LU7FfbRTZiTNE8A/s1600/AddText_06-17-04.53.38.png";
}
tmbl2k[12].onclick = function(){
	cnmsk.innerHTML = nmsx2k[12];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikkf5yeuuc4dWxCEQ65YrVC3m9OGunuuf36ipGF03IgD83fyex98etpf3y7RLpMJK69oGopI90yPRuq9T40BFQVuDlayW2LoP8UqL9HgKA5piEdb_kNI-XmBj7vBHaH0iyvuKF-mSV9qvk9FHFQnqFv1LimooOkTT7-_BmegvQXi6_gUexv_PE_NTMSA/s1600/AddText_06-17-05.02.13.png";
}
tmbl2k[13].onclick = function(){
	cnmsk.innerHTML = nmsx2k[13];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjte0kLHzh-FrvhwNBJqcV_QvpRY2Inczc5R9Mec4x6cTWmy6yXq5Ii-5BZOxy4862pSbZW4EUubKg_dOZAq-JdXDFjaiKE6b_FpL-7ldYAlD4RxA507CLVIb-HxtLJlgGRcWvNu23QtjaNv-VCUJz1vHze0_8nGR1u9yc3Kds4gwrvDVWS8dJOItQl9g/s1600/AddText_06-17-05.05.01.png";
}
tmbl2k[14].onclick = function(){
	cnmsk.innerHTML = nmsx2k[14];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmPE0IqpTrjGpEc7wkr79XXs-cOX9Z3dwu5VOJ_M2xRJE-JNTWaOEQOsW07e0K1LUGTExMqULb3mOvwJ_mEQlLFpMEHTDVC12vfU-fNl5QGazDUrWI-1TuA-XK-K5Cy0AUcCaieGSOXPKsMVO4OKB8kNcoT6CmgIwRNiLcYo3E5mesrWytdznlBS0QHA/s1600/AddText_06-17-05.06.35.png";
}
tmbl2k[15].onclick = function(){
	cnmsk.innerHTML = nmsx2k[15];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYcc9wDusJI1JBZlyVhcStyvb75gIjDTHCIUV-ZdMQyJ-ArmC0pxz54GadrpPPXpXoUibixKdeHkGrtplS1uLdCjZRE_xhWGPHKTeSsWm3HmmcayMQddD74pmGOIoDmc7szDIkYqNfMNYNMVVPtJkBujM0G_C6HvslW8_OSig59yTylK0QHM6BWSkIaQ/s1600/AddText_06-17-05.07.40.png";
}
tmbl2k[16].onclick = function(){
	cnmsk.innerHTML = nmsx2k[16];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYzedzJt8ImejWKOLEqzLTcRbfl5PrMAeoQ_CMiUPgc-BKQx7aetLvvuTPmz9H_CUis3B0MR3bKLHvIwHruqrl72IGX6tibF9c-TVMSFUOz2tWNqPny57YhO4tjEuY_x4odTlMoxJAc_K7Cz-qP7BF9c1cNBMq7ooo5WP0h9gl5-BmFWcyQSjFCTfL-Q/s1600/AddText_06-17-05.08.33.png";
}
tmbl2k[17].onclick = function(){
	cnmsk.innerHTML = nmsx2k[17];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlKRioBV9qYwcJYRxpqcGYuIN5N_cmELkoZB7FqKWCWFzLzuC6Pc2rN-qIyMLy3EUUYT4kmuYSIXaPRN_6oA9AOoFvk50lIKQJUUrSLis2t6GUuNGBdUvXvmWKK0Wf9qpm3rc4yxjg-sp4P_ZZciA1n1vEnpZTSk22XW4_NohpaXnbDHrvOzkeVVr4Yw/s1600/AddText_06-17-05.09.38.png";
}
tmbl2k[18].onclick = function(){
	cnmsk.innerHTML = nmsx2k[18];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUV0C3zXjSv1KqkoP0bSGVkZTwhQ8hJF44V9qbGbdnlLKwmQL7aGp5uFfkSjqttUfxnMS0ILuyOP6VSNcpxgSSstryKJq8ZsSPXj2PYX6U89e5vkxzLDPB_F0vvpBPHWYh-DlWo-ydZOEmZvFl4fqIge8ZkgCOI5gD1idaI1hc-aupys3NXiHwZGYo-Q/s1600/AddText_06-17-05.11.41.png";
}
tmbl2k[19].onclick = function(){
	cnmsk.innerHTML = nmsx2k[19];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyiEtkvzYt8Apvj3BgltQTDceOVL-r24hXrLJDv-IBoeWXg87sFaElTAFB0sCPvkGjbbQ9iQZNEUiY-LhSHRZpqkyOAiQUxAolHcaEuJs2uCQlPU0bdNbqo43gwIhUVjOeiNITzMr6tOLiYBxeabfQj-lRcmz61ANMd-wmO6X_8huDNQVV7-XZFumS1w/s1600/AddText_06-17-05.13.19.png";
}
tmbl2k[20].onclick = function(){
	cnmsk.innerHTML = nmsx2k[20];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiLeruTyZeSMAcW_b4NyNjCZDkTzMcoK5vUsV2pv3L5XlWDJvME_r0T_W8Od2OCgxolMlQEJNFOrHgJpoJo7uOkLjJ4aQl1n-xd5GyVY3cSMYBVZlnuoXIaEXuV5rh0SR9zluAwGAzWCGZdq9x07NK3Y8hyDQSNND04-RdAsETEMCjEUWp0B9MkxU9YQ/s1600/AddText_06-17-05.14.49.png";
}
tmbl2k[21].onclick = function(){
	cnmsk.innerHTML = nmsx2k[21];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigAaykzSdbHseKm1hol-YR--kCISKIvKmuBniPeElLdeAWSNV07ZixRL9jnJqrnOofqn8U3Rb4jnlSfaZF4TID5nvE5xbZY6MqmqY4Cp93mEwwITRI70ofFbAUVh4a8VqBEDRCAXp9agv8PM5aDLVe-J6LB-tzpyA56VJ6V9o4nuX6ZzNxZLWjBJzOAw/s1600/AddText_06-17-05.16.09.png";
}
tmbl2k[22].onclick = function(){
	cnmsk.innerHTML = nmsx2k[22];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcNvttGg2CXyR2EDGfcKeezckaEJ_DyI45RzpI32SNiPgBDfAGvF7toW70fHZe86_6Qx6K4w7p2yFwtiVOrVYYIrVDsG_3XkJw3e5i5x9WUvCkgwBQR18Tte6_5_WArnnyT71kSndzx8N8mqzSvS3obULojvEMaPd6w2UMeIZz3tDfZeiKZDmXQrR0Fg/s1600/AddText_06-17-05.17.50.png";
}
tmbl2k[23].onclick = function(){
	cnmsk.innerHTML = nmsx2k[23];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBTmYOLhCtCvu2nMyV-rhNQUkpWSGMcT22TiFEnNRniiB8tgooJGRUiyjoib2tfBbNp9XPOxTtbCj9_n_lcwu0_AtZyeMkg0Z4rd7QDiTYE5qDcbGOa9b5SSx9Ubkt26c-VEuu3T9ljjUCAgA090A-beuGEljWhHuKC5KLGAx0Zt5f_KPi0_sphjwoAw/s1600/AddText_06-17-05.20.15.png";
}
tmbl2k[24].onclick = function(){
	cnmsk.innerHTML = nmsx2k[24];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge8rvsnEBb3zx4prj2hyhfn12vspSRmAnWsEd8zd-AnHSCOD4ftT6hDgrYLX70Fawe3r0NN2Crhz9184bc9AyCnv5Oxvs4uuq1Q2ORDd6mZrrTHwzndIJgrwPh7opUVcu3_jahCMvCQKfLAEyRVkrGy6y8G04iMiBaedh2eGfvoUrKz0YOF8ISsGhKvQ/s1600/AddText_06-17-05.21.13.png";
}
tmbl2k[25].onclick = function(){
	cnmsk.innerHTML = nmsx2k[25];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPuvSOgpGEaj2kz1MoyJ8RLIbN1eQU_dxtK17hcYUFYn5d454trGRmq66-jOwfAhSufRUSyc0FPPfNvHXCqq6RIzz10mGrIRoItoU3nwQQbKmuUGQ5Kfhk5OShp3LTR4-_URfg-M2SimNIfh8xtip9B2xu9LhPtby0uW0ywMLpS4uxcPy62DuvWmR3aQ/s1600/AddText_06-17-05.22.32.png";
}
tmbl2k[26].onclick = function(){
	cnmsk.innerHTML = nmsx2k[26];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsQdRT6dLbxadiu1zNavYozuNp-z3B9PtQDCdi2lhm6MxBMe0BdhCqFvsMDGvH6VxuF0TnWAyRxLPuij5sGDzZq-P9mzQRjUxGboBnPjj9u2J1l-viR3v3zcFnjPUt4PF9RgkXb0o4Gj2RdyEBFBCqnJVekVjXOtVG214TIEDMp6JTduDluv9QCi_6DQ/s1600/AddText_06-17-05.23.51.png";
}
tmbl2k[27].onclick = function(){
	cnmsk.innerHTML = nmsx2k[27];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyG8bJSXTKRlE8yVRmkbpF6w_PqgYC5_l_QlzqPWLI9naDw8DfPDUWtNEwsFy3EeBA9l8aATlWLFMXPBqwtJEv0-304ln8lvJ8ZatIItn63trE-WskEFePv0KErLOVGNnMx_WfsxR5kQBGgAqSr1qMoAw8mcBwwDqxr4Y-Sx4Bj3_R7mV-FwR4lCd0lw/s1600/AddText_06-17-05.26.09.png";
}
tmbl2k[28].onclick = function(){
	cnmsk.innerHTML = nmsx2k[28];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHakv6JyujpPr_kLlkbbPqGuEQtGP8lJrqjYO1-bR5bT8xd_EMlGx9fVXWat_Rw9RkcYBR9npC9Bjrr43Mlp9LKTAQSuUHo-E-Zqc4tpM443uvxJ91vyVMtdY0sJfeDvq3P8P018OdqrZOQKUTNw6H_-Wdne1GXtBLR7-whQ4g4LvjYwdbsTsoxnl7Mw/s1600/AddText_06-17-05.28.02.png";
}
tmbl2k[29].onclick = function(){
	cnmsk.innerHTML = nmsx2k[29];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDU5s9RRE7im6yeDogEOsydM6fezmDmYREnRk2UuPTRvncAUX8O4GwqXxMU1RM75NbO2RsYkZAFDV_I-BO-G6w5mCwja8xALuO7i7ps-Q5hXFa_q1kRZOM_XjkMLAY6_eZW6ZENR0j1f4zpYhpfeDjbsO4Szhn15mjCMMKBfPINKE8mZRdo_JJjs_s1g/s1600/AddText_06-17-05.28.54.png";
}
tmbl2k[30].onclick = function(){
	cnmsk.innerHTML = nmsx2k[30];
	gbr1k.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpZ_cT2KtiSFvnaCout8Ct7sY14Y8snEZmG1DghC0EvKBKNHDlCBC-Tgr4NAGar-1fspKlDMT7jwpBazX8_fwAipZhs2Sjsj4k6zsRHZVa1-Ph0W680_lxOu1_BHO3_ZKQeHUV7x1ZrurlqEPf0_NWrjQLrfDUCNP69G3LEQD5oiWvqJN0kMz-o2ADIQ/s1600/AddText_06-17-05.30.04.png";
}
