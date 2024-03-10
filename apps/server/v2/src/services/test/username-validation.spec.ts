import { test, expect, describe } from "bun:test";
import usernameValidation from "../username-validation";

describe("Username Validation", () => {
  test("should be return error when username include a capital letter", async () => {
    expect(await usernameValidation("Testtt")).toBe(
      "Username with uppercase letter should not allowed, please choose another username."
    );
  });
  test("should be return error when username include a numberic number letter", async () => {
    expect(await usernameValidation("tsestt123")).toBe(
      "Username with numberic number should not allowed, please choose another username."
    );
  });
  test("should be return error when username include a whitespace", async () => {
    expect(await usernameValidation("tsestt testt")).toBe(
      "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
    );
  });
  test("should be return error when username is more than 64 letters", async () => {
    expect(
      await usernameValidation(
        "kjsbdfjsbvjksmgmsjkdfbsjkdfkjsdjkfsblkjdfbsjdkbfjsdfjkrbefsbuifnjdsuiefnjkdsbjfbdjsbjkfsdkbjbfksjkfjbdskjbflbaibefjbdskajfbksabfjksbdkgjbusjbgjkdsbuebdsfjanbfusaemfbkjdsbfkjsbfkebufjbdskbfgiubfjksdbuifgbdsjkbfuiefjafkjlsbakjbfjksd"
      )
    ).toBe(
      "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
    );
  });
  test("should be return error when username is include coma", async () => {
    expect(await usernameValidation("test,")).toBe(
      "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
    );
  });
  test("should be return error when username is include symbol", async () => {
    expect(await usernameValidation("@test")).toBe(
      "Username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
    );
  });
  test("should be return undefined when the username is allowed", async () => {
    expect(await usernameValidation("testtt")).toBeUndefined();
  });
  test("should be return undefined when the username is allowed", async () => {
    expect(await usernameValidation("testtt-test")).toBeUndefined();
  });
  test("should be return undefined when the username is allowed", async () => {
    expect(await usernameValidation("testtt_test_test")).toBeUndefined();
  });
  test("should be return undefined when the username is allowed", async () => {
    expect(await usernameValidation("testtt.test")).toBeUndefined();
  });
});
