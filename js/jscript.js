var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
showLeft = document.getElementById( 'showLeft' ),
showLeftPush = document.getElementById( 'showLeftPush' ),
body = document.body;

showLeft.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	disableOther( 'showLeft' );
};
showLeftPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	disableOther( 'showLeftPush' );
};

function disableOther( button ) {
	if( button !== 'showLeft' ) {
		classie.toggle( showLeft, 'disabled' );
	}
	if( button !== 'showLeftPush' ) {
		classie.toggle( showLeftPush, 'disabled' );
	}
}

var menuLeft2 = document.getElementById( 'cbp-spmenu-s2' ),
showLeft2 = document.getElementById( 'showLeft2' ),
showLeftPush2 = document.getElementById( 'showLeftPush2' );

showLeft2.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft2, 'cbp-spmenu-open' );
	disableOther( 'showLeft2' );
};
showLeftPush2.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft2, 'cbp-spmenu-open' );
	disableOther( 'showLeftPush2' );
};

function disableOther2( button ) {
	if( button !== 'showLeft2' ) {
		classie.toggle( showLeft2, 'disabled' );
	}
	if( button !== 'showLeftPush2' ) {
		classie.toggle( showLeftPush2, 'disabled' );
	}
}
