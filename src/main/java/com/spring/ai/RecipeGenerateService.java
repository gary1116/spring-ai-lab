package com.spring.ai;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RecipeGenerateService {

    private final ChatModel chatModel;

    public RecipeGenerateService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String createRecipe(String ingredient,
                               String cuisine,
                               String dietaryRestrictions) {

        String template = """
        I want to create a recipe using the following ingredients: {ingredient}.
        The cuisine type I prefer is: {cuisine}.
        Please consider these dietary restrictions: {dietaryRestrictions}.

        Please provide the recipe in this exact format:

        Recipe Title:
        - title here

        Ingredients:
        - ingredient 1
        - ingredient 2
        - ingredient 3

        Instructions:
        - step 1
        - step 2
        - step 3

        Tips:
        - tip 1
        - tip 2

        Keep the response clean, short, and easy to read.
        """;

        PromptTemplate promptTemplate = new PromptTemplate(template);
        Map<String, Object> params = Map.of(
                "ingredient", ingredient,
                "cuisine", cuisine,
                "dietaryRestrictions", dietaryRestrictions
        );

        Prompt prompt = promptTemplate.create(params);
        return chatModel.call(prompt).getResult().getOutput().getText();

    }
}
