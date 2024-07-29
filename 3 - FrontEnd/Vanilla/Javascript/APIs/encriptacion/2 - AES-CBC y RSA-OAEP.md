### =========================== ###
###### ===--- AES-CBC ---=== ######
### =========================== ###

[](AES-CBC) es un algoritmo de cifrado simétrico que utiliza una clave compartida entre el emisor y el receptor para cifrar y descifrar datos. [](AES-CBC) significa ___Advanced Encryption Standard___ con modo de operación Cipher Block Chaining (CBC).

En este modo de operación, cada bloque de datos se cifra utilizando la clave compartida y el bloque anterior de datos cifrados. De esta manera, se puede garantizar que los bloques cifrados no sean idénticos, lo que dificulta la tarea de los atacantes para descifrar los datos.

### ============================ ###
###### ===--- RSA-OAEP ---=== ######
### ============================ ###

[](RSA-OAEP) es un algoritmo de cifrado asimétrico que utiliza un par de claves _pública-privada_ para cifrar y descifrar datos. [](RSA-OAEP) significa ___Optimal Asymmetric Encryption Padding___ *(Cifrado Asimétrico Óptimo con Relleno)*. Este algoritmo se basa en la factorización de números enteros grandes, lo que hace que sea difícil para los atacantes descifrar los datos cifrados.

[](RSA-OAEP) es comúnmente utilizado para cifrar claves de cifrado simétrico, como ___AES-CBC___.
	En este caso, el cifrado asimétrico se utiliza para proteger la clave de cifrado simétrico, y luego se utiliza el cifrado simétrico para cifrar los datos reales.

### =========================== ###
###### ===--- Resumen ---=== ######
### =========================== ###

Ambos son para proteger la privacidad de los datos en linea.

	--- (AES-CBC) -> Encripta los datos con una clave.
	--- (RSA-OAEP) -> Encripta la encriptacion AES-CBC con dos claves, una publica y una privada.