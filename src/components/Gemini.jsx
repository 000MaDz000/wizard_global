// gemini.js
const GEMINI_API_KEY = 'AIzaSyDnSJvoT-R2wWFEZ82wp4KvLt9MbNTW8ks';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export const sendMessageToGemini = async (message) => {
    const systemPrompt = `
أنت مساعد ذكي لموقع شركة العربية للاستثمار.
الشركة تضم مجموعة كبيرة من الشركات والخدمات.
رد باختصار، وكن ودودًا وواضحًا:

السؤال: ${message}
`.trim();

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: systemPrompt }],
                    },
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE",
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE",
                    },
                ],
            }),
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return 'لم أتمكن من الحصول على رد من الخدمة.';
        }
    } catch (error) {
        console.error('Gemini Error:', error);
        return 'حدث خطأ أثناء الاتصال بالخدمة. حاول مرة أخرى.';
    }
};
