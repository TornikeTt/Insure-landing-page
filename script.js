let status = true;
function Show(){
    this.hamburger = document.querySelector(".hamburger");
    this.background_Color = document.getElementById("backgroundColor");
    this.main = document.querySelector(".main")
    if(status == true){
        this.hamburger.src = "images/icon-close.svg";
        
        this.main.style.opacity = "0"
        this.main.style.transition = "opacity 1.2s";

        this.background_Color.style.backgroundColor = "hsl(270, 9%, 17%)";
        this.background_Color.style.width = "375px";
        this.background_Color.style.height = "550px";
        this.background_Color.style.marginTop = "0px";
        this.background_Color.style.transition = "all 1.2s";

        status = false

    }else if(status == false){
        this.hamburger.src = "images/icon-hamburger.svg";

        this.main.style.opacity = "1"
        this.main.style.transition = "opacity 1.2s";

        this.background_Color.style.width = "375px";
        this.background_Color.style.marginTop = "-50rem";
        this.background_Color.style.transition = "all 0.7s";
        status = true
    }
}

function sight(){
    var createShow = new Show();
}
