import MarketPage from '../POM/MarketPage.js'

describe('STP-11: Community market displays 10 recently sold items', () => {
	  
	beforeEach(()=>	{ 
	
		cy.visit('https://steamcommunity.com/market/')
		MarketPage.clickRecentlySold() // click recently sold tab
	
	})
		
		it('Recently Sold tab is active', () => {
			
			MarketPage.elements.recentlySold()
			.should('have.class','market_tab_well_tab_active') // tab is active
			
		})
		
		it('10 elements exist and visible', () => {
			
			MarketPage.elements.marketListingsRows() // 10 elements exist
			.should('have.length',10)
			.and('be.visible')
			
		})	
			
		it('10 items photos exist and visible', () => {	
			
			MarketPage.elements.marketListingsImages() // 10 items photos
			.should('have.length',10)
			.and('be.visible')
			
		})	
			
		it('10 names of items exist and visible', () => {	
			
			MarketPage.elements.marketListingsItemsNames() // 10 names of items
			.should('have.length',10)
			.and('be.visible')
			
		})	
			
		it('10 names of games exist and visible', () => {	
			
			MarketPage.elements.marketListingsGamesNames() // 10 names of games
			.should('have.length',10)
			.and('be.visible')
		
		})
		
		it('10 prices exist and visible', () => {	
			
			MarketPage.elements.marketListingsPrice() // 10 prices
			.should('have.length',10)
			.and('be.visible')
			
		})	


})