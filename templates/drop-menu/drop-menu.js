function cimmaDropMenu(el) {
	var ua = navigator.userAgent;
	var isTouch = hasTouchEvents() || ua.match(/(iPhone|iPod|iPad)/) || ua.match(/BlackBerry/) || ua.match(/Android/);
	
	var childMenus = el.getElementsByTagName('section');
	
	if (isTouch) {
		el.className = el.className.length ? el.className + ' touch' : 'touch';
	}
	
	if (hasTouchEvents()) {
		el.addEventListener('touchstart', handleEvent, false);
	} else {
		el.addEventListener('click', handleEvent, false);
		el.addEventListener('mouseover', openFirstMenu, false);
		el.addEventListener('mouseout', closeFirstMenu, false);
	}

	function handleEvent(e) {
		switch(e.type) {
			case 'touchstart': onTouchStart(e); break;
			case 'touchmove': onTouchMove(e); break;
			case 'touchend': onTouchEnd(e); break;
			case 'click': toggleMenu(e); break;
			case 'mouseover': openFirstMenu(e); break;
			case 'mouseout': closeFirstMenu(e); break;
		}
	}

	function onTouchStart(e) {
		if (!e.target.href) {
			e.preventDefault();
		}
		el.addEventListener('touchmove', handleEvent, false);
		el.addEventListener('touchend', handleEvent, false);
	}

	function onTouchMove(e) {
		// do nothing?
	}

	function onTouchEnd(e) {
		el.removeEventListener('touchmove', handleEvent, false);
		el.removeEventListener('touchend', handleEvent, false);

		toggleMenu(e);
	}
	
	function toggleMenu(e) {
		if (e.target instanceof HTMLHeadingElement) {
			
			var parent = e.target.parentNode;
			if (parent.className.match('opened')) {
				setElementClosed(parent);
				closeMenu(false);
			} else {
				closeMenu(false);
				setElementOpened(parent);
			}
		} else if (e.target == el) {
			if (e.target.className.match('opened')) {
				closeMenu(true);
			} else {
				openMainMenu();
			}
		}
	}
	
	function openMainMenu() {
		setElementOpened(el);
		openFirstMenu(true);
	}
	
	function openFirstMenu(e) { // ensures our first element is highlighted
		if (e.target == el || e === true) {
			var m = childMenus[0];
			setElementOpened(m);
		}
	}
	
	function closeFirstMenu(e) {
		if (e.target != el && e.target != childMenus[0].firstChild) {
			closeMenu();
		} else {
			//console.log(e.target.constructor);
		}
	}
	
	function closeMenu(all) {
		// close all of the submenus
		for (var i = 0, len = childMenus.length; i < len; i++) {
			setElementClosed(childMenus[i]);
		}
		
		if (all) {
			setElementClosed(el);
		}
	}
	
	function setElementOpened(e) {
		setElementState(e, 'closed', 'opened');
	}
	
	function setElementClosed(e) {
		setElementState(e, 'opened', 'closed');
	}
	
	function setElementState(e, oldStatus, newStatus) {
		if (e.className.match(oldStatus)) {
			e.className = e.className.replace(oldStatus, newStatus);
		} else if (!e.className.match(newStatus)) {
			e.className = e.className.length ? e.className + ' ' + newStatus : newStatus;
		}
	}
	
	function hasTouchEvents() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	}
};
