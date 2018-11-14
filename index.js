$('form').on('submit', function(event){
  event.preventDefault();

  const userItem = $(this).find('input').val();

  $('.js-shopping-list-entry').val('');

  let $shoppingListItem = $(`<li>
        <span class="shopping-item">${userItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  
  $('.shopping-list').append($shoppingListItem);
  
})

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
})

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
})