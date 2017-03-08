$(document).ready( function() {
    //add contents of box on button click, making a list
    $('#button').click( function() {
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append("<div class='item'>"
                            + toAdd +
                            "</div>")
    });
    //when you click a word on the list, remove it
    $(document).on('click', '.item', function(){
        $(this).remove()
    });
});