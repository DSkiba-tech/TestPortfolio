import MarketPage from '../POM/MarketPage.js'

describe('STP-29: Search and browse element is displayed properly', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		
		it('Button "read about security requirements is visible"', () => {

			
			MarketPage.elements.securityRequirementsButton()
			.should('be.visible')
			
		})
		
		it('Writing contains "search for items" and is visible', () => {
			
			MarketPage.elements.searchForItemsText()
			.should('contain','Search for Items')
			.should('be.visible')
			
		})
			
		it('Search browser has proper placeholder and is visible', () => {	
			
			MarketPage.elements.searchField()
			.should('have.attr','placeholder','Search')
			.should('be.visible')
			
		})
		
		it('Show advanced options button is visible', () => {
		
			MarketPage.elements.showAdvancedOptions()
			.should('contain','Show advanced options')
			.should('be.visible') // 5
		
		})
		
		it('Writing "Browse by Game" is visible', () => {
			
			MarketPage.elements.browseByGame()
			.should('contain','Browse by Game')
			.should('be.visible') // 6
		
		})
		
		it('10 games are listed and visible', () => {	
			
			MarketPage.elements.visibleGames()
			.should('be.visible')
			.should('have.attr','href')
		
		})
		
		it('Button "Show more" is visible and contains arrow icon', () => {	
			
			MarketPage.elements.showMore()
			.should('contain','Show more')
			.should('be.visible')
			.find('i')
			.should('exist')
			.should('have.class','ico16 arrow_down')
			.should('be.visible')

		})
			
			
	})