package com.meetingmind.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class HindsightConfig {

    @Value("${hindsight.api.base-url}")
    private String baseUrl;

    @Value("${hindsight.api.key}")
    private String apiKey;

    @Bean
    public RestClient hindsightRestClient() {
        return RestClient.builder()
                .baseUrl(baseUrl)
                .defaultHeader("Authorization", "Bearer " + apiKey)
                .defaultHeader("Content-Type", "application/json")
                .build();
    }
}