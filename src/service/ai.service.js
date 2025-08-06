const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: "AIzaSyAdWnuGOKaQVHEY5TeMCXAqMd943iayXP8 ",
});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      systemInstruction: `Your are an expert in generating captions for images.
    you generate single caption for the image.
    your caption should be short and concise
    you use hastags and emojis in the caption
    Generate caption in tapori language.
    Create aesthetic caption
    The caption should be in dark humor
    `,
    },
  });
  return response.text;
}

module.exports = generateCaption;
