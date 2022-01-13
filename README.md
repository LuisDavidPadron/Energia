# Proyecto energia chile

## Lanzar update [ sudo apt-get update ] o [ sudo yum update ]

## sudo [ apt install nodejs ], para verificar [ node -v ] or [ node –version ]

## [ sudo apt install npm ], para verificar [ npm -v or npm –version ]

## [ sudo apt-get update ]

## Necesario curl: [ sudo apt-get install curl ]

## curl –sL https://rpm.nodesource.com/setup_10.x | sudo bash -

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## se puede probar la visualizacion segun el puerto que se visualice en la consola. Si se desea cambiar el numero de puerto de visualizacion del archivo en produccion 

## Compiles and minifies for production es necesario porque genera la carpeta dist que es todos los ficheros minificados para enviar a produccion.
```
npm run build 
```

## Luego de tener la carpeta dist, es necesario el fichero server.js ya que con el apuntaremos a la carpeta anteriormente mencionada para poder hacer deploy del proyecto. 

## Importante haber ejecutado en npm install ya que este instalara todas las dependencias necesarias, entre ellas express para correr un servidor en local, en este caso en el servidor de produccion

## [ node server.js ], nos correra un servidor web apuntando a esta carpeta. 

## necesario para correr este comando en segundo plano y no tener una consola corriendo este comando. Para eso se hace el uso de la libreria pm2

## Con el comando : [ npm install pm2 -g ] .Se instala pm2 que es para monitorear el uso del proyecto o fichero en ejecucion en segundo plano.  

## En la carpeta de ubicacion del proyecto [ pm2 start server.js ] ejecutara un servidor con este proyecto 

## [ pm2 list ] para visualizar procesos en ejecucion con el process manager.  [ pm2 kill ] para cortar ejecuciones existentes.

## esto con una ip en especifica que es donde hice pruebas si ya ese servidor tiene un dominio, no habria problemas 

## para poder visualizar la web en el puerto 80 sin necesidad de apuntar al puerto especifico, es necesario configurar una instruccion iptables en esta instancia del proyecto. 

## iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port [ 8080 o el configurado en el fichero server.js, por default se encuentra el 8080 ]

## Leer Si desea, con orden de pasos de ejecucion:

## https://linuxhint.com/change-port-number-vue-cli/
## https://www.geeksforgeeks.org/installation-of-node-js-on-linux/
## https://phoenixnap.com/kb/install-node-js-npm-centos 
## https://pm2.keymetrics.io/ 
## https://askubuntu.com/questions/444729/redirect-port-80-to-8080-and-make-it-work-on-local-machine
