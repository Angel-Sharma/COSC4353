class User {
  // Stores all of the variables as public.
  // Non-required fields have been given default values.
  constructor(fullname, address1, address2 = "", city, zipcode, state = "AL") {
    this.fullname = fullname;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.zipcode = zipcode;
    this.state = state;
  }

  get fullAddress() {
    let address2 = this.address2;
    if (this.address2) {
      address2 = ` ${this.address2}`;
    }

    return `${this.address1}${address2}, ${this.city}, ${this.state} ${this.zipcode}`;
  }
}

module.exports = User;
