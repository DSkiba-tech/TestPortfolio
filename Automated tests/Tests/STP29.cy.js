describe('STP-29: Search and browse element is displayed properly', () => {
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
	
	cy.get('a')
	.contains('Read about security requirements')
	.should('exist') 
	
	cy.get('span.escrow_description_link')
	.should('contain','for using the Community Market')
	.and('be.visible')
	
	cy.get('span.market_search_sidebar_section_tip_small')
	.eq(0)
	.should('contain','Search for Items')
	.and('be.visible')
	
	cy.get('input#findItemsSearchBox')
	.should('have.attr','placeholder','Search')
	.and('be.visible')
	
	cy.get('div.market_search_advanced_button')
	.should('be.visible')
	.and('contain','Show advanced options...')
	
	cy.get('span.market_search_sidebar_section_tip_small')
	.eq(1)
	.should('contain','Browse by Game')
	
	cy.get('a.game_button:visible')
	.should('have.length',10)
	
	cy.get('a.btnv6_grey_black.ico_hover.btn_small_thin')
	.should('be.visible')
	.and('contain','Show more')
  })
})