package com.InfluencerSite.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.InfluencerSite.entity.Message;
import com.InfluencerSite.repositories.MessageRepository;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody Message message) {
        messageRepository.save(message);
        return ResponseEntity.ok("Message received!");
    }
}


