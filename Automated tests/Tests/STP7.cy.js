import MarketPage from '../POM/MarketPage.js'

describe('STP-7: Community market displays 10 most popular items', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		it('Popular Items tab is active', () => {
			
			MarketPage.elements.popularItems()
			.should('have.class','market_tab_well_tab_active')
			
		})
			
		it('10 elements exist and visible', () => {
			
			MarketPage.elements.marketListingsRows()
			.should('have.length',10)
			.and('be.visible')
			
		})
		
		it('10 items photos exist and visible', () => {
			
			MarketPage.elements.marketListingsImages()
			.should('have.length',10)
			.and('be.visible')
			
		})
			
		it('10 names of items exist and visible', () => {
			
			MarketPage.elements.marketListingsItemsNames()
			.should('have.length',10)
			.and('be.visible')
			
		})
			
		it('10 names of games exist and visible', () => {	
		
			MarketPage.elements.marketListingsGamesNames()
			.should('have.length',10)
			.and('be.visible')
			
		})
			
		it('10 quantities exist and visible', () => {	
			
			MarketPage.elements.marketListingsQuantity()
			.should('have.length',10)
			.and('be.visible')
			
		})
		
		it('10 prices exist and visible', () => {
			
			MarketPage.elements.marketListingsPrice()
			.should('have.length',11) // checking for 11, because header has same class, so includes in
			.and('be.visible')
			
		})
})