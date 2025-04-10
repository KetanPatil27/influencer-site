package com.InfluencerSite.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors().and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/messages/**",
                    "/api/admin/login",
                    "/api/admin/messages",
                    "/api/admin/logout"
                ).permitAll()
                .anyRequest().authenticated()
            )
            .logout(logout -> logout
            	    .logoutUrl("/logout-dummy") // 👈 Dummy logout endpoint (never used)
            	)
            .sessionManagement(session -> session
                .maximumSessions(1) // Allow only one session per user
            );

        return http.build();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedMethods("*")
                    .allowCredentials(true);
            }
        };
    }
}
