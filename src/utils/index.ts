export const getCurrentTime = () => {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) return "Good morning";

  if (curHr < 17) return "Good afternoon";

  return "Good evening";
};

export const payslips = [
  {
    id: "ps-118",
    company: "Microsoft",
    dateFrom: "1st Apr 2023",
    dateTo: "30st Apr 2023",
    incentives: 0,
    amount: 4000,
  },
  {
    id: "ps-119",
    company: "Microsoft",
    dateFrom: "1st May 2023",
    dateTo: "30st May 2023",
    incentives: 500,
    amount: 4500,
  },
  {
    id: "ps-120",
    company: "Microsoft",
    dateFrom: "1st Jun 2023",
    dateTo: "30st Jun 2023",
    incentives: 1000,
    amount: 5000,
  },
  {
    id: "ps-121",
    company: "Microsoft",
    dateFrom: "1st Jul 2023",
    dateTo: "30st Jul 2023",
    incentives: 0,
    amount: 4000,
  },
  {
    id: "ps-122",
    company: "Microsoft",
    dateFrom: "1st Aug 2023",
    dateTo: "30st Aug 2023",
    incentives: 2000,
    amount: 6000,
  },
  {
    id: "ps-123",
    company: "Microsoft",
    dateFrom: "1st Sept 2023",
    dateTo: "30st Sept 2023",
    incentives: 3400,
    amount: 7400,
  },
  {
    id: "ps-124",
    company: "Microsoft",
    dateFrom: "1st Oct 2023",
    dateTo: "30st Oct 2023",
    incentives: 2200,
    amount: 6200,
  },
  {
    id: "ps-125",
    company: "Microsoft",
    dateFrom: "1st Nov 2023",
    dateTo: "30st Nov 2023",
    incentives: 0,
    amount: 4000,
  },
  {
    id: "ps-126",
    company: "Microsoft",
    dateFrom: "1st Dec 2023",
    dateTo: "30st Dec 2023",
    incentives: 500,
    amount: 4500,
  },
  {
    id: "ps-127",
    company: "Microsoft",
    dateFrom: "1st Jan 2024",
    dateTo: "30st Jan 2024",
    incentives: 3500,
    amount: 7500,
  },
];
