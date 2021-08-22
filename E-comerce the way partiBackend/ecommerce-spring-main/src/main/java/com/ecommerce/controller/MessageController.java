package com.ecommerce.controller;


import com.ecommerce.modal.Message;
import com.ecommerce.service.MessageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class MessageController {
    @Autowired
    private MessageServices messageServices;

    @PostMapping("/registerMessage")
    public Message registerStudent(@RequestBody Message student) {
        return messageServices.registerMessage(student);
    }

    @GetMapping("/getMessage")
    public List<Message> getStudents(){
        return messageServices.getStudents();
    }

}
