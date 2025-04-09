package com.InfluencerSite.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.InfluencerSite.entity.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
}

