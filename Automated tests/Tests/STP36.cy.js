import MarketPage from '../POM/MarketPage.js'

describe('STP-36: Search by item description', () => {

  it('passes', () => {
    
	cy.visit('https://steamcommunity.com/market/')
	
	context('Click "Show advanced Options" and check if modal exist and is visible', () => {
		
	MarketPage.clickShowAdvancedOptions()
	
	MarketPage.elements.newModal()
	.should('exist')
	.and('be.visible')
	
	})
	
	context('Select include description option and check if has been checked', () => {
		
	MarketPage.checkShowAdvancedOptionsIncludeDescription(true)
	MarketPage.elements.showAdvancedOptionsIncludeDescription()
	.should('be.checked')
	
	})
	
	context('Type phrase looking for in description and check if value is inserted', () => {
		
	MarketPage.typeShowAdvancedOptionsSearchInput('Base Grade Container')
	MarketPage.elements.showAdvancedOptionsSearchInput()
	.should('have.value','Base Grade Container')
	
	})
	
	context('Click "Search" button', () => {
		
	MarketPage.clickShowAdvancedOptionsSearchButton()
	
	})

	context('Check first and last result, if match inserted description criteria', () => {
		
	MarketPage.elements.marketListingsRows().eq(0).click()
	cy.get('div.item_desc_description')
	.should('contain','Base Grade Container')
	cy.go('back')
	
	MarketPage.elements.marketListingsRows().eq(9).click()
	cy.get('div.item_desc_description')
	.should('contain','Base Grade Container')
	
	})
	
	 
  })
  
})