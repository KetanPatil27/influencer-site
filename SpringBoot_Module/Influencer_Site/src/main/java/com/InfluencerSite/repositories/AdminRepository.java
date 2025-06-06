package com.InfluencerSite.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.InfluencerSite.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	Optional<Admin> findByEmail(String email);
}
