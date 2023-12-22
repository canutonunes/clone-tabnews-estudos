test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://opulent-lamp-p4rx64xpwgqc6v4g-3000.app.github.dev/",
  );
  expect(response.status).toBe(200);
});
