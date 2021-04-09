import numeral from "numeral";

export const NumberService = {
  currency(value) {
    return "R$ " + numeral(value).format("0,0.00");
  },
};
