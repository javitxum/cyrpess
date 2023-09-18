Parte 1. Criterios de aceptación

    Escenario: La página web y móvil de innoCV 
    Dado un usuario que quiere contactar con atención al cliente de innoCV
    Cuando dicho usuario entra al apartado 'contacto'
    Entonces podrá facilmente encontrar el teléfono de contacto, correo electrónico y dirección física de la compañía, junto con la ubicación y otras noticias de la empresa. Además se ofrecerá un widget para poder envíar consultas a la plataforma de mensajería de atención al cliente. 

    El usuario está navegando por la página web de innoCV y ve el botón de 'contacto' en la parte superior izquierda de la página junto a 'blog'.
    Dicha información pero más reducida debe estar también en la 'home' page, en el footer junto al apartado 'Qué hacemos'. 
    Al acceder a 'contacto', el usuario puede identificar los datos de contacto y un espacio para enviar un formulario con la consulta deseada. 
    El usuario puede interactuar tanto con el formulario de enviar consultas como con el mapa integrado de Google Maps. 
    El formulario de contactos acepta caracteres especiales pero no puede tener más de 999 caracteres de longitud contando espacios. 
    Los mensajes de contacto deberían llegar a nuestra plataforma de mensajería 'Zendesk'
    Los datos de contacto no serán interactuables ni clickeables de ninguna forma. 
    Al clickear en el icono de innoCV (arriba a la izquierda), el usuario debe volver a la página de inicio. 



Parte 2. Plan de pruebas

TC1: Navegar al formulario de contacto y volver a la página de inicio
    Precon: el usuario está viendo la página de inicio de innoCV y existe un botón arriba a la derecha al lado de 'blog' que es 'contacto'.
    El usuario está probando el botón en un ordenador macOS y con un dispositivo iOS iphone 8

    Pasos: 
        1. Hacer click en 'contacto'
        2. Hacer click en el icono de innoCV (arriba a la izquierda)

    Resultado esperado: 
        1. El usuario navega a 'https://www.innocv.com/contacto', donde se puede ver que aparece la siguiente información: número de teléfono, correo electrónico, dirección, mapa de google, formulario de contacto y más noticias de la empresa
        2. El usuario vuelve a la página de inicio
        3. El mensaje está en Zendesk

TC2: Interactuando con el formulario de contacto (happy path)
    Precon: El usuario está dentro de la página de contacto y ve el formulario de 'contáctanos'

    Pasos: 
        1: Introducir nombre y apellidos (válidos) y tipear la tecla 'tab'
        2: Introducir un correo válido y tipear la tecla 'tab'
        3: Introducir un teléfono válido y tipear la tecla 'tab'
        4: Escribe una consulta usando diferentes tipos de caractéres y 200 caractéres como máximo
        5: Hacer 'check' en la casilla de política de privacidad y términos de uso
        6: Hacer click en el boton: 'enviar formulario'

    Resultado esperado: 
        1. Los campos no muestran errores al cambiar al siguiente
        2. El campo correo no muestra errores al cambiar al siguiente
        3. El campo teléfono no muestra errores al cambiar al siguiente
        4. El texto queda definido dentro del widget
        5. Se marca la casilla y se abilita el botón de 'enviar formulario'
        6. Se muestra un pop-up diciendo que la consulta se ha enviado correctamente
        7. El mensaje está en Zendesk


TC3: Probando la definición del formulario de contacto con caracteres especiales
    Precon: El usuario está dentro de la página de contacto y ve el formulario de 'contáctanos'

    Pasos: 
        1. Completar validamente los campos: nombre, apellido, correo y teléfono
        2. Introducir texto conteniendo caracteres ascii especiales
        3. Clickear el check de politica de privacidad y enviar formulario

    
    Resultado esperado: 
        1. Se muestra un pop-up diciendo que la consulta se ha enviado correctamente
        2. El mensaje está en Zendesk

// Los casos que siguen los dejo planteados de lo que agregaría al conjunto de pruebas desarrolladas
TC4: Probando la definición del formulario de contacto con más caracteres de lo permitido
TC5: Probando los campos de nombre y apellido: usaría números, negativos, espacios, y caracteres especiales
TC6: Probando el campo 'correo electrónico': usaría formatos que no son de correo, correos inválidos, etc
TC7: Probando el campo 'telefono': probaría caracteres, formatos no telefónicos, etc
TC8: Probar a dejar campos sin completar. 