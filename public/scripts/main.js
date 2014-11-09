// CLIENT-SIDE - This is where jQuery goes!

console.log('hello!!!');

$(document).ready(function() {

	console.log('hello!');

    $(".bhoechie-tab-menu>.list-group>a").click(function(e) {
       	console.log('you clicked alright');
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".bhoechie-tab>.bhoechie-tab-content").removeClass("active");
        $(".bhoechie-tab>.bhoechie-tab-content").eq(index).addClass("active");
    });

}); // end jQuery ready