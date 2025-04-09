package com.InfluencerSite.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.InfluencerSite.entity.Admin;
import com.InfluencerSite.repositories.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    public Admin authenticate(String username, String password) {
        Admin admin = adminRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
        if (!admin.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }
        return admin;
    }
}
