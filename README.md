## Requisitos

* PHP 8.2 ou superior
* Composer

## Como rodar o projeto baixado

Duplicar o arquivo ".env.example" e renomear para ".env".<br>

Instalar as dependências do PHP
```
composer install
```

Gerar a chave
```
php artisan key:generate
```

Executar as migration
```
php artisan migrate
```

Executar as seed
```
php artisan db:seed
```

Iniciar o projeto criado com Laravel
```
php artisan serve
```

Acessar o conteúdo padrão do Laravel
```
http://127.0.0.1:8000
```

## Sequencia para criar o projeto
Criar o projeto com Laravel
```
composer create-project laravel/laravel .
```

Iniciar o projeto criado com Laravel
```
php artisan serve
```

Acessar o conteúdo padrão do Laravel
```
http://127.0.0.1:8000
```

Criar a migration
```
php artisan make:migration create_name_table
```

Executar as migration
```
php artisan migrate
```

Criar Controller
```
php artisan make:controller NomeController
```
```
php artisan make:controller CourseController
```

Criar View
```
php artisan make:view nome
```
```
php artisan make:view courses/show
```

Criar Models
```
php artisan make:model NomeDaModel
```
```
php artisan make:model Course
```

Criar Seed
```
php artisan make:seeder NomeSeeder
```
```
php artisan make:seeder CourseSeeder
```

Executar as seed
```
php artisan db:seed
```

Rollback (reverter) a migração mais recente
```
php artisan migrate:rollback
```

Criar um arquivo de Request com validações
```
php artisan make:request NomeDoRequest
```
```
php artisan make:request CourseRequest
```

Criar componente
```
php artisan make:component nome --view
```
```
php artisan make:component alert --view
```

## Como usar o GitHub
Baixar os arquivos do Git
```
git clone --branch <branch_name> <repository_url> .
```

Verificar a branch
```
git branch 
```

Baixar as atualizações
```
git pull
```


Projetoweb123@

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDk3ykD7B/LCSwUnSMjbNrqdhxcSUP/iFZRcszLqo0mwNOPPWxf44hLVsk9HrKKR4J8OZJnbnL3MshVjc+wSp/8nANebGXQO7bwPAQjHeZ5anLkI8km93FDMyvlhS/UOZPEs4U81JwJhZriHRHfe8dOESY6tbZp1UIPJcped/5CRI8kc1H7fBY6QnBlvy6XEICO48EOysikEATub43RZItL1wANvyELz5cypFjLsEZOwa09H5SUWIF9+10rZILA6NDM3GyQZ8H9W/1/3ITr/MHArwwop9kckrJontL9ynnMOnoAPICFTjYraXCBkIKao26nJXntDGEGtxgjSqvEXKTqztOpGjjtTe2GD8IstVdjVw/QeYE5cP5u9ZQsP3m6EgG40NtofQrsf1cOcRMnJMgAju07kVBf7O3Sj6vC5GxQODC4RyTWUOgNhOzlyiNwPl2nMgsba4ngLSzqrV92F6Svf8mGoGk63Nu58Hq6637Zi7r2VFIeXvOjramqELn/C2EW+KDra/mClhDtmNvgZizCMx6ebmSFFRNMnyA3uSoya6hc4hjHfsp5fL5DrER+MzhZf8b+yBhSx3D2sMe6XkxOb+DSf/YNNm0ZRKJW5MuaY+zYraeh572PReRe06FTotxXBwM3ipdqEo2o+4XPagcHwVrTlmXNsZLBxlMxgLBONQ== marcostaques13@gmail.com


srv645372.hstgr.cloud