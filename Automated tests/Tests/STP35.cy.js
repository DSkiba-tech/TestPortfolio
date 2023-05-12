import MarketPage from '../POM/MarketPage.js'

describe('STP-35: Reset selected filters in advanced options', () => {
  it('passes', () => {
	  
    cy.visit('https://steamcommunity.com/market/') // Open page
	
	MarketPage.clickShowAdvancedOptions(); // Click on show advanced options (open modal)
	
	MarketPage.elements.newModal() // Check if modal is opened
	.should('be.visible')
	
	MarketPage.expandShowAdvancedOptionsList(); // Expand games list
	
	MarketPage.elements.showAdvancedOptionsExpandedList() // Check if games list is expanded
	.should('be.visible')
	.and('have.css','display','block')
	
	MarketPage.elements.showAdvancedOptionsListOptions() // Select game Counter-Strike: Global Offensive
	.filter('[data-appid="730"]')
	.scrollIntoView()
	.should('exist')
	.should('be.visible')
	.click()
	
	MarketPage.elements.showAdvancedOptionsFilterList() // Select Exterior: Field-tested
	.find('input#tag_730_Exterior_WearCategory2')
	.check()
	.should('be.visible')
	.should('be.checked')
	
	MarketPage.elements.showAdvancedOptionsFilterList() // Select Weapon: AK-47
	.find('select[name="category_730_Weapon[]"]')
	.select('tag_weapon_ak47')
	.should('be.visible')
	.should('have.value','tag_weapon_ak47')
	
	MarketPage.clickShowAdvancedOptionsReset(); // Reset to default button
	
	MarketPage.elements.showAdvancedOptionsFilterList() // Check if exterior is not checked anymore
	.find('input#tag_730_Exterior_WearCategory2')
	.should('not.be.checked')
	
	MarketPage.elements.showAdvancedOptionsFilterList() // Check if weapon is selected as default
	.find('select[name="category_730_Weapon[]"]')
	.should('have.value','any')
	
  })
})