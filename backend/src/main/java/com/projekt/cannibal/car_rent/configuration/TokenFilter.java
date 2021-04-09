package com.projekt.cannibal.car_rent.configuration;

import com.projekt.cannibal.car_rent.helpers.Role;
import com.projekt.cannibal.car_rent.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class TokenFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {

        String authorization = httpServletRequest.getHeader("Authorization");
        if(authorization != null){
            try{
                //get token and validate it
                String token = authorization.substring(7);
                JwtParser parser = Jwts.parser().setSigningKey("my_app");
                parser.parse(token);
                Claims claims = parser.parseClaimsJws(token).getBody();
                String username = (String)claims.get("username");
                Long id = Long.valueOf((String)claims.get("id"));
                String role = (String)claims.get("role");



                //create user details object
                AppUser appUser = new AppUser(id, username, role);

                //set authentication token
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(appUser, null, appUser.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);

            }catch (Exception e){
                e.printStackTrace();
            }


        }
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
