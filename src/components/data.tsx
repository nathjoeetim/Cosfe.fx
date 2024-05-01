export type FlexibilityAlises = {
  id: number | any;
  text: string;
};

type PlandataAlises = {
  tittle: string;
  item: string | number;
};
export type PlansAlises = {
  header: string;
  data: PlandataAlises[];
};

export const InvestmentFlexibility: FlexibilityAlises[] = [
  {
    id: 1,
    text: "Invest with as low as $50",
  },
  {
    id: 2,
    text: "No Investment Fee involved",
  },
  {
    id: 3,
    text: "Withdrawal will be done once a month",
  },
  {
    id: 4,
    text: "Encrypted and secured",
  },
];

export const AllPlans: PlansAlises[] = [
  {
    header: "GOLD Package",
    data: [
      {
        tittle: "Referral bonus",
        item: "10%",
      },
      {
        tittle: "Investment period",
        item: "20 Days",
      },
      {
        tittle: "Daily Profit",
        item: "2.0%",
      },
      {
        tittle: "Total Profit",
        item: "20%",
      },
      {
        tittle: "Payment Currency",
        item: "BTC/NGN/USD",
      },
      {
        tittle: "Investment limits",
        item: "$550 - unlimited",
      },
    ],
  },
  {
    header: "SILVER Package",
    data: [
      {
        tittle: "Referral bonus",
        item: "7%",
      },
      {
        tittle: "Investment period",
        item: "30 Days",
      },
      {
        tittle: "Daily Profit",
        item: "5.0%",
      },
      {
        tittle: "Total Profit",
        item: "15%",
      },
      {
        tittle: "Payment Currency",
        item: "BTC/NGN/USD",
      },
      {
        tittle: "Investment limits",
        item: "$300 - $500 ",
      },
    ],
  },
  {
    header: "Basic Package",
    data: [
      {
        tittle: "Referral bonus",
        item: "3%",
      },
      {
        tittle: "Investment period",
        item: "35 Days",
      },
      {
        tittle: "Daily Profit",
        item: "3.0%",
      },
      {
        tittle: "Total Profit",
        item: "10%",
      },
      {
        tittle: "Payment Currency",
        item: "BTC/NGN/USD",
      },
      {
        tittle: "Investment limits",
        item: "$200 - $400",
      },
    ],
  },
  {
    header: "Free Package",
    data: [
      {
        tittle: "Referral bonus",
        item: "0",
      },
      {
        tittle: "Investment period",
        item: "50 Days",
      },
      {
        tittle: "Daily Profit",
        item: "3.0%",
      },
      {
        tittle: "Total Profit",
        item: "15%",
      },
      {
        tittle: "Payment Currency",
        item: "BTC/NGN/USD",
      },
      {
        tittle: "Investment limits",
        item: "$50 - $300 ",
      },
    ],
  },
];
