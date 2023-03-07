class MarketPage {

	elements = {
	
	headerText: () => cy.get('span.market_title_text'),
	headerSubText: () => cy.get('span.market_subtitle_text'),
	headerReference: () => cy.get('a[href="https://steamcommunity.com/market/"]').eq(2),
	myActiveListings: () => cy.get('a#tabMyListings'),
	myMarketHistory: () => cy.get('a#tabMyMarketHistory'),
	sellAnItem: () => cy.get('span.item_market_action_button_contents'),
	login: () => cy.get('a[href="https://steamcommunity.com/login/home/?goto=market%2F"]').eq(3),
	loginMessageBox: () => cy.get('div.market_listing_table_message').eq(0),
	popularItems: () => cy.get('a#tabPopularItems'),
	newlyListed: () => cy.get('a#tabRecentSellListings'),
	recentlySold: () => cy.get('a#tabRecentSoldListings'),
	securityRequirementsBox: () => cy.get('span.escrow_description_link'),
	securityRequirementsButton: () => cy.get('a[href="#"]').contains('Read about security requirements'),
	searchForItemsText: () => cy.get('span.market_search_sidebar_section_tip_small').eq(0),
	searchField: () => cy.get('input#findItemsSearchBox'),
	searchFieldSubmit: () => cy.get('input#findItemsSearchSubmit'),
	showAdvancedOptions: () => cy.get('div#market_search_advanced_show'),
	browseByGame: () => cy.get('span.market_search_sidebar_section_tip_small').eq(1),
	visibleGames: () => cy.get('a.game_button:visible'),
	hiddenGames: () => cy.get('a.game_button:hidden'),
	showMore: () => cy.get('a.btnv6_grey_black.ico_hover.btn_small_thin'),
	marketListingsRows: () => cy.get('a.market_listing_row_link'),
	seeAll: () => cy.get('span#popularItemsMore'),
	moreInfo: () => cy.get('div#moreInfo'),
	notLoggedInWarning: () => cy.get('div#NotLoggedInWarning'),
	notLoggedInText: () => cy.get('div.notLoggedInText'),
	notLoggedInWarningSignIn: () => cy.get('a.btn_green_white_innerfade.btn_medium[href="https://steamcommunity.com/login/home/?goto=market%2F"]'),
	notLoggedInWarningCreateAnAccount: () => cy.get('a.btn_green_white_innerfade.btn_medium[href="https://store.steampowered.com/join"]'),
	notLoggedInWarningCancel: () => cy.get('a.btn_grey_black.btn_medium'),
	newModal: () => cy.get('div.newmodal:visible'),
	newModalLearnAbout: () => cy.get('div.btn_green_steamui.btn_medium:visible'),
	newModalClose: () => cy.get('div.btn_grey_steamui.btn_medium:visible'),
	newModalSteamGuard: () => cy.get('a[href="https://store.steampowered.com/mobile/"]'),
	newModalReadAboutSecurity: () => cy.get('a[href="http://store.steampowered.com/news/20631/"]')
	
	
	}
	
	clickCommunityMarket() {
		this.elements.headerText().click();
	}
	
	clickMyActiveListings() {
		this.elements.myActiveListings().click();
	}
	
	clickMyMarketHistory() {
		this.elements.myMarketHistory().click();
	}
	
	clickSellAnItem() {
		this.elements.sellAnItem().click();
	}
	
	clickNotLoggedInWarningSignIn() {
		this.elements.notLoggedInWarningSignIn().click();
	}
	
	clickNotLoggedInWarningCreateAnAccount() {
		this.elements.notLoggedInWarningCreateAnAccount().click();
	}
	
	clickNotLoggedInWarningCancel() {
		this.elements.notLoggedInWarningCancel().click();
	}
	
	clickLogin() {
		this.elements.login().click();
	}
	
	clickPopularItems() {
		this.elements.popularItems().click();
	}
	
	clickNewlyListed() {
		this.elements.newlyListed().click();
	}
	
	clickRecentlySold() {
		this.elements.recentlySold().click();
	}
	
	clickSecurityRequirementsButton() {
		this.elements.securityRequirementsButton().click();
	}
	
	clickNewModalLearnAbout() {
		this.elements.newModalLearnAbout().click();
	}
	
	clickNewModalClose() {
		this.elements.newModalClose().click();
	}	
	
	clickNewModalSteamGuard() {
		this.elements.newModalSteamGuard().click();
	}
	
	clickNewModalReadAboutSecurity() {
		this.elements.newModalReadAboutSecurity().click();
	}
	
	

	

}

module.exports = new MarketPage();