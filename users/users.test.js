const request = require("supertest");

describe("users router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  deescribe("GET /", function() {
    it("should return 200 ok", function() {
      request(server)
        .get("/api/users")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
