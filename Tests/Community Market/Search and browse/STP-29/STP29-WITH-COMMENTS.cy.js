describe('STP-34: Remove multiple search filter', () => {
  it('passes', () => {	  
  
// 1. Open home page  

    cy.visit('https://steamcommunity.com/')
	
// 2. Navigate to "Community" in header menu

	cy.get('a.menuitem.supernav') // Get element with specified tag and classes
	.eq(3) // Get element indexed as 3 (market)
	.trigger('mouseover') // Hover over element
	
	cy.get('div.supernav_content') // Get list by tag and class
	.should('have.css','opacity','1') // ASSERTION: 2. List expands
	
// 3. Select 'Market' option	
	
	cy.get('div.submenu_community') // Get element with specified tag and class
	.eq(1) // Get element indexed as 1 (community)
	.children() // Get children 
	.eq(3) // Get element indexed as 3 (market)
	.click() // Click on selected child (redirect to market page)
	
	cy.get('a') // Get <a> element
	.contains('Read about security requirements') // Which contains string 
	.should('exist') // ASSERTION: 3. Displayed are: 1. 'Read about security requirements (button)'
	
	cy.get('span.escrow_description_link') // Get <span> element with class
	.should('contain','for using the Community Market') // ASSERTION: 3. Displayed are: 'for using the community market' string
	.and('be.visible') // <span> element is visible
	
	cy.get('span.market_search_sidebar_section_tip_small') // Get <span> element with class
	.eq(0) // First one
	.should('contain','Search for Items') // ASSERTION: 3. 2. Search module: 'Search for Items' string
	.and('be.visible') // <span> element is visible
	
	cy.get('input#findItemsSearchBox') // Get <input> element within id
	.should('have.attr','placeholder','Search') // ASSERTION: 3. 2. Search module: 'with search browser' (having Search placeholder)
	.and('be.visible') // <input> element is visible
	
	cy.get('div.market_search_advanced_button') // Get div element with class
	.should('be.visible') // ASSERTION: 3. 2. Show advanced options button should be visible
	.and('contain','Show advanced options...') // And contain 'Show advanced options...' string
	
	cy.get('span.market_search_sidebar_section_tip_small') // Get span element with class
	.eq(1) // Second element 
	.should('contain','Browse by Game') // which contain 'Browse by Game' string ASSERTION: 3. 2. 'Browse by Game'  button
	
	cy.get('a.game_button:visible') // Get all <a> elements with class game_button that are visible
	.should('have.length',10) // ASSERTION: 3. 2. 10 games listed
	
	cy.get('a.btnv6_grey_black.ico_hover.btn_small_thin') // Get <a> element with classes
	.should('be.visible') // ASSERTION: 3. 2. 'Show more' button, button is visible
	.and('contain','Show more') // And contain 'Show more' string
	
	
  })
})