import { default as joi } from "joi";
import logger from "../libs/configs/logger";

const customValidationObject: joi.Root = joi.extend({
  type: "object",
  base: joi.object(),
  // @ts-expect-error Types Error
  coerce: (value: string, error: joi.ErrorReport[]) => {
    try {
      if (!value) return;

      return { value: JSON.parse(value), error };
    } catch (err) {
      logger.error(err);
    }
  },
});

export default customValidationObject;
