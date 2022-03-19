AFRAME.registerComponent("detach",{
    schema:{
        detach:{
            type:"number",
            default:0
        }
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.detach = this.data.detach-0.03
        })
        var pos = this.el.getAttribute("position");
        pos.y=pos.y+this.data.detach
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
       
    
    }

})