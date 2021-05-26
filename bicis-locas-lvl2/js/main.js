function validateForm(){
	/* Escribe tú código aquí */
	const name = $('#name').val().trim();
	if (name == ""){
		$('#name').append('<span>Este campo es obligatorio</span>')
	}
}