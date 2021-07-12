import accountTypeChecker from "../../../pages/api/accountTypeChecker";

describe('accountTypeChecker', () => {
  describe('fixed account types (B)', () => {
    it("should return B when the history is static - increasing", () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: {
            balance: { amount: 200 },
          },
        },
        {
          monthNumber: 1,
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 2,
          account: {
            balance: { amount: 0 },
          },
        }
      ];
  
      const expected = 'B';
      const actual = accountTypeChecker(accountBalanceHistory);
  
      expect(actual).toEqual(expected);
    });

    it("should return B when the history is static - decreasing", () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 1,
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 2,
          account: {
            balance: { amount: 200 },
          },
        }
      ];
  
      const expected = 'B';
      const actual = accountTypeChecker(accountBalanceHistory);
  
      expect(actual).toEqual(expected);
    });
  });

  describe('fixed account types (B)', () => {
    it("should return A when the history is erratic", () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 1,
          account: {
            balance: { amount: 10 },
          },
        },
        {
          monthNumber: 2,
          account: {
            balance: { amount: 200 },
          },
        }
      ];
  
      const expected = 'A';
      const actual = accountTypeChecker(accountBalanceHistory);
  
      expect(actual).toEqual(expected);
    });
  
    it("should return A when the absolute difference is the same, but the sign is different", () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 1,
          account: {
            balance: { amount: 200 },
          },
        },
        {
          monthNumber: 2,
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 3,
          account: {
            balance: { amount: -200 },
          },
        }
      ];
  
      const expected = 'A';
      const actual = accountTypeChecker(accountBalanceHistory);
  
      expect(actual).toEqual(expected);
    });
    
    it("should not be affected by the order of the array provided", () => {
      const accountBalanceHistory = [
        {
          monthNumber: 0,
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 2,
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 1,
          account: {
            balance: { amount: 200 },
          },
        },
        {
          monthNumber: 3,
          account: {
            balance: { amount: 300 },
          },
        }
      ];
  
      const expected = 'A';
      const actual = accountTypeChecker(accountBalanceHistory);
  
      expect(actual).toEqual(expected);
    });
  });
});