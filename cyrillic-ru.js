

let input = ('');

let alphabet = input.replace(/я/g,"ya")
.replace(/ш/g,"sh").replace(/е/g,"e").replace(/р/g,"r")
.replace(/т/g,"t").replace(/ы/g,"y").replace(/у/g,"u")
.replace(/и/g,"i").replace(/о/g,"o").replace(/п/g,"p")
.replace(/а/g,"a").replace(/с/g,"s").replace(/д/g,"d")
.replace(/ф/g,"f").replace(/г/g,"g").replace(/х/g,"kh")
.replace(/й/g,"j").replace(/к/g,"k").replace(/л/g,"l")
.replace(/ь/g,"'").replace(/з/g,"z").replace(/ж/g,"zh")
.replace(/ц/g,"ts").replace(/в/g,"v").replace(/б/g,"b")
.replace(/н/g,"n").replace(/м/g,"m").replace(/э/g,"ye")
.replace(/ю/g,"yu").replace(/щ/g,"šč").replace(/ё/g,"yo")
.replace(/ч/g,"č").replace(/Я/g,"ya").replace(/Ч/g,"Č")
.replace(/Ш/g,"Š").replace(/Е/g,"E").replace(/Р/g,"R")
.replace(/Т/g,"T").replace(/Ы/g,"Y").replace(/У/g,"U")
.replace(/И/g,"I").replace(/О/g,"O").replace(/П/g,"P")
.replace(/А/g,"A").replace(/С/g,"S").replace(/Д/g,"D")
.replace(/Ф/g,"F").replace(/Г/g,"G").replace(/Х/g,"Kh")
.replace(/Й/g,"J").replace(/К/g,"K").replace(/Л/g,"L")
.replace(/Ь/g,"'").replace(/З/g,"Z").replace(/Ж/g,"Zh")
.replace(/Ц/g,"Ts").replace(/В/g,"V").replace(/Б/g,"B")
.replace(/Н/g,"N").replace(/М/g,"M").replace(/Э/g,"Ye")
.replace(/Ю/g,"Yu").replace(/Щ/g,"Šč").replace(/Ё/g,"Yo")

console.log(alphabet)