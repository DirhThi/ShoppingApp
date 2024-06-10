import CurrencyFormatter from './CurrencyFormatter';

class VNDFormatAdapter {
  constructor() {
    this.currencyFormatter = new CurrencyFormatter('vi-VN');
  }

  format(money) {
    return this.currencyFormatter.format(money);
  }
}

export default VNDFormatAdapter;
