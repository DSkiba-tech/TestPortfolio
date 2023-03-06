describe('STP-34: Remove multiple search filter', () => {
  it('passes', () => {
	  
    cy.visit('https://steamcommunity.com/')
	
	cy.get('a.menuitem.supernav')
	.eq(3)
	.trigger('mouseover')
	
	cy.get('div.supernav_content')
	.should('have.css','opacity','1')
	
	cy.get('div.submenu_community')
	.eq(1)
	.children()
	.eq(3)
	.click()
	
	cy.get('div.market_search_advanced_button').click()
	cy.get('div.newmodal').should('be.visible')
	cy.get('#app_option_0_selected').click()
	cy.get('#app_option_730').click()
	cy.get('div.econ_tag_filter_category').should('be.visible')
	cy.get('[name="category_730_ItemSet[]"]').select('tag_set_community_7')
	cy.get('[name="category_730_Weapon[]"]').select('tag_weapon_mac10')
	
	cy.get('.btn_medium.btn_green_white_innerfade')
	.children()
	.eq(2)
	.click()
	
	cy.get('a.market_searchedForTerm')
	.first().should('contain','Counter-Strike: Global Offensive')
	.next().should('contain','The Chroma 2 Collection')
	.next().should('contain','MAC-10')
	
	cy.get('a')
	.contains('Clear all')
	.click()
	cy.get('a.market_searchedForTerm').should('not.exist')
	
	
  })
})