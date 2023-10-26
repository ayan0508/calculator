let buttons = document.querySelectorAll('input[type="button"]');
let accValue='';
let result='';
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var buttonValue = button.value;
      if(buttonValue==='=')
      {
        accValue='';
        accValue=document.getElementById('result').value;
        let operator='';
        let n1='',n2='';
        for (const char of accValue) { 
            if(char==='-'||char==='+'||char==='x'||char==='%')
            {
                operator=char;
                n1=n2;
                n2='';
                continue;
            }
            else
            {
                n2+=char;
            }
        };
        
        switch(operator){
            case '+':
                result=Number(n1)+Number(n2);break;
            case '-':
                result=Number(n1)-Number(n2);break;
            case 'x':
                result=Number(n1)*Number(n2);break;
            case '%':
                result=Number(n1)/Number(n2);break;
        }
       document.getElementById('result').value =result;
      }
      else if(buttonValue==='AC')
      {
        document.getElementById('result').value='';
        accValue='';
        result='';
      }
      else
      {
        accValue+=buttonValue;
        document.getElementById('result').value =accValue;
      }
    });
  });

