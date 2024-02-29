import { v4 as uuidv4 } from "uuid";

/**
 * Generates a payment order ID.
 *
 * @returns {string} The generated payment order ID.
 */
export default function generatePaymentOrderId(): string {
  return `plxmoid-${uuidv4()}`;
}
