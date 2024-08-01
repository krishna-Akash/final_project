
"use strict"
var is_clicked = 1;
var $ = function(id)
{
    return document.getElementById(id);
};

function updateTime() {
    var now = new Date();
    var year = String(now.getFullYear()).slice(-2);

    var month = String(now.getMonth() + 1).padStart(2,"0");
    var day = String(now.getDate() + 1).padStart(2,"0");

    var hours = String(now.getHours() + 1).padStart(2,"0");
    var minutes = String(now.getMinutes() + 1).padStart(2,"0");
    var seconds = String(now.getSeconds() + 1).padStart(2,"0");


    /*
        Date object works with dates and times.
        Available methods:
            getMonth()	    Returns the month (from 0-11) 
                **Note**:   month is 0 indexed
            getDate()	    Returns the day of the month (from 1-31)
                **Note**:   no padding zero in front
            getFullYear()	Returns the year 
                **Note**:   By default, it returns YYYY
            getHours()      Returns the hour (from 0-23)
                **Note**:   no padding zero in front
            getMinutes()	Returns the minutes (from 0-59)
                **Note**:   no padding zero in front
            getSeconds()	Returns the seconds (from 0-59)
                **Note**:   no padding zero in front
        Exmaple: 
            var month = now.getMonth(); -> returns 6
        ----------------------------------------------------------------------------------------
        padStart(): to add a padding String from the start                                      
        Syntax: string.padStart(length, string)                                                 
        Parameter:                                                                              
            length - required, the length of the resulting string.                              
            string - optional, the string to pad with. Default is space.                        
        Return Value:                                                                           
            A String of the specified length, with the padding applied from the start.          
        
        ----------------------------------------------------------------------------------------
        slice(): selects from a given start, up to a (not inclusive) given end.                 
        Syntax: array.slice(start, end)                                                         
        Parameter:                                                                              
            start - optional, start position. Default is 0.                                     
            string - optional, end position. Default is 0.                        
        Return Value:                                                                           
            A new array containing the selected elements.     
        ----------------------------------------------------------------------------------------

        ${expression} : Template literals
    */

    var formattedTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    $("current_time").innerHTML = formattedTime;
   
}
var click_counter = 0;
var switch_language = function()
{  

    var html_str = "";
    if(click_counter % 3 == 0){
        html_str = "<h2>English</h2>";
        html_str += "<h5>Introduction</h5>";
        html_str += "<p>In a world where coding prowess and ninja agility are paramount, there emerges a unique hero: meet Whiskers, the Cat Coder Ninja. With the stealth of a shadow and the brilliance of a master programmer, Whiskers navigates the digital landscape with unparalleled finesse. By day, he is a seemingly ordinary feline, but by night, he transforms into a legendary coder, tackling complex algorithms and vanquishing bugs with a flick of his paw. Whether he's scaling virtual firewalls or pouncing on security vulnerabilities, Whiskers combines his ninja reflexes with his coding expertise to protect and optimize the digital realm. Get ready to embark on thrilling adventures with the most extraordinary feline coder you've ever met!</p>";
        click_counter++;

    } else if (click_counter % 3 == 1){
        html_str = "<h2>中國人</h2>";
        html_str += "<h5>介紹</h5>";
        html_str += "<p>在一個編碼能力和忍者敏捷性至關重要的世界裡，出現了一位獨特的英雄：見見威斯克，貓編碼忍者。憑藉著影子的隱密性和程式設計大師的才華，威威以無與倫比的技巧駕馭數位景觀。白天，他是一隻看似普通的貓科動物，但到了晚上，他就變成了傳奇的程式設計師，用爪子輕輕一抖就能解決複雜的演算法並消除錯誤。無論是擴展虛擬防火牆還是攻擊安全漏洞，Whiskers 都將他的忍者反應與編碼專業知識相結合，以保護和優化數位領域。準備好與你見過的最非凡的貓科動物程式設計師一起踏上驚心動魄的冒險之旅！</p>";
        click_counter++;
  

    } else {
        html_str = "<h2>हिंदी</h2>";
        html_str += "<h5>परिचय</h5>";
        html_str += "<p>ऐसी दुनिया में जहां कोडिंग कौशल और निंजा चपलता सर्वोपरि है, एक अद्वितीय नायक उभरता है: व्हिस्कर्स, कैट कोडर निंजा से मिलें। एक छाया के चुपके और एक मास्टर प्रोग्रामर की प्रतिभा के साथ, व्हिस्कर्स अद्वितीय चालाकी के साथ डिजिटल परिदृश्य को नेविगेट करता है। दिन तक, वह एक साधारण बिल्ली का बच्चा है, लेकिन रात तक, वह एक पौराणिक कोडर में बदल जाता है, जटिल एल्गोरिदम से निपटता है और अपने पंजे के एक झटके के साथ कीड़े को जीतता है।  चाहे वह वर्चुअल फायरवॉल को स्केल कर रहा हो या सुरक्षा कमजोरियों पर उछल रहा हो, व्हिस्कर्स डिजिटल क्षेत्र की सुरक्षा और अनुकूलन के लिए अपनी कोडिंग विशेषज्ञता के साथ अपने निंजा रिफ्लेक्सिस को जोड़ती है। अब तक मिले सबसे असाधारण बिल्ली के समान कोडर के साथ रोमांचकारी कारनामों को शुरू करने के लिए तैयार हो जाइए!</p>";
        click_counter++;
 

    }
    $("introduction").innerHTML = html_str;
}
var hide_detail = function(image){

    var siblings = [];
    var sibling = image.nextElementSibling;
    while(sibling)
    {
        siblings.push(sibling);
        sibling = sibling.nextElementSibling;
    }

    for(var i=1; i < siblings.length; i++)
    {
        if(siblings[i].style.display == "none"){
            siblings[i].style.display = "block";
            image.src = "img/minus.png";
        }else {
            siblings[i].style.display = "none";
            image.src = "img/plus.png";

        }
    }
    console.log(siblings);
}

var click_details = function(){
  var details = document.getElementsByClassName("portfolio-content");
  details[0].style.display = "block";
}

window.onload = function()
{
    $("language_switch").onclick = switch_language;
    $("click").onclick = click_details;
    

    var divs = document.getElementsByClassName("box");
    for (var i = 0 ; i < divs.length; i++){
        divs[i].querySelector("h5").style.display = "none";
        divs[i].querySelector("a").style.display = "none";

        var icon_image = divs[i].firstElementChild;
        icon_image.onclick = function()
        {
        hide_detail(this);
        }
    }
    updateTime(); // Update the time immediately on load
    setInterval(updateTime, 1000); // Update the time every second
};