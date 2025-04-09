package com.InfluencerSite.controllers;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.InfluencerSite.dto.LoginRequest;
import com.InfluencerSite.entity.Admin;
import com.InfluencerSite.jwt.JwtUtil;
import com.InfluencerSite.services.AdminService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Admin admin = adminService.authenticate(request.getUsername(), request.getPassword());
        String token = jwtUtil.generateToken(admin.getUsername());
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }
    
    
}

