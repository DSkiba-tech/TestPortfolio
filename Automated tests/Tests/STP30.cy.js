describe('STP-30 : Browse by listed game in market main page', () => {
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
	
	let x = Math.floor(Math.random()*10)
	cy.get('a.game_button:visible')
	.eq(x)
	.children() 
	.children()
	.eq(1) 
	.invoke('text')
	.then(($myell) => {
			cy.get('a.game_button:visible').eq(x).click()
			cy.get('a.market_searchedForTerm').should('contain.text',$myell.replace(/\t|\n/, ''))
		if(!($myell.includes('Steam')))
		{
			cy.get('span.market_listing_game_name').each(($match) => { 
			cy.wrap($match).should('contain',($myell.replace(/\t|\n/,'').trim()))
		})
		}
	})
})
})