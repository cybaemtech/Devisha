async function testLocalEndpoint() {
  console.log("Testing POST http://localhost:5173/api/contact.php...");

  const formData = new FormData();
  formData.append("name", "Test User");
  formData.append("email", "info@devishaindustries.com");
  formData.append("company", "Devisha Test Co");
  formData.append("service", "Engineering Design");
  formData.append("description", "Testing automated email dispatch from local endpoint.");

  try {
    const res = await fetch("http://localhost:5173/api/contact.php", {
      method: "POST",
      body: formData,
    });

    console.log("Response Status:", res.status);
    console.log("Content-Type:", res.headers.get("content-type"));

    const text = await res.text();
    console.log("Response Body:", text);
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

testLocalEndpoint();
