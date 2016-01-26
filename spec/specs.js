describe('Contact', function () {
  it("create a new contact with the given properties", function () {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to a contact", function () {
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Address', function () {
  it("creates a new address with the given specifications", function () {
    var testAddress = new Address("123 Main St", "Test City", "Test State", "Home");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
    expect(testAddress.addressType).to.equal("Home");
  });

  it("adds the fullAddress method to all addresses", function () {
    var testAddress = new Address("123 Main St", "Test City", "Test State", "Home");
    expect(testAddress.fullAddress()).to.equal("Home: 123 Main St, Test City, Test State");
  });
});
