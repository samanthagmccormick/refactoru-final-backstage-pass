/* Table Filter */




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

/* TABLE FILTER */

    'use strict';

    var LightTableFilter = (function(Arr) {

        var _input;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _filter(row) {
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });





}); // end jQuery ready