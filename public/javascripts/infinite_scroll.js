var InfiniteScroll = {
  options: {
    navSelector  : "#pagination",
                   // selector for the paged navigation (it will be hidden)
    nextSelector : ".paginate",
                   // selector for the NEXT link (to page 2)
    itemSelector : "#main_stream .stream_element",
                   // selector for all items you'll retrieve
    pathParse    : function( pathStr, nextPage ){
      return pathStr.replace( "page=2", "page=" + nextPage)
    },
    bufferPx: 300,
    debug: false,
    donetext: "no more.",
    loadingText: "",
    loadingImg: '/images/ajax-loader.gif'
  },
  initialize: function(){
    $('#main_stream').infinitescroll(InfiniteScroll.options, function() {
      Diaspora.widgets.timeago.updateTimeAgo();
    });
  }
}
