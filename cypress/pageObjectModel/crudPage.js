const { faker } = require('@faker-js/faker');

let fakeEmail = faker.internet.email();
let fakeFirstName = faker.person.firstName();
let fakeLastName = faker.person.lastName();
let fakeAge = faker.number.int({ min: 18, max: 65 });
let fakeSalary = faker.number.int({ min: 3000, max: 15000 });
let fakeDepartment = faker.commerce.department();

class CrudPage {
    crud() {
        cy.step('Yeni kayıt ekleme formunu aç');
        cy.get("button#addNewRecordButton").click();

        cy.step('İsim, soyisim, email, yaş, maaş ve departman bilgilerini doldur');
        cy.get("input#firstName").type(fakeFirstName);
        cy.get("input#lastName").type(fakeLastName);
        cy.get("input#userEmail").type(fakeEmail);
        cy.get("input#age").type(fakeAge.toString());
        cy.get("input#salary").type(fakeSalary.toString());
        cy.get("input#department").type(fakeDepartment);

        cy.step('Formu gönder');
        cy.get("button#submit").click();
    }

    deleteLastEntry() {
        cy.step('Son eklenen kaydın silme butonunu tıkla');
        cy.get("[id^='delete-record-']")
          .last() // Son satırdaki silme butonunu seç
          .click();
    }
}

export default CrudPage;
