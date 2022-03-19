// Registering component in log-component.js
AFRAME.registerComponent("log",{
    schema:{
        message:{
            type:"string",
            value:""
        }
    },
    init:function(){
        console.log(this.data.message)
    }
})