describe('Тестирование логина и пароля', function () {

    it('Верный логин и пароль', function () {
       cy.visit('https://login.qa.studio/');//Зашел на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       cy.get('#mail').type('german@dolnikov.ru');//Ввел верный логин
       cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
       cy.get('#loginButton').click();// Нажал ввойти

       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка верного текста после авторизации
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
       cy.get('#messageHeader').should('be.visible');
    })
    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашел на сайт
 
        cy.get('#mail').type('german@dolnikov.ru');//Ввел верный логин
        cy.get('#pass').type('iLoveqastudio');//Ввел НЕ верный пароль
        cy.get('#loginButton').click();// Нажал ввойти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка верного текста авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
     })
     it('В Логине есть @', function () {
        cy.visit('https://login.qa.studio/');//Зашел на сайт
 
        cy.get('#mail').type('germandolnikov.ru');//Ввел логин без @
        cy.get('#pass').type('iLoveqastudio');//Ввел верный пароль
        cy.get('#loginButton').click();// Нажал ввойти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка верного текста авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
     })
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');//Зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // Вводим почту для востановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка на совпадение текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
     })
     it('НЕ верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашел на сайт
 
        cy.get('#mail').type('qwerty@dolnikov.ru');//Ввел НЕ верный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
        cy.get('#loginButton').click();// Нажал ввойти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка верного текста авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
     })
     it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');//Зашел на сайт
 
        cy.get('#mail').type('GerMan@Dolnikov.ru');//Ввел верный логин с Заглавными
       
        cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
        cy.get('#loginButton').click();// Нажал ввойти
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка верного текста авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
     })

})