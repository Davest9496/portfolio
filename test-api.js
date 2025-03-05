// Simple script to test the contact API
// You can run this in your browser console

async function testContactAPI() {
  try {
    // Test data
    const testData = {
      name: "Test User",
      email: "test@example.com",
      subject: "API Test",
      message: "This is a test message to verify the API is working.",
    };

    console.log("Sending test data:", testData);

    // Test the simplified endpoint first
    const testResponse = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const testResult = await testResponse.json();
    console.log("Test endpoint response:", testResult);

    if (!testResponse.ok) {
      throw new Error(`Test endpoint failed: ${testResult.message}`);
    }

    // Now test the actual contact endpoint
    const contactResponse = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const contactResult = await contactResponse.json();
    console.log("Contact endpoint response:", contactResult);

    if (contactResponse.ok) {
      console.log("✅ SUCCESS: Contact API is working!");
    } else {
      console.error("❌ ERROR: Contact API returned an error:", contactResult);
    }
  } catch (error) {
    console.error("❌ ERROR running test:", error);
  }
}

// Run the test
testContactAPI();
