
function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;
    
    var screenPosition = window.innerHeight / 1.2;
  
    if(introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
    if(imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }
  
  window.addEventListener('scroll', scrollAppear);
  
  // For switching between navigation menus in mobile mode
  var i = 2;
  function switchTAB() {
      var x = document.getElementById("list-switch");
      if(i%2 == 0) {
          document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
          document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
      }else {
          document.getElementById("list-switch").style= "display: none;";
          document.getElementById("search-switch").style= "display: none;";
      }
      i++;
  }
  
  // For LOGIN
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");
  
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }
  
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }
    
  // CheckBox Function
  function goFurther(){
    if (document.getElementById("chkAgree").checked == true) {
      document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #fed56bdd, #dfcd27);';
    }
    else{
      document.getElementById('btnSubmit').style = 'background: lightgray;';
    }
  }
  
  function google() {
        window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
  }
  
  
  
  function startquiz() {
    document.getElementById('title').style = 'display: none;'; 
  
    document.getElementById('panel').style = 'display: inline-flex;'; 
    document.getElementById('left').style = 'display: block;'; 
    document.getElementById('right').style = 'display: block;'; 
  }
  function searchdisplay() {
    document.getElementById('searchpanel').style.display="block";
  }
  
  function display(n) {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
  
    img1.style = 'display: none;';
    img2.style = 'display: none;';
    img3.style = 'display: none;';
    img4.style = 'display: none;';
    s1.style = 'background: #dfcd27; color: #FFF;';
    s2.style = 'background: #dfcd27; color: #FFF;';
    s3.style = 'background: #dfcd27; color: #FFF;';
    s4.style = 'background: #dfcd27; color: #FFF;';
  
    if(n==1) {
      img1.style = 'display: block;';
      s1.style = 'background: #E5E8EF; color: #dfcd27;';
    }
    if(n==2) {
      img2.style = 'display: block;';
      s2.style = 'background: #E5E8EF; color: #dfcd27;';
    }
    if(n==3) {
      img3.style = 'display: block;';
      s3.style = 'background: #E5E8EF; color: #dfcd27;';
    }
    if(n==4) {
      img4.style = 'display: block;';
      s4.style = 'background: #E5E8EF; color: #dfcd27;';
    } 
  }
  
  
  function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if(side==0) {
      menu.style = 'transform: translateX(0vh); position:fixed;';
    }
    else {
      menu.style = 'transform: translateX(-100%);';
    }
    side++;
  }