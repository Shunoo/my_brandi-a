# my_brandi-a
## 1-Entrar na pasta "code" pela cmd
## 2- npm install - para instalar os módulos
## 3- node server.js - para iniciar o servidor
# Webservices da api
> Basta clicar na imagem para vizualizar o que as rotas retornam
## Utilizadores
<details>
  
  <summary> Get /api/users :heavy_check_mark: </summary>
 
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GETUsers/getAllusers_sucess.PNG)
  #### DB down :x:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/GETUsers/getAllUsers_dbDown.PNG)
  
 </details>
 
<details>
  
  <summary> Get /api/users/:id :heavy_check_mark: </summary>
  
   ### **recebe** 
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

 </details>
<details>
  
  <summary> Post /auth/login :heavy_check_mark: </summary>
  
  ### **recebe**
  >id
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/Login/LoginSucess.PNG)
  #### Unsucess :x:
  ##### Login not valid
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/Login/LoginNotValid.PNG)
  ##### DB Down
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/Login/NoDatabaseConnection.PNG)

</details>
<details>
  
  <summary> Post /auth/register :heavy_check_mark: </summary>
  
  ### **recebe**
  > login,password,email,roleFK
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/RegisterUser/registerUser_authenticated_sucess.PNG)
  #### Unsucess :x:
  ##### Field Error
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/RegisterUser/registerUser_authenticated_emailNotValid.PNG)
  ##### Not Authenticated
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/RegisterUser/registerUser_Notauthenticated.PNG)
  ##### No Permissions
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/RegisterUser/registerUser_NoPermissions.PNG)
  ##### DB Down
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/RegisterUser/NoDatabaseConnection.PNG)

 </details>
<details> 
    
  <summary> Post /api/users/:id/edit :heavy_check_mark: </summary>
  
  ### **recebe**
  >id,login,email,roleFK
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/changeUser/Sucess_Authenticated.PNG)
  #### Unsucess :x:
  ##### No Permission
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/changeUser/NotAuthorized.PNG)
  ##### Not Authenticated
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/changeUser/NotAuthenticated.PNG)
  ##### Duplicate Inputs
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/utilizadores/changeUser/DuplicateInputs.PNG)
  
 </details>
 ## Tecnicos
 <details> 
    
  <summary> Get /api/tecnicos :heavy_check_mark: </summary>
  
  ### **recebe**
  > nada
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/getAll/getTecnicos.PNG)
  #### Unsucess :x:
  ##### no Token
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/getAll/noToken.PNG)
  ##### db Down
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/getAll/dbDown.PNG)

 </details>
<details>
  
  <summary> Get /api/tecnicos/:id :heavy_check_mark:</summary>
  
  ### **recebe**
  > nada
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/getTecnicoID/Sucess.PNG)
  #### Unsucess :x:
  ##### DB Down
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/getTecnicoID/DBDown.PNG)
  ##### No Token
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/getTecnicoID/NoToken.PNG)

</details>
<details>

  <summary> Post /api/tecnicos/:id/edit :heavy_check_mark:</summary>
    
  ### **recebe**
  > nome , habilitacoes , nivelProfissional
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/updateTecnico/Update.PNG)
  #### Unsucess :x:
  ##### Erro Campo
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/updateTecnico/erro%20campo.PNG)
  ##### DB Down
   ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/updateTecnico/DBDown.PNG)
  ##### Not Authenticated
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/updateTecnico/NotAuthenticated.PNG)
   
  </details>
<details>
 
  <summary> Post /api/tecnicos/create :heavy_check_mark:</summary>
   
  ### **recebe**
  > nome , habilitacoes , nivelProfissional , userFK
  ### **devolve**
  #### Sucess :white_check_mark:
  ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/createTecnico/Sucess.PNG)
  #### Unsucess :x:
  ##### Field Error
   ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/createTecnico/FieldError.PNG)
  ##### No Token
   ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/createTecnico/NoToken.PNG)
  ##### FK Error
   ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/createTecnico/FKError.PNG)
  ##### DB Down
   ![alt text](https://raw.githubusercontent.com/iptomar/Brandi-2018-2019-Turma-A/master/Server/postman_screenshots/tecnicos/createTecnico/DBDown.PNG)
  
   </details>
   
