package com.spring.ai;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private OpenAiImageModel openAiImageModel;

    public ImageService(OpenAiImageModel openAiImageModel) {
        this.openAiImageModel = openAiImageModel;
    }

    public ImageResponse generateImage(String prompt){
        ImageResponse imageResponse= openAiImageModel.call(
                new ImagePrompt(prompt)
        );
        return imageResponse;
    }

    public ImageResponse generateImageWithOptions(String prompt){
        ImageResponse imageResponse= openAiImageModel.call(
                new ImagePrompt(prompt,
                        OpenAiImageOptions.builder()
                                .quality("hd")
                                .height(512)
                                .width(512)
                                .style("natural")
                                .build())
        );
        return imageResponse;
    }
}
