// the standard referance from Jasmine
    // describe("A suite is just a function", function() {
    //   var a;

    //   it("and so is a spec", function() {
    //     a = true;

    //     expect(a).toBe(true);
    //   });
    // });


/* Placing all tests within the $() function,
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    //The RSS feeds (Test suite)
    describe('RSS Feeds', function() {
        // Make sure that allFeeds is defined & is not empty
        it('FEEDs', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        }); //end of RSS Feeds

        // Make sure that each feed in the allFeeds object has a URL & URL is not empty.
        it('URLs', function(){
            for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).not.toBe(0);
            }
        }); //end of URLs
        // Make sure that each feed in the allFeeds object has a name & name is not empty.
        it('NAMES', function(){
            for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).not.toBe(0);
            }
        }); //end of NAMES

    }); //end of RSS feeds (Test suite)

    //The menu (Test suite)
    describe('The menu', function() {
        // Make sure that the menu element is hidden by 
        // Looking for the class 'menu-hidden'
        it('MENU', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        }); //end of MENU

    // Make sure that the menu (ICON) display when clicked and 
    // Does hide when clicked again
        it('ICON', function () {
            // Call the 'menu-icon-link' class
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        }); //end of ICON

    }); //end of The menu (Test suite)

    //The Initial Entries (Test suite)
    describe('Initial Entries', function() {
        // Make a fake asynchronous request with the done function
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            }); //end of loadFeed
        }); //end of beforeEach

        // Make sure that loadFeed() has at least [1] '.entry' within the '.feed' container
        it('Single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0); //Jasmine is awesome :)
        }); //end of Single entry

    }); //end of The Initial Entries (Test suite)

    //The New Feed Selection (Test suite)
    describe('New Feed Selection', function() {
        // Make sure that the new feed is loaded via loadFeed()
        beforeEach(function (done) {
            // Feeds are empty
            $('.feed').empty();
            // Load the first feed
            loadFeed(0, function () {
                //Search for the first URL
                before = $('.feed').find(allFeeds.url);
                done();
            }); //end of loadFeed
            loadFeed(1, function () {
                //Search for the second URL
                after = $('.feed').find(allFeeds.url);
                done();
            }); //end of loadFeed
            
        }); //end of beforeEach

        //Make sure that the content actually changes
        it('CHANGE', function(){
            expect(before).not.toBe(after);
        }); //end of CHANGE

    }); //end of The New Feed Selection (Test suite)

}()); // end of test function :)
