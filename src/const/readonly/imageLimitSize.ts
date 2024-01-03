import userPlans from "./userPlans";

type ImageLimitSize = {
  [key: string]: number;
};

const imageLimitSize: ImageLimitSize = {
  [userPlans[0]]: 15,
  [userPlans[1]]: 40,
  [userPlans[2]]: 80,
  [userPlans[3]]: 100,
};

export default imageLimitSize;
