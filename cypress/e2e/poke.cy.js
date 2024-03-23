describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('lexa.pirozhkov@yandex.ru');
         cy.get('#password').type('Manchester1998');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(10) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Aleksey Pirozhkov');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').should('be.enabled');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__success1').should('be.visible');
         cy.get('.payment__back-button-success').should('be.enabled');


     })
 })
 
