describe('STP-34: Remove multiple search filter', () => {
  it('passes', () => {
	  
// 1. Open home page  

    cy.visit('https://steamcommunity.com/')
	
// 2. Navigate to "Community" in header menu

	cy.get('a.menuitem.supernav') // Get element with specified tag and classes
	.eq(3) // Get element indexed as 3 (market)
	.trigger('mouseover') // Hover on element
	
	cy.get('div.supernav_content') // Get list by tag and class
	.should('have.css','opacity','1') // ASSERTION: 2. List expands
	
// 3. Select 'Market' option	
	
	cy.get('div.submenu_community') // Get element with specified tag and class
	.eq(1) // Get element indexed as 1 (community)
	.children() // Get children 
	.eq(3) // Get element indexed as 3 (market)
	.click() // Click on selected child (redirect to market page)
	
// 4. Click on 'Show advanced options...'

	cy.get('div.market_search_advanced_button').click() // Click 'Show advanced options'
	cy.get('div.newmodal') 
	.should('be.visible') // ASSERTION: 4. Search community market window is displayed

// 5. Click on list 'All Games'

	cy.get('#app_option_0_selected').click() // Expand games list
	
// 6. Select any game
	
	cy.get('#app_option_730').click() // Select CS:GO
	
	cy.get('div.econ_tag_filter_category').should('be.visible')
	
// 7. Select some filters (minimum 2)
	
	cy.get('[name="category_730_ItemSet[]"]').select('tag_set_community_7') // Select collection: Chroma 2 collection
	cy.get('[name="category_730_Weapon[]"]').select('tag_weapon_mac10') // Select weapon type: Mac10
	
// 8. Click 'Search' Button

	cy.get('.btn_medium.btn_green_white_innerfade') // Get button classes
	.children() // Get children element
	.eq(2) // Get element indexed as 2 (Search)
	.click() // Click selected element
	
	cy.get('a.market_searchedForTerm') // Get filters element
	.first().should('contain','Counter-Strike: Global Offensive') // First filter element (chosen game)
	.next().should('contain','The Chroma 2 Collection') // Next filter element (collection)
	.next().should('contain','MAC-10') // Next filter element (weapon type)
	
// 9. Click 'Clear all' option after last filter
	
	cy.get('a') // Get all 'a' elements
	.contains('Clear all') // Get element which contains 'Clear all' string
	.click() // Click selected element
	
	cy.get('a.market_searchedForTerm').should('not.exist') // ASSERTION: Checking if filter container exists (not exists if there are no filters)
	
	
  })
})