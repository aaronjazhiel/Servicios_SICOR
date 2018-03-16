#!groovy
node {
   
   stage 'Descargando GitHub'
    
   sh 'rm -rf *'
   checkout scm
 
  stage 'Desplegando'
  sh 'sudo kill -9 $(ps -fea|grep node|grep server.js|cut -d " " -f 7)'
  sh 'sudo npm install'
  sh 'sudo node server.js &'

}
