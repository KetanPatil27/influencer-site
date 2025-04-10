package com.InfluencerSite.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.InfluencerSite.entity.Admin;
import com.InfluencerSite.repositories.AdminRepository;
import com.InfluencerSite.repositories.MessageRepository;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AdminController {

	@Autowired
	private AdminRepository adminRepo;

	@Autowired
	private MessageRepository messageRepo;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Admin loginData, HttpSession session) {
		Optional<Admin> adminOpt = adminRepo.findByEmail(loginData.getEmail());
		if (adminOpt.isPresent() && adminOpt.get().getPassword().equals(loginData.getPassword())) {
			session.setAttribute("admin", adminOpt.get().getEmail());
			return ResponseEntity.ok("Login successful");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	}

	@PostMapping("/logout")
	public ResponseEntity<?> logout(HttpSession session) {
		session.invalidate(); // Destroys session
		return ResponseEntity.ok("Logout successful");
	}

	@GetMapping("/messages")
	public ResponseEntity<?> getAllMessages(HttpSession session) {
		if (session.getAttribute("admin") == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
		}
		return ResponseEntity.ok(messageRepo.findAll());
	}
}
