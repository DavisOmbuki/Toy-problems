function calculateNetSalary(salary, benefits) {
    const calculatePaye = (monthlyPay) => {
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
        let nssfRate = 0;
        if (monthlyPay > 6000 && monthlyPay <= 18000) {
            nssfRate = monthlyPay * 0.12;
        } else if (monthlyPay >= 18001) {
            nssfRate = monthlyPay * 0.12;
        }
        return nssfRate;
    };

    const grossSalary = salary + benefits;
    const payeDeduction = calculatePaye(grossSalary);
    const nhifDeduction = calculateNhif(grossSalary);
    const nssfDeduction = calculateNssf(grossSalary);

    const netSalary = grossSalary - (payeDeduction + nhifDeduction + nssfDeduction);

    return {
        GROSS_Salary: grossSalary,
        NET_Salary: netSalary,
        PAYE_Deduction: payeDeduction,
        NHIF_Deduction: nhifDeduction,
        NSSF_Deduction: nssfDeduction
    };
}

// Example
console.log(calculateNetSalary(150000, 20000));
