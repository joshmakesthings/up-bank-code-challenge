import { InterestFrequency } from "../types/interest";

export function calculateFinalBalance(
  depositAmount: number,
  interestRate: number,
  investmentTerm: number,
  interestFrequency: InterestFrequency
): number {
  let timesInterestApplied: number;
  let effectiveInterestRate: number;

  switch (interestFrequency) {
    case InterestFrequency.Monthly:
      timesInterestApplied = investmentTerm;
      effectiveInterestRate = interestRate / InterestFrequency.Monthly;
      break;
    case InterestFrequency.Quarterly:
      timesInterestApplied = investmentTerm / 3;
      effectiveInterestRate = interestRate / InterestFrequency.Quarterly;
      break;
    case InterestFrequency.Annually:
      timesInterestApplied = investmentTerm / 12;
      effectiveInterestRate = interestRate;
      break;
    case InterestFrequency.AtMaturity:
      timesInterestApplied = 1;
      effectiveInterestRate = interestRate * (investmentTerm / 12);
      break;
    default:
      throw new Error("Invalid interest payment frequency");
  }

  // Represents how much the initial investment grows after one compounding period based on the effective interest rate
  // NOTE: I learned a fair chunk about compounding interest while building this, so thanks!
  // This is definitely what I got stuck on for the longest part of this exercise 
  const compoundingFactor = 1 + (effectiveInterestRate / 100);

  const futureValue = depositAmount * Math.pow(compoundingFactor, timesInterestApplied);

  return futureValue;
}
