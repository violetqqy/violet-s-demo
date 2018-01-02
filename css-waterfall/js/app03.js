/**
 * Created by qqy on 15/9/16.
 */


$(document).ready(function() {
  $('#list').imagesLoaded(function() {
    $('#list li').wookmark({
      container: $('#list'),
      align: 'center',
      autoResize: true,
      offset: 10,
      verticalOffset: 15,
      fillEmptySpace: true,
      itemWidth: 335
    });
  });
});

//$(window).load(function () {
//    $('#list').imagesLoaded(function () {
//        $('#list li').wookmark({
//            container: $('#list'),
//            align: 'center',
//            autoResize: true,
//            offset: 10,
//            verticalOffset: 15,
//            fillEmptySpace: true,
//            itemWidth: 335
//        });
//    });
//});


//$(document).ready(function () {
//    var $list = $('#list'),
//        $handler = $('li', $list),
//        $main = $('#main'),
//        $window = $(window),
//        $document = $(document),
//        options = {
//            align: 'center',
//            autoResize: true, // This will auto-update the layout when the browser window is resized.
//            container: $main, // Optional, used for some extra CSS styling
//            offset: 10, // Optional, the distance between grid items
//            verticalOffset: 25,
//            itemWidth: 335 // Optional, the width of a grid item
//        };

// Init lightbox
//$('#list').magnificPopup({
//    delegate: 'li:not(.inactive) a',
//    type: 'image',
//    gallery: {
//        enabled: true
//    }
//});


///**
// * Reinitializes the wookmark handler after all images have loaded
// */
//    function applyLayout(){
//        $list.imagesLoaded(function(){
//            // Destroy the old handler
//            if ($handler.wookmarkInstance) {
//                $handler.wookmarkInstance.clear();
//            }
//
//            // Create a new layout handler.
//            $handler = $('li', $list);
//            $handler.wookmark(options);
//        });
//    }
//
//    /**
//     * When scrolled all the way to the bottom, add more list
//     */
//    function onScroll(){
//        // Check if we're within 100 pixels of the bottom edge of the broser window.
//        var winHeight = window.innerHeight ? window.innerHeight : $window.height(), // iphone fix
//            closeToBottom = ($window.scrollTop() + winHeight > $document.height() - 100);
//
//        if (closeToBottom) {
//            // Get the first then items from the grid, clone them, and add them to the bottom of the grid
//            var $items = $('li', $list),
//                $firstTen = $items.slice(0, 10);
//            $list.append($firstTen.clone());
//
//            applyLayout();
//        }
//    };
//
//    // Call the layout function for the first time
//    applyLayout();
//
//    // Capture scroll event.
//    $window.bind('scroll.wookmark', onScroll);
//});


/*
 * 从服务器上加载图片
 * */
//(function ($) {
//    var $tiles = $('#tiles'),
//        $handler = $('li', $tiles),
//        page = 1,
//        isLoading = false,
//        apiURL = 'server.php',
//        lastRequestTimestamp = 0,
//        fadeInDelay = 2000,
//        $window = $(window),
//        $document = $(document);
//
//    // Prepare layout options.
//    var options = {
//        autoResize: true, // This will auto-update the layout when the browser window is resized.
//        container: $('#tiles'), // Optional, used for some extra CSS styling
//        offset: 2, // Optional, the distance between grid items
//        itemWidth: 210 // Optional, the width of a grid item
//    };
//
//    /**
//     * When scrolled all the way to the bottom, add more tiles.
//     */
//    function onScroll(event){
//        // Only check when we're not still waiting for data.
//        if (!isLoading) {
//            // Check if we're within 100 pixels of the bottom edge of the broser window.
//            var closeToBottom = ($window.scrollTop() + $window.height() > $document.height() - 100);
//            if (closeToBottom) {
//                // Only allow requests every second
//                var currentTime = new Date().getTime();
//                if (lastRequestTimestamp < currentTime - 1000) {
//                    lastRequestTimestamp = currentTime;
//                    loadData();
//                }
//            }
//        }
//    };
//
//    /**
//     * Refreshes the layout.
//     */
//    function applyLayout($newImages){
//        options.container.imagesLoaded(function(){
//            // Destroy the old handler
//            if ($handler.wookmarkInstance) {
//                $handler.wookmarkInstance.clear();
//            }
//
//            // Create a new layout handler.
//            $tiles.append($newImages);
//            $handler = $('li', $tiles);
//            $handler.wookmark(options);
//
//            // Set opacity for each new image at a random time
//            $newImages.each(function(){
//                var $self = $(this);
//                window.setTimeout(function(){
//                    $self.css('opacity', 1);
//                }, Math.random() * fadeInDelay);
//            });
//        });
//    };
//
//    /**
//     * Loads data from the API.
//     */
//    function loadData(){
//        isLoading = true;
//        $('#loaderCircle').show();
//
//        $.ajax({
//            url: apiURL,
//            dataType: 'json', // Set to jsonp if you use a server on a different domain and change it's setting accordingly
//            data: {page: page}, // Page parameter to make sure we load new data
//            success: onLoadData
//        });
//    };
//
//    /**
//     * Receives data from the API, creates HTML for images and updates the layout
//     */
//    function onLoadData(response){
//        isLoading = false;
//        $('#loaderCircle').hide();
//
//        // Increment page index for future calls.
//        page++;
//
//        // Create HTML for the images.
//        var html = '',
//            data = response.data,
//            i = 0, length = data.length, image, opacity,
//            $newImages;
//
//        for (; i < length; i++) {
//            image = data[i];
//
//            html += '<li>';
//            html += '<a target="_blank" href="'+image.image+'" title="'+image.title+'">';
//            // Image tag (preview in Wookmark are 200px wide, so we calculate the height based on that).
//            html += '<img src="'+image.preview+'" width="200" height="'+Math.round(image.height/image.width*200)+'">';
//            html += '</a>';
//            // Image title.
//            html += '<p>'+image.title+'</p>';
//            html += '</li>';
//        }
//
//        $newImages = $(html);
//
//        // Disable requests if we reached the end
//        if (response.message == 'No more pictures') {
//            $document.off('scroll', onScroll);
//        }
//
//        // Apply layout.
//        applyLayout($newImages);
//    };
//
//    // Capture scroll event.
//    $document.on('scroll', onScroll);
//
//    // Load first data from the API.
//    loadData();
//})(jQuery);
