import $ from "jquery-ajax";

import { fetchItems } from './api';

export function addNewItem(item) {
  return function(dispatch) {
      // Use the POST method and include the contact JSON as the request body.
      $.ajax({
          url: "/api/items/",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify(item)
      }).done(function() {
          // After making the change, fetch the updated contact list.
          dispatch(fetchItems());
      });
  };
};
