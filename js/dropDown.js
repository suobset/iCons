$('#dropdown').change(function(){
    $('#textBoxContainer').empty();
    var number = $(this).find('option:selected').attr('data-number');
    for (var i = 0; i < number; i++){
          $('#textBoxContainer').append('<input type="text"/>');
    }
});