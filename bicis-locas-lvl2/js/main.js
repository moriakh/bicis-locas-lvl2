function validateEmail(email) { /*sacado de geek for geeks*/
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function cleaning() {
    $('#name').parent().find('span').remove();
	$('#lastname').parent().find('span').remove();
	$('#input-email').parent().find('span').remove();
	$('#input-password').parent().find('span').remove();
	$('select').parent().find('span').remove();
}

function validateForm(){
	/* Escribe tú código aquí */

	let regName = /^[a-zA-Z]+$/;
	const name = $('#name').val().trim();
	const lastname = $('#lastname').val().trim();
	const inputemail = $('#input-email').val().trim();
	const inputpassword = $('#input-password').val().trim();
	const tipobici = $('select').val();

	cleaning();
	/* name */
	if (name == ""){
		$('#name').parent().append('<span>Este campo es obligatorio</span>');
	}
	else if(!regName.test(name)){
		$('#name').parent().append('<span>Nombre inválido</span>');
	}
	else if (name[0].toUpperCase() != name[0]){
		$('#name').parent().append('<span>La primera letra debe ser en mayúsculas</span>');
	}

	/* lastname */
	if (lastname == ""){
		$('#lastname').parent().append('<span>Este campo es obligatorio</span>');
	}
	else if(!regName.test(lastname)){
		$('#lastname').parent().append('<span>Nombre inválido</span>');
	}
	else if (lastname[0].toUpperCase() != lastname[0]){
		$('#lastname').parent().append('<span>La primera letra debe ser en mayúsculas</span>');
	}

/* email */
	if (inputemail == ""){
		$('#input-email').parent().append('<span>Este campo es obligatorio</span>');
	}
	else if (!validateEmail(inputemail)){
		$('#input-email').parent().append('<span>Correo inválido</span>');
	}

/* password */
	if (inputpassword.length <6 ){
		if (inputpassword == ""){
			$('#input-password').parent().append('<span>Este campo es obligatorio</span>');
		}
		else{
			$('#input-password').parent().append('<span>La contraseña debe contener al menos 6 caracteres</span>');
		}
	}
	else if ((inputpassword == "123456") || (inputpassword == "654321") || (inputpassword == "password")){
		$('#input-password').parent().append('<span>Contraseña inválida</span>');
	}

/* tipobici */
	if (tipobici == "0"){
		$('select').parent().append('<span>Debe seleccionar un tipo de bicicleta</span>');
	}

}