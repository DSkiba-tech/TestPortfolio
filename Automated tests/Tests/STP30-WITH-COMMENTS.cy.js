describe('STP-30 : Browse by listed game in market main page', () => {
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

// 
	let x = Math.floor(Math.random()*10) // Randomizing one number of 10 listed games
	cy.get('a.game_button:visible') // Get game buttons
	.eq(x) // Randomized position
	.children() 
	.children()
	.eq(1) 
	.invoke('text') // Get text placed on
	.then(($myell) => {
			cy.get('a.game_button:visible').eq(x).click() // Get visible game button and click on
			cy.get('a.market_searchedForTerm').should('contain.text',$myell.replace(/\t|\n/, '')) // ASSERTION: 4. Displayed is writing 'Showing results for: <game name>'
		if(!($myell.includes('Steam'))) // This condition is must have for this moment, because Steam uses plenty of item origin as 'card', 'steam deck', 'backgrounds', 'icons' etc.
		{
			cy.get('span.market_listing_game_name').each(($match) => { // Yielding through all listed games (10 displayed positions)
			cy.wrap($match).should('contain',($myell.replace(/\t|\n/,'').trim())) // ASSERTION: 4. Every listed element originates from selected game (contains game name)
		})
		}
	})
})
})