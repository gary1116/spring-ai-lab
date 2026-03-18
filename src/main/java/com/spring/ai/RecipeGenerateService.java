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
                I want to create a recipe using the following ingredients :{ingredient}.
                The cuisine type I prefer is {cuisine}.
                please consider the dietary restrictions:{dietaryRestrictions}.
                please provide me with a detailed recipe including title, list of ingredients, and cooking intructions
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
