package com.InfluencerSite.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.InfluencerSite.entity.Message;
import com.InfluencerSite.services.MessageService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/messages")
    public ResponseEntity<?> submitMessage(@RequestBody Message message) {
        System.out.println("Received message: " + message);
        return ResponseEntity.ok(messageService.save(message));
    }

    @GetMapping("/admin/messages")
    public ResponseEntity<?> getAllMessages() {
        return ResponseEntity.ok(messageService.getAllMessages());
    }
}

