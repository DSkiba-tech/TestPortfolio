import MarketPage from '../POM/MarketPage.js'

describe('STP-34 : Remove multiple search filter', () => {
	  
	beforeEach(()=>	{ cy.visit('https://steamcommunity.com/market/') })
		
		it('passes', () => {
		
			MarketPage.clickShowAdvancedOptions()
			MarketPage.elements.newModal().should('be.visible')
			MarketPage.expandShowAdvancedOptionsList()
			MarketPage.elements.showAdvancedOptionsListOptions()
			.filter('[data-appid="730"]')
			.scrollIntoView()
			.should('exist')
			.should('be.visible')
			.click()
			
			MarketPage.elements.showAdvancedOptionsFilterList()
			.find('input#tag_730_Exterior_WearCategory2')
			.check()
			.should('be.visible')
			.should('be.checked')
			
			
			MarketPage.elements.showAdvancedOptionsFilterList()
			.find('select[name="category_730_Weapon[]"]')
			.select('tag_weapon_ak47')
			.should('be.visible')
			.should('have.value','tag_weapon_ak47')
			
			MarketPage.clickShowAdvancedOptionsSearchButton()
			MarketPage.elements.marketListingsRows()
			.should('contain','Counter-Strike: Global Offensive')
			.should('contain','AK-47')
			.should('contain','Field-Tested')
			
			MarketPage.elements.clearAll()
			.should('exist')
			.should('be.visible')
			
			MarketPage.clickClearAll()
			MarketPage.elements.getAllFilters()
			.should('not.exist')
		
		})
})