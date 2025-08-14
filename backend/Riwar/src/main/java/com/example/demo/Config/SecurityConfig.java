	package com.example.demo.Config;
	
	import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
@Configuration
public class SecurityConfig {
	
		
		
@Bean
public SecurityFilterChain filterChains(HttpSecurity http)throws Exception
{	 http.authorizeHttpRequests((requests) -> requests
            .requestMatchers("/auth/register","/doc-iqac/upload","/api/upload","auth/show").permitAll()
            .requestMatchers("/api/list", "/api/download/**").permitAll()
            .anyRequest().permitAll()
        );
			
		    http.headers(headers -> headers.frameOptions().disable()  // ⛔️ This line explicitly removes X-Frame-Options 
		    		);
			http.formLogin(form->form
					.defaultSuccessUrl("http://localhost:5173/chhoose",true)
					.permitAll()
								
					);
			http.httpBasic(Customizer.withDefaults());
			http.csrf(csrf->csrf.disable());
			return http.build();
}
	

@Bean
public PasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
}
		

@Bean
public CorsFilter corsFilter() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true); // 👈 allow cookies
    config.setAllowedOrigins(Arrays.asList("http://localhost:5173")); // 👈 your frontend origin
    config.setAllowedHeaders(Arrays.asList("*"));
    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
}

	
}
	
