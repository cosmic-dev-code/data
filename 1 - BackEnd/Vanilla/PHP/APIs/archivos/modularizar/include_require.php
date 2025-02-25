<body>
	<?php
		/* ##########========================########## */
		/* ######===--- (Incluir) archivos ---===###### */
		/* ##########========================########## */

		/**
		 * Los archivos (incluidos) NO son necesarios para el funcionamiento.
		 */

		// No pasa nada si se incluye o no, (solo da un WARNING de no encontrarlo).
		include("validarFormulario.php");
		include "validarFormulario.php";

		// Es opcional incluirlo, (pero incluirlo mas de una ve, da ERROR).
		include_once("connect.php");
		include_once "connect.php";

		/* ##########=========================########## */
		/* ######===--- (Requerir) archivos ---===###### */
		/* ##########=========================########## */

		/**
		 * Los archivos (requeridos) son necesarios, de lo contrario hay ERROR.
		 */

		// Puede requerirse mas de una vez.
		require("mostrarAnuncios");
		require "mostrarAnuncios";

		// Solo se requiere una vez, (mas de una da ERROR).
		require_once("connect.php");
		require_once "connect.php";
	?>
</body>