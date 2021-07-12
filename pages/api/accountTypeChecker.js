const FIXED_ACC_TYPE = 'B';
const VAR_ACC_TYPE = 'A';

const accountTypeChecker = (accountBalanceHistory) => {
  const sortedAccountBalanceHistory = accountBalanceHistory.sort(
    (a, b) => b.monthNumber - a.monthNumber,
  );

  const accountBalanceHistoryDiff = sortedAccountBalanceHistory.map((balance, index) => {
    if (index === 0) {
      return 0;
    }

    const { account: { balance: { amount: thisBalance } } } = balance;
    const { account: { balance: { amount: prevBalance } } } = accountBalanceHistory[index - 1];
    const diff = thisBalance - prevBalance;

    return diff;
  });

  const resultSet = new Set([...accountBalanceHistoryDiff.slice(1)]);
  const accType = resultSet.size === 1 ? FIXED_ACC_TYPE : VAR_ACC_TYPE;

  return accType;
};

export default accountTypeChecker;
