function calculateNetSalary(salary, benefits) {
    const calculateIncomeTax = (monthlyPay) => {
        if (monthlyPay >= 0 && monthlyPay <= 24000) {
            return monthlyPay * 0.10;
        } else if (monthlyPay <= 32333) {
            return monthlyPay * 0.25;
        } else if (monthlyPay <= 500000) {
            return monthlyPay * 0.30;
        } else if (monthlyPay <= 800000) {
            return monthlyPay * 0.325;
        } else {
            return monthlyPay * 0.35;
        }
    };

    const calculateNhif = (monthlyPay) => {
        return monthlyPay * 0.0275;
    };

    const calculateNssf = (monthlyPay) => {
        let nssfContribution = 0;
        if (monthlyPay > 6000 && monthlyPay <= 18000) {
            nssfContribution = monthlyPay * 0.12;
        } else if (monthlyPay >= 18001) {
            nssfContribution = monthlyPay * 0.12;
        }
        return nssfContribution;
    };

    const grossEarnings = salary + benefits;
    const taxDeduction = calculateIncomeTax(grossEarnings);
    const nhifDeduction = calculateNhif(grossEarnings);
    const nssfDeduction = calculateNssf(grossEarnings);

    const netSalary = grossEarnings - (taxDeduction + nhifDeduction + nssfDeduction);

    return {
        GROSS_Earnings: grossEarnings,
        NET_Salary: netSalary,
        TAX_Deduction: taxDeduction,
        NHIF_Deduction: nhifDeduction,
        NSSF_Deduction: nssfDeduction
    };
}

// Example
console.log(calculateNetSalary(150000, 20000));
