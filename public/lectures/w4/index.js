// alert('hello from javascript')

function hideP1 () {
  // alert('hiding')
  $("p").hide();
}

function showP1 () {
  // alert('showing')
  $("p").show();
}

const addItemHandler = () => {
  const text = $("input").val();
  const newItem = $(`<li>${text}</li>`);

  $("ul").prepend(newItem);
}

function init() {
  // alert('hello from jquery')
  // jQuery('h1').remove();
  // $('h1').css('color', 'red');
  // $('h1').css('background-color', 'yellow')

  const heading1 = $('h1');
  heading1
    .css('color', 'yellow')
    .css('background-color', 'blue')

  const hideParagraph = $("#hidep");
  const showParagraph = $("#showp");

  hideParagraph.click(hideP1);
  showParagraph.click(showP1);

  const addItemBtn = $(".addItem");

  addItemBtn.click(addItemHandler);
}

jQuery(init); // run init when document is done loading