
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");

        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");

        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


    // var typed= new Typed(".inputt",{
    //     strings:["Shriya bv","Webdv"],
    //     typespeed:120,
    //     bacckspeed:110,
    //     loop:true
    // })