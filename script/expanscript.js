/////Show Text When Press Enter				
var inputshow = document.getElementById("showlabel");
inputshow.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("show").click();
    }
});

/////Change Expansion Img/Txt/Name
var current = 0;
var oldwho = null;
function change(val, who){
	var enam = who.parentNode.getElementsByTagName('h3')[0].innerHTML;
	var eimg = who.parentNode.getElementsByTagName('figure')[0].getElementsByTagName('img')[0].src; 
	
	document.getElementById("expimg").src = eimg;
	document.getElementById("expimg").title = enam;
	document.getElementById("expname").innerHTML = enam;
	document.getElementById("exptxt").innerHTML = etxt[val];
	
	who.parentElement.style.filter = "drop-shadow(0 0 4px rgba(0,0,0,.6))";
	if(oldwho != null && oldwho != who.parentElement) oldwho.style.filter = "drop-shadow(0 0 4px rgba(0,0,0,0))";
	oldwho = who.parentElement;
	current = val;
}
var etxt = [
	"Maldição de Naxxramas trará cinco alas, sendo que cada ala será disponível a cada uma semana. A primeira será gratuita, enquanto as três seguintes terão que ser desbloqueadas usando ouro ou dinheiro real. A última será desbloqueada quando as quatro primeiras forem completas. O preço para pagar cada ala ainda não foi decidido, embora Jason Chayes disse no dia 27 de abril que fariam um anúncio a respeito dos preços das segunda, terceira e quarta ala.[1] Ele também disse que os desenvolvedores querem colocar preços para as alas usando ouro para ser um jeito realístico de entrar numa ala em particular e que é importante para nós continuarmos a filosofia de existirem versões do jogo em que ambas opções [ouro ou dinheiro real] são viáveis. Maldição de Naxxramas é baseada na raid de World of Warcraft chamada Naxxramas. Já faz anos que o senhor da cripta Anub'arak invadiu com um exército de guerreiros mortos-vivos o antigo zigurate nerubiano conhecido como Naxxramas. As forças do Flagelo dominaram a cidadela e, pela vontade do Lich Rei, seus corredores se transformaram em uma poderosa máquina de guerra. A magia negra arrancou a fortaleza de seu lar subterrâneo e a alçou aos céus. Oculta em densas nuvens, Naxxramas se tornou cada vez mais forte. Sob as ordens do Lich Rei, a ira que fermentava na necrópole foi lançada sobre o mundo. Bravos heróis invadiram a cidadela e derrotaram seu ímpio comandante, o lich Kel’Thuzad, mas a vitória durou pouco. Sobre as terras do Ermo das Serpes, já assoladas pela guerra, Naxxramas ressurgiu com fúria renovada. Kel’Thuzad, novamente entronado no gélido coração da necrópole, impôs cerco a uma fortaleza da Aliança, a Bastilha Invergarde. Conforme grupos de todas as partes do mundo convergem para os portões da Coroa de Gelo, a guerra contra o Flagelo chega a seu momento mais importante. E é no interior de Naxxramas que os ventos da batalha podem mudar e soprar contra o Lich Rei... ou definitivamente a seu favor...",
	"Texto2",
	"Texto3",
	"Texto4",
	"Texto5",
	"Texto6"
];

/////ChangeExp when press Enter
var inputlabel2 = document.getElementById("selector").getElementsByClassName("select");
for(var i = 0; i < inputlabel2.length; i++){
    var childh3 = inputlabel2[i].getElementsByTagName("h3")[0];
    
    childh3.addEventListener("keyup", function (event) {
    event.preventDefault();
        
    var h3=0;
    for(var i2 = 0; i2 < inputlabel2.length; i2++){
        if(this.parentNode == inputlabel2[i2]){
            h3=i2;
            break;
        }
    }    
        
    if (event.keyCode === 13) {
        change(h3, this);
    }
    });
}