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
                              '</div>' +
                              '<div class="radios">' +
                                '<label class="radio-inline">' +
                                  '<input type="radio" name="inlineRadioOptions" id="radioHome" value="option1"> Home' +
                                '</label>' +
                                '<label class="radio-inline">' +
                                  '<input type="radio" name="inlineRadioOptions" id="radioOffice" value="option2"> Office' +
                                '</label><label class="radio-inline">' +
                                  '<input type="radio" name="inlineRadioOptions" id="radioPO" value="option3"> P.O. Box' +
                                '</label>' +
                              '</div>');
 });

  $("form#new-contact").submit(function(event) {

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputFirstName, inputLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
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
    debugger;

    event.preventDefault();
  });
});
