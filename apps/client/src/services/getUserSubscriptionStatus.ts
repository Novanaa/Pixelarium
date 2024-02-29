import apiUrlEndpoint from "@/constant/readonly/apiUrlEndpoint";
import Subscription from "@/interfaces/types/Subscription";
import axios, { AxiosResponse } from "axios";
import getUserData from "./getUserData";
import DecodedUser from "@/interfaces/types/DecodedUser";
import User from "@/interfaces/types/User";

export interface GetUserSubscriptionStatusReturnType {
  isLoading: boolean;
  status: Subscription;
}

interface SubscriptionAPIResponse {
  data: SubscriptionAPIResponseData;
}

interface SubscriptionAPIResponseData {
  subscription_details: Subscription;
  user_details: User;
  isSuccess: boolean;
  status: "OK";
}

/**
 * Retrieves the subscription status for a given user.
 *
 * @param name - The name of the user.
 * @returns A promise that resolves to an object containing the subscription status and loading state.
 *          - isLoading: A boolean indicating whether the request is still loading.
 *          - status: The subscription status of the user.
 * @throws If an error occurs during the request.
 */
export default async function getUserSubscriptionStatus(): Promise<GetUserSubscriptionStatusReturnType | null> {
  let isLoading: boolean = true;
  try {
    const user: Awaited<DecodedUser | null> = await getUserData();
    const subscription: Awaited<AxiosResponse<SubscriptionAPIResponse>> =
      await axios.get(`${apiUrlEndpoint}/v1/subscription/status/${user?.name}`);

    const subscriptionData: SubscriptionAPIResponse = subscription.data;

    isLoading = false;

    return { isLoading, status: subscriptionData.data.subscription_details };
  } catch (err) {
    isLoading = false;
    return null;
  }
}
