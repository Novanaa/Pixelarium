import { expect, test, describe } from "bun:test";
import app from "../../../../main";
import supertest from "supertest";
import client from "../../../../libs/configs/prisma";

describe("Unit-Testing Delete User API Endpoint", () => {
  test("should be return 400 status code if the request id params is not numberic", async () => {
    const request = await supertest(app).delete("/v1/users/test");

    expect(request.status).toBe(400);
    expect(request.body.status).toBe("KO");
  });
  test.skip("should be return 200 status code", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app).delete(`/v1/users/${user?.id}`);

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
  test.skip("Make sure it can accept application/json", async () => {
    const user = await client.user.findFirst();
    const request = await supertest(app)
      .delete(`/v1/users/${user?.id}`)
      .set("Content-Type", "application/json");

    expect(request.status).toBe(200);
    expect(request.body.status).toBe("OK");
  });
});
