import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ investment }) {
  const investmentResults = calculateInvestmentResults(investment);
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Intereset (Year)</th>
        <th>Total Intereset</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {investmentResults.map((row) => (
          <tr>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.annualInvestment)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
