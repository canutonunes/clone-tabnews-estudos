test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://opulent-lamp-p4rx64xpwgqc6v4g-3000.app.github.dev/",
  );
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual("100");
});
