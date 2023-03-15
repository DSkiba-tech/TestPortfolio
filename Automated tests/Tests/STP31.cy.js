import MarketPage from '../POM/MarketPage.js'

describe('STP-31: Remove multiple search filter', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		it('passes', () => {
			

			
			MarketPage.elements.visibleGames().eq(0).invoke('text').then((name) => {
					
					const gameName = name.trim();
					
					MarketPage.clickVisibleGame(0);
					
					MarketPage.elements.getAllFilters() // 1
					.contains(gameName)
					.should('exist')
					.should('be.visible') 
					
					
					MarketPage.elements.marketListingsRows() // 2
					.find('span.market_listing_game_name')
					.should('contain',gameName)
					.should('be.visible')
					
					MarketPage.elements.getAllFilters()
					.find('span.removeIcon')
					.click()
					let counter = 0;
					MarketPage.elements.marketListingsRows().each(($el) => {
						
						$el.find('span.market_listing_game_name').text().includes(gameName) ? counter++ : ''; })
							.then(() => {
								expect(counter).to.be.lessThan(10)
							});
			})
	})
})