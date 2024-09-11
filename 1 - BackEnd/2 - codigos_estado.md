### ===================================== ###
###### ===--- Codigos de estado ---=== ######
### ===================================== ###

<!-- Los diferentes codigos de estado que podemos recibir son los siguientes. -->

# 1xx Informational
*   [](100_Continue): El cliente puede continuar con su solicitud.
*	[](101_Switching_Protocols): El servidor acepta cambiar el protocolo según lo solicitado por el cliente.
# 2xx Success
*	[](200_OK): La solicitud ha sido exitosa.
*	[](201_Created): La solicitud ha sido exitosa y se ha creado un nuevo recurso.
*	[](202_Accepted): La solicitud ha sido aceptada para procesamiento, pero no ha sido completada.
*	[](204_No_Content): La solicitud ha sido exitosa, pero no hay contenido para enviar en la respuesta.
# 3xx Redirection
*	[](301_Moved_Permanently): El recurso solicitado ha sido movido permanentemente a una nueva URI.
*	[](302_Found): El recurso solicitado reside temporalmente en una URI diferente.
*	[](304_Not_Modified): El recurso no ha sido modificado desde la última solicitud.
# 4xx Client Error
*	[](400_Bad_Request): La solicitud no puede ser procesada debido a un error del cliente (por ejemplo, datos inválidos).
*	[](401_Unauthorized): La solicitud requiere autenticación del usuario.
*	[](403_Forbidden): El servidor entiende la solicitud, pero se niega a autorizarla.
*	[](404_Not_Found): El recurso solicitado no ha sido encontrado.
*	[](405_Method_Not Allowed): El método de solicitud no es compatible con el recurso solicitado.
*	[](409_Conflict): La solicitud no puede ser procesada debido a un conflicto con el estado actual del recurso.
*	[](429_Too_Many_Requests): El cliente ha enviado demasiadas solicitudes en un periodo de tiempo dado.
# 5xx Server Error
*	[](500_Internal_Server_Error): El servidor encontró una condición inesperada que le impidió completar la solicitud.
*	[](501_Not_Implemented): El servidor no reconoce el método de solicitud o no tiene la capacidad para completarlo.
*	[](502_Bad_Gateway): El servidor recibió una respuesta inválida de un servidor de respaldo al tratar de completar la solicitud.
*	[](503_Service_Unavailable): El servidor no está disponible actualmente (por ejemplo, por sobrecarga o mantenimiento).
*	[](504_Gateway_Timeout): El servidor no pudo obtener una respuesta a tiempo de un servidor de respaldo.