package com.ecommerce.dao;

import com.ecommerce.modal.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Long> {
}
