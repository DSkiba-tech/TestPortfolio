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
	marketListingsRows: () => cy.get('div.market_listing_row:visible'),
	marketListingsImages: () => cy.get('img.market_listing_item_img:visible'),
	marketListingsItemsNames: () => cy.get('span.market_listing_item_name:visible'),
	marketListingsGamesNames: () => cy.get('span.market_listing_game_name:visible'),
	marketListingsQuantity: () => cy.get('span.market_listing_num_listings_qty:visible'),
	marketListingsPrice: () => cy.get('div.market_listing_their_price:visible'),
	newlyListed: () => cy.get('a#tabRecentSellListings'),
	marketListingsPlayerAvatar: () => cy.get('span.playerAvatar:visible'),
	recentlySold: () => cy.get('a#tabRecentSoldListings'),
	securityRequirementsBox: () => cy.get('span.escrow_description_link'),
	securityRequirementsButton: () => cy.get('a[href="#"]').contains('Read about security requirements'),
	searchForItemsText: () => cy.get('span.market_search_sidebar_section_tip_small').eq(0),
	searchField: () => cy.get('input#findItemsSearchBox'),
	searchFieldSubmit: () => cy.get('input#findItemsSearchSubmit'),
	showAdvancedOptions: () => cy.get('div#market_search_advanced_show'),
	showAdvancedOptionsSearchInput: () => cy.get('input#advancedSearchBox'),
	showAdvancedOptionsSearchButton: () => cy.get('input#advancedSearchSubmit'),
	showAdvancedOptionsIncludeDescription: () => cy.get('input#market_advanced_searchdescriptions_checkbox'),
	showAdvancedOptionsReset: () => cy.get('a[href="javascript:ResetSearchFilters();"]'),
	showAdvancedOptionsSearchButtonGreen: () => cy.get('div.btn_medium.btn_green_white_innerfade'),
	showAdvancedOptionsList: () => cy.get('div#market_advancedsearch_appselect_activeapp'),
	showAdvancedOptionsListOptions: () => cy.get('div.popup_item.popup_menu_item.market_advancedsearch_appname'),
	showAdvancedOptionsFilterList: () => cy.get('div.econ_tag_filter_category'),
	showAdvancedOptionsExpandedList: () => cy.get('div#market_advancedsearch_appselect_options'),
	browseByGame: () => cy.get('span.market_search_sidebar_section_tip_small').eq(1),
	visibleGames: () => cy.get('a.game_button:visible'),
	hiddenGames: () => cy.get('a.game_button:hidden'),
	showMore: () => cy.get('a.btnv6_grey_black.ico_hover.btn_small_thin'),
	seeAll: () => cy.get('a.btnv6_blue_hoverfade.btn_medium'),
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
	newModalReadAboutSecurity: () => cy.get('a[href="http://store.steampowered.com/news/20631/"]'),
	showingResultsStart: () => cy.get('span#searchResults_start'),
	showingResultsEnd: () => cy.get('span#searchResults_end'),
	showingResultsTotal: () => cy.get('span#searchResults_total'),
	previousPageButton: () => cy.get('span#searchResults_btn_prev'),
	nextPageButton: () => cy.get('span#searchResults_btn_next'),
	pageList: () => cy.get('span.market_paging_pagelink'),
	pageListActive: () => cy.get('span.market_paging_pagelink.active'),
	getAllFilters: () => cy.get('a.market_searchedForTerm'),
	clearAll: () => cy.get('a[href="https://steamcommunity.com/market/search?q="]').contains('Clear all'),
	
	}
	clickPreviousPageButton() {
		this.elements.previousPageButton().click();
	}
	
	clickNextPageButton() {
		this.elements.nextPageButton().click();
	}
	
	clickClearAll() {
		this.elements.clearAll().click();
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
	
	typeSearchField(searchText) {
		this.elements.searchField().type(searchText);
	}
	
	clickSearchFieldSubmit() {
		this.elements.searchFieldSubmit().click();
	}
	
	clickShowAdvancedOptions() {
		this.elements.showAdvancedOptions().click();
	}
	
	typeShowAdvancedOptionsSearchInput(searchText) {
		this.elements.showAdvancedOptionsSearchInput().type(searchText);
	}
	
	clickShowAdvancedOptionsSearchButton() {
		this.elements.showAdvancedOptionsSearchButton().click();
	}
	
	checkShowAdvancedOptionsIncludeDescription(check) {
		check ? this.elements.showAdvancedOptionsIncludeDescription().click() : undefined 
	}
	
	clickShowAdvancedOptions() {
		this.elements.showAdvancedOptionsReset().click();
	}
	
	clickShowAdvancedOptionsSearchButtonGreen() {
		this.elements.showAdvancedOptionsSearchButtonGreen().click();
	}
	
	expandShowAdvancedOptionsList() {
		this.elements.showAdvancedOptionsList().click();
	}
	
	getPageByNumber(num) {
		this.elements.pageList().contains(num).click();
	}
	
	clickVisibleGame(num) {
		this.elements.visibleGames().eq(num).click();
	}
	
	clickSeeAll() {
		this.elements.seeAll().click()
	}
	

	

}

module.exports = new MarketPage();