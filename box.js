AFRAME.registerComponent("box",{
    schema:{
      xy_position:{
          type:"number",
          default:1
      }
    },
    tick:function(){
       this.data.xy_position = this.data.xy_position+0.01;

       //to get the attribute of an entity --> this.el.getAttribute("name_of_the_attribute")
       var pos = this.el.getAttribute("position");
       pos.x=this.data.xy_position

       //update the value of the attribute --> this.el.setAttribute("name_of_the_attribute",{updated_value})
        this.el.setAttribute("position",{x:pos.x, y:pos.y,z:pos.z})
        console.log(this.data.xy_position)
        
    }
//open the index.html and create an a entity .. inside that create an a-box primitive
})