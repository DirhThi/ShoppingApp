class CurrencyFormatter {
    constructor(locale = 'vi-VN') {
      this.locale = locale;
    }
  
    format(money) {
      if (
        typeof money === 'object' ||
        money === '' ||
        isNaN(money) ||
        parseFloat(money) < 0
      )
        return 'Wrong Input';
  
      money = Math.round(parseFloat(money));
      const result = money.toLocaleString(this.locale) + 'đ';
      return result;
    }
  }
  
  export default CurrencyFormatter;
  