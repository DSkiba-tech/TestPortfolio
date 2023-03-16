import MarketPage from '../POM/MarketPage.js'

describe('STP-7: Community market displays 10 most popular items', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		it('passes', () => {
			
			MarketPage.elements.popularItems()
			.should('have.class','market_tab_well_tab_active') // tab is active
			
			MarketPage.elements.marketListingsRows() // 10 elements exist
			.should('have.length',10)
			
			MarketPage.elements.marketListingsImages() // 10 items photos
			.should('have.length',10)
			
			MarketPage.elements.marketListingsItemsNames() // 10 names of items
			.should('have.length',10)
			
			MarketPage.elements.marketListingsGamesNames() // 10 names of games
			.should('have.length',10)
			
			MarketPage.elements.marketListingsQuantity() // 10 quantities
			.should('have.length',10)
			
			MarketPage.elements.marketListingsPrice() // 10 prices
			.should('have.length',11) // check for 11, because price header has also same hook
			
			
			
				})
})