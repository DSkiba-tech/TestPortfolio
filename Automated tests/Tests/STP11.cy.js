import MarketPage from '../POM/MarketPage.js'

describe('STP-11: Community market displays 10 recently sold items', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		it('passes', () => {
			
			MarketPage.clickRecentlySold() // click recently sold tab
			
			MarketPage.elements.recentlySold()
			.should('have.class','market_tab_well_tab_active') // tab is active
			
			MarketPage.elements.marketListingsRows() // 10 elements exist
			.should('have.length',10)
			
			MarketPage.elements.marketListingsImages() // 10 items photos
			.should('have.length',10)
			
			MarketPage.elements.marketListingsItemsNames() // 10 names of items
			.should('have.length',10)
			
			MarketPage.elements.marketListingsGamesNames() // 10 names of games
			.should('have.length',10)
			
			MarketPage.elements.marketListingsPrice() // 10 prices
			.should('have.length',10)
			
			
			
				})
})