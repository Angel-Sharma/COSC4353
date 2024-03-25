class Quote {
  // Stores all of the variables as public.
  // Non-required fields have been given default values.
  constructor(quote_id, gallons, address, date, price, amount) {
    this.quote_id = quote_id;
    this.gallons = gallons;
    this.address = address;
    this.date = date;
    this.price = price;
    this.amount = amount;
  }
}

module.exports = Quote;
