AFRAME.registerComponent("move",{
    schema:{
        move_obj:{type:"number", default:0}
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.move_obj= this.data.move_obj+0.005
        })
        var pos = this.el.getAttribute("position");
        pos.y=pos.y+this.data.move_obj
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }

})