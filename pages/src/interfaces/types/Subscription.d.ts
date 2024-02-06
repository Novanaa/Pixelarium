export type Interval = "Monthly";

export type Status = "deactive" | "active";

export type Plan = "none" | "Gold" | "Diamond" | "Netherite";

type Subscription = {
  id: number;
  user_id: number;
  start_date: Date;
  end_date: Date;
  next_payment_date: Date;
  payment_id: string;
  interval: Interval;
  interval_count: number;
  status: Status;
  plan: Plan;
};

export default Subscription;
