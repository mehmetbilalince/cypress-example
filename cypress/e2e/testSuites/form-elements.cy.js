import BasePage from '../../pageObjectModel/basePage';
import CrudPage from '../../pageObjectModel/crudPage';

const basePage = new BasePage();
const crudPage = new CrudPage();

describe('Form Elementleri Kullanımı', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => { return false }) // Testin başarısız olmasına neden olan hataları engeller
    });

    beforeEach(() => {
        basePage.visit();
    });

    it('Formu doldurup kaydetmeli ve son eklenen kaydı silmeli', () => {
        cy.step('Form sayfasına git');
        cy.get("div.home-body > div > div:nth-child(1) > div").click();
        cy.get("div:nth-child(1) > div > ul > li#item-3 > span").click();

        cy.step('Yeni kayıt oluştur');
        crudPage.crud();

        cy.step('Son eklenen kaydı sil');
        crudPage.deleteLastEntry();
    });
});
