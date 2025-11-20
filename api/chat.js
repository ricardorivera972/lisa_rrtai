export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  try {
    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: [
          { role: "system", content: "Sos Lisa, asistente de Lasertec." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await openaiResponse.json();

    if (data.error) {
      console.error("OpenAI error:", data.error);
      return res.status(500).json({ error: "OpenAI request failed" });
    }

    const reply = data.output_text || "No pude generar respuesta.";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
