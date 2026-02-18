// test.js
console.log("--- Environment Check ---");
console.log("Node Version:", process.version);
console.log("API Key Present:", !!process.env.WEATHER_API_KEY);

console.log("\n--- Running Logic Tests ---");
if (2 + 2 !== 4) {
  console.error("Error: Basic math failed. The universe is broken.");
  process.exit(1);
}

// Add a check for your actual app requirement
if (!process.env.WEATHER_API_KEY) {
  console.error("Error: WEATHER_API_KEY is missing from Secrets!");
  process.exit(1);
}

console.log("✅ All tests passed.");
process.exit(0);
