import MarketPage from '../POM/MarketPage.js'

describe('STP-10: Community market displays 10 newly listed items', () => {
	  
	beforeEach(()=>	{
		
		cy.visit('https://steamcommunity.com/market/') 
		MarketPage.clickNewlyListed() // click newly listed tab
		
	})
		
		it('Newly listed tab is active', () => {

			MarketPage.elements.newlyListed()
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
		
		it('10 items names exist and visible', () => {
		
			MarketPage.elements.marketListingsItemsNames()
			.should('have.length',10)
			.and('be.visible')
			
		})	
		
		it('10 games names exist and visible', () => {
		
			MarketPage.elements.marketListingsGamesNames()
			.should('have.length',10)
			.and('be.visible')
			
		})	
		
		it('10 players avatars exist and visible', () => {
		
			MarketPage.elements.marketListingsPlayerAvatar()
			.should('have.length',10)
			.and('be.visible')
			
		})	
		
		it('10 prices exist and visible', () => {
		
			MarketPage.elements.marketListingsPrice()
			.should('have.length',10)
			.and('be.visible')
			
		})	

})