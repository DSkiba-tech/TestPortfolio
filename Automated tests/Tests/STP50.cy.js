import MarketPage from '../POM/MarketPage.js'

describe('STP-50: Change page using left arrow button', () => {
	
	it('passes', () => {
		
	cy.visit('https://steamcommunity.com/market/') // Open market page
	
	MarketPage.clickSeeAll(); // click 'See All' button
	
	MarketPage.elements.seeAll() // 'See all' button does not exists
	.should('not.exist')
	
	MarketPage.elements.marketListingsRows() // market listings rows are visible
	.should('be.visible')
	
	MarketPage.elements.showingResultsStart() // element is visible and not empty
	.should('be.visible')
	.and('not.empty')
	
	MarketPage.elements.showingResultsTotal() // element is visible and not empty
	.should('be.visible')
	.and('not.empty')
	
	MarketPage.elements.showingResultsEnd() // element is visible and not empty
	.should('be.visible')
	.and('not.empty')
	
	MarketPage.elements.pageList() // page numbers are visible 
	.should('be.visible')
	
	MarketPage.elements.pageListActive() // selected '1' page by default
	.should('have.text','1 ') // space after 1 is required
	
	MarketPage.elements.previousPageButton() // left arrow button is disabled (have class 'disabled') and is visible
	.should('have.class','disabled')
	.and('be.visible')
	
	MarketPage.getPageByNumber(2) // change page to 2
	
	MarketPage.elements.pageListActive() // page '2' is selected
	.should('have.text','2 ') // space after 2 is required
	
	MarketPage.elements.previousPageButton() // left arrow button is not disabled (not have class 'disabled') and is visible
	.should('not.have.class','disabled')
	.and('be.visible')
	
	MarketPage.clickPreviousPageButton() // click previous page button (left arrow)
	
	MarketPage.elements.pageListActive() // selected '1' page by default
	.should('have.text','1 ') // space after 1 is required
	
	})
})