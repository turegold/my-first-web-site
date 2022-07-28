var Body = {
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackGroundColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }  
}

var Links={
    setColor:function(color){
        //  var alist = document.querySelectorAll('a');
        //  for(var i;i < alist.length;i++){
        //      alist[i].style.color = 'white';
        //  }
    $('a').css('color', color);
    }
}


    

    function nightDayHandler(self){
        var target = document.querySelector('body');
        if(self.value === 'night'){
            Body.setBackGroundColor('black');
            self.value = 'day';
            Body.setColor('white');
            Links.setColor('white');

        }
        else{
            Body.setBackGroundColor('white');
            self.value = 'night';
            Body.setColor('black');
            Links.setColor('black');
        }            
    }