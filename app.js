
	
function logar(){
    var email = document.getElementById('Email').value;
    var nome = document.getElementById('Nome').value;
	var phone = document.getElementById('Telefone').value;	

    if( nome == '' || email == '' || phone == '' ){
        document.getElementById('Email').className = 'form-control is-invalid';

        document.getElementById('Telefone').className = 'form-control is-invalid';

        document.getElementById('Nome').className = 'form-control is-invalid';
       
        document.getElementById('Email').value = '';
        document.getElementById('Telefone').value = '';
        document.getElementById('Nome').value = '';

        document.getElementById('alert').className = "alert alert-warning" ;
        document.getElementById('alert').innerHTML = 'Corrir os campos invalído'

      
        

 
    }else{
       
        document.getElementById('Email').className = 'form-control is-valid';

        document.getElementById('Telefone').className = 'form-control is-valid';

        document.getElementById('Nome').className = 'form-control is-valid';


        document.getElementById('Telefone').value = '';
        document.getElementById('Nome').value = '';
        document.getElementById('Email').value = '';

	     window.location.replace("file:///C:/Users/Mateus/Documents/Nova%20pasta/envio.html");
	        
	     document.getElementById('nomeV').value = dsfdsfdfsd;   
        
    }

};	


