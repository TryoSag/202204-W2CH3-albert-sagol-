const values = {};
const onMemoryOperation = () => {
  if (values.operation !== "") {
    switch (values.operation) {
      case "+":
        values.result += values.actualNumber;
        break;
      case "-":
        values.result -= values.actualNumber;
        break;
      case "*":
        values.result *= values.actualNumber;
        break;
      case "/":
        values.result /= values.actualNumber;
        break;
      default:
    }
  } else {
    values.result = values.actualNumber;
  }
  if (values.actualDecimal > values.maxNDecimal) {
    values.maxNDecimal = values.actualDecimal;
  }
};

describe("Given a onMemoryOperation function", () => {
  describe("When it recives .opration +", () => {
    test("Then it should return 2", () => {
      values.actualNumber = 2;
      values.result = 0;
      values.operation = "+";

      onMemoryOperation();

      expect(values.result).toBe(2);
    });
  });
});
