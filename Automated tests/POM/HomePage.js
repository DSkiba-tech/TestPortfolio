class HomePage {
	
	elements = {
	
		logo: () => cy.get('img[src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"]'),
		install: () => cy.get('div.header_installsteam_btn.header_installsteam_btn_green'),
		login: () => cy.get('a.global_action_link'),
		language: () => cy.get('span#language_pulldown'),
		store: () => cy.get('a.menuitem.supernav[href="https://store.steampowered.com/?snr=1_4_4__global-header"]').contains('STORE'),
		community: () => cy.get('a.menuitem.supernav[href="https://steamcommunity.com/"]').contains('COMMUNITY'),
		about: () => cy.get('a.menuitem[href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]'),
		support: () => cy.get('a.menuitem[href="https://help.steampowered.com/en/"]').contains('SUPPORT'),
		storeHome: () => cy.get('a.submenuitem[href="https://store.steampowered.com/?snr=1_4_4__global-header"]').contains('Home'),
		discoveryQueue: () => cy.get('a.submenuitem[href="https://store.steampowered.com/explore/?snr=1_4_4__global-header"]').contains('Discovery Queue'),
		wishlist: () => cy.get('a.submenuitem[href="https://steamcommunity.com/my/wishlist/"]').eq(1),
		pointsShop: () => cy.get('a.submenuitem[href="https://store.steampowered.com/points/shop/?snr=1_4_4__global-header"]'),
		news: () => cy.get('a.submenuitem[href="https://store.steampowered.com/news/?snr=1_4_4__global-header"]'),
		stats: () => cy.get('a.submenuitem[href="https://store.steampowered.com/stats/?snr=1_4_4__global-header"]'),
		communityHome: () => cy.get('a.submenuitem[href="https://steamcommunity.com/"]').eq(1),
		discussions: () => cy.get('a.submenuitem[href="https://steamcommunity.com/discussions/"]').eq(1),
		workshop: () => cy.get('a.submenuitem[href="https://steamcommunity.com/workshop/"]').eq(1),
		market: () => cy.get('a.submenuitem[href="https://steamcommunity.com/market/"]').eq(1),
		broadcasts: () => cy.get('a.submenuitem[href="https://steamcommunity.com/?subsection=broadcasts"]').eq(1)
		
	
	}
		
		clickLogo() {
			this.elements.logo().click();
		}
		
		clickInstall() {
			this.elements.install().click();
		}
		
		clickLogin() {
			this.elements.login().click();
		}
		
		expandLanguage() {
			this.elements.language().click();
		}
		
		selectLanguage(language) {
			this.expandLanguage();
			cy.get('a.popup_menu_item.tight[href="'+'?l='.concat(language)+'"]').click();
		}

		expandStore() {
			this.elements.store().trigger('mouseover');
		}
		
		expandCommunity() {
			this.elements.community().trigger('mouseover');
		}
		
		clickStore() {
			this.elements.store().click();
		}
		
		clickCommunity() {
			this.elements.community().click();
		}
		
		clickAbout() {
			this.elements.about().click();
		}
		
		clickSupport() {
			this.elements.support().click();
		}
		
		clickStoreHome() {
			this.expandStore();
			this.elements.storeHome().click();
		}
		clickDiscoveryQueue() {
			this.expandStore();
			this.elements.discoveryQueue().click();
		}
		
		clickWishlist() {
			this.expandStore();
			this.elements.wishlist().click();
		}
		
		clickPointsShop() {
			this.expandStore();
			this.elements.pointsShop().click();
		}
		
		clickNews() {
			this.expandStore();
			this.elements.news().click();
		}
		
		clickStats() {
			this.expandStore();
			this.elements.stats().click();
		}
		
		clickCommunityHome() {
			this.expandCommunity();
			this.elements.communityHome().click();
		}
		
		clickDiscussions() {
			this.expandCommunity();
			this.elements.discussions().click();
		}
		
		clickWorkshop() {
			this.expandCommunity();
			this.elements.workshop().click();
		}
		
		clickMarket() {
			this.expandCommunity();
			this.elements.market().click();
		}
		
		clickBroadcasts() {
			this.expandCommunity();
			this.elements.broadcasts().click();
		}
		
		
	
	

	
}

module.exports = new HomePage();