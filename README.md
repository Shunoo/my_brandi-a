# Brandi-2018-2019-Turma-A
Projeto proposto por Paulo Santos e Paulo Monteiro, docentes da disciplina Projecto de Sistemas de Informação, o projeto consiste em facilitar o processo de armazenamento,preenchimento e gestão de fichas de restauro.
## Membros
1. André Silvério Nº 19077  
1. Dário Silva Nº19075        || **Scrum Master**  :crown:
1. Fábio André Nº19088
1. João Luís Ferreira Nº19164
1. João Nunes Nº19989
1. João Pascoal Nº19094
1. Leandro Sampaio Nº19990
1. Pedro Cruz Nº19442
1. Pedro Tapadas Nº18781
1. Rafael Martins Nº19076     || **Scrum Master** :crown:
1. Ricardo Pinheiro Nº20182
1. Rodolfo Santos Nº19044
1. Telmo Alexandre Nº19089
1. Tiago António Nº20000
1. Tiago Areias Nº19998
1. Tiago Costa Nº19999
1. Tomás Colaço Nº19452
## Tecnologias
Front End | Back End | Testes Back End | Base de dados 
------------ | ------------- | ------------- | -------------
React | Nodejs | Postman | MySQL |
# my_brandi-a
## 1-Entrar na pasta "code" pela cmd
## 2- npm install - para instalar os módulos
## 3- node server.js - para iniciar o servidor
# Webservices da api
> Basta clicar na imagem para vizualizar o que as rotas retornam
## Get /api/users :heavy_check_mark:
### **recebe** 
> Nada
### **devolve**
#### Sucess :white_check_mark:
![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GETUsers/getAllusers_sucess.PNG)
#### DB down :x:
![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GETUsers/getAllUsers_dbDown.PNG)
## Get /api/users/:id
### **recebe:**
> id
### **devolve:**
#### Sucess :white_check_mark:
![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GetSingleUser/getSingleUserDetails_Authenticated.PNG)
#### Unsuccess :x:
##### DBDown
![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GetSingleUser/DBDown.PNG)
##### NotAuthenticated
![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GetSingleUser/NotAuthenticated.PNG)
##### diferentID
![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GetSingleUser/getSingleUserDetails_Authenticated_ID_diferente.PNG)
