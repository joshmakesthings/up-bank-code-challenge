import { useEffect, useState } from 'react';
import { calculateFinalBalance } from './utils/calculator';
import { InterestFrequency } from './types/interest';
import './App.css';

function App() {
  let [depositAmount, setDepositAmount] = useState<number>(10000)
  let [interestRate, setInterestRate] = useState<number>(1.1)
  let [investmentTermMonths, setInvestmentTermMonths] = useState<number>(36)
  let [interestFrequency, setInterestFrequency] = useState<InterestFrequency>(InterestFrequency.Monthly)
  let [finalBalance, setFinalBalance] = useState<number>(0)

  useEffect(() => {
    const calculatedFinalBalance = calculateFinalBalance(depositAmount, interestRate, investmentTermMonths, interestFrequency)
    setFinalBalance(calculatedFinalBalance)
  }, [depositAmount, interestRate, investmentTermMonths, interestFrequency])

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInterestFrequency(Number(event.target.value));
  };

  const depositAmountChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    !event.target.checkValidity() 
      ? event.target.reportValidity()
      : setDepositAmount(Number(event.target.value))
  }

  const investmentTermChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    !event.target.checkValidity() 
      ? event.target.reportValidity()
      : setInvestmentTermMonths(Number(event.target.value))
  }

  const interestRateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    !event.target.checkValidity() 
      ? event.target.reportValidity()
      : setInterestRate(Number(event.target.value))
  }

  return (
    <div className="term-deposit-calculator">
      <div className="input-controller">
        <div>
          <p>Starting with</p>
          <input
            id="deposit-amount"
            type="range" 
            min="10000" 
            max="1500000"
            value={depositAmount} 
            onChange={depositAmountChanged}
          />
          <p>
            {
              depositAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: "currency",
                currency: "AUD"
              })
            }
          </p>
        </div>
        <div>
          <p>Investment term (months)</p>
          <input
            id="investment-term"
            type="range" 
            min="3" 
            max="60" 
            value={investmentTermMonths} 
            onChange={investmentTermChanged}
          />
          <p>{investmentTermMonths} months</p>
        </div>
        <div>
          <p>Interest rate</p>
          <input
            id="interest-rate"
            type="range" 
            min="1" 
            max="15"
            step={0.1}
            value={interestRate} 
            onChange={interestRateChanged}
          />
          <p>{interestRate}% p.a.</p>
        </div>
        <div>
        <p>Select Frequency:</p>
        <select
          value={interestFrequency}
          onChange={handleFrequencyChange}
        >
          <option value={InterestFrequency.Monthly}>Monthly</option>
          <option value={InterestFrequency.Quarterly}>Quarterly</option>
          <option value={InterestFrequency.Annually}>Annually</option>
          <option value={InterestFrequency.AtMaturity}>At Maturity</option>
        </select>
      </div>
      </div>
      <p>
        Final balance: {
          finalBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: "currency",
            currency: "AUD"
          })
        }
      </p>
    </div>
  );
}

export default App;
