package com.ecommerce.service;

import java.util.List;

import com.ecommerce.dao.MessageRepository;
import com.ecommerce.modal.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class MessageServices {

    @Autowired
    MessageRepository messageRepository;

    public Message registerMessage(Message student) {
        return messageRepository.save(student);
    }
    public List<Message> getStudents(){
        return (List<Message>) messageRepository.findAll();
    }

}