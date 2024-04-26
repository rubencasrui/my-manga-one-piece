function obtenerCapitulo() {
	capitulo = localStorage.getItem("capitulo");
	if(!capitulo) {
		localStorage.setItem("capitulo", 0);
		capitulo = localStorage.getItem("capitulo");
	}
	document.getElementById("capituloActual").innerText = capitulo;
}
obtenerCapitulo();

function irAlCapitulo() {
	capitulo = document.getElementById("capitulo").value;
	localStorage.setItem("capitulo", capitulo);
	document.getElementById("capituloActual").innerText = capitulo;

	cargarImagenes();
}

function aumentarCapitulo() {
	capitulo = localStorage.getItem("capitulo");
	capitulo++;
	localStorage.setItem("capitulo", capitulo);

	document.getElementById("capituloActual").innerText = capitulo;
}

function disminuirCapitulo() {
	capitulo = localStorage.getItem("capitulo");
	capitulo--;
	localStorage.setItem("capitulo", capitulo);

	document.getElementById("capituloActual").innerText = capitulo;
}

// Función para cargar las imágenes del div con el id 'chapter_imgs' de la página https://dragontranslation.net/leer/one-piece-(capitulo).00
function cargarImagenes() {
	// puntero cargando
	document.body.style.cursor = "wait";

	// Obtener el capítulo actual
	capitulo = localStorage.getItem("capitulo");

	// Crear una petición XMLHttpRequest
	url = "https://dragontranslation.net/leer/one-piece-" + capitulo + ".00";
	xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			// Crear un elemento div para almacenar las imágenes
			div = document.createElement("div");
			div.innerHTML = xhr.responseText;

			// Obtener todas las imágenes de la página
			imgs = div.getElementsByTagName("img");
			
			// Crear un div para almacenar las imágenes
			div = document.createElement("div");
			
			// Recorrer todas las imágenes
			for (i = 1; i < imgs.length; i++) {
				// Crear un elemento img
				img = document.createElement("img");
			
				// Asignar la URL de la imagen
				img.src = imgs[i].src;
				img.className = "pagina";

				imagen = document.createElement("div");

				imagen.appendChild(img);

				// Agregar la imagen al div
				div.appendChild(imagen);
			}
			
			// Agregar el div con las imágenes al div con el id 'imagenes'
			document.getElementById("imagenes").innerHTML = div.innerHTML;
			
			// puntero normal
			document.body.style.cursor = "default";
		}
	};
	xhr.send();
}
cargarImagenes();