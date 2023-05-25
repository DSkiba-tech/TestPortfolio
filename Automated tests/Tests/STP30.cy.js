import MarketPage from '../POM/MarketPage.js'

describe('STP-30: Browse by listed game in market main page', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		it('passes', () => {
			
				MarketPage.elements.visibleGames().eq(0).invoke('text').then((name) => {
					
					let gameName = name.trim();
					MarketPage.clickVisibleGame(0);
					
					context('Filter contains chosen game name, exists and visible', () => {	
						
						MarketPage.elements.getAllFilters() // 1
						.contains(gameName)
						.should('exist')
						.should('be.visible') 
					
					})
					
					context('Every listed element contains proper game name and visible', () => {
						
					MarketPage.elements.marketListingsRows() // 2
					.find('span.market_listing_game_name')
					.should('contain',gameName)
					.should('be.visible')
					
					})
				})
			
			
		
		})
})