import MarketPage from '../POM/MarketPage.js'

describe('STP-29: Search and browse element is displayed properly', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		
		it('passes', () => {
	
			// 1. Button 'read about security requirements'
			// 2. writing 'for using the Community Market'
			// 3. writing 'Search for items'
			// 4. Search browser
			// 5. 'Show advanced options' button
			// 6. writing 'Browse by Game'
			// 7. 10 listed games
			// 8. 'Show more' button
			
			MarketPage.elements.securityRequirementsButton()
			.should('be.visible') // 1,2
			
			MarketPage.elements.searchForItemsText()
			.should('contain','Search for Items')
			.should('be.visible') // 3
			
			MarketPage.elements.searchField()
			.should('have.attr','placeholder','Search')
			.should('be.visible')	// 4
			
			MarketPage.elements.showAdvancedOptions()
			.should('contain','Show advanced options')
			.should('be.visible') // 5
			
			MarketPage.elements.browseByGame()
			.should('contain','Browse by Game')
			.should('be.visible') // 6
			
			MarketPage.elements.visibleGames()
			.should('be.visible')
			.should('have.attr','href') // 7
			
			MarketPage.elements.showMore()
			.should('contain','Show more')
			.should('be.visible')
			.find('i')
			.should('exist')
			.should('have.class','ico16 arrow_down')
			.should('be.visible') // 8
			
			
			
	})
})