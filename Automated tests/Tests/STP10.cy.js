import MarketPage from '../POM/MarketPage.js'

describe('STP-10: Community market displays 10 newly listed items', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		it('passes', () => {
			
			MarketPage.clickNewlyListed() // click newly listed tab
			
			MarketPage.elements.newlyListed()
			.should('have.class','market_tab_well_tab_active') // tab is active
			
			MarketPage.elements.marketListingsRows() // 10 elements exist
			.should('have.length',10)
			
			MarketPage.elements.marketListingsImages() // 10 items photos
			.should('have.length',10)
			
			MarketPage.elements.marketListingsItemsNames() // 10 items names
			.should('have.length',10)
			
			MarketPage.elements.marketListingsGamesNames() // 10 games names
			.should('have.length',10)
			
			MarketPage.elements.marketListingsPlayerAvatar() // 10 players avatars
			.should('have.length',10)
			
			MarketPage.elements.marketListingsPrice() // 10 prices
			.should('have.length',10)
			
			
			
			
			
				})
})