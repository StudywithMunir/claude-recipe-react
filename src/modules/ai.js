// No need to memorize this code it is Ai generated

import { HfInference } from '@huggingface/inference';

const hf = new HfInference(import.meta.env.VITE_HF_API_KEY);

const SYSTEM_PROMPT = `
You are a helpful assistant. A user gives you a list of ingredients.
You suggest a recipe using some of those ingredients.
Format your response using markdown.
`;

export const getRecipeFromMistral = async (ingredients = []) => {
  try {
    const res = await hf.chatCompletion({
      model: "HuggingFaceH4/zephyr-7b-beta", // ✅ Reliable chat model
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredients.join(", ")}. Suggest a recipe.` },
      ],
      max_tokens: 1024,
    });

    return res.choices?.[0]?.message?.content || "No recipe found.";
  } catch (error) {
    console.error("Hugging Face API error:", error);
    return "Something went wrong while getting the recipe.";
  }
};
