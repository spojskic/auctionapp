package com.atlantbh.auctionapp.controllers;

import com.atlantbh.auctionapp.domain.model.User;
import com.atlantbh.auctionapp.request.LoginRequest;
import com.atlantbh.auctionapp.request.RegisterRequest;
import com.atlantbh.auctionapp.response.LoginResponse;
import com.atlantbh.auctionapp.security.JwtUtil;
import com.atlantbh.auctionapp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthController(AuthService authService, JwtUtil jwtUtil) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<LoginResponse> register(@RequestBody @Valid RegisterRequest registerRequest) {
        User user = authService.register(registerRequest);
        return ResponseEntity.ok(new LoginResponse(user, jwtUtil.generateToken(user)));

    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) throws Exception{
        try {
            authService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

            User user = authService.login(loginRequest);
            return ResponseEntity.ok(new LoginResponse(user, jwtUtil.generateToken(user)));
        } catch (AuthenticationException authExc) {
            throw new RuntimeException("Invalid Login Credentials");
        }
    }

    @GetMapping("/logout")
    public void logout(HttpServletRequest request) {
        authService.logout(request);
    }
}