package com.spring.ai;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class GenAiController {

    @Autowired
    ChatService chatService;

    @Autowired
    ImageService imageService;

    @Autowired
    RecipeGenerateService recipeGenerateService;


    @GetMapping("/ask-ai")
    public String getResponse(@RequestParam String prompt){
        return chatService.getResponse(prompt);
    }

    @GetMapping("/ask-ai-options")
    public String getResponseOptions(@RequestParam String prompt){
        return chatService.getResponseOptions(prompt);
    }

    @GetMapping("/generate-image")
    public void generateImages(HttpServletResponse response, @RequestParam String prompt) throws IOException {
        ImageResponse imageResponse= imageService.generateImage(prompt);

       String imageUrl= imageResponse.getResult().getOutput().getUrl();

       response.sendRedirect(imageUrl);
    }

    @GetMapping("/generate-image-options")
    public void generateImagesWithOptions(HttpServletResponse response, @RequestParam String prompt) throws IOException {
        ImageResponse imageResponse= imageService.generateImageWithOptions(prompt);

        String imageUrl= imageResponse.getResult().getOutput().getUrl();

        response.sendRedirect(imageUrl);
    }

    @GetMapping("recipe-creator")
    public String recipeCreator(@RequestParam String ingredient,
                                      @RequestParam(defaultValue = "any") String cuisine,
                                      @RequestParam(defaultValue = "") String dietaryRestrictions){

        return recipeGenerateService.createRecipe(ingredient,cuisine,dietaryRestrictions);

    }

}
