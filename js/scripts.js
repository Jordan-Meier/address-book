function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state, addressType) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.addressType = addressType;
}

Address.prototype.fullAddress = function () {
  return this.addressType + ": " + this.street + ", " + this.city + ", " + this.state;
}

function clearInputs() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}

$(document).ready(function() {
  $("#add-address").click(function() {
   $("#addressFields").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control new-city">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<input type="text" class="form-control new-state">' +
                                '</div>' +
                                '<div class="radios">' +
                                  '<label class="radio-inline">' +
                                    '<input type="radio" name="inlineRadio[1]" id="radioHome" value="Home"> Home' +
                                    '</label>' +
                                  '<label class="radio-inline">' +
                                    '<input type="radio" name="inlineRadio[1]" id="radioOffice" value="Office"> Office' +
                                  '</label><label class="radio-inline">' +
                                    '<input type="radio" name="inlineRadio[1]" id="radioPO" value="P.O"> P.O. Box' +
                                  '</label>' +
                                '</div>' +
                              '</div>');
 });

  $("form#new-contact").submit(function(event) {

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputFirstName, inputLastName);

    $(".new-address").each(function(index) {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedType = $(this).find("input[name='inlineRadio[" + index + "]']:checked").val();

      // if (inputtedType === 'Other') {
      //   var inputtedOther = $("input#inputOther").val();
      //   inputtedType = inputtedOther;
      // } else {
      //
      // }
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
      newContact.addresses.push(newAddress);

    });

    clearInputs();

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>")

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    event.preventDefault();
  });
});
