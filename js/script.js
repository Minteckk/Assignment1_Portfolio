// This function displayText is used to display assignment description when the find out more button on portfolio page is click
// I make use of addEventListener, Click event to the button id called myButton.
function displayText() {
    document.getElementById("myButton").addEventListener("click", displayText);
    document.getElementById('text').innerHTML = 
    "This is a assignment that I did for my Data Science module where I have to create dashboard and reports" + 
    "to answer the queries my stakeholder have. For this assignment,I applied design thinking to come out with" +
    "queries that my stakeholder may have related to the different university." 
    "To answer those queries, I have created a dashboard using Power BI desktop and Power BI service showing the" 
    "academic reputation of the institution, average monthly income. As well as Degree's holder" 
    "employment rate and their university. I have also created three reports showing the Academic Reputation", 
    "overall employment rate by degree as well as employer reputation of the university.";  
  }

// This function WDFProjectDesc() is used to display assignment description when the click me to read more! button on portfolio 
// page is clicked
function WDFProjectDesc() {
  document.getElementById("myButton2").addEventListener("click", WDFProjectDesc);
    document.getElementById('desc1').innerHTML = "This is a project that I did for my Web Development Fundamentals module." +
    " In this project, I have a created a fashion website using html and css." + 
    " There's a total of four pages, Index, Product, contact us and feedback." +
    "Software used - Adobe Dreamweaver" 
}

// This function UIUXProjectDesc() is used to display assignment description when the click me to read more! button on portfolio 
// page is clicked
function UIUXProjectDesc() {
  document.getElementById("myButton3").addEventListener("click", UIUXProjectDesc);
    document.getElementById('desc2').innerHTML = "This is mockup design that I did for my UI/UX Project."+
    " I did a cafe website mockup with both Mobile and Desktop version as well as a web banner." +
    " Software used in this assignment is Adobe Photoshop."
}

// This function ProgrammingProjectDesc() is used to display assignment description when the click me to read more! button on portfolio 
// page is clicked
function ProgrammingProjectDesc() {
  document.getElementById("myButton4").addEventListener("click", ProgrammingProjectDesc);
    document.getElementById('desc3').innerHTML = 
  "This is a slider interactive gallery application that I did for my programming project using HTML and Javascript."+
  " Software used is Adobe Dreamweaver." 
}

// This function ProgrammingAssignmentDesc() is used to display assignment description when the click me to read more! button on portfolio 
// page is clicked
function ProgrammingAssignmentDesc() {
  document.getElementById("myButton5").addEventListener("click", ProgrammingAssignmentDesc);
    document.getElementById('desc4').innerHTML = 
  "This is a mobile phone bill calculator that I created using HTML and Javascript for my programming assignment."+
  " Software used is Adobe Dreamweaver." 
}

// This function DigitalPublishDesc() is used to display assignment description when the click me to read more! button on portfolio 
// page is clicked
function DigitalPublishDesc() {
  document.getElementById("myButton6").addEventListener("click", ProgrammingAssignmentDesc);
    document.getElementById('desc5').innerHTML = 
  "This is an interactive magazine with scroll-able image and text and links to URL that I created for my digital publishing projects."
  + " Software used is Adobe InDesign." 
}

// This function CMSAssignmentDesc() is used to display assignment description when the click me to read more! button on portfolio 
// page is clicked
function CMSAssignmentDesc() {
  document.getElementById("myButton7").addEventListener("click", CMSAssignmentDesc);
    document.getElementById('desc6').innerHTML = 
  "This is an Attractions website that I did about Gardens by the Bay." + " It is created with WordPress."
  + " plugin used to create content : Elementor , WP Form , Envira Gallery." +
  "   other plugin used: Yoast SEO , Twitter , G Translate , Google Analytics for WordPress by MonsterInsights" + 
  "   EWWW Image Optimizer , All-in-one WP migration."
}

// This function CMSProjectDesc() is used to display project description when the click me to read more! button on portfolio 
// page is clicked
function CMSProjectDesc() {
  document.getElementById("myButton8").addEventListener("click", CMSProjectDesc);
    document.getElementById('desc7').innerHTML = 
  "This is an e-commerce website that I did." + " It is created with WordPress."
  + " Plugin used - Elementor, Envira gallery, Google analytics by MonsterInsights, Google Language Translator," + 
  " Instagram feed gallery, Smush, Twitter, widget for social page feeds, WooCommerce, WP Google maps, WP forms, Yoast SEO" 
}

// This function WebsiteDevProjDesc() is used to display project description when the click me to read more! button on portfolio 
// page is clicked
function WebsiteDevProjDesc() {
  document.getElementById("myButton9").addEventListener("click", WebsiteDevProjDesc);
    document.getElementById('desc8').innerHTML = 
  "This is Police Dispatch system website for my Website Development Project." + 
  " it is created with PHP, MySQL , HTML , bootstrap , CSS , JavaScript." +  
  "   Software used : Dreamweaver (form) , Eclipse IDE – Code editor" 
}

// This function RIAProjDesc() is used to display project description when the click me to read more! button on portfolio 
// page is clicked
function RIAProjDesc() {
  document.getElementById("myButton10").addEventListener("click",  RIAProjDesc);
    document.getElementById('desc9').innerHTML = 
  "This is a Membership Animated Banner that I have created using Classic tween to" 
  + "create animation and fade in the logo and text." + 
  " This is a change request and drag and drop interactive game." +  
  "  Software Used : Adobe Animate" 
}

// This function MobileWebProjDesc() is used to display project description when the click me to read more! button on portfolio 
// page is clicked
function MobileWebProjDesc() {
  document.getElementById("myButton11").addEventListener("click",  MobileWebProjDesc);
    document.getElementById('desc10').innerHTML = 
  "This is a responsive fashion webpage that I created using jQuery and bootstrap with parallax effects." 
  + " This is a final-year project for my Mobile Web Development module and it is about car dealer which is" 
  + " created with jquery, JavaScript and CSS."
}


// This function mouseOver is used to change background color when a button is hovered.
function mouseOver() {
  document.getElementById("btn").style.backgroundColor = "yellow";
  document.getElementById("btn30").style.backgroundColor = "yellow";
  document.getElementById("btn31").style.backgroundColor = "yellow";
}

// This function mouseOver is used to change background color when a button is hovered.
function mouseOut() {
  document.getElementById("btn").style.backgroundColor = "#4BF900";
  document.getElementById("btn30").style.backgroundColor = "#4BF900";
  document.getElementById("btn31").style.backgroundColor = "#4BF900";
}

// This function is used to include mouse over and mouse out interactions for Back To Top button.
function Hoverin() {
  document.getElementById("btn32").style.backgroundColor = "#f6c453";
}

function Hoverout() {
  document.getElementById("btn32").style.backgroundColor = "#4BF900";
}

// This function is used to include mouse over interactions for *all* Read more button in portfolio page.
function onHover() {
  document.getElementById("btn33").style.backgroundColor = "yellow";
  document.getElementById("myButton").style.backgroundColor = "yellow";
  document.getElementById("myButton2").style.backgroundColor = "yellow";
  document.getElementById("myButton3").style.backgroundColor = "yellow";
  document.getElementById("myButton4").style.backgroundColor = "yellow";
  document.getElementById("myButton5").style.backgroundColor = "yellow";
  document.getElementById("myButton6").style.backgroundColor = "yellow";
  document.getElementById("myButton7").style.backgroundColor = "yellow";
  document.getElementById("myButton8").style.backgroundColor = "yellow";
  document.getElementById("myButton9").style.backgroundColor = "yellow";
  document.getElementById("myButton10").style.backgroundColor = "yellow";
  document.getElementById("myButton11").style.backgroundColor = "yellow";
}
// This function is used to include mouse out interactions for *all* Read more button in portfolio page.
function onHoverout() {
  document.getElementById("btn33").style.backgroundColor = "#4BF900";
  document.getElementById("myButton").style.backgroundColor = "#4BF900";
  document.getElementById("myButton2").style.backgroundColor = "#4BF900";
  document.getElementById("myButton3").style.backgroundColor = "#4BF900";
  document.getElementById("myButton4").style.backgroundColor = "#4BF900";
  document.getElementById("myButton5").style.backgroundColor = "#4BF900";
  document.getElementById("myButton6").style.backgroundColor = "#4BF900";
  document.getElementById("myButton7").style.backgroundColor = "#4BF900";
  document.getElementById("myButton8").style.backgroundColor = "#4BF900";
  document.getElementById("myButton9").style.backgroundColor = "#4BF900";
  document.getElementById("myButton10").style.backgroundColor = "#4BF900";
  document.getElementById("myButton11").style.backgroundColor = "#4BF900";
}


// This function is used to display the actvities that I attended in Overflow CCA in About page - Education section - 
// NP Activities Attended. 
// I make use of addEventListener, Click event to the button id called btn1.
function ShowNPCCActivities() {
  document.getElementById("btn1").addEventListener("click", ShowNPCCActivities);
  document.getElementById('text2').innerHTML = 
  "Python Libraries workshop, Git workshop, Discord bot workshop, Alogorithms workshop, Data Algorithms Bootcamp";
}

// This function is used to display the activities that I attended in ACE CCA in About page - Education section (ITE).
// I make use of addEventListener, Click event to the button id called btn2.
function ShowACEActivites() {
  document.getElementById("btn2").addEventListener("click", ShowACEActivites);
  document.getElementById('text3').innerHTML = 
  "Wildlife Reserve Singapore(WRS) virtual program about the conservation efforts. Team building day";
}

function WAAchievementAttained() {
  document.getElementById("btn34").addEventListener("click", WAAchievementAttained);
  document.getElementById('text35').innerHTML = 
  "Adobe Award (Best Results in Website Development), Director's List (2019), Edusave Skills Award" +
  "Certificate of Merit (Web Applications), Certificate of Academic Achievement (2019-2020)";
}

// This function is used to display the activities that I attended in ART CCA in About page - Education section (Zhenghua Secondary).
// I make use of addEventListener, Click event to the button id called btn3.
function showSecSchActivities() {
  document.getElementById("btn3").addEventListener("click", showSecSchActivities);
  document.getElementById('text4').innerHTML = 
  "Jurong Health Community Art Project 2015, Passion Arts Festival 2015 and 2017";
}

// This function is used to display the activities that I attended in ART CCA in About page - Education section (Zhenghua Secondary).
// I make use of addEventListener, Click event to the button id called btn4.
function showCompetition() {
  document.getElementById("btn4").addEventListener("click", showCompetition);
  document.getElementById('text5').innerHTML = 
  "2016 Anti-drug art competition - received Certificate of participation.";
}

// This function is used to display the my HTML level of prociency when the click me button on about page - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn5.
function HTMLProciency() {
  document.getElementById("btn5").addEventListener("click", HTMLProciency);
  document.getElementById('text6').innerHTML = 
  "70%";
}

// This function is used to display the my CSS level of prociency when the click me button on about page - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn6.
function CSSProciency() {
  document.getElementById("btn6").addEventListener("click", CSSProciency);
  document.getElementById('text7').innerHTML = 
  "65%";
}

// This function is used to display the my Javascript level of prociency when the click me button on about page - skills section is 
//clicked.
// I make use of addEventListener, Click event to the button id called btn7.
function JavascriptProciency() {
  document.getElementById("btn7").addEventListener("click", JavascriptProciency);
  document.getElementById('text8').innerHTML = 
  "55%";
}

// This function is used to display the my PHP level of prociency when the click me button on about page - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn8.
function PHPProciency() {
  document.getElementById("btn8").addEventListener("click", PHPProciency);
  document.getElementById('text9').innerHTML = 
  "50%";
}

// This function is used to display the my jQuery level of prociency when the click me button on about page - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn9.
function jQueryProciency() {
  document.getElementById("btn9").addEventListener("click", jQueryProciency);
  document.getElementById('text10').innerHTML = 
  "65%";
}

// This function is used to display the my jQuery Mobile level of prociency when the click me button on about page
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn10.
function jQueryMobileProciency() {
  document.getElementById("btn10").addEventListener("click", jQueryMobileProciency);
  document.getElementById('text11').innerHTML = 
  "65%";
}

// This function is used to display the my Python level of prociency when the click me button on about page 
//- skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn11.
function PythonProciency() {
  document.getElementById("btn11").addEventListener("click", PythonProciency);
  document.getElementById('text12').innerHTML = 
  "55%";
}

// This function is used to display the my My SQL level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn12.
function MySQLProciency() {
  document.getElementById("btn12").addEventListener("click", MySQLProciency);
  document.getElementById('text13').innerHTML = 
  "55%";
}

// This function is used to display the my Wordpress level of prociency when the click me button on about page - skills section is
// clicked.
// I make use of addEventListener, Click event to the button id called btn13.
function WordpressProciency() {
  document.getElementById("btn13").addEventListener("click", WordpressProciency);
  document.getElementById('text14').innerHTML = 
  "70%";
}

// This function is used to display the WooCommerce level of prociency when the click me button on about page - skills section is 
//clicked.
// I make use of addEventListener, Click event to the button id called btn14.
function WooCommerceProciency() {
  document.getElementById("btn14").addEventListener("click", WooCommerceProciency);
  document.getElementById('text15').innerHTML = 
  "65%";
}


// This function is used to display the my Web Development level of prociency when the click me button on about page - skills
// section is clicked.
// I make use of addEventListener, Click event to the button id called btn15.
function WebDevProciency() {
  document.getElementById("btn15").addEventListener("click", WebDevProciency);
  document.getElementById('text16').innerHTML = 
  "65%";
}

// This function is used to display the my Responsive Web Design level of prociency when the click me button on about page - 
// skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn16.
function ResponsiveWebProciency() {
  document.getElementById("btn16").addEventListener("click", ResponsiveWebProciency);
  document.getElementById('text17').innerHTML = 
  "65%";
}

// This function is used to display the my Typescript level of prociency when the click me button on about page - 
// skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn17.
function TypeScriptProciency() {
  document.getElementById("btn17").addEventListener("click", TypeScriptProciency);
  document.getElementById('text18').innerHTML = 
  "35%";
}

// This function is used to display the my CSharp level of prociency when the click me button on about page 
//- skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn18.
function CSharpProciency() {
  document.getElementById("btn18").addEventListener("click", CSharpProciency);
  document.getElementById('text19').innerHTML = 
  "40%";
}

// This function is used to display the my UI/UX level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn19.
function UIUXProciency() {
  document.getElementById("btn19").addEventListener("click", UIUXProciency);
  document.getElementById('text20').innerHTML = 
  "60%";
}

// This function is used to display the my Angular level of prociency when the click me button on about page - skills section is 
// clicked.
// I make use of addEventListener, Click event to the button id called btn20.
function AngularProciency() {
  document.getElementById("btn20").addEventListener("click", AngularProciency);
  document.getElementById('text21').innerHTML = 
  "35%";
}

// This function is used to display the my Adobe Dreamweaver software level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn21.
function DreamweaverProciency() {
  document.getElementById("btn21").addEventListener("click", DreamweaverProciency);
  document.getElementById('text22').innerHTML = 
  "70%";
}

// This function is used to display the my Adobe Photoshop software level of prociency when the click me button on about page - 
// skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn22.
function PhotoshopProciency() {
  document.getElementById("btn22").addEventListener("click", DreamweaverProciency);
  document.getElementById('text23').innerHTML = 
  "65%";
}

// This function is used to display the my Adobe Illustrator software level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn23.
function IllustratorProciency() {
  document.getElementById("btn23").addEventListener("click", IllustratorProciency);
  document.getElementById('text24').innerHTML = 
  "65%";
}

// This function is used to display the my Adobe Animate software level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn24.
function AnimateProciency() {
  document.getElementById("btn24").addEventListener("click", AnimateProciency);
  document.getElementById('text25').innerHTML = 
  "60%";
}

// This function is used to display the my Adobe InDesign software level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn25.
function InDesignProciency() {
  document.getElementById("btn25").addEventListener("click", AnimateProciency);
  document.getElementById('text26').innerHTML = 
  "60%";
}

// This function is used to display the my Microsoft Office software level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn26.
function OfficeProciency() {
  document.getElementById("btn26").addEventListener("click", OfficeProciency);
  document.getElementById('text27').innerHTML = 
  "60%";
}

// This function is used to display the my VS Code software level of prociency when the click me button on about page
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn27.
function VSCodeProciency() {
  document.getElementById("btn27").addEventListener("click", VSCodeProciency);
  document.getElementById('text28').innerHTML = 
  "60%";
}

// This function is used to display the my Visual Studio software level of prociency when the click me button on about page 
// - skills section is clicked.
// I make use of addEventListener, Click event to the button id called btn27.
function VSProciency() {
  document.getElementById("btn28").addEventListener("click", VSProciency);
  document.getElementById('text29').innerHTML = 
  "55%";
}

// This function is used to display the thank you messages to recruiter for reaching out when the submit button is clicked.
// I make use of addEventListener, Click event to the button id called btn28.
function FormAcknowledgement() {
  document.getElementById("btn29").addEventListener("click", FormAcknowledgement);
  document.getElementById('text30').innerHTML = 
  "Hi Recruiters, Thanks for reaching out. I will reply to your enquiries as soon as possible.";
}

// This function is used to validate the form in the contact form to ensure required fields is filled in.
function validateForm() {
  let x = document.forms["contactform"]["Name"]["emailAddress"]["ContactNo"].value;
  if (x == "") {
    alert("Name, Email Address and Contact No. must be filled out");
    return false;
  }
}

// This function is used to let the current fields the user is typing in to get focused by styling the background colour.
function infocus(x) {
x.style.background = "orange";
}

// This function is used to focus out the current fields that being focus and move the focus to the next fields.
function outfocus(x) {
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
  x.style.background = "white";
}

// This function is used to focus out the current fields that being focus and move the focus to the next fields.
function outfocusEmail(x) {
  var x = document.getElementById("emailAddr");
  x.value = x.value.toUpperCase();
  x.style.background = "white";
}

// This function is used to focus out the current fields that being focus and move the focus to the next fields.
function outfocusContact(x) {
  var x = document.getElementById("contact");
  x.value = x.value.toUpperCase();
  x.style.background = "white";
}

// This function is used to focus out the current fields that being focus and move the focus to the next fields.
function outfocustextarea(x) {
  var x = document.getElementById("enquiries");
  x.value = x.value.toUpperCase();
  x.style.background = "white";
}

