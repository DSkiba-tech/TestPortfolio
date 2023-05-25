import MarketPage from '../POM/MarketPage.js'

describe('STP-50: Change page using left arrow button', () => {
	
	it('passes', () => {
		
	cy.visit('https://steamcommunity.com/market/')
	
	context('Click "See all" button', () => {
	
	MarketPage.clickSeeAll()
	
	})
	
	context('"See all" button does not exist anymore', () => {
	
	MarketPage.elements.seeAll()
	.should('not.exist')
	
	})
	
	context('Market listings rows are visible', () => {
	
	MarketPage.elements.marketListingsRows()
	.should('be.visible')
	
	})
	
	context('First result phrase number is visible and not empty', () => {
	
	MarketPage.elements.showingResultsStart()
	.should('be.visible')
	.and('not.empty')
	
	})
	
	context('Tenth result phrase number is visible and not empty', () => {
	
	MarketPage.elements.showingResultsEnd()
	.should('be.visible')
	.and('not.empty')
	
	})
	
	context('Total ammount of results is visible and not empty', () => {
	
	MarketPage.elements.showingResultsTotal()
	.should('be.visible')
	.and('not.empty')
	
	})
	
	context('Each page number is visible', () => {
	
	MarketPage.elements.pageList()
	.should('be.visible')
	
	})
	
	context('First page is selected by default', () => {
	
	MarketPage.elements.pageListActive()
	.should('have.text','1 ') // space after 1 is required!!
	
	})
	
	context('Left arrow button is disabled and visible', () => {
	
	MarketPage.elements.previousPageButton()
	.should('have.class','disabled')
	.and('be.visible')
	
	})
	
	context('Click next page button (right arrow)', () => {
	
	MarketPage.clickNextPageButton()
	
	})
	
	context('Page 2 is selected', () => {

	MarketPage.elements.pageListActive()
	.should('have.text','2 ')
	
	})

	context('Select last possible page', () => {
	MarketPage.elements.pageList().last().click()
	
	})
	})
})