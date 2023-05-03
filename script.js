var audio = new Audio('wpr.mp3');
audio.play();
var contactString = "<div class='social'> <a target='_blank' href='tel:+919025754815'> <div class='socialItem' id='call'><img class='socialItemI' src='phone.svg'/><label class='number'></label>91+9025754815</div> </a> <a href='mailto:yathithebeast@gmail.com'> <div class='socialItem'><img class='socialItemI' src='gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/YATHISSH'> <div class='socialItem'><img class='socialItemI' src='github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/+919025754815'> <div class='socialItem'><img class='socialItemI' src='whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/yathissh_ytb'> <div class='socialItem'><img class='socialItemI' src='telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/yathissh_ytb/'> <div class='socialItem'><img class='socialItemI' src='instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/yathissh-s-6ba26424a/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='pdf.png'><label>YATHISSH Resume.pdf</label></div><a href='assets/yathissh&#39;s Resume.pdf' download='Yathissh_Resume.pdf'><img class='YATHISSH MAIN PROJECT' src='downloadIcon.svg'></a></div>";

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>No 2/306 <br>Sikkarayapuram<br>Chennai,Tamil Nadu,INDIA </address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 🤝<br><br>My name is <span class='bold'><a class='alink'>S YATHISSH</a></span><br><br>I am a Computer Science and Business Systems (student) at Chennai Institute of Technology.👨🏻‍💻📚I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'Skills'</span> - to know my skills<br><span class='bold'>'Resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'Address'</span> - to get my address<br><span class='bold'>'Contact'</span> - to get ways to connect with me<br><span class='bold'>'Projects'</span> - to get details of my projects<br><span class='bold'>'Clear'</span> - to clear conversation<br><span class='bold'>'About'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science and Business Systems student at <b>Chennai Institute of Technology</b>.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Python<br>C<br>CSS<br>HTML<br>Java Script</span><br><br>In future I will have an experience with following frameworks :<span class='bold'><br>Android<br>Java<br>C++<br>SQL<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Windows</span> as daily driver on my HP Pavilion 14-ec0xxx<br>OS:Windows<br></span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.Tech degree in Computer Science and Business Systems (student) at <b>Chennai Institute of Technology</b>.  <br>Passing Year : 2026<br><br>I have completed my higher Secondary schooling from <b>Sudharsanam Vidyaashram</b><br>Pass out:2022");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻✨ Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/yathissh_ytb/'><span class='bold'>S YATHISSH</a> with ♥️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a class='alink' target='_blank' href='https://github.com/YATHISSH'><div class='socialItem'><img class='socialItemI' src='github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Oops sorry..! I couldn't catch you...😢<br>Send 'help' to know more about me.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}