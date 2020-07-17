var emain=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]];

var alleng=["John ate an apple before afternoon","John goes to the library and studies","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]

var hmain=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var allhin=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]
function dropdown()
{
		hs=allhin[Math.floor(Math.random() * allhin.length)];
        arr2=hs.split(" ");
        es=alleng[Math.floor(Math.random() * alleng.length)];
        arr1=es.split(" ");
	document.getElementById("res2").innerHTML=""
	document.getElementById("res3").innerHTML=""
	document.getElementById("res4").innerHTML=""
	document.getElementById("res5").innerHTML=""
	document.getElementById("b3").style.visibility="hidden";
    document.getElementById('b4').style.visibility="hidden"
	document.getElementById("b5").style.visibility="hidden";
	flag=0
if(document.getElementById("eng").selected)
{

	document.getElementById("res").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("res1").innerHTML="(select the buttons in proper order)";
	
	let body = document.getElementsByTagName("p")[3];
	var len=arr1.length;
	for(i=0;i<len;i++)
{
	j=Math.floor(Math.random()*len)
	es1=arr1[i];
	arr1[i]=arr1[j]
	arr1[j]=es1;
}


for(i=0;i<len;i++)
{
		 let button = document.createElement("button");
  button.id='button'+i;
  button.innerHTML = arr1[i]
  body.appendChild(button);
   
  button.addEventListener ("click", function() {
	document.getElementById("res3").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("res4").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    flag=flag+1;
    if (flag>0) 
     {
     	document.getElementById("b3").style.visibility="visible";
     }
	 var v=String(document.getElementById("res4").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
    	
    if (len==v1.length) 
     {
     	document.getElementById("b4").style.visibility="visible";
     }
});   

}

   
}
else if (document.getElementById("hin").selected) 
{ 

	document.getElementById("res").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("res1").innerHTML="(select the buttons in proper order)";
	
	let body = document.getElementsByTagName("p")[3];
	var len1=arr2.length
	for(i=0;i<len1;i++)
{
	j=Math.floor(Math.random()*len1)
	hs1=arr2[i];
	arr2[i]=arr2[j]
	arr2[j]=hs1;

}
for(i=0;i<len1;i++)
{
		 let button = document.createElement("button");
  button.id='button'+i
  button.innerHTML = arr2[i]
  body.appendChild(button)
  
  button.addEventListener ("click", function() {
	document.getElementById("res3").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("res4").innerHTML+=this.innerHTML+"  ";
    this.style.visibility="hidden";
    flag=flag+1;
    if (flag>0) 
     {
     	document.getElementById("b3").style.visibility="visible";
     }
	 var v=String(document.getElementById("res4").innerHTML).replace(/\s+$/, '');
     v1=v.split(" ")
	 
    if (len1==v1.length) 
     {
     	document.getElementById("b4").style.visibility="visible";
     }
});

  
}
}

else
{
	document.getElementById("res").innerHTML=""
	document.getElementById("res1").innerHTML=""
	document.getElementById("res2").innerHTML=""
}
}

function reform()

{
	

	for(i=0;i<arr1.length||i<arr2.length;i++)
	{
	  if(document.getElementById('button'+i).style.visibility=="hidden")
	  {
	  	document.getElementById('button'+i).style.visibility="visible";
	  document.getElementById('res3').innerHTML=""
	  document.getElementById('res4').innerHTML=""
	  document.getElementById("res5").innerHTML=""
	  document.getElementById('b3').style.visibility="hidden"
      document.getElementById('b4').style.visibility="hidden"   
      document.getElementById("b5").style.visibility="hidden";
}
}
}

 function check()
{
  var x=String(document.getElementById("res4").innerHTML).replace(/\s+$/, '');
  c1=0;
  c2=0
   if(document.getElementById("hin").selected)
  {
  for(i=0;i<7;i++)
  {
    for(j=0;j<hmain[i].length;j++)
    {
      if(x==hmain[i][j])
      {
        c2++;
      }
    }
  }
if(c2==1)
{
      document.getElementById("res5").innerHTML="<span style='color:green;font-size:30px'>Right answer!!!</span>"
}
 
else
{      
    document.getElementById("res5").innerHTML="<span style='color:red;font-size:30px'>Wrong answer!!!</span>"
    document.getElementById("b5").style.visibility="visible";
}
}else if(document.getElementById("eng").selected)
  {
  for(i=0;i<10;i++)
  {
    for(j=0;j<emain[i].length;j++)
    {
      if(x==emain[i][j])
      {
        c1++;
      }
    }
  }
if(c1==1)
{
	document.getElementById("res5").innerHTML="<span style='color:green;font-size:30px'>Right answer!!!</span>"
}
else
{
      document.getElementById("res5").innerHTML="<span style='color:red;font-size:30px'>Wrong answer!!!</span>"
      document.getElementById("b5").style.visibility="visible";
}
}
}